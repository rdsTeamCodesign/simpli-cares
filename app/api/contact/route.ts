import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import fs from "fs/promises";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactData {
  id: string;
  name: string;
  email: string;
  agencyName: string;
  message: string;
  createdAt: string;
}

const CONTACTS_FILE = path.join(process.cwd(), "data", "contacts.json");

async function saveContact(contact: ContactData) {
  try {
    await fs.mkdir(path.dirname(CONTACTS_FILE), { recursive: true });

    let contacts: ContactData[] = [];
    try {
      const data = await fs.readFile(CONTACTS_FILE, "utf-8");
      contacts = JSON.parse(data);
    } catch {
      // File doesn't exist yet, start with empty array
    }

    contacts.push(contact);
    await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error("Failed to save contact:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, agencyName, message } = body;

    // Validate required fields
    if (!name || !email || !agencyName || !message) {
      return NextResponse.json(
        { error: "Name, email, agency name, and message are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 },
      );
    }

    // Create contact record
    const contact: ContactData = {
      id: crypto.randomUUID(),
      name,
      email,
      agencyName,
      message,
      createdAt: new Date().toISOString(),
    };

    // Save to local JSON file
    await saveContact(contact);

    // Add contact to Resend Audience
    if (process.env.RESEND_AUDIENCE_ID) {
      const { data: contactData, error: contactError } =
        await resend.contacts.create({
          audienceId: process.env.RESEND_AUDIENCE_ID,
          email,
        });

      if (contactError) {
        console.error("Failed to add contact to audience:", contactError);
      } else {
        console.log("Contact added to audience:", contactData);
      }
    } else {
      console.log("RESEND_AUDIENCE_ID not set, skipping audience");
    }

    // Send email notification via Resend
    const { error } = await resend.emails.send({
      from: "SimpliCares <onboarding@resend.dev>",
      to: ["abhishek@teamcodesign.com", "yuvraj.brihati@gmail.com"],
      replyTo: email,
      subject: `New Contact Form Submission from ${name} - ${agencyName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Agency Name:</strong> ${agencyName}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Submitted on ${new Date().toLocaleString()}
        </p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

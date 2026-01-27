"use client";

import { useState, FormEvent } from "react";
import styles from "../page.module.css";

interface ContactFormProps {
  showTitle?: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  agencyName?: string;
  message?: string;
}

export default function ContactForm({ showTitle = true }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agencyName: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateField = (field: string, value: string): string | undefined => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return undefined;
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email address";
        return undefined;
      case "agencyName":
        if (!value.trim()) return "Agency name is required";
        if (value.trim().length < 2) return "Agency name must be at least 2 characters";
        return undefined;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        return undefined;
      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof typeof formData>).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors({ ...errors, [field]: error });
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors({ ...errors, [field]: error });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setTouched(allTouched);

    if (!validateForm()) {
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", agencyName: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  const inputStyle = (field: string) => ({
    width: "100%",
    padding: "0.75rem 1rem",
    border: `2px solid ${touched[field] && errors[field as keyof FormErrors] ? "#dc3545" : "var(--color-border)"}`,
    borderRadius: "8px",
    fontSize: "1rem",
    fontFamily: "inherit",
    transition: "border-color 0.3s ease",
    backgroundColor: "white",
    color: "#1a1a1a",
  });

  return (
    <div>
      {showTitle && (
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 600,
            marginBottom: "var(--spacing-md)",
            color: "#1a1a1a",
          }}
        >
          Send Us a Message
        </h2>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-sm)",
        }}
      >
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: 500,
              color: "#1a1a1a",
            }}
          >
            Full Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            style={inputStyle("name")}
            placeholder="John Smith"
          />
          {touched.name && errors.name && (
            <p style={{ color: "#dc3545", fontSize: "0.85rem", marginTop: "0.25rem", margin: 0 }}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: 500,
              color: "#1a1a1a",
            }}
          >
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            style={inputStyle("email")}
            placeholder="john@example.com"
          />
          {touched.email && errors.email && (
            <p style={{ color: "#dc3545", fontSize: "0.85rem", marginTop: "0.25rem", margin: 0 }}>
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: 500,
              color: "#1a1a1a",
            }}
          >
            Agency Name *
          </label>
          <input
            type="text"
            value={formData.agencyName}
            onChange={(e) => handleChange("agencyName", e.target.value)}
            onBlur={() => handleBlur("agencyName")}
            style={inputStyle("agencyName")}
            placeholder="Your Home Care Agency"
          />
          {touched.agencyName && errors.agencyName && (
            <p style={{ color: "#dc3545", fontSize: "0.85rem", marginTop: "0.25rem", margin: 0 }}>
              {errors.agencyName}
            </p>
          )}
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: 500,
              color: "#1a1a1a",
            }}
          >
            How can we help? *
          </label>
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            style={{
              ...inputStyle("message"),
              resize: "vertical",
            }}
            placeholder="Tell us about your agency and what you're looking for..."
          />
          {touched.message && errors.message && (
            <p style={{ color: "#dc3545", fontSize: "0.85rem", marginTop: "0.25rem", margin: 0 }}>
              {errors.message}
            </p>
          )}
        </div>

        {status === "success" && (
          <div
            style={{
              padding: "1rem",
              background: "#d4edda",
              border: "1px solid #c3e6cb",
              borderRadius: "8px",
              color: "#155724",
            }}
          >
            Thank you! Your message has been sent successfully.
          </div>
        )}

        {status === "error" && (
          <div
            style={{
              padding: "1rem",
              background: "#f8d7da",
              border: "1px solid #f5c6cb",
              borderRadius: "8px",
              color: "#721c24",
            }}
          >
            {errorMessage || "Failed to send message. Please try again."}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className={`${styles.btn} ${styles.btnPrimary}`}
          style={{
            marginTop: "var(--spacing-sm)",
            justifyContent: "center",
            opacity: status === "loading" ? 0.7 : 1,
            cursor: status === "loading" ? "not-allowed" : "pointer",
          }}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

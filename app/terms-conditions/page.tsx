"use client";

import styles from "../page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsConditionsPage() {
  return (
    <>
      <Header ctaHref="/#cta" />

      {/* Terms & Conditions Hero */}
      <section
        className={styles.hero}
        style={{ minHeight: "auto", paddingBottom: "var(--spacing-lg)" }}
      >
        <div className="default-container mx-auto! px-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <div
            className={styles.heroContent}
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <span className={styles.heroEyebrow}>Legal</span>
            <h1 style={{ marginBottom: "var(--spacing-md)" }}>
              <span className={styles.line}>
                Terms & <span className={styles.highlight}>Conditions</span>
              </span>
            </h1>
            <p className={styles.heroSubhead} style={{ marginBottom: 0 }}>
              Last updated: January 27, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Terms & Conditions Content */}
      <section
        style={{ background: "var(--color-bg)", padding: "var(--spacing-xl) 0" }}
      >
        <div className="default-container mx-auto! px-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {/* Agreement to Terms */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "var(--spacing-sm)",
                  color: "var(--color-text)",
                }}
              >
                Agreement to Terms
              </h2>
              <p
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                These Terms and Conditions (&quot;Terms&quot;) constitute a legally
                binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and
                SimpliCares Inc. (&quot;SimpliCares,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                concerning your access to and use of our Electronic Visit
                Verification (EVV) platform and related services.
              </p>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8 }}>
                By accessing or using our platform, you agree to be bound by these
                Terms. If you do not agree to these Terms, you must not access or
                use the platform.
              </p>
            </div>

            {/* Eligibility */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "var(--spacing-sm)",
                  color: "var(--color-text)",
                }}
              >
                Eligibility
              </h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8 }}>
                You must be at least 18 years old and have the legal authority to
                enter into these Terms on behalf of yourself or the organization
                you represent. By using the platform, you represent and warrant
                that you meet these eligibility requirements.
              </p>
            </div>

            {/* Account Registration */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "var(--spacing-sm)",
                  color: "var(--color-text)",
                }}
              >
                Account Registration
              </h2>
              <p
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                To use our platform, you must register for an account. You agree
                to:
              </p>
              <ul
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  marginLeft: "1.5rem",
                }}
              >
                <li>Provide accurate, current, and complete registration information</li>
                <li>Maintain and update your information to keep it accurate</li>
                <li>Maintain the security of your account credentials</li>
                <li>
                  Accept responsibility for all activities that occur under your
                  account
                </li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </div>

            {/* Permitted Use */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "var(--spacing-sm)",
                  color: "var(--color-text)",
                }}
              >
                Permitted Use
              </h2>
              <p
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                SimpliCares grants you a limited, non-exclusive, non-transferable
                license to access and use the platform for your internal business
                purposes, specifically for:
              </p>
              <ul
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  marginLeft: "1.5rem",
                }}
              >
                <li>Electronic Visit Verification (EVV) for home care services</li>
                <li>Recording caregiver check-ins, check-outs, and visit documentation</li>
                <li>Transmitting visit data to authorized state aggregators</li>
                <li>Generating compliance reports and audit trails</li>
                <li>Managing caregiver and patient information necessary for EVV compliance</li>
              </ul>
            </div>

            {/* Prohibited Activities */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "var(--spacing-sm)",
                  color: "var(--color-text)",
                }}
              >
                Prohibited Activities
              </h2>
              <p
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                You agree NOT to:
              </p>
              <ul
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  marginLeft: "1.5rem",
                }}
              >
                <li>
                  Use the platform for any illegal purpose or in violation of any
                  laws
                </li>
                <li>Submit false, inaccurate, or misleading visit verification data</li>
                <li>
                  Attempt to gain unauthorized access to the platform or other
                  users&apos; accounts
                </li>
                <li>
                  Interfere with or disrupt the platform&apos;s security or
                  functionality
                </li>
                <li>
                  Reverse engineer, decompile, or attempt to extract source code
                </li>
                <li>
                  Use automated systems to access the platform without our consent
                </li>
                <li>Share your account credentials with unauthorized parties</li>
                <li>
                  Use the platform to commit healthcare fraud or billing fraud
                </li>
              </ul>
            </div>

            {/* Data Accuracy Notice */}
            <div
              style={{
                marginBottom: "var(--spacing-lg)",
                background: "var(--color-accent-light)",
                padding: "var(--spacing-md)",
                borderRadius: "12px",
                borderLeft: "4px solid var(--color-accent)",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "var(--spacing-sm)",
                  color: "var(--color-accent)",
                }}
              >
                Data Accuracy & Compliance
              </h2>
              <p style={{ color: "var(--color-text)", lineHeight: 1.8 }}>
                You are solely responsible for ensuring the accuracy and
                completeness of all visit verification data entered into the
                platform. SimpliCares transmits data to state aggregators exactly
                as provided by you. Any inaccuracies, omissions, or fraudulent
                entries are your responsibility and may result in compliance
                violations, claim denials, or legal consequences.
              </p>
            </div>

            {/* Fees and Payment */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "var(--spacing-sm)",
                  color: "var(--color-text)",
                }}
              >
                Fees and Payment
              </h2>
              <p
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                Access to SimpliCares may require payment of fees as outlined in
                your service agreement. You agree to:
              </p>
              <ul
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  marginLeft: "1.5rem",
                }}
              >
                <li>Pay all applicable fees in accordance with your service agreement</li>
                <li>Provide valid payment information and keep it current</li>
                <li>
                  Accept that fees may be subject to change with appropriate notice
                </li>
                <li>
                  Understand that unpaid fees may result in suspension or
                  termination of access
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "var(--spacing-sm)",
                  color: "var(--color-text)",
                }}
              >
                Intellectual Property
              </h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8 }}>
                The platform, including all content, features, and functionality,
                is owned by SimpliCares and protected by copyright, trademark, and
                other intellectual property laws. You may not copy, modify,
                distribute, or create derivative works based on our platform
                without our express written consent.
              </p>
            </div>

            {/* Disclaimer of Warranties */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "var(--spacing-sm)",
                  color: "var(--color-text)",
                }}
              >
                Disclaimer of Warranties
              </h2>
              <p
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  textTransform: "uppercase",
                  fontSize: "0.9rem",
                }}
              >
                THE PLATFORM IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. SIMPLICARES
                DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE PLATFORM WILL BE
                UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "var(--spacing-sm)",
                  color: "var(--color-text)",
                }}
              >
                Limitation of Liability
              </h2>
              <p
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SIMPLICARES SHALL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  marginLeft: "1.5rem",
                }}
              >
                <li>Loss of revenue or profits</li>
                <li>Loss of data or business interruption</li>
                <li>Claim denials resulting from data errors</li>
                <li>Compliance violations or audit failures</li>
                <li>
                  Any damages resulting from unauthorized access to your account
                </li>
              </ul>
            </div>

            {/* Indemnification */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "var(--spacing-sm)",
                  color: "var(--color-text)",
                }}
              >
                Indemnification
              </h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8 }}>
                You agree to indemnify, defend, and hold harmless SimpliCares and
                its officers, directors, employees, and agents from any claims,
                damages, losses, or expenses arising out of your use of the
                platform, your violation of these Terms, or your violation of any
                third-party rights.
              </p>
            </div>

            {/* Termination */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "var(--spacing-sm)",
                  color: "var(--color-text)",
                }}
              >
                Termination
              </h2>
              <p
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                We may terminate or suspend your account and access to the platform
                at our sole discretion, without notice, for conduct that we believe:
              </p>
              <ul
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  marginLeft: "1.5rem",
                }}
              >
                <li>Violates these Terms or applicable laws</li>
                <li>Is harmful to other users or third parties</li>
                <li>Constitutes fraud or misuse of the platform</li>
              </ul>
              <p
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  marginTop: "1rem",
                }}
              >
                Upon termination, your right to use the platform will immediately
                cease. We will retain your data as required by law or for compliance
                purposes.
              </p>
            </div>

            {/* Governing Law */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "var(--spacing-sm)",
                  color: "var(--color-text)",
                }}
              >
                Governing Law
              </h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8 }}>
                These Terms shall be governed by and construed in accordance with
                the laws of the State of Texas, without regard to its conflict of
                law provisions. Any legal action arising out of these Terms shall
                be brought exclusively in the state or federal courts located in
                Travis County, Texas.
              </p>
            </div>

            {/* Changes to Terms */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "var(--spacing-sm)",
                  color: "var(--color-text)",
                }}
              >
                Changes to These Terms
              </h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8 }}>
                We reserve the right to modify these Terms at any time. We will
                notify you of material changes by posting the updated Terms on this
                page and updating the &quot;Last updated&quot; date. Your continued use of
                the platform after changes are posted constitutes your acceptance
                of the revised Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div
              style={{
                background: "var(--color-bg-alt)",
                padding: "var(--spacing-md)",
                borderRadius: "12px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "var(--spacing-sm)",
                  color: "var(--color-text)",
                }}
              >
                Contact Us
              </h2>
              <p
                style={{
                  color: "var(--color-text-light)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                If you have any questions about these Terms and Conditions, please
                contact us:
              </p>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, margin: 0 }}>
                <strong>SimpliCares Inc.</strong>
                <br />
                123 Healthcare Drive, Suite 400
                <br />
                Austin, TX 78701
                <br />
                Email:{" "}
                <a
                  href="mailto:legal@simplicares.com"
                  style={{ color: "var(--color-accent)" }}
                >
                  legal@simplicares.com
                </a>
                <br />
                Phone:{" "}
                <a
                  href="tel:+1-800-555-0123"
                  style={{ color: "var(--color-accent)" }}
                >
                  1-800-555-0123
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer showCta={false} />
    </>
  );
}

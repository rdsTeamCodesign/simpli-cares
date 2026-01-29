"use client";

import styles from "../page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header ctaHref="/#cta" />

      {/* Privacy Policy Hero */}
      <section className={styles.hero} style={{ minHeight: "auto", paddingBottom: "var(--spacing-lg)" }}>
        <div className={styles.container}>
          <div className={styles.heroContent} style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <span className={styles.heroEyebrow}>Legal</span>
            <h1 style={{ marginBottom: "var(--spacing-md)" }}>
              <span className={styles.line}>
                Privacy <span className={styles.highlight}>Policy</span>
              </span>
            </h1>
            <p className={styles.heroSubhead} style={{ marginBottom: 0 }}>
              Last updated: January 23, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section style={{ background: "var(--color-bg)", padding: "var(--spacing-xl) 0" }}>
        <div className={styles.container}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>

            {/* Introduction */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 600,
                marginBottom: "var(--spacing-sm)",
                color: "var(--color-text)"
              }}>
                Introduction
              </h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: "1rem" }}>
                SimpliCares Inc. (&quot;SimpliCares,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use
                our Electronic Visit Verification (EVV) platform and related services.
              </p>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8 }}>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
                please do not access the platform.
              </p>
            </div>

            {/* Information We Collect */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 600,
                marginBottom: "var(--spacing-sm)",
                color: "var(--color-text)"
              }}>
                Information We Collect
              </h2>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem", marginTop: "var(--spacing-md)" }}>
                Personal Information
              </h3>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: "1rem" }}>
                We may collect personal information that you voluntarily provide to us when you register for the platform,
                including but not limited to:
              </p>
              <ul style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginLeft: "1.5rem", marginBottom: "1rem" }}>
                <li>Name, email address, and phone number</li>
                <li>Agency name and business information</li>
                <li>Caregiver and patient information necessary for EVV compliance</li>
                <li>GPS location data during visit check-ins and check-outs</li>
                <li>Digital signatures for visit verification</li>
                <li>Visit notes and task completion records</li>
              </ul>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem", marginTop: "var(--spacing-md)" }}>
                Automatically Collected Information
              </h3>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8 }}>
                When you access our platform, we may automatically collect certain information about your device, including:
              </p>
              <ul style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginLeft: "1.5rem" }}>
                <li>Device type and operating system</li>
                <li>IP address and browser type</li>
                <li>Usage data and interaction patterns</li>
                <li>Time and date of visits</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 600,
                marginBottom: "var(--spacing-sm)",
                color: "var(--color-text)"
              }}>
                How We Use Your Information
              </h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: "1rem" }}>
                We use the information we collect for the following purposes:
              </p>
              <ul style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginLeft: "1.5rem" }}>
                <li>To provide and maintain our EVV platform services</li>
                <li>To comply with state and federal EVV requirements</li>
                <li>To transmit visit verification data to authorized state aggregators (Sandata, HHAeXchange, CareBridge, etc.)</li>
                <li>To generate compliance reports and audit trails</li>
                <li>To communicate with you about your account and our services</li>
                <li>To improve our platform and develop new features</li>
                <li>To detect and prevent fraud or unauthorized access</li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 600,
                marginBottom: "var(--spacing-sm)",
                color: "var(--color-text)"
              }}>
                Disclosure of Your Information
              </h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: "1rem" }}>
                We may share your information in the following situations:
              </p>
              <ul style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginLeft: "1.5rem" }}>
                <li><strong>State Aggregators:</strong> We transmit EVV data to authorized state aggregators as required for Medicaid compliance</li>
                <li><strong>Legal Requirements:</strong> We may disclose information where required by law or subpoena</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> We may share information with third parties when you have given us explicit consent</li>
              </ul>
            </div>

            {/* HIPAA Compliance */}
            <div style={{
              marginBottom: "var(--spacing-lg)",
              background: "var(--color-accent-light)",
              padding: "var(--spacing-md)",
              borderRadius: "12px",
              borderLeft: "4px solid var(--color-accent)"
            }}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 600,
                marginBottom: "var(--spacing-sm)",
                color: "var(--color-accent)"
              }}>
                HIPAA Compliance
              </h2>
              <p style={{ color: "var(--color-text)", lineHeight: 1.8 }}>
                SimpliCares is committed to compliance with the Health Insurance Portability and Accountability Act (HIPAA).
                We implement appropriate physical, technical, and administrative safeguards to protect Protected Health Information (PHI).
                We enter into Business Associate Agreements (BAAs) with covered entities as required by law.
              </p>
            </div>

            {/* Data Security */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 600,
                marginBottom: "var(--spacing-sm)",
                color: "var(--color-text)"
              }}>
                Data Security
              </h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: "1rem" }}>
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginLeft: "1.5rem" }}>
                <li>256-bit SSL/TLS encryption for data in transit</li>
                <li>AES-256 encryption for data at rest</li>
                <li>Regular security audits and penetration testing</li>
                <li>Role-based access controls</li>
                <li>Secure data centers with SOC 2 Type II compliance</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 600,
                marginBottom: "var(--spacing-sm)",
                color: "var(--color-text)"
              }}>
                Data Retention
              </h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8 }}>
                We retain your information for as long as necessary to fulfill the purposes outlined in this privacy policy,
                comply with legal obligations, resolve disputes, and enforce our agreements. EVV records are retained in
                accordance with state and federal requirements, typically for a minimum of six (6) years.
              </p>
            </div>

            {/* Your Rights */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 600,
                marginBottom: "var(--spacing-sm)",
                color: "var(--color-text)"
              }}>
                Your Rights
              </h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: "1rem" }}>
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginLeft: "1.5rem" }}>
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information (subject to legal requirements)</li>
                <li>The right to data portability</li>
                <li>The right to opt out of certain data processing activities</li>
              </ul>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginTop: "1rem" }}>
                To exercise these rights, please contact us at{" "}
                <a href="mailto:privacy@simplicares.com" style={{ color: "var(--color-accent)" }}>privacy@simplicares.com</a>.
              </p>
            </div>

            {/* Children's Privacy */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 600,
                marginBottom: "var(--spacing-sm)",
                color: "var(--color-text)"
              }}>
                Children&apos;s Privacy
              </h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8 }}>
                Our platform is not intended for individuals under the age of 18. We do not knowingly collect personal
                information from children under 18. If we become aware that we have collected personal information from
                a child under 18, we will take steps to delete such information.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div style={{ marginBottom: "var(--spacing-lg)" }}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 600,
                marginBottom: "var(--spacing-sm)",
                color: "var(--color-text)"
              }}>
                Changes to This Privacy Policy
              </h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8 }}>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new privacy policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this
                privacy policy periodically for any changes.
              </p>
            </div>

            {/* Contact Us */}
            <div style={{
              background: "var(--color-bg-alt)",
              padding: "var(--spacing-md)",
              borderRadius: "12px"
            }}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 600,
                marginBottom: "var(--spacing-sm)",
                color: "var(--color-text)"
              }}>
                Contact Us
              </h2>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, marginBottom: "1rem" }}>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <p style={{ color: "var(--color-text-light)", lineHeight: 1.8, margin: 0 }}>
                <strong>SimpliCares Inc.</strong><br />
                Dubai, UAE<br />
                Email: <a href="mailto:support@simplicares.com" style={{ color: "var(--color-accent)" }}>support@simplicares.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer showCta={false} />
    </>
  );
}

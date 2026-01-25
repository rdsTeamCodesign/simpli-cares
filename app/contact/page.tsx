"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default function ContactPage() {
  return (
    <>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo/logo-simplicares.svg"
              alt="SimpliCares Logo"
              width={150}
              height={40}
            />
          </Link>
          <Link href="/#cta" className={`${styles.btn} ${styles.btnPrimary}`}>
            Get Started Free
          </Link>
        </div>
      </nav>

      {/* Contact Hero */}
      <section className={styles.hero} style={{ minHeight: "auto", paddingBottom: "var(--spacing-lg)" }}>
        <div className={styles.container}>
          <div className={styles.heroContent} style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <span className={styles.heroEyebrow}>Get In Touch</span>
            <h1 style={{ marginBottom: "var(--spacing-md)" }}>
              <span className={styles.line}>
                Let&apos;s <span className={styles.highlight}>Talk</span>
              </span>
            </h1>
            <p className={styles.heroSubhead} style={{ marginBottom: 0 }}>
              Have questions about SimpliCares? We&apos;re here to help your agency succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ background: "var(--color-bg)", padding: "var(--spacing-xl) 0" }}>
        <div className={styles.container}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-[1000px] mx-auto">
            {/* Contact Info */}
            <div>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 600,
                marginBottom: "var(--spacing-md)",
                color: "var(--color-text)"
              }}>
                Contact Information
              </h2>

              <div style={{ marginBottom: "var(--spacing-lg)" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--spacing-sm)", marginBottom: "var(--spacing-md)" }}>
                  <span style={{ fontSize: "1.5rem" }}>📧</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.25rem" }}>Email</h3>
                    <a href="mailto:support@simplicares.com" style={{ color: "var(--color-accent)", textDecoration: "none" }}>
                      support@simplicares.com
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--spacing-sm)", marginBottom: "var(--spacing-md)" }}>
                  <span style={{ fontSize: "1.5rem" }}>📞</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.25rem" }}>Phone</h3>
                    <a href="tel:+1-800-555-0123" style={{ color: "var(--color-accent)", textDecoration: "none" }}>
                      1-800-555-0123
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--spacing-sm)", marginBottom: "var(--spacing-md)" }}>
                  <span style={{ fontSize: "1.5rem" }}>🕐</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.25rem" }}>Business Hours</h3>
                    <p style={{ color: "var(--color-text-light)", margin: 0 }}>
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--spacing-sm)" }}>
                  <span style={{ fontSize: "1.5rem" }}>📍</span>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.25rem" }}>Address</h3>
                    <p style={{ color: "var(--color-text-light)", margin: 0 }}>
                      SimpliCares Inc.<br />
                      123 Healthcare Drive, Suite 400<br />
                      Austin, TX 78701
                    </p>
                  </div>
                </div>
              </div>

              <div style={{
                background: "var(--color-accent-light)",
                padding: "var(--spacing-md)",
                borderRadius: "12px",
                borderLeft: "4px solid var(--color-accent)"
              }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--color-accent)" }}>
                  Need Immediate Help?
                </h3>
                <p style={{ color: "var(--color-text-light)", margin: 0, fontSize: "0.95rem" }}>
                  Book a free strategy call and we&apos;ll walk you through how SimpliCares can help your agency.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 600,
                marginBottom: "var(--spacing-md)",
                color: "var(--color-text)"
              }}>
                Send Us a Message
              </h2>

              <form style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-sm)" }}>
                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500, color: "var(--color-text)" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      border: "2px solid var(--color-border)",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      fontFamily: "inherit",
                      transition: "border-color 0.3s ease"
                    }}
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500, color: "var(--color-text)" }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      border: "2px solid var(--color-border)",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      fontFamily: "inherit"
                    }}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500, color: "var(--color-text)" }}>
                    Agency Name
                  </label>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      border: "2px solid var(--color-border)",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      fontFamily: "inherit"
                    }}
                    placeholder="Your Home Care Agency"
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500, color: "var(--color-text)" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      border: "2px solid var(--color-border)",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      fontFamily: "inherit"
                    }}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 500, color: "var(--color-text)" }}>
                    How can we help? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      border: "2px solid var(--color-border)",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      fontFamily: "inherit",
                      resize: "vertical"
                    }}
                    placeholder="Tell us about your agency and what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  style={{ marginTop: "var(--spacing-sm)", justifyContent: "center" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.footerCta}>
        <div className={styles.container}>
          <div className={styles.footerCtaLines}>
            <p>Ready to simplify your EVV compliance?</p>
            <p>Let&apos;s get started today.</p>
          </div>
          <Link href="/#cta" className={`${styles.btn} ${styles.btnInverse}`}>
            Book Free Strategy Call
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <Image
                src="/images/logo/logo-simplicares-white.svg"
                alt="SimpliCares Logo"
                width={150}
                height={40}
              />
            </div>
            <div className={styles.footerLinks}>
              <Link href="/#solution">Features</Link>
              <Link href="/#solution">Compliance</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
            <p className={styles.footerCopy}>
              © 2026 SimpliCares. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

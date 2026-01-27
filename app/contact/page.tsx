"use client";

import styles from "../page.module.css";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header ctaHref="/#cta" />

      {/* Contact Hero */}
      <section
        className={styles.hero}
        style={{ minHeight: "auto", paddingBottom: "var(--spacing-lg)" }}
      >
        <div className={styles.container}>
          <div
            className={styles.heroContent}
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <span className={styles.heroEyebrow}>Get In Touch</span>
            <h1 style={{ marginBottom: "var(--spacing-md)" }}>
              <span className={styles.line}>
                Let&apos;s <span className={styles.highlight}>Talk</span>
              </span>
            </h1>
            <p className={styles.heroSubhead} style={{ marginBottom: 0 }}>
              Have questions about SimpliCares? We&apos;re here to help your
              agency succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section
        id="contact-form"
        style={{
          background: "var(--color-bg)",
          padding: "var(--spacing-xl) 0",
        }}
      >
        <div className={styles.container}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-[1000px] mx-auto">
            {/* Contact Info */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "var(--spacing-md)",
                  color: "var(--color-text)",
                }}
              >
                Contact Information
              </h2>

              <div style={{ marginBottom: "var(--spacing-lg)" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--spacing-sm)",
                    marginBottom: "var(--spacing-md)",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>📧</span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        marginBottom: "0.25rem",
                      }}
                    >
                      Email
                    </h3>
                    <a
                      href="mailto:support@simplicares.com"
                      style={{
                        color: "var(--color-accent)",
                        textDecoration: "none",
                      }}
                    >
                      support@simplicares.com
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--spacing-sm)",
                    marginBottom: "var(--spacing-md)",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🕐</span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        marginBottom: "0.25rem",
                      }}
                    >
                      Business Hours
                    </h3>
                    <p style={{ color: "var(--color-text-light)", margin: 0 }}>
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--spacing-sm)",
                    marginBottom: "var(--spacing-md)",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>📍</span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        marginBottom: "0.25rem",
                      }}
                    >
                      Address
                    </h3>
                    <p style={{ color: "var(--color-text-light)", margin: 0 }}>
                      Dubai, UAE
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "var(--spacing-sm)",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>🌎</span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        marginBottom: "0.25rem",
                      }}
                    >
                      Operations
                    </h3>
                    <p style={{ color: "var(--color-text-light)", margin: 0 }}>
                      Serving clients in the USA
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "var(--color-accent-light)",
                  padding: "var(--spacing-md)",
                  borderRadius: "12px",
                  borderLeft: "4px solid var(--color-accent)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    color: "var(--color-accent)",
                  }}
                >
                  Need Immediate Help?
                </h3>
                <p
                  style={{
                    color: "var(--color-text-light)",
                    margin: 0,
                    fontSize: "0.95rem",
                  }}
                >
                  Book a free strategy call and we&apos;ll walk you through how
                  SimpliCares can help your agency.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer showCta={false} />
    </>
  );
}

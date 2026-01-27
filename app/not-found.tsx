"use client";

import Link from "next/link";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Header ctaHref="/#cta" />

      {/* 404 Hero */}
      <section
        className={styles.hero}
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="default-container mx-auto! px-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <div
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: "clamp(6rem, 15vw, 10rem)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "var(--color-accent)",
                lineHeight: 1,
                marginBottom: "var(--spacing-sm)",
              }}
            >
              404
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                fontWeight: 600,
                marginBottom: "var(--spacing-sm)",
                color: "var(--color-text)",
              }}
            >
              Page Not Found
            </h1>
            <p
              style={{
                color: "var(--color-text-light)",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                marginBottom: "var(--spacing-md)",
              }}
            >
              Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Don&apos;t worry, let&apos;s get you back on track.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-sm)",
                alignItems: "center",
              }}
            >
              <Link
                href="/"
                className={`${styles.btn} ${styles.btnPrimary}`}
                style={{ minWidth: "200px", justifyContent: "center" }}
              >
                Go to Homepage
              </Link>
              <Link
                href="/contact"
                className={`${styles.btn} ${styles.btnSecondary}`}
                style={{ minWidth: "200px", justifyContent: "center" }}
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Links Section */}
      <section
        style={{
          background: "var(--color-bg-alt)",
          padding: "var(--spacing-lg) 0",
        }}
      >
        <div className="default-container mx-auto! px-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                fontWeight: 600,
                marginBottom: "var(--spacing-md)",
                color: "var(--color-text)",
              }}
            >
              Here are some helpful links
            </h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "var(--spacing-md)",
              }}
            >
              <Link
                href="/#solution"
                style={{
                  color: "var(--color-accent)",
                  textDecoration: "none",
                  fontWeight: 500,
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  background: "var(--color-bg)",
                  transition: "background 0.3s ease",
                }}
              >
                How It Works
              </Link>
              <Link
                href="/#cta"
                style={{
                  color: "var(--color-accent)",
                  textDecoration: "none",
                  fontWeight: 500,
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  background: "var(--color-bg)",
                  transition: "background 0.3s ease",
                }}
              >
                Get Started
              </Link>
              <Link
                href="/privacy-policy"
                style={{
                  color: "var(--color-accent)",
                  textDecoration: "none",
                  fontWeight: 500,
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  background: "var(--color-bg)",
                  transition: "background 0.3s ease",
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                style={{
                  color: "var(--color-accent)",
                  textDecoration: "none",
                  fontWeight: 500,
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  background: "var(--color-bg)",
                  transition: "background 0.3s ease",
                }}
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer showCta={false} />
    </>
  );
}

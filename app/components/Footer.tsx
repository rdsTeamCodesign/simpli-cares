"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

interface FooterProps {
  showCta?: boolean;
  ctaHref?: string;
}

export default function Footer({ showCta = true, ctaHref = "#cta" }: FooterProps) {
  return (
    <>
      {/* Footer CTA */}
      {showCta && (
        <section className={styles.footerCta}>
          <div className="default-container mx-auto! px-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
            <div className={styles.footerCtaLines}>
              <p>Your caregivers deserve a simpler workflow.</p>
              <p>Your admin deserves peace of mind.</p>
              <p>Your agency deserves clean compliance.</p>
            </div>
            <Link href={ctaHref} className={`${styles.btn} ${styles.btnInverse}`}>
              Let&apos;s Make It Happen
            </Link>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="default-container mx-auto! px-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
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
              <Link href="/contact">Contact</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-conditions">Terms & Conditions</Link>
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

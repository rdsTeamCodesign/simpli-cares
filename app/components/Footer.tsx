"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const ThreadsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 192 192" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.68 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.6 96c.208-24.682 5.636-43.966 16.128-57.313 11.215-14.258 28.466-21.573 51.275-21.742 22.992.173 40.512 7.515 52.083 21.821 5.614 6.94 9.792 15.594 12.464 25.700l15.841-4.053c-3.158-12.197-8.357-22.878-15.552-31.77C147.766 10.911 125.623 1.742 97.003 1.545h-.086C68.362 1.742 46.475 10.88 32.614 28.643 16.98 48.639 8.94 77.144 8.727 96l.003.059c.213 18.856 8.253 47.361 23.887 67.357 13.861 17.763 35.748 26.901 65.103 27.098h.086c24.467-.173 42.287-6.7 56.158-20.56 18.608-18.581 17.592-41.357 11.537-55.467-4.34-10.121-12.493-18.258-23.964-24.499zm-41.789 44.862c-10.453.57-21.313-4.107-22.045-13.823-.548-7.289 5.181-15.418 23.079-16.449 2.017-.116 3.99-.172 5.926-.172 6.267 0 12.135.596 17.432 1.7-1.984 22.628-14.472 28.174-24.392 28.744z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

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
            <div className="flex gap-6 mt-4">
              <a
                href="https://www.instagram.com/simplicares/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-white/60 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.threads.com/@simplicares"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Threads"
                className="text-white/60 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <ThreadsIcon />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61587011188212"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-white/60 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/111447978"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="text-white/60 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <LinkedInIcon />
              </a>
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

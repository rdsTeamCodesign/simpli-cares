"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

interface HeaderProps {
  ctaHref?: string;
  ctaText?: string;
}

export default function Header({
  ctaHref = "#cta",
  ctaText = "Get Started Free",
}: HeaderProps) {
  return (
    <nav className={styles.nav}>
      <div className="default-container mx-auto! px-4 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="flex justify-between items-center">
          <Link href="/" className={styles.logo}>
            <Image
              src="/images/logo/logo-simplicares.svg"
              alt="SimpliCares Logo"
              width={150}
              height={40}
            />
          </Link>
          <Link href={ctaHref} className={`${styles.btn} ${styles.btnPrimary}`}>
            {ctaText}
          </Link>
        </div>
      </div>
    </nav>
  );
}

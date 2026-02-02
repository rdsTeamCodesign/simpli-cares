import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://simplicares.com"),
  title: {
    default: "SimpliCares - EVV Platform for Home Care Agencies",
    template: "%s | SimpliCares",
  },
  description:
    "SimpliCares is the EVV platform that helps home care agencies stay compliant with electronic visit verification. Simple check-in, GPS verification, and automatic data transmission to state aggregators.",
  keywords: [
    "EVV",
    "Electronic Visit Verification",
    "home care",
    "home care agency",
    "caregiver",
    "Medicaid compliance",
    "visit verification",
    "GPS verification",
    "Sandata",
    "HHAeXchange",
    "CareBridge",
    "home health",
    "EVV compliance",
    "caregiver app",
  ],
  authors: [{ name: "SimpliCares" }],
  creator: "SimpliCares",
  publisher: "SimpliCares",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://simplicares.com",
    siteName: "SimpliCares",
    title: "SimpliCares - EVV Platform for Home Care Agencies",
    description:
      "The EVV platform that does one thing perfectly. Clean, reliable, audit-ready visit verification for home care agencies.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "SimpliCares - EVV Platform for Home Care Agencies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SimpliCares - EVV Platform for Home Care Agencies",
    description:
      "The EVV platform that does one thing perfectly. Clean, reliable, audit-ready visit verification for home care agencies.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
  category: "Healthcare Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1611839156667799');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1611839156667799&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${fraunces.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

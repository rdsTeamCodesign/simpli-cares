import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "SimpliCares Privacy Policy. Learn how we collect, use, and protect your information when using our EVV platform for home care agencies.",
  openGraph: {
    title: "Privacy Policy | SimpliCares",
    description:
      "SimpliCares Privacy Policy. Learn how we collect, use, and protect your information.",
    url: "https://simplicares.com/privacy-policy",
  },
  twitter: {
    title: "Privacy Policy | SimpliCares",
    description:
      "SimpliCares Privacy Policy. Learn how we collect, use, and protect your information.",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

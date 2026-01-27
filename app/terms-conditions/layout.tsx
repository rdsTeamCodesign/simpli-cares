import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "SimpliCares Terms and Conditions. Read our terms of service for using our EVV platform for home care agencies.",
  openGraph: {
    title: "Terms & Conditions | SimpliCares",
    description:
      "SimpliCares Terms and Conditions. Read our terms of service for using our EVV platform.",
    url: "https://simplicares.com/terms-conditions",
  },
  twitter: {
    title: "Terms & Conditions | SimpliCares",
    description:
      "SimpliCares Terms and Conditions. Read our terms of service for using our EVV platform.",
  },
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

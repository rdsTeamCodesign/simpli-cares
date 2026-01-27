import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SimpliCares. We're here to help your home care agency succeed with EVV compliance. Contact us for a free strategy call.",
  openGraph: {
    title: "Contact Us | SimpliCares",
    description:
      "Get in touch with SimpliCares. We're here to help your home care agency succeed with EVV compliance.",
    url: "https://simplicares.com/contact",
  },
  twitter: {
    title: "Contact Us | SimpliCares",
    description:
      "Get in touch with SimpliCares. We're here to help your home care agency succeed with EVV compliance.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

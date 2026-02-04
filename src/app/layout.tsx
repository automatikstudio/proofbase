import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProofBase — Social Proof That Sells",
  description:
    "Collect, manage, and display customer testimonials effortlessly. Beautiful embeddable widgets for your website.",
  keywords: ["testimonials", "social proof", "reviews", "widget", "embed"],
  openGraph: {
    title: "ProofBase — Social Proof That Sells",
    description: "Collect and display testimonials effortlessly with beautiful embeddable widgets.",
    type: "website",
    siteName: "ProofBase",
    url: "https://proofbase-blue.vercel.app",
    images: [{ url: "https://proofbase-blue.vercel.app/og-image.png", width: 1200, height: 630, alt: "ProofBase — Social Proof That Sells" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProofBase — Social Proof That Sells",
    description: "Collect and display testimonials effortlessly with beautiful embeddable widgets.",
    creator: "@automatikstudio",
    images: ["https://proofbase-blue.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

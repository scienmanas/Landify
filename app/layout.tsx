import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://certimailer.xyz"),
  title: "Landify",
  description:
    "An awesome template to make your landing page faster. Make the landing page of your next SaaS impressive nad awesome.",
  keywords:
    "SaaS, landing-page, impressive, free, open-source, awesome-landing-page",
  // authors: "CertiMailer Team",
  robots: "index, follow",
  openGraph: {
    title: "Landingo",
    description:
      "An awesome template to make your landing page faster. Make the landing page of your next SaaS impressive nad awesome.",
    url: "https://www.certimailer.xyz", // replace with your actual domain
    type: "website",
    locale: "en_US",
    siteName: "Landingo",
    // images: displayImage.src,
  },
  twitter: {
    card: "summary_large_image",
    title: "Landingo",
    description:
      "An awesome template to make your landing page faster. Make the landing page of your next SaaS impressive nad awesome.",
    // site: "@certimailer", // replace with your actual Twitter handle
    creator: "@ScientistManas", // replace with your actual Twitter handle
    // images: displayImage.src,
  },
};

export const viewport: Viewport = {
  themeColor: "purple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

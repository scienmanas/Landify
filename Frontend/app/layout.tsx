import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Viewport } from "next";
import { Navbar } from "@/app/ui/landing/Navbar";
import displayImg from "@/public/assets/metadata/display.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://landify-sepia.vercel.app"),
  title: "Landify",
  description:
    "An awesome template to make your landing page faster. Make the landing page of your next SaaS impressive nad awesome.",
  keywords:
    "SaaS, landing-page, impressive, free, open-source, awesome-landing-page",
  authors: { name: "Manas", url: "https://github.com/scienmanas" },
  robots: "index, follow",
  openGraph: {
    title: "Landingo",
    description:
      "An awesome template to make your landing page faster. Make the landing page of your next SaaS impressive nad awesome.",
    url: "https://landify-sepia.vercel.app", // replace with your actual domain
    type: "website",
    locale: "en_US",
    siteName: "Landingo",
    images: displayImg.src,
  },
  twitter: {
    card: "summary_large_image",
    title: "Landingo",
    description:
      "An awesome template to make your landing page faster. Make the landing page of your next SaaS impressive nad awesome.",
    // site: "@certimailer", // replace with your actual Twitter handle
    creator: "@ScientistManas", // replace with your actual Twitter handle
    images: displayImg.src,
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
      <body className={`{inter.className}`}>{children}</body>
    </html>
  );
}

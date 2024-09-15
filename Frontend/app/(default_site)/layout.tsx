// --- External and Third-Party Libraries ---
import type { Metadata } from "next"; // Type for SEO metadata
import { Inter } from "next/font/google"; // Google Font 'Inter'
import { ThemeProvider } from "next-themes"; // Theme provider for light/dark mode

// --- Internal and Project-Specific Imports ---
import "../globals.css"; // Global styles
import { Viewport } from "next"; // Viewport meta tag for responsive design
import { Navbar } from "@/app/ui/universal/Navbar"; // Navbar component
import { Footer } from "@/app/ui/universal/Footer"; // Footer component

// --- Static Assets ---
import displayImg from "@/public/assets/metadata/landing/display.png"; // OpenGraph display image

// Initialize Google Font 'Inter' with Latin subset
const inter = Inter({ subsets: ["latin"] });

// --- Metadata for SEO and OpenGraph ---
// Dynamically generates meta tags for the application
export const metadata: Metadata = {
  metadataBase: new URL(process.env.DOMAIN as string), // Base URL from environment variables
  title: process.env.SITE_NAME as string, // Site title from environment variables
  description:
    "An awesome template to make your landing page faster. Make the landing page of your next SaaS impressive and awesome.", // Meta description
  keywords:
    "SaaS, landing-page, impressive, free, open-source, awesome-landing-page", // SEO keywords
  authors: { name: "Manas", url: "https://github.com/scienmanas" }, // Author information
  robots: "index, follow", // Instructions for search engine crawlers
  openGraph: {
    title: "Landify", // OpenGraph title for social sharing
    description:
      "An awesome template to make your landing page faster. Make the landing page of your next SaaS impressive and awesome.", // OpenGraph description
    url: process.env.DOMAIN, // OpenGraph URL (dynamic from environment)
    type: "website", // OpenGraph type
    locale: "en_US", // Language and region
    siteName: process.env.SITE_NAME as string, // Site name from environment variables
    images: displayImg.src, // Image to be used in OpenGraph cards
  },
  twitter: {
    card: "summary_large_image", // Twitter card type
    title: process.env.SITE_NAME as string, // Twitter card title
    description:
      "An awesome template to make your landing page faster. Make the landing page of your next SaaS impressive and awesome.", // Twitter card description
    creator: "@ScientistManas", // Twitter handle of the creator
    images: displayImg.src, // Image for Twitter card
  },
};

// --- Viewport Configuration ---
export const viewport: Viewport = {
  themeColor: "purple", // Browser theme color for supported devices
};

// --- RootLayout Component ---
// Wraps the entire application with necessary layout components
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#18181b]`}>
        {/* ThemeProvider manages dark/light mode with class-based toggling */}
        <ThemeProvider attribute="class">
          <div className="page-contents relative w-full h-fit flex flex-col items-center justify-center gap-16">
            {/* Navbar at the top, fixed to the viewport */}
            <section className="nav z-10 fixed flex w-full h-fit top-0 items-center justify-center">
              <Navbar />
            </section>

            {/* Main content area for the children components */}
            <section className="relative z-0 child-body w-full h-fit">
              {children}
            </section>

            {/* Footer at the bottom of the page */}
            <section className="w-full">
              <Footer />
            </section>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

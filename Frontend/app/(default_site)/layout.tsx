import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Viewport } from "next";
import { Navbar } from "@/app/ui/universal/Navbar";
import displayImg from "@/public/assets/metadata/landing/display.png";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/app/ui/universal/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.DOMAIN as string),
  title: process.env.SITE_NAME as string,
  description:
    "An awesome template to make your landing page faster. Make the landing page of your next SaaS impressive nad awesome.",
  keywords:
    "SaaS, landing-page, impressive, free, open-source, awesome-landing-page",
  authors: { name: "Manas", url: "https://github.com/scienmanas" },
  robots: "index, follow",
  openGraph: {
    title: "Landify",
    description:
      "An awesome template to make your landing page faster. Make the landing page of your next SaaS impressive nad awesome.",
    url: process.env.DOMAIN, // replace with your actual domain
    type: "website",
    locale: "en_US",
    siteName: process.env.SITE_NAME as string,
    images: displayImg.src,
  },
  twitter: {
    card: "summary_large_image",
    title: process.env.SITE_NAME as string,
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#18181b]`}>
        <ThemeProvider attribute="class">
          <div className="page-contents relative w-full h-fit flex flex-col items-center justify-center gap-16">
            <section className="nav z-10 fixed flex w-full h-fit top-0 items-center justify-center">
              <Navbar />
            </section>
            <section className="relative z-0 child-body w-full h-fit">
              {children}
            </section>
            <section className="w-full">
              <Footer />
            </section>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

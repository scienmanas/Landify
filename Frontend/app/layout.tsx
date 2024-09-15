// Import the Inter font from Google Fonts with the specified subset
import { Inter } from "next/font/google";
// Import global CSS styles
import "./globals.css";
// Import Viewport type for setting viewport properties
import { Viewport } from "next";
// Import ThemeProvider to handle theme-based styling
import { ThemeProvider } from "next-themes";

// Configure the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define viewport settings, such as the theme color
export const viewport: Viewport = {
  themeColor: "purple",
};

// RootLayout component that sets up the main layout for the application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // React nodes to be rendered within the layout
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#18181b]`}>
        {/* Wrap children with ThemeProvider to enable theme-based styling */}
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}

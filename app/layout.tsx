import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "STV Labs - Modern SaaS Starters for Developers",
  description: "Ship faster with production-ready templates. LaunchAI - a complete Next.js AI SaaS starter - is now available.",
  keywords: ["SaaS", "Next.js", "AI", "starter template", "LaunchAI", "developer tools"],
  authors: [{ name: "STV Labs" }],
  openGraph: {
    title: "STV Labs - Modern SaaS Starters for Developers",
    description: "Ship faster with production-ready templates",
    url: "https://stvlabs.dev",
    siteName: "STV Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "STV Labs - Modern SaaS Starters for Developers",
    description: "Ship faster with production-ready templates",
    creator: "@stvlabs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

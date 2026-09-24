import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

import { Navbar } from "@/components/layout/navbar/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Harry Ward | Software Engineer",
    template: "%s | Harry Ward",
  },

  description:
    "Software Engineer building scalable web applications, AI-powered tools, and modern developer experiences.",

  keywords: [
    "Harry Ward",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Web Developer",
    "Australia",
  ],

  authors: [
    {
      name: "Harry Ward",
      url: siteConfig.url,
    },
  ],

  creator: "Harry Ward",

  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.url,
    title: "Harry Ward | Software Engineer",
    description:
      "Software Engineer building scalable web applications, AI-powered tools, and modern developer experiences.",
    siteName: "Harry Ward",
  },

  twitter: {
    card: "summary_large_image",
    title: "Harry Ward | Software Engineer",
    description:
      "Software Engineer building scalable web applications, AI-powered tools, and modern developer experiences.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#030712",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.className} ${GeistMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
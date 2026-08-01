import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

import { Navbar } from "@/components/layout/navbar/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://harryward.dev"), // Update when your domain is live

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
      url: "https://harryward.dev",
    },
  ],

  creator: "Harry Ward",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://harryward.dev",
    title: "Harry Ward | Software Engineer",
    description:
      "Software Engineer building scalable web applications, AI-powered tools, and modern developer experiences.",
    siteName: "Harry Ward",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harry Ward Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Harry Ward | Software Engineer",
    description:
      "Software Engineer building scalable web applications, AI-powered tools, and modern developer experiences.",
    images: ["/og-image.png"],
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
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

import { Navbar } from "@/components/layout/navbar/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Harry Ward | Software Engineer",
    template: "%s | Harry Ward",
  },
  description:
    "Software Engineer building scalable web applications, AI-powered tools, and modern developer experiences.",
  metadataBase: new URL("https://harryward.dev"), // Update once your domain is live
  icons: {
    icon: "/favicon.ico",
  },
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
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <Navbar />

          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
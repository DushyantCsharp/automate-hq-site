// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { default: "Automate-HQ — Full-Stack Product Engineering", template: "%s — Automate-HQ" },
  description:
    "We design, build, and operate full-stack systems end-to-end — from React/Next.js front-ends and mobile to domain-driven back-ends, cloud, data, and AI. Production-ready from day one.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Calendly styles for the popup */}
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body className={inter.className}>
        {/* Calendly widget JS for popup (no redirect) */}
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}

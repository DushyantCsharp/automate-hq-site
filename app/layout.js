import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// ✅ Correct metadata (no themeColor here)
export const metadata = {
  metadataBase: new URL("https://automatehq.dev"), // swap with your live domain
  title: {
    default: "Automate HQ — Custom Software Architect",
    template: "%s — Automate HQ",
  },
  description:
    "Full-Stack Developer | Python, JavaScript (React), C#, C++ | Builder of scalable, high-performance systems. AI & automation, web & mobile apps, enterprise integrations.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Automate HQ — Custom Software Architect",
    description:
      "High-performance, scalable systems. AI & automation, web & mobile apps, enterprise integrations.",
    url: "https://automatehq.dev",
    siteName: "Automate HQ",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Automate HQ — Custom Software Architect",
    description:
      "High-performance, scalable systems. AI & automation, web & mobile apps, enterprise integrations.",
  },
};

// ✅ New viewport export for theme color + responsiveness
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b0d13" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d13" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

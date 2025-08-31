import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Automate-HQ — eKYC & Face Authentication",
  description: "Frictionless Identity. Enterprise Security. Global Trust.",
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <ThemeProvider>
          <Header />
          <main className="min-h-[calc(100dvh-240px)]">
            <div className="container section">{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import CalendlyModal from "@/components/CalendlyModal";

const links = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/technology", label: "Technology" },
  { href: "/resources", label: "Resources" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 6);
    on(); window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition ${scrolled ? "backdrop-blur-md" : "backdrop-blur-0"}`}
      style={{
        background: scrolled
          ? "color-mix(in oklab, rgb(var(--bg)) 88%, transparent)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid color-mix(in oklab, rgb(var(--fg)) 8%, transparent)"
          : "transparent",
      }}
    >
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-extrabold tracking-tight text-[1.05rem]">Automate-HQ</Link>

        <nav className="hidden xl:flex items-center gap-2">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href} className="nav-item" data-active={active ? "true" : "false"}>
                {l.label}
              </Link>
            );
          })}
          <CalendlyModal cta="Book" />
          <Link href="/contact" className="btn btn-primary">Start</Link>
          <ThemeToggle />
        </nav>

        <div className="xl:hidden flex items-center gap-2">
          <CalendlyModal cta="Book" />
          <Link href="/contact" className="btn btn-primary">Start</Link>
        </div>
      </div>
    </header>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/technology", label: "Technology" },
    { href: "/about", label: "About Us" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="shadow-sm sticky top-0 z-50 bg-white dark:bg-[#0b1220]">
      <nav className="container-padded flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Automate-HQ Logo" className="h-8 w-auto" />
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          ☰
        </button>

        {/* Nav links */}
        <ul
          className={clsx(
            "flex-col md:flex-row md:flex md:space-x-6",
            isOpen ? "flex" : "hidden"
          )}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-2 text-slate-700 dark:text-slate-200 hover:text-brand-500"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

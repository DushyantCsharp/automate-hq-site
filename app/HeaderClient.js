// app/HeaderClient.js
"use client";

import { useState } from "react";
import CalendlyButton from "./CalendlyButton";

export default function HeaderClient() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-[rgba(11,13,19,0.6)] border-b border-white/5">
      {/* Top bar */}
      <div className="container-pad flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-brand-500 shadow-lg shadow-brand-500/30" />
          <span className="font-semibold tracking-tight">Automate HQ</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#systems" className="hover:text-white">Systems I Build</a>
          <a href="#process" className="hover:text-white">Process</a>
          <CalendlyButton className="ml-2 rounded-xl bg-brand-600 hover:bg-brand-500 transition px-4 py-2 text-sm font-medium">
            Book a Call
          </CalendlyButton>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 px-3 py-2 text-white/80 hover:text-white"
          onClick={() => setOpen(true)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          {/* Panel */}
          <div className="fixed inset-x-0 top-0 mt-16 z-40">
            <div className="container-pad">
              <div className="card p-4 border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Menu</span>
                  <button
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-white/10 px-3 py-2 text-white/80 hover:text-white"
                  >
                    Close
                  </button>
                </div>
                <div className="mt-3 grid gap-2">
                  <a href="#services" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 hover:bg-white/5">Services</a>
                  <a href="#systems" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 hover:bg-white/5">Systems I Build</a>
                  <a href="#process" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 hover:bg-white/5">Process</a>
                  <CalendlyButton
                    className="mt-2 rounded-xl bg-brand-600 hover:bg-brand-500 transition px-4 py-3 font-medium"
                  >
                    Book a Call
                  </CalendlyButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

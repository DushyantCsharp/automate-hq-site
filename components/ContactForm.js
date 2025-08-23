"use client";

import { useMemo, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ sending: false, ok: null, error: "" });

  // simple honeypot to block bots
  const [hp, setHp] = useState("");
  const disabled = useMemo(() => status.sending || hp.length > 0, [status.sending, hp]);

  const submit = async (e) => {
    e.preventDefault();
    if (disabled) return;

    setStatus({ sending: true, ok: null, error: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, message }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to send");

      setStatus({ sending: false, ok: true, error: "" });
      setName(""); setCompany(""); setEmail(""); setMessage("");
    } catch (err) {
      setStatus({ sending: false, ok: false, error: err.message || "Error" });
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      {/* Honeypot (hidden) */}
      <input
        type="text"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/70 mb-1">Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-600"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-1">Company</label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-600"
            placeholder="(Optional)"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm text-white/70 mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-600"
            placeholder="you@company.com"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm text-white/70 mb-1">What do you need built?</label>
          <textarea
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-600"
            placeholder="Tell me about your problem, goals, timeline, and budget."
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={disabled}
          className="rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-60 transition px-6 py-3 font-medium"
        >
          {status.sending ? "Sending..." : "Send Enquiry"}
        </button>

        {/* Mailto fallback if someone prefers */}
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_FALLBACK || "Dushyannana@gmail.com"}?subject=${encodeURIComponent("Automate HQ — Project Enquiry")}`}
          className="rounded-xl border border-white/10 hover:border-white/20 px-5 py-3 font-medium"
        >
          Email me instead
        </a>
      </div>

      {status.ok && (
        <p className="text-sm text-emerald-400">Thanks — your message was sent. I’ll reply shortly.</p>
      )}
      {status.ok === false && (
        <p className="text-sm text-rose-400">Couldn’t send: {status.error}</p>
      )}
    </form>
  );
}

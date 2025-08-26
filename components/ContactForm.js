// components/ContactForm.js
"use client";
import { useState } from "react";

async function safeJson(res) {
  const ct = res.headers.get("content-type") || "";
  const text = await res.text();
  if (ct.includes("application/json")) {
    try { return JSON.parse(text); } catch { return { ok: false, error: "Invalid JSON payload" }; }
  }
  // HTML or something else (the '<!DOCTYPE' error case)
  return { ok: false, error: `Unexpected response: ${text.slice(0, 120)}...` };
}

export default function ContactForm() {
  const [status, setStatus] = useState({ ok: null, error: "", loading: false });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ ok: null, error: "", loading: true });
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await safeJson(res);
      if (!res.ok || !json.ok) throw new Error(json.error || `HTTP ${res.status}`);
      setStatus({ ok: true, error: "", loading: false });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ ok: false, error: err.message, loading: false });
    }
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 md:p-7 space-y-4 animate-in">
      <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="lbl">Your name</label>
          <input name="name" className="in" required autoComplete="name" />
        </div>
        <div>
          <label className="lbl">Email</label>
          <input type="email" name="email" className="in" required autoComplete="email" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="lbl">Budget (ZAR)</label>
          <select name="budget" className="in">
            <option>R10k–R30k</option><option>R30k–R75k</option>
            <option>R75k–R150k</option><option>R150k+</option>
          </select>
        </div>
        <div>
          <label className="lbl">Timeline</label>
          <select name="timeline" className="in">
            <option>ASAP</option><option>This month</option>
            <option>1–3 months</option><option>Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label className="lbl">Project details</label>
        <textarea name="project" rows={6} className="in" placeholder="What are we building? Goals, users, key features…" required />
      </div>

      <div className="flex items-center gap-3">
        <button disabled={status.loading} className="btn btn-primary">
          {status.loading ? "Sending…" : "Send inquiry"}
        </button>
        {status.ok && <span className="hint ok">Thanks — I’ll reply shortly.</span>}
        {status.ok === false && <span className="hint err">Couldn’t send: {status.error}</span>}
      </div>
    </form>
  );
}

// components/BookCall.js
"use client";

import { useCallback, useState } from "react";

/* tiny clsx helper (no dependency) */
function clsx(...c){ return c.filter(Boolean).join(" "); }

/* Calendly popup URL (your link + brand colors) */
const CALENDLY_URL = "https://calendly.com/dushyannana/30min"
  + "?hide_landing_page_details=1&background_color=0a0c12&text_color=e7e9ee&primary_color=6a5bff";

const BUDGETS = [
  { label:"R10k–R30k", color:"emerald" },
  { label:"R30k–R75k", color:"sky" },
  { label:"R75k–R150k", color:"violet" },
  { label:"R150k+", color:"fuchsia" },
];
const TIMELINES = [
  { label:"ASAP", color:"rose" },
  { label:"This month", color:"amber" },
  { label:"1–3 months", color:"indigo" },
  { label:"Flexible", color:"slate" },
];

function Chip({active,color,children,onClick}){
  const tone={
    emerald:"bg-emerald-500/15 text-emerald-200 border-emerald-400/30 active:bg-emerald-500/20",
    sky:"bg-sky-500/15 text-sky-200 border-sky-400/30 active:bg-sky-500/20",
    violet:"bg-violet-500/15 text-violet-200 border-violet-400/30 active:bg-violet-500/20",
    fuchsia:"bg-fuchsia-500/15 text-fuchsia-200 border-fuchsia-400/30 active:bg-fuchsia-500/20",
    rose:"bg-rose-500/15 text-rose-200 border-rose-400/30 active:bg-rose-500/20",
    amber:"bg-amber-500/15 text-amber-200 border-amber-400/30 active:bg-amber-500/20",
    indigo:"bg-indigo-500/15 text-indigo-200 border-indigo-400/30 active:bg-indigo-500/20",
    slate:"bg-slate-500/15 text-slate-200 border-slate-400/30 active:bg-slate-500/20",
  }[color];
  return (
    <button type="button" onClick={onClick}
      className={clsx("chip", tone, active && "ring-1 ring-white/30")} aria-pressed={active}>
      {children}
    </button>
  );
}

export default function BookCall({ className="" }){
  const [name,setName]=useState("");                         // optional; no placeholder
  const [budget,setBudget]=useState(BUDGETS[1].label);       // default mid-tier
  const [timeline,setTimeline]=useState(TIMELINES[1].label); // default "This month"

  const openCalendlyPopup = useCallback((e)=>{
    e.preventDefault();
    if (typeof window === "undefined") return;
    const ensure = async () => {
      if (!window.Calendly) {
        await new Promise((resolve) => {
          const s=document.createElement("script");
          s.src="https://assets.calendly.com/assets/external/widget.js";
          s.onload=resolve; document.head.appendChild(s);
        });
      }
      const url = new URL(CALENDLY_URL);
      url.searchParams.set("utm_campaign","website");
      url.searchParams.set("utm_content", budget);
      url.searchParams.set("utm_term", timeline);

      window.Calendly.initPopupWidget({
        url: url.toString(),
        prefill: { name: name || undefined, customAnswers:{ a1: budget, a2: timeline } },
      });
    };
    ensure();
  }, [name,budget,timeline]);

  return (
    <form onSubmit={openCalendlyPopup} className={clsx("card p-6 md:p-7 space-y-5 animate-in grid-bg", className)} id="book">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <label className="lbl">Your name (optional)</label>
          <input className="in" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="md:col-span-1 space-y-2">
          <label className="lbl">Budget</label>
          <div role="radiogroup" className="flex flex-wrap gap-2">
            {BUDGETS.map(b=>(
              <Chip key={b.label} color={b.color} active={budget===b.label} onClick={()=>setBudget(b.label)}>
                {b.label}
              </Chip>
            ))}
          </div>
        </div>
        <div className="md:col-span-1 space-y-2">
          <label className="lbl">Timeline</label>
          <div role="radiogroup" className="flex flex-wrap gap-2">
            {TIMELINES.map(t=>(
              <Chip key={t.label} color={t.color} active={timeline===t.label} onClick={()=>setTimeline(t.label)}>
                {t.label}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-1">
        <button type="submit" className="btn btn-primary">Book a call</button>
        <span className="hint">High-impact, production-grade builds only.</span>
      </div>
    </form>
  );
}

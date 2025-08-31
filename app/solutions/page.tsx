"use client";
import Link from "next/link";
import { PageFade, Reveal } from "@/components/Animate";
import CalendlyModal from "@/components/CalendlyModal";

export default function SolutionsPage() {
  const blocks = [
    ["Face Match (1:1)","Fast, accurate selfie↔ID match"],
    ["Liveness","Stops spoofing, replays, deepfakes"],
    ["OCR + ID Parsing","Reliable fields from global IDs"],
    ["Watchlist / AML","PEP + sanctions screening"],
    ["Risk Signals","Device + behavioral signals"],
    ["Audit & Reporting","Logs for QA & compliance"],
  ];
  return (
    <PageFade>
      <div className="space-y-10">
        <Reveal><h1 className="text-3xl font-extrabold">Solutions</h1></Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blocks.map(([t,d])=>(
            <Reveal key={t}><div className="card p-5"><div className="font-semibold">{t}</div><div className="opacity-80 text-sm mt-1">{d}</div></div></Reveal>
          ))}
        </div>
        <div className="card p-5 flex items-center justify-between gap-4 flex-wrap">
          <div className="text-sm opacity-80">Plug into your flow (SDKs, APIs, web).</div>
          <div className="flex gap-2">
            <CalendlyModal cta="Book" />
            <Link className="btn btn-outline" href="/technology">Tech</Link>
          </div>
        </div>
      </div>
    </PageFade>
  );
}

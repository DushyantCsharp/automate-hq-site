"use client";
import Link from "next/link";
import { PageFade, Reveal } from "@/components/Animate";
import CalendlyModal from "@/components/CalendlyModal";

export default function TechnologyPage() {
  const items = [
    ["Face Similarity","Robust thresholds and consistency checks"],
    ["Real-Time Anti-Spoofing","Multi-signal liveness"],
    ["Document Intelligence","Checksums, MRZ, structure"],
    ["Reliability at Scale","Low latency, horizontal scale"],
    ["Security & Privacy","Encryption, RBAC, minimization"],
    ["Observability","Metrics, tracing, QA"],
  ];
  return (
    <PageFade>
      <div className="space-y-10">
        <Reveal><h1 className="text-3xl font-extrabold">Technology</h1></Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(([t,d])=>(
            <Reveal key={t}><div className="card p-5"><div className="font-semibold">{t}</div><div className="opacity-80 text-sm mt-1">{d}</div></div></Reveal>
          ))}
        </div>
        <div className="card p-5 flex items-center justify-between gap-4 flex-wrap">
          <div className="text-sm opacity-80">See it with your stack.</div>
          <div className="flex gap-2">
            <CalendlyModal cta="Book" />
            <Link className="btn btn-outline" href="/resources">Resources</Link>
          </div>
        </div>
      </div>
    </PageFade>
  );
}

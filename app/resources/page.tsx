"use client";
import Link from "next/link";
import { PageFade, Reveal } from "@/components/Animate";

export default function ResourcesPage() {
  const topics = [
    ["eKYC for FinTech","Onboarding trust + fraud prevention"],
    ["Stop Deepfake Fraud","Practical liveness & anti-spoofing"],
    ["POPIA / GDPR Basics","What compliance needs for IDV"],
    ["Scale & Reliability","Designing for millions of checks"],
  ];
  return (
    <PageFade>
      <div className="space-y-10">
        <Reveal><h1 className="text-3xl font-extrabold">Resources</h1></Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {topics.map(([t,d])=>(
            <Reveal key={t}><div className="card p-5"><div className="font-semibold">{t}</div><div className="opacity-80 text-sm mt-1">{d}</div></div></Reveal>
          ))}
        </div>
        <div className="text-sm opacity-70">Need something specific? <Link className="underline" href="/contact">Tell us</Link>.</div>
      </div>
    </PageFade>
  );
}

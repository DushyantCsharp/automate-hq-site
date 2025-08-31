"use client";
import { PageFade, Reveal } from "@/components/Animate";

export default function AboutPage() {
  const principles = [
    ["Security First","Protect people and platforms."],
    ["Accuracy","Right decision, fast."],
    ["Speed","Milliseconds matter."],
    ["Compliance","POPIA, GDPR, FICA, AML."],
    ["Craft","Polished engineering."],
    ["Partnership","We grow with you."],
  ];
  return (
    <PageFade>
      <div className="space-y-8">
        <Reveal><h1 className="text-3xl font-extrabold">About</h1></Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map(([t,d])=>(
            <Reveal key={t}><div className="card p-5"><div className="font-semibold">{t}</div><div className="opacity-80 text-sm mt-1">{d}</div></div></Reveal>
          ))}
        </div>
      </div>
    </PageFade>
  );
}

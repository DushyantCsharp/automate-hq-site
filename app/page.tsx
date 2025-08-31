"use client";
import Link from "next/link";
import { Reveal, PageFade } from "@/components/Animate";
import CalendlyModal from "@/components/CalendlyModal";

export default function HomePage() {
  return (
    <PageFade>
      <div className="space-y-14">
        <section className="hero-bg">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h1 className="font-extrabold leading-[1.05] tracking-tight text-5xl">
                Frictionless Identity. Enterprise Security. Global Trust.
              </h1>
              <div className="flex flex-wrap gap-2">
                <CalendlyModal cta="Book" />
                <Link href="/contact" className="btn btn-primary">Start</Link>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-1">
                {[["<150ms","latency"],["99.9%","uptime"],["POPIA/GDPR","compliance"]].map(([big,small])=>(
                  <div key={small} className="outline-card p-3 rounded-xl text-center">
                    <div className="font-extrabold">{big}</div>
                    <div className="opacity-70 text-xs">{small}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <div className="aspect-[16/10] grid place-items-center text-center text-sm opacity-90">
                Ship trust without friction. Reduce drop-offs. Pass audits.
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <Reveal><h2 className="text-2xl font-extrabold">Why Automate-HQ</h2></Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["Instant Verification","One selfie + ID, seconds."],
              ["Unbreakable Security","Liveness + anti-spoofing."],
              ["Compliance by Design","POPIA, GDPR, FICA, AML."],
              ["Built to Scale","Millions of checks, low latency."]
            ].map(([t,d])=>(
              <Reveal key={t}>
                <div className="card p-5">
                  <div className="font-semibold">{t}</div>
                  <div className="opacity-80 text-sm mt-1">{d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </PageFade>
  );
}

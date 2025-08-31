"use client";

import { PageFade, Reveal } from "@/components/Animate";
import CalendlyModal from "@/components/CalendlyModal";

export default function IndustriesPage() {
  const sectors: Array<[string, string[]]> = [
    ["FinTech & Banking", ["KYC onboarding", "Fraud prevention", "POPIA/GDPR/FICA"]],
    ["Telecommunications", ["SIM registration", "Account recovery", "Fraud checks"]],
    ["Insurance", ["Claims verification", "Policy onboarding", "Liveness"]],
    ["Lending & BNPL", ["Instant approvals", "ID validation", "Risk signals"]],
    ["Marketplaces", ["Seller onboarding", "Buyer trust", "Document checks"]],
    ["Public Sector", ["Citizen ID flows", "Document parsing", "Audit trails"]],
  ];

  return (
    <PageFade>
      <div className="space-y-8">
        <Reveal><h1 className="text-3xl font-extrabold">Industries</h1></Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map(([title, bullets]) => (
            <Reveal key={title}>
              <div className="card p-5">
                <div className="font-semibold">{title}</div>
                <ul className="mt-2 space-y-1 text-sm opacity-80">
                  {bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="card p-5 flex items-center justify-between gap-4 flex-wrap">
          <div className="text-sm opacity-80">Need a tailored flow for your sector?</div>
          <CalendlyModal cta="Book" />
        </div>
      </div>
    </PageFade>
  );
}

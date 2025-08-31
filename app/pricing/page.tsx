"use client";

import { PageFade, Reveal } from "@/components/Animate";
import CalendlyModal from "@/components/CalendlyModal";

export default function PricingPage() {
  type TierProps = {
    name: string;
    sub: string;
    monthly: string;
    per?: string;
    features: string[];
    highlight?: boolean;
    cta?: React.ReactNode;
  };

  const Tier = ({ name, sub, monthly, per, features, highlight = false, cta }: TierProps) => (
    <div className={`card p-6 flex flex-col justify-between ${highlight ? "ring-2 ring-blue-500/30" : ""}`}>
      <div>
        <div className="flex items-baseline justify-between">
          <div>
            <div className="font-bold text-xl">{name}</div>
            <div className="opacity-80">{sub}</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-extrabold tracking-tight">{monthly}</div>
            {per && <div className="text-sm opacity-70">{per}</div>}
          </div>
        </div>

        <ul className="mt-4 space-y-2 opacity-90 text-sm">
          {features.map((f) => (
            <li key={f}>• {f}</li>
          ))}
        </ul>
      </div>

      {cta && <div className="mt-6">{cta}</div>}
    </div>
  );

  return (
    <PageFade>
      <div className="space-y-10">
        <Reveal>
          <header className="space-y-1">
            <h1 className="text-3xl font-extrabold">Pricing</h1>
            <p className="text-sm opacity-70">
              Aggressive, transparent pricing
            </p>
          </header>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          <Reveal>
            <Tier
              name="Essential"
              sub="For pilots and lean teams"
              monthly="R2 900 / month"
              per="R7 per check"
              features={[
                "Core eKYC",
                "Face Match (1:1)",
                "Basic Liveness",
                "Email Support",
                "Volume discounts after 2,500 checks",
              ]}
              cta={<CalendlyModal cta="Book a Meeting" />}
            />
          </Reveal>

          <Reveal>
            <Tier
              name="Growth"
              sub="For scaling regulated teams"
              monthly="R5 000 / month"
              per="R4 per check"
              features={[
                "Advanced Liveness",
                "OCR & Doc Auth",
                "Priority Support",
                "Basic AML/PEP",
                "Volume discounts after 10,000 checks",
              ]}
              highlight
              cta={<CalendlyModal cta="Book a Meeting" />}
            />
          </Reveal>

          <Reveal>
            <Tier
              name="Enterprise"
              sub="Custom, high-volume & hybrid deployments"
              monthly="Book a Meeting"
              features={[
                "Full AML/PEP",
                "SSO & SLA",
                "Custom Risk Signals",
                "Dedicated Success",
                "Hybrid / On-prem options",
              ]}
              cta={<CalendlyModal cta="Book a Meeting" />}
            />
          </Reveal>
        </div>

        <Reveal>
          <div className="text-sm opacity-70">
            ZAR billing. Annual terms and enterprise rates available. You’ll always pay less than the market average.
          </div>
        </Reveal>
      </div>
    </PageFade>
  );
}

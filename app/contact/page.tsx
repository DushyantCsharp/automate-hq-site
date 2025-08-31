"use client";
import { PageFade } from "@/components/Animate";
import CalendlyModal from "@/components/CalendlyModal";

export default function ContactPage() {
  return (
    <PageFade>
      <div className="space-y-6">
        <h1 className="text-3xl font-extrabold">Book a meeting</h1>
        <div className="card p-6 flex items-center justify-between gap-4 flex-wrap">
          <div className="text-sm opacity-80">Choose a time that suits you.</div>
          <CalendlyModal cta="Open Calendly" />
        </div>
      </div>
    </PageFade>
  );
}

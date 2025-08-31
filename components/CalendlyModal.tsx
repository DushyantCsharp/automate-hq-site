"use client";
import { useState, useRef, useEffect } from "react";

export default function CalendlyModal({ cta = "Book" }: { cta?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function stopPropagation(e: React.MouseEvent) { e.stopPropagation(); }

  return (
    <>
      <button onClick={() => setOpen(true)} className="btn btn-outline">{cta}</button>
      {open && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/40 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal
        >
          <div ref={ref} onClick={stopPropagation} className="w-full max-w-3xl overflow-hidden rounded-2xl surface">
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: "1px solid color-mix(in oklab, rgb(var(--fg)) 10%, transparent)" }}
            >
              <div className="font-semibold">Book a meeting</div>
              <button onClick={() => setOpen(false)} className="rounded-lg px-3 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10">
                Close
              </button>
            </div>
            <iframe
              title="Calendly"
              src="https://calendly.com/dushyannana/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              className="w-full h-[70vh]"
            />
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useEffect } from "react";

export default function CalendlyButton({
  url = "https://calendly.com/dushyannana/30min",
  className = "",
  children = "Book a Call",
}) {
  useEffect(() => {
    // inject Calendly widget assets once
    if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
      const l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(l);
    }
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  const openPopup = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.Calendly && window.Calendly.initPopupWidget) {
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <button
      type="button"
      onClick={openPopup}
      className={className || "rounded-xl bg-brand-600 hover:bg-brand-500 transition px-5 py-3 font-medium"}
    >
      {children}
    </button>
  );
}

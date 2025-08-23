// middleware.js
import { NextResponse } from "next/server";

export function middleware() {
  const res = NextResponse.next();

  // ── Security headers ──────────────────────────────────────────────
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  // Content-Security-Policy: allow self + Calendly assets (popup widget)
  // If you add other embeds later, update these lists accordingly.
  res.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://assets.calendly.com",
      "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
      "img-src 'self' data: https://assets.calendly.com",
      "font-src 'self' data:",
      "connect-src 'self'",
      // Calendly popup injects an <iframe>
      "frame-src https://calendly.com https://assets.calendly.com",
      // block clickjacking of your site
      "frame-ancestors 'none'",
      // optional: upgrade insecure requests
      // "upgrade-insecure-requests"
    ].join("; ")
  );

  return res;
}

// Apply to all routes
export const config = {
  matcher: "/:path*",
};

// app/robots.js
export default function robots() {
  const base = "https://automatehq.dev"; // ← CHANGE to your live domain
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
  };
}

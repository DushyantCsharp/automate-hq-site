// app/sitemap.js
export default function sitemap() {
  const base = "https://automatehq.dev"; // ← CHANGE to your live domain
  const now = new Date();
  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}

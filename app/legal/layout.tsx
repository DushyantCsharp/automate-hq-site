export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-8">
      <article className="card p-6 prose max-w-[82ch]">{children}</article>
      <div className="text-xs opacity-70 pt-3" style={{ borderTop: "1px solid color-mix(in oklab, rgb(var(--fg)) 8%, transparent)" }}>
        Updated routinely for compliance and clarity.
      </div>
    </div>
  );
}

// components/Work.js
export default function Work() {
  const items = [
    {
      title: "Credit Disputes Portal",
      problem: "Manual workflows slowed resolution and hurt CX.",
      outcome: "Automated intake + status tracking → 58% faster case resolution.",
    },
    {
      title: "AI Collections Agent",
      problem: "Low connect rates and inconsistent follow-ups.",
      outcome: "Multi-channel outreach with guardrails → +32% promise-to-pay.",
    },
    {
      title: "Face Verification Pipeline",
      problem: "High false positives and human review bottlenecks.",
      outcome: "GPU-accelerated matching + quality gates → 97%+ precision, 10x throughput.",
    },
  ];

  return (
    <section id="work" className="container-pad mt-12 md:mt-16">
      <div className="flex items-end justify-between">
        <h2 className="h2">Selected work</h2>
        <a href="#contact" className="text-sm text-white/70 hover:text-white">Get a similar outcome →</a>
      </div>
      <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-6">
        {items.map((x) => (
          <div key={x.title} className="card p-5 md:p-6 lift">
            <div className="badge mb-3">{x.title}</div>
            <p className="text-white/75"><strong>Problem:</strong> {x.problem}</p>
            <p className="text-white/80 mt-2"><strong>Outcome:</strong> {x.outcome}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

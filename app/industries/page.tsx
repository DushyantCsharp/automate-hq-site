export default function IndustriesPage() {
  return (
    <section className="container-padded py-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Industries</h1>
        <p className="mt-2 text-slate-600">
          Tuned for high-stakes onboarding where accuracy, speed, and compliance matter.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[
          { t: "Fintech & Banking", s: "Scale onboarding with FICA/AML alignment and fraud controls." },
          { t: "Telecoms", s: "Prevent SIM-swap and identity abuse at activation." },
          { t: "Insurance", s: "Verify policyholders, reduce claims fraud, streamline KYC." },
          { t: "Gaming & Crypto", s: "Stay compliant across jurisdictions with robust KYC." },
          { t: "Gig & Marketplaces", s: "Trust both sides—drivers, sellers, service providers, and users." },
          { t: "Public Sector", s: "Secure citizen access with liveness and audit-ready identity proofing." }
        ].map((x) => (
          <div key={x.t} className="card">
            <h3 className="font-semibold">{x.t}</h3>
            <p className="mt-2 text-sm text-slate-700">{x.s}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold">Have a niche use-case?</h3>
          <p className="text-slate-600">We’ll map your risk policy into configurable checks and thresholds.</p>
        </div>
        <a
          href="https://calendly.com/dushyannana/30min"
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-lg bg-brand-500 px-5 py-3 text-white hover:bg-brand-600 transition"
        >
          Book a discovery call
        </a>
      </div>
    </section>
  );
}

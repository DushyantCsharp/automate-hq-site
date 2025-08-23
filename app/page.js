// app/page.js
import HeaderClient from "./HeaderClient";
import CalendlyButton from "./CalendlyButton";

// --- Inline Footer (server component) ---
function Footer() {
  return (
    <footer className="mt-16 md:mt-20 border-t border-white/5">
      <div className="container-pad py-8 md:py-10 text-sm text-white/60">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Automate HQ. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#systems" className="hover:text-white">Systems</a>
            <a href="#process" className="hover:text-white">Process</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const headline = "I build world-class custom software to power your business.";
const subline =
  "Full-Stack Developer | Python, JavaScript (React), C#, C++ | Builder of Scalable, High-Performance Systems | CS50x (Harvard University). I deliver high-performance, scalable systems from backend architecture to sleek frontends — clean code, problem-solving, and real business results.";

export default function Page() {
  return (
    <>
      {/* Mobile-ready header */}
      <HeaderClient />

      {/* Hero */}
      <section className="container-pad pt-12 md:pt-20">
        <div className="card p-5 md:p-10 relative overflow-hidden">
          <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-brand-600/20 blur-3xl" />
          <span className="badge mb-3 md:mb-4">Automate HQ</span>
          <h1 className="h1">{headline}</h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-white/80 max-w-3xl">{subline}</p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <CalendlyButton className="w-full sm:w-auto rounded-xl bg-brand-600 hover:bg-brand-500 transition px-5 py-3 font-medium text-center">
              Book a Call
            </CalendlyButton>
            <a
              href="#services"
              className="w-full sm:w-auto rounded-xl border border-white/10 hover:border-white/20 px-5 py-3 font-medium text-center"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container-pad mt-12 md:mt-16">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <div className="card p-5 md:p-6">
            <h3 className="h2">AI & Automation</h3>
            <p className="mt-3 text-white/70">
              Intelligent chatbots, helpdesk routing, NLP classification, face authentication,
              workflow automation, and data pipelines that save time and money.
            </p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• Chatbots & ticket triage</li>
              <li>• Face verification & identity flows</li>
              <li>• ETL/data automation</li>
            </ul>
          </div>
          <div className="card p-5 md:p-6">
            <h3 className="h2">Web & Mobile Apps</h3>
            <p className="mt-3 text-white/70">
              Modern, performant apps built with React, Next.js, Ionic, and Flutter, backed by
              secure APIs and databases.
            </p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• Next.js / React frontends</li>
              <li>• Ionic/Flutter mobile apps</li>
              <li>• Secure APIs & auth</li>
            </ul>
          </div>
          <div className="card p-5 md:p-6">
            <h3 className="h2">Enterprise & FinTech</h3>
            <p className="mt-3 text-white/70">
              High-reliability systems: dashboards, integrations, and trading/analytics tools with
              risk controls and backtesting.
            </p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>• SQL Server & integrations</li>
              <li>• Dashboards & reporting</li>
              <li>• Trading bots & backtesting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Systems */}
      <section id="systems" className="container-pad mt-12 md:mt-16">
        <div className="card p-5 md:p-10">
          <h2 className="h2">Systems I Can Build (and have built similar)</h2>
          <p className="mt-3 text-white/70 max-w-3xl">
            I respect confidentiality. I don’t list client projects publicly, but here are categories of systems
            I’ve delivered — or can deliver — end-to-end:
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-white/80">
              <li>• KYC/Identity verification pipelines (face match, liveness, audit logs)</li>
              <li>• Collections & CRM automations (AI call/email workflows, ticketing)</li>
              <li>• Internal analytics dashboards (real-time metrics, role-based access)</li>
              <li>• Custom CMS/portal apps (multi-tenant, secure auth, file workflows)</li>
              <li>• Trading bots with risk controls (backtests, live automation)</li>
            </ul>
            <ul className="space-y-2 text-white/80">
              <li>• Data ingestion & ETL services (SQL Server, APIs, batch/stream)</li>
              <li>• Mobile apps (Ionic/React, Flutter) with modern UI/UX</li>
              <li>• Customer chatbots & routing (NLP, knowledge bases)</li>
              <li>• Document processing (OCR, validation, audit readiness)</li>
              <li>• Secure APIs & integrations (payment, email, identity, 3rd-party)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="container-pad mt-12 md:mt-16 mb-8 md:mb-10">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {[
            ["1. Discover", "We align on goals, constraints, timeline, and budget. You’ll get a clear, practical plan."],
            ["2. Design", "Architecture, data model, and UX flows. I optimize for performance, security, and maintainability."],
            ["3. Build & Ship", "Iterative delivery with demos. Clean, well-tested code, smooth handover, and optional support retainer."]
          ].map(([title, desc]) => (
            <div key={title} className="card p-5 md:p-6">
              <div className="badge mb-3">{title}</div>
              <p className="text-white/80">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

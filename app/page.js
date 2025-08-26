// app/page.js
import Header from "@/components/header";
import Footer from "@/components/Footer";
import BookCall from "@/components/BookCall";

/* === COPY: Full-stack, serious, professional === */
const headline = "Full-stack product engineering for complex, high-stakes software.";
const subline =
  "We design, build, and operate end-to-end systems — from polished React/Next.js interfaces and mobile apps to domain-driven back-ends, cloud, data, and AI. We prioritise reliability, security, and maintainability so your product scales without drama.";

const pillars = [
  { title: "Architecture & Scale",
    desc: "Domain-driven design, modular monoliths or microservices, event-driven patterns, caching, queues, and horizontal scaling when it matters." },
  { title: "Reliability & Observability",
    desc: "SLOs, tracing, metrics, and logs via OpenTelemetry; zero-downtime releases; guardrails and rollbacks with feature flags." },
  { title: "Security & Compliance",
    desc: "OWASP practices, least-privilege IAM, secrets management, encryption in transit/at rest, POPIA/SOC 2 readiness, audit trails." },
];

const capabilities = [
  {
    title: "Front-end Engineering",
    points: [
      "Next.js/React, TypeScript, SSR/ISR, accessibility (WCAG), Web Vitals",
      "Design systems, theming, motion, performance budgets",
      "Mobile: React Native / Ionic, offline-first, deep links",
    ],
  },
  {
    title: "Back-end & APIs",
    points: [
      "Node.js/Nest/Express or Go; REST/GraphQL gRPC; event-driven",
      "Postgres/SQL Server, Redis, job queues; schema versioning & migrations",
      "AuthN/Z, rate limiting, idempotency, multi-tenancy",
    ],
  },
  {
    title: "Cloud & DevOps",
    points: [
      "AWS/Azure/GCP; Docker/Kubernetes; IaC with Terraform",
      "GitHub Actions CI/CD, trunk-based dev, preview envs",
      "Cost controls, autoscaling, blue-green/canary deploys",
    ],
  },
  {
    title: "Data & Integrations",
    points: [
      "ETL/ELT pipelines, warehousing, CDC, reporting APIs",
      "Jira/Confluence/WhatsApp/Email/Payments integrations",
      "Event buses (Kafka/RabbitMQ/SQS), retries & DLQs",
    ],
  },
  {
    title: "AI & Automation",
    points: [
      "Task-specific agents with guardrails and evaluations",
      "Retrieval pipelines, prompt/test harnesses, monitoring",
      "UiPath workflows, human-in-the-loop, auditability",
    ],
  },
  {
    title: "Quality & Hardening",
    points: [
      "Jest/Playwright/Cypress, contract tests, load tests (k6)",
      "Static analysis, linting, commit hooks, code owners",
      "Runbooks, on-call readiness, DR/RPO/RTO planning",
    ],
  },
];

const process = [
  { t: "1. Discovery & Scope", d: "Align on outcomes, constraints, risks, and success metrics. Produce a concrete plan and budget." },
  { t: "2. Solution Architecture", d: "Choose patterns and platforms deliberately. Threat model, data model, and target SLOs defined." },
  { t: "3. Design & Prototype", d: "Lock critical UX paths; build thin vertical slices to de-risk integration and performance." },
  { t: "4. Build & Iterate", d: "Short cycles, code reviews, CI/CD, telemetry. Weekly demos with measurable progress." },
  { t: "5. Hardening & Compliance", d: "Performance tuning, security fixes, test coverage, load and chaos checks, release checklists." },
  { t: "6. Launch & Operate", d: "Zero-downtime cutover, observability dashboards, runbooks, training, and clean handover." },
];

const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "Go", "Python",
  "Postgres", "SQL Server", "Redis", "Kafka", "SQS", "gRPC",
  "Docker", "Kubernetes", "Terraform", "AWS", "Azure", "GCP",
  "OpenTelemetry", "Prometheus", "Grafana", "Jest", "Playwright", "k6"
];

export default function Page(){
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="container-pad pt-12 md:pt-16">
        <div className="card p-8 md:p-12 hero">
          <div className="glow glow-a" />
          <div className="glow glow-b" />
          <span className="badge mb-4">Automate-HQ</span>
          <h1 className="h1">{headline}</h1>
          <p className="lead mt-4 max-w-3xl">{subline}</p>

          {/* Pillars */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8">
            {pillars.map((v)=>(
              <div key={v.title} className="card-contrast p-5 md:p-6 lift">
                <div className="h3 mb-1">{v.title}</div>
                <p className="text-white/75">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Calendly popup */}
          <div className="mt-8">
            <BookCall />
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="container-pad mt-14 md:mt-16">
        <h2 className="h2">Full-stack capabilities</h2>
        <p className="text-white/75 mt-2 max-w-2xl">
          End-to-end delivery — architecture, implementation, and operations — with clear ownership and measurable outcomes.
        </p>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-6">
          {capabilities.map((c)=>(
            <div key={c.title} className="card p-5 md:p-6 lift">
              <div className="badge mb-3">{c.title}</div>
              <ul className="list-disc list-inside text-white/85 space-y-2">
                {c.points.map((p)=> <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section className="container-pad mt-14 md:mt-16">
        <div className="card p-6 md:p-8 grid-bg">
          <h3 className="h3">Preferred stack</h3>
          <p className="text-white/70 mt-2">Modern, proven technologies – selected for fit and longevity.</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {stack.map((s)=>(<span key={s} className="chip border-white/10 bg-white/5 text-white/85">{s}</span>))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="container-pad mt-14 md:mt-16">
        <h2 className="h2">Delivery process</h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-6">
          {process.map((s)=>(
            <div key={s.t} className="card p-5 md:p-6">
              <div className="badge mb-3">{s.t}</div>
              <p className="text-white/80">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-pad mt-14 md:mt-16">
        <div className="card p-8 md:p-12 text-center lift grid-bg">
          <h3 className="h3">Book a working session</h3>
          <p className="text-white/70 mt-2">Bring your constraints and success metrics. Leave with a concrete plan and timeline.</p>
          <div className="mt-5 flex justify-center">
            <BookCall />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container-pad mt-14 md:mt-20 mb-16 md:mb-24">
        <h2 className="h2">FAQ</h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-6">
          <div className="card p-5">
            <div className="h3 mb-2">How do you keep quality high under speed?</div>
            <p className="text-white/80">
              Trunk-based development, CI/CD, code owners, static analysis, and automated tests (unit, integration, e2e).
              Each merge ships behind feature flags with health checks and rollbacks.
            </p>
          </div>
          <div className="card p-5">
            <div className="h3 mb-2">What about security and compliance?</div>
            <p className="text-white/80">
              Threat modelling per feature, least-privilege IAM, secret rotation, encryption in transit/at rest,
              audit logs, and dependency scanning. POPIA/SOC 2-friendly practices and documentation.
            </p>
          </div>
          <div className="card p-5">
            <div className="h3 mb-2">Do you hand over maintainable systems?</div>
            <p className="text-white/80">
              Yes. Clean repos, architecture docs, runbooks, dashboards, and onboarding guides so your team can own it.
            </p>
          </div>
          <div className="card p-5">
            <div className="h3 mb-2">When do we see progress?</div>
            <p className="text-white/80">
              First demo typically within 1–2 weeks. Weekly demos thereafter with measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

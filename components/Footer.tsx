import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section" style={{ borderTop: "1px solid color-mix(in oklab, rgb(var(--fg)) 8%, transparent)" }}>
      <div className="container grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-extrabold text-lg">Automate-HQ</div>
          <p className="opacity-80 mt-2 prose">
            eKYC & Face Authentication for modern enterprises.
          </p>
        </div>

        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-3 space-y-2 opacity-90">
            <li><Link className="link" href="/about">About</Link></li>
            <li><Link className="link" href="/resources">Resources</Link></li>
            <li><Link className="link" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Product</div>
          <ul className="mt-3 space-y-2 opacity-90">
            <li><Link className="link" href="/solutions">Solutions</Link></li>
            <li><Link className="link" href="/technology">Technology</Link></li>
            <li><Link className="link" href="/pricing">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Legal</div>
          <ul className="mt-3 space-y-2 opacity-90">
            <li><Link className="link" href="/legal/terms">Terms</Link></li>
            <li><Link className="link" href="/legal/privacy">Privacy</Link></li>
            <li><Link className="link" href="/legal/cookies">Cookies</Link></li>
          </ul>
        </div>
      </div>

      <div
        className="container mt-10 flex items-center justify-between pt-6"
        style={{ borderTop: "1px solid color-mix(in oklab, rgb(var(--fg)) 8%, transparent)" }}
      >
        <span className="text-xs" style={{ color: "rgb(var(--muted))" }}>
          © {new Date().getFullYear()} Automate-HQ
        </span>
        <span className="text-xs" style={{ color: "rgb(var(--muted))" }}>
          Frictionless Identity. Enterprise Security. Global Trust.
        </span>
      </div>
    </footer>
  );
}

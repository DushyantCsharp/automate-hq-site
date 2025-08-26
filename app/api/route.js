// app/api/contact/route.js
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function j(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

async function sendMail({ name, email, budget, timeline, project }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const subject = `🚀 New inquiry from ${name}`;
  const text = `
New project inquiry

Name: ${name}
Email: ${email}
Budget: ${budget || "-"}
Timeline: ${timeline || "-"}

Project:
${project}
  `.trim();

  await transporter.sendMail({
    from: `"Automate-HQ Website" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    replyTo: email,
    subject,
    text,
  });
}

export async function POST(req) {
  try {
    const ct = req.headers.get("content-type") || "";
    if (!ct.includes("application/json")) return j({ ok: false, error: "Use application/json" }, 415);
    const { name, email, budget, timeline, project, hp } = await req.json();
    if (hp) return j({ ok: true }); // honeypot
    if (!name || !email || !project) return j({ ok: false, error: "Missing required fields." }, 400);
    await sendMail({ name, email, budget, timeline, project });
    return j({ ok: true });
  } catch (e) {
    console.error("Contact API (app router) error:", e);
    return j({ ok: false, error: "Email failed. Try again later." }, 500);
  }
}

export async function GET() {
  return j({ ok: true, route: "/api/contact (app)" });
}

// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ ok: true, route: "/api/contact (pages)" });
    return;
  }
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, GET");
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }
  try {
    const { name, email, budget, timeline, project, hp } = req.body || {};
    if (hp) return res.status(200).json({ ok: true }); // honeypot
    if (!name || !email || !project) return res.status(400).json({ ok: false, error: "Missing required fields." });

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

    res.status(200).json({ ok: true });
  } catch (e) {
    console.error("Contact API (pages) error:", e);
    res.status(500).json({ ok: false, error: "Email failed. Try again later." });
  }
}

// Ensure this route runs on the Node.js runtime (required for Nodemailer)
export const runtime = "nodejs";

import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let payload = {};

    if (contentType.includes("application/json")) {
      payload = await request.json();
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await request.formData();
      payload = Object.fromEntries(formData.entries());
    } else if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      payload = Object.fromEntries(formData.entries());
    } else {
      // Fallback try formData
      try {
        const formData = await request.formData();
        payload = Object.fromEntries(formData.entries());
      } catch (_) {}
    }

    // Minimal validation
    const name = (payload.name || payload.fullName || "").toString().trim();
    const email = (payload.email || payload.workEmail || "").toString().trim();
    const company = (payload.company || "").toString().trim();
    const employees = (payload.employees || "").toString().trim();
    const message = (payload.message || "").toString().trim();
    const plan = (payload.plan || payload.selectedPlan || "").toString().trim();

    if (!email) {
      return Response.json({ ok: false, message: "Email is required" }, { status: 400 });
    }

    // Configure transporter from env
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO_EMAIL,
      CONTACT_FROM_EMAIL,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error("Missing SMTP configuration env vars");
      return Response.json({ ok: false, message: "Server email not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const to = CONTACT_TO_EMAIL || SMTP_USER;
    const from = CONTACT_FROM_EMAIL || `Teametix <${SMTP_USER}>`;

    const subject = plan
      ? `New demo request (${plan}) — ${name || email}`
      : `New contact submission — ${name || email}`;

    const text = `New submission from Teametix website\n\n` +
      `Name: ${name || "-"}\n` +
      `Email: ${email}\n` +
      `Company: ${company || "-"}\n` +
      `Employees: ${employees || "-"}\n` +
      (plan ? `Plan: ${plan}\n` : "") +
      `Message:\n${message || "-"}\n`;

    const html = `
      <h2>New submission from Teametix website</h2>
      <p><strong>Name:</strong> ${name || "-"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "-"}</p>
      <p><strong>Employees:</strong> ${employees || "-"}</p>
      ${plan ? `<p><strong>Plan:</strong> ${plan}</p>` : ""}
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit">${message || "-"}</pre>
    `;

    await transporter.sendMail({ from, to, subject, text, html });

    return Response.json({ ok: true, message: "Sent" }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json({ ok: false, message: "Failed" }, { status: 500 });
  }
}

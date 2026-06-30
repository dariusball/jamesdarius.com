import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { ContactRequest, ContactResponse } from "@/types";
import { site } from "@/lib/site";

// Basic, dependency-free email sanity check.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body: ContactResponse, status: number) {
  return NextResponse.json(body, { status });
}

/**
 * POST /api/contact — handles "be in touch" submissions.
 *
 * Sends a notification email via Resend when configured. If Resend env vars are
 * absent (e.g. local dev), it logs the message and still returns success so the
 * form can be exercised end-to-end. Includes a honeypot field (`company`) to
 * quietly drop bots.
 */
export async function POST(request: Request) {
  let payload: Partial<ContactRequest>;

  try {
    payload = (await request.json()) as Partial<ContactRequest>;
  } catch {
    return json({ ok: false, message: "Invalid request body." }, 400);
  }

  // Honeypot: real users never fill this. Pretend success to bots.
  if ((payload.company ?? "").toString().trim() !== "") {
    return json({ ok: true, message: "Thanks — your message is on its way." }, 200);
  }

  const name = (payload.name ?? "").toString().trim();
  const email = (payload.email ?? "").toString().trim().toLowerCase();
  const message = (payload.message ?? "").toString().trim();
  const topic = (payload.topic ?? "").toString().trim();

  if (!name || !email || !message) {
    return json(
      { ok: false, message: "Name, email, and a message are required." },
      400,
    );
  }

  if (!EMAIL_RE.test(email) || email.length > 320) {
    return json({ ok: false, message: "Please enter a valid email." }, 400);
  }

  if (message.length > 5000) {
    return json({ ok: false, message: "That message is a bit too long." }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL ?? site.email;

  // Graceful local-dev fallback when email delivery isn't configured.
  if (!apiKey || !fromEmail) {
    console.info("[contact] new message (email delivery not configured):", {
      name,
      email,
      topic: topic || "—",
      message,
    });
    return json(
      { ok: true, message: "Thanks — your message is on its way." },
      200,
    );
  }

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: fromEmail,
      to: notifyEmail,
      reply_to: email,
      subject: `Website inquiry${topic ? ` — ${topic}` : ""} — ${name}`,
      text: [
        "New message from jamesdarius.com",
        "",
        `Name:  ${name}`,
        `Email: ${email}`,
        `Topic: ${topic || "—"}`,
        "",
        message,
      ].join("\n"),
    });

    return json(
      { ok: true, message: "Thanks — your message is on its way." },
      200,
    );
  } catch (error) {
    console.error("[contact] failed to send notification:", error);
    return json(
      {
        ok: false,
        message: "Something went wrong sending that. Please try again shortly.",
      },
      502,
    );
  }
}

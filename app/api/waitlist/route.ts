import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { WaitlistRequest, WaitlistResponse } from "@/types";

// Basic, dependency-free email sanity check.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body: WaitlistResponse, status: number) {
  return NextResponse.json(body, { status });
}

export async function POST(request: Request) {
  let payload: Partial<WaitlistRequest>;

  try {
    payload = (await request.json()) as Partial<WaitlistRequest>;
  } catch {
    return json({ ok: false, message: "Invalid request body." }, 400);
  }

  const name = (payload.name ?? "").toString().trim();
  const email = (payload.email ?? "").toString().trim().toLowerCase();
  const tier = (payload.tier ?? "").toString().trim();

  if (!name || !email) {
    return json({ ok: false, message: "Name and email are required." }, 400);
  }

  if (!EMAIL_RE.test(email) || email.length > 320) {
    return json({ ok: false, message: "Please enter a valid email." }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.WAITLIST_FROM_EMAIL;
  const notifyEmail = process.env.WAITLIST_NOTIFY_EMAIL;

  // Graceful local-dev fallback: if Resend isn't configured we still
  // accept the signup so the form can be exercised end-to-end.
  if (!apiKey || !fromEmail || !notifyEmail) {
    console.info("[waitlist] new signup (email delivery not configured):", {
      name,
      email,
      tier: tier || "—",
    });
    return json(
      {
        ok: true,
        message: "You're on the list. We'll be in touch soon.",
      },
      200,
    );
  }

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: fromEmail,
      to: notifyEmail,
      reply_to: email,
      subject: `IZUMI waitlist — ${name}`,
      text: [
        "New IZUMI waitlist signup",
        "",
        `Name:  ${name}`,
        `Email: ${email}`,
        `Tier:  ${tier || "—"}`,
      ].join("\n"),
    });

    return json(
      {
        ok: true,
        message: "You're on the list. We'll be in touch soon.",
      },
      200,
    );
  } catch (error) {
    console.error("[waitlist] failed to send notification:", error);
    return json(
      {
        ok: false,
        message: "We couldn't add you just now. Please try again shortly.",
      },
      502,
    );
  }
}

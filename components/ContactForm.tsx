"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "error" | "success";

/** Friendly labels for the topic select, keyed to service ids + general. */
const TOPICS: { value: string; label: string }[] = [
  { value: "", label: "What's this about? (optional)" },
  { value: "speaking", label: "Public Speaking" },
  { value: "facilitation", label: "Facilitation & MC" },
  { value: "consulting", label: "Sustainability Consulting" },
  { value: "yoga", label: "Yoga & Meditation Support" },
  { value: "general", label: "Something else" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact form.
 *
 * Submitting composes a pre-filled email to `site.email`
 * (dariusball@gmail.com) and opens it in the visitor's mail app via a `mailto:`
 * link. This needs no backend or API keys, so it works the moment the site is
 * deployed. (An optional server route at /api/contact exists for a future
 * upgrade to direct, no-mail-client delivery via Resend.)
 */
export default function ContactForm({ initialTopic = "" }: { initialTopic?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [mailtoUrl, setMailtoUrl] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — real users never fill this.
    if (String(data.get("company") ?? "").trim() !== "") {
      setStatus("success");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const topicValue = String(data.get("topic") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Please add your name, email, and a message.");
      setStatus("error");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError("That email doesn't look right — mind double-checking?");
      setStatus("error");
      return;
    }

    const topicLabel = TOPICS.find((t) => t.value === topicValue)?.label;
    const subject = `Website inquiry${
      topicValue && topicValue !== "general" ? ` — ${topicLabel}` : ""
    } from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      topicValue ? `Topic: ${topicLabel}` : null,
      "",
      message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const url = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setMailtoUrl(url);
    setStatus("success");
    // Open the visitor's mail client with everything pre-filled.
    window.location.href = url;
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-sand-200 bg-sand-50 p-8 text-center">
        <p className="font-display text-xl text-sand-900">Thank you.</p>
        <p className="mt-2 text-sand-600">
          Your email app should have opened with your message ready to send to{" "}
          <span className="font-medium text-sand-800">{site.email}</span>. Just
          hit send and it&apos;ll come straight to me.
        </p>
        {mailtoUrl ? (
          <p className="mt-4 text-sm text-sand-500">
            Didn&apos;t open?{" "}
            <a
              href={mailtoUrl}
              className="font-semibold text-lapis-600 underline-offset-4 hover:text-ember-600 hover:underline"
            >
              Click here to email me
            </a>
            .
          </p>
        ) : null}
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-sand-300 bg-ivory px-4 py-3 text-sand-900 placeholder:text-sand-400 focus:border-ember-400 focus:outline-none focus:ring-2 focus:ring-ember-400/40";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — visually hidden, kept out of the tab order. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-sand-700">
            Name
          </label>
          <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-sand-700">
            Email
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@example.com" />
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-sand-700">
          Topic
        </label>
        <select id="topic" name="topic" defaultValue={initialTopic} className={inputClass}>
          {TOPICS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-sand-700">
          Message
        </label>
        <textarea id="message" name="message" required rows={6} className={inputClass} placeholder="Tell me a little about what you have in mind…" />
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm text-crimson">
          {error}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-ember-600 px-7 py-3 font-semibold text-ivory transition-colors hover:bg-ember-700"
        >
          Send message
        </button>
        <a
          href={`mailto:${site.email}`}
          className="text-sm font-medium text-sand-500 underline-offset-4 hover:text-ember-600 hover:underline"
        >
          or email {site.email} directly
        </a>
      </div>
    </form>
  );
}

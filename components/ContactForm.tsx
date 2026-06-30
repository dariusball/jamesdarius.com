"use client";

import { useState } from "react";
import type { ContactResponse } from "@/types";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

/** Friendly labels for the topic select, keyed to service ids + general. */
const TOPICS: { value: string; label: string }[] = [
  { value: "", label: "What's this about? (optional)" },
  { value: "speaking", label: "Public Speaking" },
  { value: "facilitation", label: "Facilitation & MC" },
  { value: "consulting", label: "Sustainability Consulting" },
  { value: "yoga", label: "Yoga & Meditation Support" },
  { value: "general", label: "Something else" },
];

/**
 * Contact form — posts to /api/contact. Includes a hidden honeypot field and
 * progressive states (idle → submitting → success/error). Falls back to a
 * mailto link if a visitor would rather email directly.
 */
export default function ContactForm({ initialTopic = "" }: { initialTopic?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const body = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      topic: String(data.get("topic") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = (await res.json()) as ContactResponse;
      setMessage(json.message);
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
      setMessage("Network error — please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-sand-200 bg-sand-50 p-8 text-center">
        <p className="font-display text-xl text-sand-900">Thank you.</p>
        <p className="mt-2 text-sand-600">{message}</p>
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
          {message}
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-ember-600 px-7 py-3 font-semibold text-ivory transition-colors hover:bg-ember-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <a
          href={`mailto:${site.email}`}
          className="text-sm font-medium text-sand-500 underline-offset-4 hover:text-ember-600 hover:underline"
        >
          or email directly
        </a>
      </div>
    </form>
  );
}

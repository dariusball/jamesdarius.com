"use client";

import { useState, type FormEvent } from "react";
import type { WaitlistResponse } from "@/types";

type Status = "idle" | "submitting" | "success" | "error";

interface WaitlistFormProps {
  /** Visual variant — "hero" sits on the light hero, "panel" on the sage panel. */
  variant?: "hero" | "panel";
  /** Optional preselected tier passed through to the API. */
  tier?: string;
}

export default function WaitlistForm({
  variant = "hero",
  tier,
}: WaitlistFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    if (!name || !email) {
      setStatus("error");
      setMessage("Please enter your name and email.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, tier }),
      });
      const body = (await res.json()) as WaitlistResponse;

      if (!res.ok || !body.ok) {
        throw new Error(body.message || "Something went wrong.");
      }

      setStatus("success");
      setMessage(body.message);
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  const onPanel = variant === "panel";
  const fieldBase =
    "w-full rounded-md border bg-transparent px-4 py-3 text-sm outline-none transition-colors placeholder:text-stone-400 focus:ring-1";
  const fieldTheme = onPanel
    ? "border-stone-100/30 text-cream placeholder:text-cream/50 focus:border-cream/60 focus:ring-cream/40"
    : "border-stone-300 text-stone-800 focus:border-sage-400 focus:ring-sage-300";
  const buttonTheme = onPanel
    ? "bg-cream text-stone-800 hover:bg-white"
    : "bg-stone-800 text-cream hover:bg-stone-900";

  if (status === "success") {
    return (
      <div
        className={`rounded-md px-5 py-6 text-sm ${
          onPanel ? "bg-cream/10 text-cream" : "bg-sage-100 text-sage-600"
        }`}
        role="status"
      >
        <p className="font-serif text-lg">ありがとう — thank you.</p>
        <p className="mt-1 opacity-90">{message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap"
    >
      <label className="sr-only" htmlFor={`name-${variant}`}>
        Name
      </label>
      <input
        id={`name-${variant}`}
        name="name"
        type="text"
        autoComplete="name"
        placeholder="Your name"
        className={`${fieldBase} ${fieldTheme} sm:flex-1 sm:min-w-[10rem]`}
      />

      <label className="sr-only" htmlFor={`email-${variant}`}>
        Email
      </label>
      <input
        id={`email-${variant}`}
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@email.com"
        className={`${fieldBase} ${fieldTheme} sm:flex-1 sm:min-w-[12rem]`}
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className={`rounded-md px-6 py-3 text-sm tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${buttonTheme}`}
      >
        {status === "submitting" ? "Joining…" : "Join the waitlist"}
      </button>

      {status === "error" && (
        <p
          className={`w-full text-sm ${
            onPanel ? "text-cream/90" : "text-red-700"
          }`}
          role="alert"
        >
          {message}
        </p>
      )}
    </form>
  );
}

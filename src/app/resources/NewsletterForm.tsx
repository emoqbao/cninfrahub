"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";
import { FORMSPREE_ENDPOINT } from "@/lib/forms";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <p role="status" className="mt-6 rounded-lg bg-surface-alt px-4 py-3 text-sm text-subtle">
        Thanks — you&apos;re on the list. We&apos;ll email you when new guides land.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="flex gap-3">
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          aria-label="Email address"
          className="flex-1 rounded-lg border border-border px-4 py-2.5 text-ink placeholder:text-ghost focus:border-ink focus:outline-none"
        />
        <Button type="submit" variant="primary" size="md" disabled={loading}>
          {loading ? "Sending..." : "Subscribe"}
        </Button>
      </div>
      {error && (
        <p className="mt-3 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}
    </form>
  );
}

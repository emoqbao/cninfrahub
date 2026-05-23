"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";
import { products } from "@/lib/products";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/PLACEHOLDER";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Check honeypot
    const form = e.currentTarget;
    const honeypot = form.querySelector<HTMLInputElement>('input[name="_gotcha"]');
    if (honeypot?.value) {
      setLoading(false);
      setSubmitted(true); // silently succeed for bots
      return;
    }

    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please try again or email us directly at info@cninfrahub.com.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-[#e8eaed] bg-[#f8f9fb] p-10 text-center">
        <h2 className="text-2xl font-bold text-[#0d0d0d]">Thanks!</h2>
        <p className="mt-3 text-[#525252]">We&apos;ll be in touch within 24 hours.</p>
        <p className="mt-6 text-sm text-[#8c8c8c]">
          You can also reach us directly at{" "}
          <a href="mailto:info@cninfrahub.com" className="text-[#0d0d0d] underline">
            info@cninfrahub.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-[#e8eaed] p-6 lg:p-8">
      <h2 className="text-xl font-semibold text-[#0d0d0d]">Send us a message</h2>

      {/* Honeypot */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Hidden interest field */}
      <input type="hidden" name="_subject" value="New inquiry from cninfrahub.com" />

      {/* Name row */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium text-[#0d0d0d]">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            required
            className="mt-1.5 block w-full rounded-lg border border-[#e8eaed] px-4 py-2.5 text-[#0d0d0d] placeholder:text-[#a3a3a3] focus:border-[#0d0d0d] focus:outline-none"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium text-[#0d0d0d]">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            required
            className="mt-1.5 block w-full rounded-lg border border-[#e8eaed] px-4 py-2.5 text-[#0d0d0d] placeholder:text-[#a3a3a3] focus:border-[#0d0d0d] focus:outline-none"
            placeholder="Smith"
          />
        </div>
      </div>

      {/* Email */}
      <div className="mt-4">
        <label htmlFor="email" className="block text-sm font-medium text-[#0d0d0d]">
          Work Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1.5 block w-full rounded-lg border border-[#e8eaed] px-4 py-2.5 text-[#0d0d0d] placeholder:text-[#a3a3a3] focus:border-[#0d0d0d] focus:outline-none"
          placeholder="john@company.com"
        />
      </div>

      {/* Company */}
      <div className="mt-4">
        <label htmlFor="company" className="block text-sm font-medium text-[#0d0d0d]">
          Company <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          className="mt-1.5 block w-full rounded-lg border border-[#e8eaed] px-4 py-2.5 text-[#0d0d0d] placeholder:text-[#a3a3a3] focus:border-[#0d0d0d] focus:outline-none"
          placeholder="Acme Corp"
        />
      </div>

      {/* Interests */}
      <fieldset className="mt-6">
        <legend className="block text-sm font-medium text-[#0d0d0d]">
          I&apos;m interested in
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {products.map((p) => (
            <label key={p.id} className="flex items-center gap-2.5 text-sm text-[#525252]">
              <input
                type="checkbox"
                name="interests"
                value={p.name}
                className="h-4 w-4 rounded border-[#d1d3d6] text-[#0d0d0d] focus:ring-[#0d0d0d]"
              />
              {p.name}
            </label>
          ))}
          <label className="flex items-center gap-2.5 text-sm text-[#525252]">
            <input
              type="checkbox"
              name="interests"
              value="Other / Not sure"
              className="h-4 w-4 rounded border-[#d1d3d6] text-[#0d0d0d] focus:ring-[#0d0d0d]"
            />
            Other / Not sure
          </label>
        </div>
      </fieldset>

      {/* Message */}
      <div className="mt-4">
        <label htmlFor="message" className="block text-sm font-medium text-[#0d0d0d]">
          Message <span className="text-[#8c8c8c]">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1.5 block w-full rounded-lg border border-[#e8eaed] px-4 py-2.5 text-[#0d0d0d] placeholder:text-[#a3a3a3] focus:border-[#0d0d0d] focus:outline-none"
          placeholder="Tell us about your project..."
        />
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}

      <div className="mt-6">
        <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto" disabled={loading}>
          {loading ? "Sending..." : "Send Inquiry"}
        </Button>
      </div>
    </form>
  );
}

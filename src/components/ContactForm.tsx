"use client";

import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email && !message) return;
        setSubmitting(true);

        // Simple mailto fallback so the form works without a backend.
        const subject = `Contact from ${name || "Website"}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${encodeURIComponent(
            message
        )}`;
        const mailto = `mailto:contact@voicepilot.co?subject=${encodeURIComponent(
            subject
        )}&body=${body}`;

        // attempt to open user's mail client
        window.location.href = mailto;
        setSubmitting(false);
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                    placeholder="you@company.com"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                    placeholder="How can we help?"
                    required
                />
            </div>

            <div className="pt-2">
                <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 disabled:opacity-60"
                >
                    {submitting ? "Sending…" : "Send Message"}
                </button>
            </div>
        </form>
    );
}

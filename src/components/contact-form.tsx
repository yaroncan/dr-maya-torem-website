"use client";

import { useState, FormEvent } from "react";
import content from "@/content/site-content.json";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const labels = content.contact.formLabels;
  const inputClass =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      {status === "success" ? (
        <div className="text-center py-8">
          <span className="text-5xl mb-4 block">✅</span>
          <p className="text-lg text-green-700 font-medium">{labels.success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">{labels.name}</label>
            <input type="text" name="name" required className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{labels.phone}</label>
            <input type="tel" name="phone" required className={inputClass} dir="ltr" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{labels.email}</label>
            <input type="email" name="email" className={inputClass} dir="ltr" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{labels.subject}</label>
            <input type="text" name="subject" className={inputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{labels.message}</label>
            <textarea name="message" rows={5} required className={`${inputClass} resize-none`} />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-primary text-white py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium disabled:opacity-50"
          >
            {status === "sending" ? "שולח..." : labels.submit}
          </button>
          {status === "error" && (
            <p className="text-red-600 text-center">{labels.error}</p>
          )}
        </form>
      )}
    </div>
  );
}

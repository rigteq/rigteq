"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle, AlertCircle, RotateCcw } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isRateLimited, setIsRateLimited] = useState(false);

  useEffect(() => {
    const lastSubmission = localStorage.getItem("last_contact_submission");
    if (lastSubmission) {
      const timePassed = Date.now() - parseInt(lastSubmission);
      if (timePassed < 86400000) {
        setIsRateLimited(true);
      }
    }
  }, [success]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    if (error) setError(null);
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return "A valid email is required.";
    if (form.message.trim().length < 10) return "Message must be at least 10 characters.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (isRateLimited) {
      setError("You can only send one message every 24 hours. Please try again later.");
      return;
    }

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      localStorage.setItem("last_contact_submission", Date.now().toString());
      setSuccess(true);
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err: unknown) {
      setError((err as Error)?.message || "Internal server error.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="p-10 bg-gray-50 rounded-3xl border border-gray-200 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-green-600" size={40} />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
        <p className="text-gray-600 mb-8 max-w-sm mx-auto">
          Thank you for reaching out. We have received your inquiry and will get back to you within 24 hours at ops@rigteq.com.
        </p>
        <button
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all active:scale-95"
          onClick={() => setSuccess(false)}
        >
          <RotateCcw size={18} /> Go Back
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl relative overflow-hidden group">
      {error && (
        <div className="flex items-center gap-3 text-sm text-red-600 bg-red-50 p-4 rounded-xl border border-red-200">
          <AlertCircle size={18} className="shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 ml-1">Company Name <span className="text-gray-400 font-normal">(Optional)</span></label>
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
          placeholder="Your Company Ltd."
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none"
          placeholder="Tell us about your project requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={loading || isRateLimited}
        className={`w-full inline-flex items-center justify-center gap-3 px-8 py-4 ${isRateLimited ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"} text-white rounded-xl font-bold transition-all active:scale-[0.98] disabled:opacity-50`}
      >
        {loading ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Send size={20} />
            {isRateLimited ? "Limit Reached" : "Submit Proposal"}
          </>
        )}
      </button>

      {isRateLimited && (
        <p className="text-center text-xs text-gray-500">
          You&apos;ve reached your daily limit. Try again in 24 hours.
        </p>
      )}
    </form>
  );
}

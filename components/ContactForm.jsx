"use client";
import Link from "next/link";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data?.message || "Failed");
      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {success && (
        <div className="mt-6 max-w-2xl rounded-md border border-green-200 bg-green-50 text-green-800 p-4">
          <p className="font-medium">Thanks! Your request has been sent.</p>
          <p className="text-sm">Our team will contact you within 24 hours.</p>
        </div>
      )}
      {error && (
        <div className="mt-6 max-w-2xl rounded-md border border-red-200 bg-red-50 text-red-800 p-4">
          <p className="font-medium">Submission failed</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-2xl">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">Full name</label>
            <input id="name" name="name" required className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white" />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">Work email</label>
            <input id="email" name="email" type="email" required className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <label htmlFor="company" className="text-sm font-medium text-slate-700">Company</label>
            <input id="company" name="company" className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white" />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="employees" className="text-sm font-medium text-slate-700">Employees</label>
            <select id="employees" name="employees" className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white">
              <option value="1-20">1-20</option>
              <option value="21-50">21-50</option>
              <option value="51-200">51-200</option>
              <option value="200+">200+</option>
            </select>
          </div>
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-slate-700">How can we help?</label>
          <textarea id="message" name="message" rows={5} className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600 bg-white" />
        </div>
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className="px-5 h-11 rounded-md bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white transition inline-flex items-center gap-2"
          >
            {loading && (
              <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            )}
            {loading ? "Sending..." : "Submit"}
          </button>
          <Link href="/" className="px-5 h-11 rounded-md border border-slate-300 hover:bg-slate-50 transition inline-flex items-center">Cancel</Link>
        </div>
        <p className="text-xs text-slate-500">By submitting, you agree to our terms and privacy policy.</p>
      </form>
    </>
  );
}

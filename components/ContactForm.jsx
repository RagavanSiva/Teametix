"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [countryCode, setCountryCode] = useState("+94");
  const [countryOpen, setCountryOpen] = useState(false);
  const [employees, setEmployees] = useState("1-20");
  const [employeesOpen, setEmployeesOpen] = useState(false);

  const countries = [
    {
      code: "+94",
      iso: "LK",
      label: "+94 (LK)",
      flag: "/assets/country_flags/LKR.png",
    },
    {
      code: "+91",
      iso: "IN",
      label: "+91 (IN)",
      flag: "/assets/country_flags/INR.png",
    },
    {
      code: "+971",
      iso: "AE",
      label: "+971 (AE)",
      flag: "/assets/country_flags/AED.png",
    },
    {
      code: "+65",
      iso: "SG",
      label: "+65 (SG)",
      flag: "/assets/country_flags/SGD.png",
    },
    {
      code: "+60",
      iso: "MY",
      label: "+60 (MY)",
      flag: "/assets/country_flags/MYR.png",
    },
    {
      code: "+44",
      iso: "UK",
      label: "+44 (UK)",
      flag: "/assets/country_flags/GBP.png",
    },
    {
      code: "+1",
      iso: "US",
      label: "+1 (US)",
      flag: "/assets/country_flags/USD.png",
    },
    {
      code: "+61",
      iso: "AU",
      label: "+61 (AU)",
      flag: "/assets/country_flags/AUD.png",
    },
  ];
  const selectedCountry =
    countries.find((c) => c.code === countryCode) || countries[0];

  function normalizeDigits(s) {
    return String(s || "").replace(/\D/g, "");
  }

  function validatePhone(countryCode, phone) {
    const digits = normalizeDigits(phone);
    const rules = {
      "+94": { min: 9, max: 9 }, // Sri Lanka
      "+1": { min: 10, max: 10 }, // US/CA
      "+44": { min: 10, max: 11 }, // UK
      "+91": { min: 10, max: 10 }, // India
      "+971": { min: 9, max: 9 }, // UAE
      "+65": { min: 8, max: 8 }, // Singapore
      "+60": { min: 9, max: 10 }, // Malaysia
      "+61": { min: 9, max: 9 }, // Australia
    };
    const rule = rules[countryCode] || { min: 6, max: 15 }; // fallback E.164-ish
    return digits.length >= rule.min && digits.length <= rule.max;
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");
    setPhoneError("");
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      const countryCode = payload.countryCode || "";
      const phone = payload.phone || "";
      if (!validatePhone(countryCode, phone)) {
        setLoading(false);
        setPhoneError(
          "Please enter a valid phone number for the selected country."
        );
        return;
      }
      const digits = normalizeDigits(phone);
      payload.fullPhone = `${countryCode}${digits}`;
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

      <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-2xl ">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-700"
            >
              Full name
            </label>
            <input
              id="name"
              name="name"
              required
              className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white"
            />
          </div>
          <div className="grid gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Work email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <label
              htmlFor="company"
              className="text-sm font-medium text-slate-700"
            >
              Company
            </label>
            <input
              id="company"
              name="company"
              className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white"
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="employees" className="text-sm font-medium text-slate-700">
              Employees
            </label>
            <div className="relative">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={employeesOpen}
                onClick={() => setEmployeesOpen((o) => !o)}
                className="w-full h-11 rounded-md border border-slate-300 px-3 bg-white flex items-center justify-between gap-2 text-left"
              >
                <span className="text-sm text-slate-700">{employees}</span>
                <svg className="h-4 w-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>
              {employeesOpen && (
                <ul
                  role="listbox"
                  className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-md border border-slate-200 bg-white shadow-md"
                >
                  {[
                    "1-20",
                    "21-50",
                    "51-200",
                    "200+",
                  ].map((opt) => (
                    <li key={opt} role="option">
                      <button
                        type="button"
                        onClick={() => {
                          setEmployees(opt);
                          setEmployeesOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-sm hover:bg-slate-50 ${
                          employees === opt ? "bg-slate-50" : ""
                        }`}
                      >
                        {opt}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <input type="hidden" id="employees" name="employees" value={employees} />
            </div>
          </div>
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">
            Phone
          </label>
          <div className="flex items-center gap-2 flex-nowrap">
            <div className="relative w-40 shrink-0">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={countryOpen}
                onClick={() => setCountryOpen((o) => !o)}
                className="w-full h-11 rounded-md border border-slate-300 px-3 bg-white flex items-center justify-between gap-2 text-left"
              >
                <span className="flex items-center gap-2">
                  <Image
                    src={selectedCountry.flag}
                    alt={selectedCountry.iso}
                    width={18}
                    height={12}
                  />
                  <span className="text-sm">{selectedCountry.code}</span>
                </span>
                <svg
                  className="h-4 w-4 text-slate-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {countryOpen && (
                <ul
                  role="listbox"
                  className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-md border border-slate-200 bg-white shadow-md"
                >
                  {countries.map((c) => (
                    <li key={c.code} role="option">
                      <button
                        type="button"
                        onClick={() => {
                          setCountryCode(c.code);
                          setPhoneError("");
                          setCountryOpen(false);
                        }}
                        className={`w-full px-3 py-2 flex items-center gap-2 text-sm hover:bg-slate-50 ${
                          countryCode === c.code ? "bg-slate-50" : ""
                        }`}
                      >
                        <Image
                          src={c.flag}
                          alt={c.iso}
                          width={18}
                          height={12}
                        />
                        <span>{c.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <input
                type="hidden"
                id="countryCode"
                name="countryCode"
                value={countryCode}
              />
            </div>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel"
              placeholder="77 123 4567"
              onChange={(e) => {
                const val = e.target.value;
                if (!validatePhone(countryCode, val)) {
                  setPhoneError(
                    "Please enter a valid phone number for the selected country."
                  );
                } else {
                  setPhoneError("");
                }
              }}
              className={`h-11 rounded-md border px-3 outline-none focus:ring-2 bg-white flex-1 ${
                phoneError
                  ? "border-red-400 focus:ring-red-500"
                  : "border-slate-300 focus:ring-indigo-600"
              }`}
            />
          </div>
          {phoneError ? (
            <p className="text-xs text-red-600">{phoneError}</p>
          ) : (
            <p className="text-xs text-slate-500">
              Include your contact number so we can reach you quickly.
            </p>
          )}
        </div>
        <div className="grid gap-1.5">
          <label
            htmlFor="message"
            className="text-sm font-medium text-slate-700"
          >
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600 bg-white"
          />
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
          <Link
            href="/"
            className="px-5 h-11 rounded-md border border-slate-300 hover:bg-slate-50 transition inline-flex items-center"
          >
            Cancel
          </Link>
        </div>
        <p className="text-xs text-slate-500">
          By submitting, you agree to our terms and privacy policy.
        </p>
      </form>
    </>
  );
}

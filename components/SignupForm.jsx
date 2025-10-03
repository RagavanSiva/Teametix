"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Eye, EyeOff, Globe } from "lucide-react";

export default function SignupForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [countryCode, setCountryCode] = useState("+94");
  const [countryOpen, setCountryOpen] = useState(false);
  const [employees, setEmployees] = useState("1-20");
  const [employeesOpen, setEmployeesOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [country, setCountry] = useState("Sri Lanka");
  const [countryOpenAddr, setCountryOpenAddr] = useState(false);
  // dynamic country data (optional external JSON)
  const [allCountries, setAllCountries] = useState([]); // ["Sri Lanka", ...]
  const [callingCodes, setCallingCodes] = useState([]); // [{name, iso2, code}]
  // search queries for dropdowns
  const [phoneSearch, setPhoneSearch] = useState("");
  const [countrySearch, setCountrySearch] = useState("");

  // Mark submissions from /signup as trials
  const [plan] = useState("trial");

  // Fallback small list (used if no external JSON is found)
  const fallbackCodes = [
    { code: "+94", iso2: "LK", name: "Sri Lanka", flag: "/assets/country_flags/LKR.png" },
    { code: "+91", iso2: "IN", name: "India", flag: "/assets/country_flags/INR.png" },
    { code: "+971", iso2: "AE", name: "United Arab Emirates", flag: "/assets/country_flags/AED.png" },
    { code: "+65", iso2: "SG", name: "Singapore", flag: "/assets/country_flags/SGD.png" },
    { code: "+60", iso2: "MY", name: "Malaysia", flag: "/assets/country_flags/MYR.png" },
    { code: "+44", iso2: "GB", name: "United Kingdom", flag: "/assets/country_flags/GBP.png" },
    { code: "+1", iso2: "US", name: "United States", flag: "/assets/country_flags/USD.png" },
    { code: "+61", iso2: "AU", name: "Australia", flag: "/assets/country_flags/AUD.png" },
  ];
  const phoneCountries = callingCodes.length ? callingCodes : fallbackCodes;
  const selectedCountry = phoneCountries.find((c) => c.code === countryCode) || phoneCountries[0];
  const filteredPhoneCountries = (phoneSearch ? phoneCountries.filter((c) => {
    const hay = `${c.code} ${c.name || ""} ${c.iso2 || ""}`.toLowerCase();
    return hay.includes(phoneSearch.toLowerCase());
  }) : phoneCountries);

  // Resolve a flag image source for a country entry
  function flagSrc(entry) {
    if (!entry) return null;
    if (entry.flag) return entry.flag; // local asset provided in fallback
    const iso = (entry.iso2 || entry.iso || "").toLowerCase();
    if (!iso) return null;
    // Use flagcdn PNG (small), avoids Next Image domain config by using <img>
    return `https://flagcdn.com/24x18/${iso}.png`;
  }

  // Try loading full lists from a static JSON for 195 countries
  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const res = await fetch("/assets/country-data.json", { cache: "force-cache" });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data?.countries) && Array.isArray(data?.callingCodes) && isMounted) {
            setAllCountries(data.countries);
            setCallingCodes(data.callingCodes);
            return;
          }
        }
      } catch {}
      // Fallback: fetch from REST Countries if local JSON not available
      try {
        const res2 = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2,idd,unMember", { cache: "no-store" });
        if (!res2.ok) return;
        const arr = await res2.json();
        if (!Array.isArray(arr)) return;
        const accepted = arr.filter((c) =>
          c?.unMember === true || ["Holy See", "Palestine State"].includes(c?.name?.common)
        );
        const countries = accepted
          .map((c) => c?.name?.common)
          .filter(Boolean)
          .sort((a, b) => a.localeCompare(b));
        const codes = accepted
          .map((c) => {
            const root = c?.idd?.root || ""; // e.g. "+"
            const suffixes = Array.isArray(c?.idd?.suffixes) ? c.idd.suffixes : [];
            const code = root && suffixes.length ? `${root}${suffixes[0]}` : null;
            return code
              ? { name: c?.name?.common, iso2: c?.cca2, code }
              : null;
          })
          .filter(Boolean)
          // de-duplicate by code, prefer first occurrence
          .reduce((acc, item) => {
            if (!acc.find((x) => x.code === item.code)) acc.push(item);
            return acc;
          }, [])
          .sort((a, b) => a.name.localeCompare(b.name));
        if (isMounted) {
          setAllCountries(countries);
          setCallingCodes(codes);
        }
      } catch {}
    })();
    return () => { isMounted = false; };
  }, []);

  function normalizeDigits(s) {
    return String(s || "").replace(/\D/g, "");
  }
  function validatePhone(countryCode, phone) {
    const digits = normalizeDigits(phone);
    const rules = {
      "+94": { min: 9, max: 9 },
      "+1": { min: 10, max: 10 },
      "+44": { min: 10, max: 11 },
      "+91": { min: 10, max: 10 },
      "+971": { min: 9, max: 9 },
      "+65": { min: 8, max: 8 },
      "+60": { min: 9, max: 10 },
      "+61": { min: 9, max: 9 },
    };
    const rule = rules[countryCode] || { min: 6, max: 15 };
    return digits.length >= rule.min && digits.length <= rule.max;
  }

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");
    setPhoneError("");
    setPasswordError("");
    setEmailError("");
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      const c = payload.countryCode || "";
      const phone = payload.phone || "";
      const email = String(payload.email || "").trim();
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailOk) {
        setLoading(false);
        setEmailError("Please enter a valid work email address.");
        return;
      }
      // password check
      if ((payload.password || "").length < 8) {
        setLoading(false);
        setPasswordError("Password must be at least 8 characters.");
        return;
      }
      if (payload.password !== payload.confirmPassword) {
        setLoading(false);
        setPasswordError("Passwords do not match.");
        return;
      }
      if (!payload.confirmAgreement) {
        setLoading(false);
        setError("Please confirm you agree to the terms to continue.");
        return;
      }
      if (!validatePhone(c, phone)) {
        setLoading(false);
        setPhoneError("Please enter a valid phone number for the selected country.");
        return;
      }
      const digits = normalizeDigits(phone);
      // Build backend payload for organization registration
      const apiBase = process.env.NEXT_PUBLIC_BACKEND_URL;
      if (!apiBase) {
        throw new Error("Backend URL not configured. Set NEXT_PUBLIC_BACKEND_URL in .env.local");
      }
      const url = `${apiBase}/api/organizations/auto/registrations`;
      const body = {
        fullName: payload.name,
        email: payload.email,
        phoneCode: c,
        phoneNumber: digits,
        password: payload.password,
        company: payload.company || "",
        addressLine1: payload.addressLine1,
        addressLine2: payload.addressLine2 || "",
        city: payload.city,
        postalCode: payload.postalCode,
        country: payload.country,
      };
      const res = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.message || `Request failed (${res.status})`);
      }
      setSuccess(true);
      form.reset();
      setPwd("");
      setConfirmPwd("");
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
          <p className="font-medium">Thanks! Your trial request has been received.</p>
          <p className="text-sm">We'll email your workspace details shortly.</p>
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
            <label htmlFor="name" className="text-sm font-medium text-slate-700">Full name</label>
            <input id="name" name="name" required className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white" />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">Work email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              onChange={(e) => {
                const val = e.target.value;
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) setEmailError("Please enter a valid work email address.");
                else setEmailError("");
              }}
              aria-invalid={!!emailError}
              className={`h-11 rounded-md border px-3 outline-none focus:ring-2 bg-white ${emailError ? "border-red-400 focus:ring-red-500" : "border-slate-300 focus:ring-indigo-600"}`}
            />
            {emailError && <p className="text-xs text-red-600">{emailError}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <label htmlFor="password" className="text-sm font-medium text-slate-700">Password</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                minLength={8}
                autoComplete="new-password"
                onChange={(e) => {
                  const val = e.target.value;
                  setPwd(val);
                  if (val.length < 8) setPasswordError("Password must be at least 8 characters.");
                  else if (confirmPwd && val !== confirmPwd) setPasswordError("Passwords do not match.");
                  else setPasswordError("");
                }}
                className={`h-11 w-full rounded-md border px-3 pr-10 outline-none focus:ring-2 bg-white ${passwordError ? "border-red-400 focus:ring-red-500" : "border-slate-300 focus:ring-indigo-600"}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-2 my-auto h-7 w-7 grid place-items-center text-slate-600 hover:text-slate-800"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700">Confirm password</label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                required
                minLength={8}
                autoComplete="new-password"
                onChange={(e) => {
                  const val = e.target.value;
                  setConfirmPwd(val);
                  if (val.length < 8) setPasswordError("Password must be at least 8 characters.");
                  else if (pwd && val !== pwd) setPasswordError("Passwords do not match.");
                  else setPasswordError("");
                }}
                className={`h-11 w-full rounded-md border px-3 pr-10 outline-none focus:ring-2 bg-white ${passwordError ? "border-red-400 focus:ring-red-500" : "border-slate-300 focus:ring-indigo-600"}`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                aria-label={showConfirm ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-2 my-auto h-7 w-7 grid place-items-center text-slate-600 hover:text-slate-800"
              >
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        </div>
        {passwordError && (
          <p className="text-xs text-red-600">{passwordError}</p>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <label htmlFor="company" className="text-sm font-medium text-slate-700">Company</label>
            <input id="company" name="company" className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white" />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="employees" className="text-sm font-medium text-slate-700">Employees</label>
            <div className="relative">
              <button type="button" aria-haspopup="listbox" aria-expanded={employeesOpen} onClick={() => setEmployeesOpen((o) => !o)} className="w-full h-11 rounded-md border border-slate-300 px-3 bg-white flex items-center justify-between gap-2 text-left">
                <span className="text-sm text-slate-700">{employees}</span>
                <svg className="h-4 w-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" /></svg>
              </button>
              {employeesOpen && (
                <ul role="listbox" className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-md border border-slate-200 bg-white shadow-md">
                  {["1-20","21-50","51-200","200+"].map((opt) => (
                    <li key={opt} role="option">
                      <button type="button" onClick={() => { setEmployees(opt); setEmployeesOpen(false); }} className={`w-full px-3 py-2 text-left text-sm hover:bg-slate-50 ${employees === opt ? "bg-slate-50" : ""}`}>
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
          <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone</label>
          <div className="flex items-center gap-2 flex-nowrap">
            <div className="relative w-40 shrink-0">
              <button type="button" aria-haspopup="listbox" aria-expanded={countryOpen} onClick={() => setCountryOpen((o) => !o)} className="w-full h-11 rounded-md border border-slate-300 px-3 bg-white flex items-center justify-between gap-2 text-left">
                <span className="flex items-center gap-2">
                  {flagSrc(selectedCountry) ? (
                    <img src={flagSrc(selectedCountry)} alt={(selectedCountry?.iso2 || selectedCountry?.iso || "").toString()} width={18} height={12} />
                  ) : null}
                  <span className="text-sm">{selectedCountry?.code || countryCode}</span>
                </span>
                <svg className="h-4 w-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" /></svg>
              </button>
              {countryOpen && (
                <div className="absolute z-10 mt-1 w-full rounded-md border border-slate-200 bg-white shadow-md">
                  <div className="p-2 border-b border-slate-200 bg-slate-50">
                    <input
                      type="text"
                      placeholder="Search Code"
                      value={phoneSearch}
                      onChange={(e) => setPhoneSearch(e.target.value)}
                      className="w-full h-9 rounded-md border border-slate-300 px-2 outline-none focus:ring-2 focus:ring-indigo-600 bg-white text-sm"
                    />
                  </div>
                  <ul role="listbox" className="max-h-60 overflow-auto">
                    {filteredPhoneCountries.map((c) => (
                      <li key={`${c.code}-${c.iso2 || c.name}`} role="option">
                        <button type="button" onClick={() => { setCountryCode(c.code); setPhoneError(""); setCountryOpen(false); setPhoneSearch(""); }} className={`w-full px-3 py-2 flex items-center gap-2 text-sm hover:bg-slate-50 ${countryCode === c.code ? "bg-slate-50" : ""}`}>
                          {flagSrc(c) ? (
                            <img src={flagSrc(c)} alt={(c.iso2 || c.name || "").toString()} width={18} height={12} />
                          ) : null}
                          <span>{c.code} ({c.iso2 || c.name})</span>
                        </button>
                      </li>
                    ))}
                    {filteredPhoneCountries.length === 0 && (
                      <li className="px-3 py-2 text-sm text-slate-500">No matches</li>
                    )}
                  </ul>
                </div>
              )}
              <input type="hidden" id="countryCode" name="countryCode" value={countryCode} />
            </div>
            <input id="phone" name="phone" type="tel" required inputMode="tel" autoComplete="tel" placeholder="77 123 4567" onChange={(e) => {
              const val = e.target.value;
              if (!validatePhone(countryCode, val)) setPhoneError("Please enter a valid phone number for the selected country.");
              else setPhoneError("");
            }} className={`h-11 rounded-md border px-3 outline-none focus:ring-2 bg-white flex-1 ${phoneError ? "border-red-400 focus:ring-red-500" : "border-slate-300 focus:ring-indigo-600"}`} />
          </div>
          {phoneError ? (
            <p className="text-xs text-red-600">{phoneError}</p>
          ) : (
            <p className="text-xs text-slate-500">Include your contact number so we can reach you quickly.</p>
          )}
        </div>

        {/* Address fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-1.5">
            <label htmlFor="addressLine1" className="text-sm font-medium text-slate-700">Address line 1</label>
            <input id="addressLine1" name="addressLine1" required className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white" />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="addressLine2" className="text-sm font-medium text-slate-700">Address line 2 (optional)</label>
            <input id="addressLine2" name="addressLine2" className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white" />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="city" className="text-sm font-medium text-slate-700">City</label>
            <input id="city" name="city" required className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white" />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="postalCode" className="text-sm font-medium text-slate-700">Postal code</label>
            <input id="postalCode" name="postalCode" required className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white" />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="country" className="text-sm font-medium text-slate-700">Country</label>
            <div className="relative">
              <button
                type="button"
                id="country"
                aria-haspopup="listbox"
                aria-expanded={countryOpenAddr}
                onClick={() => setCountryOpenAddr((o) => !o)}
                className="w-full h-11 rounded-md border border-slate-300 px-3 bg-white flex items-center justify-between gap-2 text-left"
              >
                <span className="text-sm text-slate-700 flex items-center gap-2">
                  <Globe size={16} className="text-slate-500" />
                  {country}
                </span>
                <svg className="h-4 w-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" /></svg>
              </button>
              {countryOpenAddr && (
                <div className="absolute z-10 mt-1 w-full rounded-md border border-slate-200 bg-white shadow-md">
                  <div className="p-2 border-b border-slate-200 bg-slate-50">
                    <input
                      type="text"
                      placeholder="Search country"
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      className="w-full h-9 rounded-md border border-slate-300 px-2 outline-none focus:ring-2 focus:ring-indigo-600 bg-white text-sm"
                    />
                  </div>
                  <ul role="listbox" className="max-h-60 overflow-auto">
                    {((allCountries.length ? allCountries : phoneCountries.map(p => p.name))
                      .filter((c) => c.toLowerCase().includes(countrySearch.toLowerCase()))).map((c) => (
                      <li key={c} role="option">
                        <button type="button" onClick={() => { setCountry(c); setCountryOpenAddr(false); setCountrySearch(""); }} className={`w-full px-3 py-2 text-left text-sm hover:bg-slate-50 ${country === c ? "bg-slate-50" : ""}`}>{c}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <input type="hidden" name="country" value={country} />
            </div>
          </div>
        </div>

        {/* No free-text field for trial signup */}

        <label className="flex items-start gap-2 text-sm text-slate-700">
          <input type="checkbox" name="confirmAgreement" required className="mt-1 h-4 w-4 rounded border-slate-300" />
          <span>I agree to the Terms and Privacy Policy and confirm the information provided is accurate.</span>
        </label>

        <div className="flex items-center gap-3 pt-2">
          <button type="submit" disabled={loading} aria-busy={loading} className="px-5 h-11 rounded-md bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white transition inline-flex items-center gap-2">
            {loading && (<span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />)}
            {loading ? "Submitting..." : "Start trial"}
          </button>
          <Link href="/" className="px-5 h-11 rounded-md border border-slate-300 hover:bg-slate-50 transition inline-flex items-center">Cancel</Link>
        </div>
        <p className="text-xs text-slate-500">By submitting, you agree to our terms and privacy policy.</p>
      </form>
    </>
  );
}

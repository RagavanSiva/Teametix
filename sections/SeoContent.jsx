import Link from "next/link";

export default function SeoContent() {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-14 md:py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          HR software in Sri Lanka for payroll, attendance, and performance
        </h2>
        <p className="mt-4 text-slate-600 leading-7">
          Teametix is an all-in-one HR platform built for Sri Lankan
          organizations. Centralize employee data, automate approvals, track
          leave and attendance, manage timesheets, and run accurate payroll with
          EPF/ETF exports. Simple, affordable, and designed for growing teams.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-800">
              Payroll with EPF/ETF and payslips
            </h3>
            <p className="mt-2 text-slate-600">
              Run payroll on time with confidence. Configure allowances and
              deductions, generate payslips, and export files for EPF/ETF with a
              few clicks. Reduce manual work and ensure compliance.
            </p>
            <p className="mt-2 text-slate-600">
              Learn more in <Link href="/features#payroll-management" className="text-indigo-600 hover:underline">Features</Link> or see
              <Link href="/pricing" className="text-indigo-600 hover:underline"> Pricing</Link>.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800">
              Leave, attendance, and timesheets
            </h3>
            <p className="mt-2 text-slate-600">
              Track leave balances, approvals, and attendance logs in one view.
              Empower teams with self-serve requests and keep managers aligned
              with real-time calendars and reports.
            </p>
            <p className="mt-2 text-slate-600">
              Explore <Link href="/features#leave-management" className="text-indigo-600 hover:underline">Leave management</Link> and
              <Link href="/features#time-sheet-management" className="text-indigo-600 hover:underline"> Timesheets</Link>.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800">Performance and workflows</h3>
            <p className="mt-2 text-slate-600">
              Standardize reviews, goals, and approvals with configurable
              workflows. Keep every process auditable and on time.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800">Integrations</h3>
            <p className="mt-2 text-slate-600">
              Connect devices and tools your team already uses. Build a reliable
              HR stack without switching between spreadsheets and systems.
            </p>
          </div>
        </div>

        <div className="mt-8 text-slate-700">
          Looking to get started? <Link href="/contact" className="text-indigo-600 hover:underline">Book a demo</Link> or
          <Link href="/pricing" className="text-indigo-600 hover:underline"> see pricing</Link>.
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-indigo-600 font-medium uppercase">About us</p>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2">
            Building the modern HR platform for growing teams
          </h1>
          <p className="mt-4 text-slate-600 leading-7">
            Teametix unifies employee data, workflows, leave & attendance,
            timesheets and payroll so you can run HR with clarity and speed.
            We focus on simplicity, automation, and delightful user experience.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex gap-2">
              <span className="text-indigo-600">•</span>
              Centralized employee profiles with role-based access
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-600">•</span>
              Configurable workflows for onboarding, approvals and audits
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-600">•</span>
              Accurate payroll with exports and payslips
            </li>
            <li className="flex gap-2">
              <span className="text-indigo-600">•</span>
              Timesheets and leave management built-in
            </li>
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="rounded-lg border border-slate-200 p-4 bg-white">
              <p className="text-3xl font-semibold">1–2 weeks</p>
              <p className="text-slate-600">Typical go-live time</p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 bg-white">
              <p className="text-3xl font-semibold">99.9%</p>
              <p className="text-slate-600">Uptime target</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            className="rounded-xl shadow-sm"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-1.png"
            alt="About Teametix"
            width={800}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
}

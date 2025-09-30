import SectionTitle from "@/components/SectionTitle";
import FeaturesSection from "@/sections/FeaturesSection";
import Testimonials from "@/sections/Testimonials";
import TrustedCompanies from "@/sections/TrustedCompanies";

export const metadata = {
    title: "Features | Teametix",
    description: "Explore Teametix HR features: employee data, workflows, performance, leave & attendance, payroll & expenses.",
};

export default function FeaturesPage() {
    return (
        <main className="pt-24 md:pt-28">
            <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-8 md:py-12">
                <SectionTitle
                    title="Powerful HR features built-in"
                    subtitle="Everything you need to manage your workforce from one place"
                />
            </section>
            <TrustedCompanies />
            <FeaturesSection />
            {/* Detailed feature sections */}
            <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-8 md:py-12 space-y-16">
                <div id="employee-management">
                    <h2 className="text-2xl md:text-3xl font-semibold">Employee management</h2>
                    <p className="mt-3 text-slate-600 max-w-3xl">Single source of truth for your workforce. Keep everything organized and accessible.</p>
                    <ul className="mt-4 grid md:grid-cols-2 gap-3 text-slate-700 list-disc pl-6">
                        <li>Profiles with custom fields, documents, and role-based access</li>
                        <li>Onboarding checklists, task assignments, and approvals</li>
                        <li>Offboarding workflows with asset collection</li>
                        <li>Org chart and team directory</li>
                    </ul>
                </div>

                <div id="payroll-management">
                    <h2 className="text-2xl md:text-3xl font-semibold">Payroll management</h2>
                    <p className="mt-3 text-slate-600 max-w-3xl">Accurate and timely payroll—connected to attendance and timesheets.</p>
                    <ul className="mt-4 grid md:grid-cols-2 gap-3 text-slate-700 list-disc pl-6">
                        <li>Gross-to-net calculations, allowances, deductions</li>
                        <li>Payslips generation and distribution</li>
                        <li>Expense reimbursements and perks</li>
                        <li>Exports and audit-ready reports</li>
                    </ul>
                </div>

                <div id="time-sheet-management">
                    <h2 className="text-2xl md:text-3xl font-semibold">Time sheet management</h2>
                    <p className="mt-3 text-slate-600 max-w-3xl">Track hours by project, department, or cost center with streamlined approvals.</p>
                    <ul className="mt-4 grid md:grid-cols-2 gap-3 text-slate-700 list-disc pl-6">
                        <li>Daily/weekly submissions with reminders</li>
                        <li>Manager approvals and change history</li>
                        <li>Billable vs non-billable tracking</li>
                        <li>Export to payroll and analytics</li>
                    </ul>
                </div>

                <div id="leave-management">
                    <h2 className="text-2xl md:text-3xl font-semibold">Leave management</h2>
                    <p className="mt-3 text-slate-600 max-w-3xl">Clear policies, self-serve requests, and a shared calendar for visibility.</p>
                    <ul className="mt-4 grid md:grid-cols-2 gap-3 text-slate-700 list-disc pl-6">
                        <li>Custom leave types, accruals, and carryover rules</li>
                        <li>Approval chains and delegation</li>
                        <li>Holiday calendars and blackout dates</li>
                        <li>Balance calculations synced to payroll</li>
                    </ul>
                </div>
            </section>
            <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-8 md:py-12">
                <SectionTitle
                    title="Loved by modern teams"
                    subtitle="See how customers streamline HR with Teametix"
                />
                <Testimonials />
            </section>
        </main>
    );
}

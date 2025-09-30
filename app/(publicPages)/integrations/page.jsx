import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "Integrations | Teametix",
  description: "Connect Teametix with tools your team already uses.",
};

export default function IntegrationsPage() {
  return (
    <main className="pt-24 md:pt-28 px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
      <SectionTitle
        title="Integrations that fit your stack"
        subtitle="Seamlessly connect HR, payroll, communication and identity."
      />
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-sm">
        {[
          { name: "Slack" },
          { name: "Microsoft Teams" },
          { name: "Google Workspace" },
          { name: "Office 365" },
          { name: "Okta" },
          { name: "Azure AD" },
          { name: "QuickBooks" },
          { name: "Xero" },
          { name: "Stripe" },
          { name: "Zapier" },
          { name: "Zoho" },
          { name: "HubSpot" },
        ].map((i) => (
          <div key={i.name} className="rounded-md border border-slate-200 bg-white p-4 text-center hover:shadow-sm transition">
            {i.name}
          </div>
        ))}
      </div>
      <p className="mt-8 text-slate-600 max-w-2xl">
        Need a custom integration? <a href="/contact" className="text-indigo-600 hover:underline">Contact us</a> for a tailored solution.
      </p>
    </main>
  );
}

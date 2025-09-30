import SectionTitle from "@/components/SectionTitle";

export const metadata = {
    title: "Docs | Teametix",
    description: "Product documentation and resources for Teametix HR platform.",
};

export default function DocsPage() {
    return (
        <main className="pt-24 md:pt-28 px-6 md:px-16 lg:px-24 xl:px-32 pb-16">
            <SectionTitle
                title="Teametix Documentation"
                subtitle="Coming soon — Implementation guides, API references, and best practices"
            />
            <div className="mt-6 max-w-3xl text-slate-600">
                <p>
                    We are preparing detailed docs to help your team get the most out of Teametix, including setup guides,
                    onboarding checklists, and integration steps. If you need help right now, please reach out via the
                    contact form.
                </p>
            </div>
        </main>
    );
}

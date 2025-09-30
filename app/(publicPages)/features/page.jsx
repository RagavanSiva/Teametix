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

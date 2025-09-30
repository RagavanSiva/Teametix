import SectionTitle from "@/components/SectionTitle";
import Pricing from "@/sections/Pricing";
import { FaqSection } from "@/sections/FaqSection";
import BottomBanner from "@/sections/BottomBanner";

export const metadata = {
    title: "Pricing | Teametix",
    description: "Transparent pricing for Teametix HR. Choose a plan that fits your team and scale with confidence.",
};

export default function PricingPage() {
    return (
        <main className="pt-24 md:pt-28">
            <h1 className="sr-only">Pricing</h1>
            <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-8 md:py-12">
                <SectionTitle
                    title="Simple, transparent pricing"
                    subtitle="Start small and scale as your workforce grows"
                />
            </section>
            <Pricing />
            <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-8 md:py-12">
                <FaqSection />
            </section>
            <BottomBanner />
        </main>
    );
}

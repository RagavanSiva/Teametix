import BottomBanner from "@/sections/BottomBanner";
import { FaqSection } from "@/sections/FaqSection";
import FeaturesSection from "@/sections/FeaturesSection";
import HeroSection from "@/sections/HeroSection";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";
import TrustedCompanies from "@/sections/TrustedCompanies";

export const metadata = {
  title: "Teametix | HR, Payroll & Workforce Management",
  description:
    "Run HR, payroll, leave, attendance, timesheets and workflows in one platform. Centralize employee data, automate approvals, and scale with confidence.",
};

export default function Page() {
  return (
    <>
      <HeroSection />
      {/* <TrustedCompanies /> */}
      <div id="features" className="scroll-mt-24" />
      <FeaturesSection />
      <Testimonials />
      <div id="pricing" className="scroll-mt-24" />
      <Pricing />
      <FaqSection />
      <BottomBanner />
    </>
  );
}

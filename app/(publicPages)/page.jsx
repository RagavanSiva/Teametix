import BottomBanner from "@/sections/BottomBanner";
import { FaqSection } from "@/sections/FaqSection";
import FeaturesSection from "@/sections/FeaturesSection";
import HeroSection from "@/sections/HeroSection";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";
import TrustedCompanies from "@/sections/TrustedCompanies";
import SeoContent from "@/sections/SeoContent";

export const metadata = {
  title:
    "Teametix | Free HR application — 30-day free trial, no credit card required",
  description:
    "Free HR application for Sri Lanka. 30-day free trial, no credit card required. Manage employee data, workflows, leave & attendance, timesheets, and payroll with EPF/ETF readiness.",
  openGraph: {
    title:
      "Teametix | Free HR application — 30-day free trial, no credit card required",
    description:
      "Free HR application for Sri Lanka. 30-day free trial, no credit card required. Manage employee data, workflows, leave & attendance, timesheets, and payroll with EPF/ETF readiness.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Teametix | Free HR application — 30-day free trial, no credit card required",
    description:
      "Free HR application for Sri Lanka. 30-day free trial, no credit card required.",
  },
};

export default function Page() {
  return (
    <>
      <HeroSection />
      {/* <TrustedCompanies /> */}
      <div id="features" className="scroll-mt-24" />
      <FeaturesSection />
      <SeoContent />
      <Testimonials />
      <div id="pricing" className="scroll-mt-24" />
      <Pricing />
      <FaqSection />
      <BottomBanner />
    </>
  );
}

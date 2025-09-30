import AboutUs from "@/sections/AboutUs";

export const metadata = {
  title: "About | Teametix",
  description: "Learn about Teametix and our mission to simplify HR for growing businesses.",
};

export default function AboutPage() {
  return (
    <main className="pt-24 md:pt-28 pb-20">
      <AboutUs />
    </main>
  );
}

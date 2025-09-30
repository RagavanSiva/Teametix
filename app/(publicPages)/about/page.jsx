import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "About | Teametix",
  description: "Learn about Teametix and our mission to simplify HR for growing businesses.",
};

export default function AboutPage() {
  return (
    <main className="pt-24 md:pt-28 px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
      <SectionTitle
        title="We’re building the modern HR platform"
        subtitle="Our mission is to help teams run HR with clarity, speed, and confidence."
      />
      <div className="mt-6 grid md:grid-cols-2 gap-8 text-slate-700 leading-7">
        <p>
          Teametix unifies employee data, workflows, performance, attendance, and payroll into a single, easy-to-use
          platform. We believe HR should be simple and powerful—so your team can focus on people, not paperwork.
        </p>
        <p>
          From startups to enterprises, our goal is to deliver secure, scalable, and delightful software that adapts to
          your processes and integrates with your existing tools.
        </p>
      </div>
      <div className="mt-10 text-slate-600">
        <p>
          Interested in partnering or media? <a href="/contact" className="text-indigo-600 hover:underline">Contact us</a>.
        </p>
      </div>
    </main>
  );
}

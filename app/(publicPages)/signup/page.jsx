import SignupForm from "@/components/SignupForm";

export const metadata = {
  title: "Start 30-day free trial | Teametix",
  description: "Register your organization to start a 30-day free trial of Teametix HR.",
};

export default function SignupPage() {
  return (
    <main className="pt-24 md:pt-28 px-6 pb-20">
      <div className="max-w-2xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">30-day free trial</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Start your Teametix trial</h1>
        <p className="mt-3 text-slate-600">Tell us about your organization. We’ll create your workspace so you can explore features and invite your team.</p>
      </div>

      <div className="mt-8 max-w-2xl mx-auto bg-white border border-slate-200 rounded-lg shadow-sm p-6 md:p-8">
        <SignupForm />
      </div>

      <div className="mt-6 max-w-2xl mx-auto text-center text-slate-500 text-sm">
        No credit card required. You can switch to a paid plan anytime.
      </div>
    </main>
  );
}

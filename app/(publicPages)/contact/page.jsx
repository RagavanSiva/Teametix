import Link from "next/link";

export const metadata = {
    title: "Contact | Teametix",
    description: "Book a demo or contact the Teametix team.",
};

export default function ContactPage() {
    return (
        <main className="pt-24 md:pt-28 px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
            <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Book a demo</h1>
                <p className="mt-3 text-slate-600">Tell us a little about your company and we’ll reach out to schedule a personalized walkthrough.</p>
            </div>

            <form action="/api/contact" method="post" className="mt-8 grid gap-4 max-w-2xl">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid gap-1.5">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700">Full name</label>
                        <input id="name" name="name" required className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white" />
                    </div>
                    <div className="grid gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700">Work email</label>
                        <input id="email" name="email" type="email" required className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid gap-1.5">
                        <label htmlFor="company" className="text-sm font-medium text-slate-700">Company</label>
                        <input id="company" name="company" className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white" />
                    </div>
                    <div className="grid gap-1.5">
                        <label htmlFor="employees" className="text-sm font-medium text-slate-700">Employees</label>
                        <select id="employees" name="employees" className="h-11 rounded-md border border-slate-300 px-3 outline-none focus:ring-2 focus:ring-indigo-600 bg-white">
                            <option value="1-20">1-20</option>
                            <option value="21-50">21-50</option>
                            <option value="51-200">51-200</option>
                            <option value="200+">200+</option>
                        </select>
                    </div>
                </div>
                <div className="grid gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">How can we help?</label>
                    <textarea id="message" name="message" rows={5} className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600 bg-white" />
                </div>
                <div className="flex items-center gap-3 pt-2">
                    <button type="submit" className="px-5 h-11 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition">Submit</button>
                    <Link href="/" className="px-5 h-11 rounded-md border border-slate-300 hover:bg-slate-50 transition inline-flex items-center">Cancel</Link>
                </div>
                <p className="text-xs text-slate-500">By submitting, you agree to our terms and privacy policy.</p>
            </form>
        </main>
    );
}

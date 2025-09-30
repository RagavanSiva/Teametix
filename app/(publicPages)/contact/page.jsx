import ContactForm from "@/components/ContactForm";
import ContactMotion from "./ContactMotion";

export const metadata = {
    title: "Contact | Teametix",
    description: "Book a demo or contact the Teametix team.",
};

export default function ContactPage() {
    return (
        <main className="pt-24 md:pt-28 px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
            <ContactMotion>
                <div className="max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Book a demo</h1>
                    <p className="mt-3 text-slate-600">Tell us a little about your company and we’ll reach out to schedule a personalized walkthrough.</p>
                </div>
                <ContactForm />
            </ContactMotion>
        </main>
    );
}

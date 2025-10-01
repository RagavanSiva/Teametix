import ContactForm from "@/components/ContactForm";
import ContactMotion from "./ContactMotion";

export const metadata = {
    title: "Contact | Teametix",
    description: "Contact the Teametix team for questions, support, or partnerships.",
};

export default function ContactPage() {
    return (
        <main className="pt-24 md:pt-28 px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
            <ContactMotion>
                <div className="max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact us</h1>
                    <p className="mt-3 text-slate-600">Tell us a little about your request and how we can help. We’ll get back to you within 1 business day.</p>
                </div>
                <ContactForm />
            </ContactMotion>
        </main>
    );
}

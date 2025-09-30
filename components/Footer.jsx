import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import { MailIcon, PhoneIcon, MapPinIcon, ArrowRightIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 mt-40 w-full text-slate-500">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 pb-6">
        <div className="md:max-w-114">
          <span className="text-xl font-bold text-gray-800">Teametix</span>
          {/* <Image className="h-9 md:h-9.5 w-auto shrink-0" src="/assets/logo.svg" alt="Logo" width={140} height={40} priority fetchPriority="high" /> */}
          <p className="mt-6">
            Teametix helps you streamline HR from hiring to payroll. Centralize
            employee data, automate workflows, and scale with confidence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-4 text-indigo-600 hover:text-indigo-700"
          >
            <span>Book a demo</span>
            <ArrowRightIcon size={16} />
          </Link>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-indigo-600">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div className="space-y-2 text-slate-600">
              <Link
                href="tel:+94XXXXXXXXX"
                className="flex items-center gap-2 hover:text-indigo-600"
              >
                <PhoneIcon size={16} />
                <span>+94-76-896-1675</span>
              </Link>
              <Link
                href="mailto:sales@teametix.com"
                className="flex items-center gap-2 hover:text-indigo-600"
              >
                <MailIcon size={16} />
                <span>hrteametix@gmail.com</span>
              </Link>
              <div className="flex items-start gap-2">
                <MapPinIcon size={16} className="mt-0.5" />
                <span>Remote-first • Global</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center pb-5">
        Copyright 2025 &copy; Teametix. All rights reserved.
      </p>
    </footer>
  );
}

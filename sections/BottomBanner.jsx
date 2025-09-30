import Link from "next/link";
import { CalendarIcon, TagsIcon } from "lucide-react";

export default function BottomBanner() {
    return (
        <div className="border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto mt-28 px-16">
            <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-slate-200 py-20 -mt-10 -mb-10 w-full">
                <p className="text-xl font-medium max-w-sm">Ready to see Teametix in action? Book a live demo or explore pricing.</p>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                    <Link href="/contact" className="flex items-center gap-2 rounded-md py-3 px-5 bg-indigo-600 hover:bg-indigo-700 transition text-white">
                        <CalendarIcon size={20} />
                        <span>Book a demo</span>
                    </Link>
                    <Link href="/#pricing" className="flex items-center gap-2 rounded-md py-3 px-5 border border-slate-300 hover:bg-slate-50 transition text-slate-700">
                        <TagsIcon size={20} />
                        <span>See pricing</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
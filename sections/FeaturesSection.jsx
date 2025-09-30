import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";

export default function FeaturesSection() {
    return (
        <>
            <SectionTitle
                text1="Features"
                text2="Everything you need in HR"
                text3="Teametix covers the essentials end-to-end so you can run HR with clarity and speed."
            />

            <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
                <Link href="/features#employee-management" className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <Image
                        className="rounded-xl"
                        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-2.png"
                        alt="Employee management"
                        height={400}
                        width={400}
                    />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Employee management</h3>
                    <p className="text-sm text-slate-600 mt-1">Centralize employee profiles, docs, and lifecycle—from onboarding to offboarding.</p>
                </Link>
                <Link href="/features#payroll-management" className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <Image
                        className="rounded-xl"
                        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png"
                        alt="Payroll management"
                        height={400}
                        width={400}
                    />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Payroll management</h3>
                    <p className="text-sm text-slate-600 mt-1">Run accurate payroll, manage compensation, and streamline expenses.</p>
                </Link>
                <Link href="/features#time-sheet-management" className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <Image
                        className="rounded-xl"
                        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-1.png"
                        alt="Time sheet management"
                        height={400}
                        width={400}
                    />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Time sheet management</h3>
                    <p className="text-sm text-slate-600 mt-1">Track working hours and projects with simple, approval-ready timesheets.</p>
                </Link>
                <Link href="/features#leave-management" className="max-w-80 hover:-translate-y-0.5 transition duration-300">
                    <Image
                        className="rounded-xl"
                        src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-2.png"
                        alt="Leave management"
                        height={400}
                        width={400}
                    />
                    <h3 className="text-base font-semibold text-slate-700 mt-4">Leave management</h3>
                    <p className="text-sm text-slate-600 mt-1">Self-serve leave requests, auto accruals, and a team calendar that keeps everyone aligned.</p>
                </Link>
            </div>
            <div className="mt-10 flex justify-center">
                <Link href="/features" className="inline-flex items-center gap-2 text-indigo-600 hover:underline">
                    <span>Deep dive into features</span>
                </Link>
            </div>
        </>
    );
}
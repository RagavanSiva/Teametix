"use client";
import { ChevronRightIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center bg-[url('/assets/hero-section-dot-image.png')] bg-cover bg-no-repeat"
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
    >
      <motion.div
        variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
      >
        <Link
          href="/signup"
          className="flex items-center gap-2 rounded-full p-1 pr-3 mt-22 text-indigo-600 bg-indigo-50"
        >
          <span className="bg-indigo-600 text-white text-xs px-3.5 py-1 rounded-full">
            NEW
          </span>
          <p className="flex items-center gap-1">
            <span>Start a 30‑day free trial of Teametix</span>
            <ChevronRightIcon size={16} />
          </p>
        </Link>
      </motion.div>
      <motion.h1
        className="text-[40px]/12 md:text-[54px]/16 font-semibold max-w-6xl mt-4"
        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      >
        Sri Lanka HR software for{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
          payroll, attendance & performance
        </span>
        — all in one place
      </motion.h1>
      <motion.p
        className="text-base text-slate-600 max-w-lg mt-5"
        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.3 }}
      >
        Built for Sri Lanka: centralize employee data, automate onboarding &
        approvals, track leave/attendance, and run payroll with EPF/ETF exports
        — all at affordable LKR pricing.
      </motion.p>
      <motion.ul
        className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-left text-slate-700"
        variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
      >
        <li className="flex gap-2">
          <span className="text-indigo-600">•</span> Centralize employee data &
          HR reporting
        </li>
        <li className="flex gap-2">
          <span className="text-indigo-600">•</span> Run payroll with EPF/ETF
          exports and payslips
        </li>
        <li className="flex gap-2">
          <span className="text-indigo-600">•</span> Track leave, attendance,
          and timesheets
        </li>
        <li className="flex gap-2">
          <span className="text-indigo-600">•</span> Performance reviews,
          approvals, and workflows
        </li>
      </motion.ul>

      <motion.div
        className="flex items-center gap-4 mt-6"
        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
      >
        <Link
          href="/signup"
          className="bg-indigo-600 hover:bg-indigo-700 transition px-8 py-3 rounded-md text-white"
        >
          <span>Start 30‑day free trial</span>
        </Link>
        <Link
          href="/#pricing"
          className="flex items-center justify-center gap-2 border border-indigo-400 px-5 py-3 rounded-md text-indigo-600"
        >
          <SparklesIcon size={16} />
          <span>See pricing</span>
        </Link>
      </motion.div>
      <motion.p
        className="mt-3 text-sm text-slate-500"
        variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
      >
        No credit card required
      </motion.p>
      <motion.div
        variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.4 }}
      >
        <Image
          className="w-full max-w-[600px] mt-3 drop-shadow-2xl drop-shadow-blue-500/15 mx-auto"
          src="/assets/finalweb.png"
          alt="Hero Section Card Image"
          width={1000}
          height={500}
          priority
          fetchPriority="high"
        />
      </motion.div>
    </motion.div>
  );
}

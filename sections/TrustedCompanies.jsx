"use client";
import { companiesLogo } from "@/data/companiesLogo";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TrustedCompanies() {
    const [speed, setSpeed] = useState(25);
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const apply = () => setSpeed(mq.matches ? 0 : 25);
        apply();
        mq.addEventListener?.("change", apply);
        return () => mq.removeEventListener?.("change", apply);
    }, []);

    return (
        <>
            <motion.h3
                className="text-base text-center text-slate-400 mt-28 pb-14 font-medium"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3 }}
            >
                Trusted by leading brands, including —
            </motion.h3>
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
            >
                <Marquee className="max-w-5xl mx-auto" gradient={true} speed={speed} pauseOnHover={true}>
                    <div className="flex items-center justify-center">
                        {[...companiesLogo, ...companiesLogo].map((company, index) => (
                            <Image key={index} className="mx-11" src={company.logo} alt={company.name} width={100} height={100} />
                        ))}
                    </div>
                </Marquee>
            </motion.div>
        </>
    );
}
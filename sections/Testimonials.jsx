"use client";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonialsData } from "@/data/testimonialsData";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Testimonials() {
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
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3 }}
            >
                <SectionTitle text1="Testimonials" text2="Our Social Proof" text3="A visual collection of our most recent works - each piece crafted with intention, emotion and style." />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
            >
                <Marquee className="max-w-5xl mx-auto mt-11" gradient={true} speed={speed} pauseOnHover={true}>
                    <div className="flex items-center justify-center py-5">
                        {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </Marquee>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
            >
                <Marquee className="max-w-5xl mx-auto" gradient={true} speed={speed} direction="right" pauseOnHover={true}>
                    <div className="flex items-center justify-center py-5">
                        {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </Marquee>
            </motion.div>
        </>
    );
}
"use client";

import { motion } from "framer-motion";
import PlanetBackground from "./PlanetBackground";
import RotatingText from "./RotatingText";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section id="Hero" className="relative min-h-screen flex flex-col items-center justify-center ">
            {/* Background Layer */}
            <PlanetBackground />

            {/* Content Layer */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto -mt-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-slate-600 dark:text-slate-400 uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-sans font-medium">
                        Vastu : The science
                    </h2>
                </motion.div>

                <motion.div
                    className="flex flex-col items-center mb-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <span className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-slate-900 dark:text-amber-50 leading-tight">Consult for</span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight text-slate-900 dark:text-amber-50 drop-shadow-sm">
                        <RotatingText />
                    </h1>
                </motion.div>

                <motion.p
                    className="text-slate-700 dark:text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Navigate your life's journey with ancient wisdom tailored for the modern world.
                    Discover precision and clarity in every reading.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a href="#Contact" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-amber-600 text-amber-50 dark:text-slate-900 font-medium rounded-full overflow-hidden transition-all hover:bg-slate-800 dark:hover:bg-amber-500 hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/10 dark:shadow-amber-900/20">
                        <span className="relative z-10">Book a Consultation</span>
                        <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />

                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </a>
                </motion.div>
            </div>

        </section>
    );
}

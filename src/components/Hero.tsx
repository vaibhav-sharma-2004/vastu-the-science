"use client";

import { motion } from "framer-motion";
import PlanetBackground from "./PlanetBackground";
import RotatingText from "./RotatingText";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen  flex flex-col items-center justify-center ">
            {/* Background Layer */}
            <PlanetBackground />

            {/* Content Layer */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-slate-600 uppercase tracking-[0.2em] text-sm md:text-base mb-4 font-sans font-medium">
                        Vastu : The vedic science
                    </h2>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight mb-8 text-slate-900 drop-shadow-sm"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Consult for <br className="md:hidden" />
                    <RotatingText />
                </motion.h1>

                <motion.p
                    className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
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
                    <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-amber-50 font-medium rounded-full overflow-hidden transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/10">
                        <span className="relative z-10">Book a Consultation</span>
                        <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />

                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </motion.div>
            </div>

        </section>
    );
}

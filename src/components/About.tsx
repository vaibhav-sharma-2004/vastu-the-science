"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react";

export default function About() {
    return (
        <section id="Vision" className=" py-24 px-4 relative overflow-hidden ">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 pt-10 border-t border-slate-900/20 dark:border-white/30">

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative w-full max-w-md mx-auto md:mr-auto">
                        {/* Ornamental Frame */}
                        <div className="absolute -inset-4 border border-slate-900/10 dark:border-slate-700/30 rounded-2xl" />

                        {/* Image Container */}
                        <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 dark:shadow-black/30 border-4 border-white dark:border-slate-800">
                            <Image
                                src="/logo.jpeg"
                                alt="Varun Bhardwaj"
                                fill
                                sizes="(max-width: 768px) 100vw, 448px"
                                className="object-cover"
                            />
                        </div>
                    </div>

                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6 text-center md:text-left"
                >
                    <div className="inline-block px-4 py-1 border border-slate-900/20 dark:border-white/30 rounded-full text-slate-600 dark:text-slate-400 text-sm tracking-widest uppercase font-sans">
                        About the Astrologer
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-amber-50 leading-tight">
                        Varun Bhardwaj
                    </h2>

                    <div className="space-y-2">
                        <p className="text-amber-700 dark:text-amber-500 font-medium text-lg tracking-wide">
                            MA in Astrology
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 font-serif italic text-xl">
                            Shri Lal Bahadur Shastri National Sanskrit University
                        </p>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-md">
                        With over <span className="font-bold text-slate-900 dark:text-amber-50">5 years of experience</span> in Vedic Sciences, Vastu Shastra, and Numerology, Varun Bhardwaj has guided thousands of individuals towards clarity and success. His approach combines ancient wisdom with modern practicality, ensuring remedies that are effective and easy to integrate into daily life.
                    </p>
                    <div className="inline-block px-4 py-1 border border-slate-900/20 dark:border-white/30 rounded-full text-slate-600 dark:text-slate-400 text-sm tracking-widest uppercase font-sans">
                        Vision of the Astrologer
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-md">
                        Our vision is to revive and reveal Vastu Shastra in its purest and most sacred form, elevating it to a consciousness where even nations align their actions with its divine principles. Vastu Shastra is not merely a discipline, but a cosmic science-an eternal wisdom that governs all creation. Every space we inhabit is a living expression of Vastu, and by honoring its principles, one aligns with universal energies, inviting harmony, abundance, and the fulfillment of life's higher purposes.
                    </p>

                    <div className="pt-8 border-t border-slate-900/10 dark:border-white/30 flex flex-col sm:flex-row items-center gap-6">
                        <span className="text-slate-500 dark:text-slate-400 font-sans text-sm tracking-widest uppercase">Connect with me:</span>
                        <div className="flex gap-4">

                            {/* Instagram */}
                            <a href="https://www.instagram.com/vastuthescience/" target="_blank" className="p-3 rounded-full hover:bg-pink-600 bg-pink-700 text-white transition-all duration-300" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/company/vastu-the-science/" target="_blank" className="p-3 rounded-full hover:bg-blue-700 bg-blue-600 text-white transition-all duration-300" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>

                            {/*youtube*/}
                            <a href="https://www.youtube.com/@vastuthescience" target="_blank" className="p-3 rounded-full hover:bg-red-600 bg-red-700 text-white transition-all duration-300" aria-label="Youtube">
                                <Youtube className="w-5 h-5" />
                            </a>

                            {/*Facebook*/}
                            <a href="https://www.facebook.com/people/Vastu-The-Science/61586516117156/" target="_blank" className="p-3 rounded-full hover:bg-blue-600 bg-blue-700 text-white transition-all duration-300" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>


                            {/* X  */}
                            <a href="https://x.com/VastuThescience" target="_blank" className="p-3 rounded-full hover:bg-slate-900 bg-slate-700 text-white transition-all duration-300" aria-label="X (Twitter)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
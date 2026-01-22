"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function About() {
    return (
        <section id="About" className=" py-24 px-4 relative overflow-hidden ">
            {/* Decorative Background Elements */}
            {/* <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none ">
                <div className="absolute top-10 left-10 w-64 h-64 border border-slate-900 rounded-full opacity-20" />
                <div className="absolute bottom-10 right-10 w-96 h-96 border border-slate-900 rounded-full opacity-20" />
            </div> */}

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 pt-10 border-t border-slate-900/20">

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
                        <div className="absolute -inset-4 border border-slate-900/10 rounded-2xl" />

                        {/* Image Container */}
                        <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white">
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
                    <div className="inline-block px-4 py-1 border border-slate-900/20 rounded-full text-slate-600 text-sm tracking-widest uppercase font-sans">
                        About the Astrologer
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                        Varun Bhardwaj
                    </h2>

                    <div className="space-y-2">
                        <p className="text-amber-700 font-medium text-lg tracking-wide">
                            MA in Astrology
                        </p>
                        <p className="text-slate-600 font-serif italic text-xl">
                            Lal Bahadur Shastri University of Delhi
                        </p>
                    </div>

                    <p className="text-slate-600 leading-relaxed font-sans text-lg">
                        With over <span className="font-bold text-slate-900">25 years of experience</span> in Vedic Sciences, Vastu Shastra, and Numerology, Varun Bhardwaj has guided thousands of individuals towards clarity and success. His approach combines ancient wisdom with modern practicality, ensuring remedies that are effective and easy to integrate into daily life.
                    </p>

                    <div className="pt-8 border-t border-slate-900/10 flex flex-col sm:flex-row items-center gap-6">
                        <span className="text-slate-500 font-sans text-sm tracking-widest uppercase">Connect with me:</span>
                        <div className="flex gap-4">
                            {/* X  */}
                            <a href="#" className="p-3 rounded-full hover:bg-slate-900 bg-slate-700 text-white transition-all duration-300" aria-label="X (Twitter)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                            </a>

                            {/* Instagram */}
                            <a href="#" className="p-3 rounded-full hover:bg-pink-600 bg-pink-700 text-white transition-all duration-300" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>

                            {/* LinkedIn */}
                            <a href="#" className="p-3 rounded-full hover:bg-blue-700 bg-blue-600 text-white transition-all duration-300" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>

                            {/* AstroTalk*/}
                            <a href="#" className="px-4 py-2 rounded-full hover:bg-yellow-500 bg-yellow-400 text-bold-white transition-all duration-300 font-medium text-sm flex items-center gap-2" aria-label="AstroTalk">
                                <MessageCircle className="w-4 h-4" />
                                <span>AstroTalk</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

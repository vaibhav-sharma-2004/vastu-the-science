"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import { SubService, Category, serviceData } from "@/src/utils/serviceInfo";

export default function Services() {
    const [activeCategory, setActiveCategory] = useState<Category>("Vastu");

    return (
        <section id="Services" className="py-24 px-4 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-1 pt-10 border-t border-slate-900/20">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-slate-900 mb-6"
                    >
                        Our Sacred Services
                    </motion.h2>
                    <div className="w-24 h-1 bg-amber-200 mx-auto rounded-full mb-12" />

                    {/* Category Selector */}
                    <div className="grid grid-cols-3 max-w-2xl mx-auto bg-slate-50 p-2 rounded-2xl border border-slate-100 shadow-inner">
                        {(["Vastu", "Astrology", "Numerology"] as Category[]).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`relative py-3 px-6 rounded-xl text-sm font-sans font-semibold transition-all duration-300 ${activeCategory === category
                                    ? "text-white"
                                    : "text-slate-500 hover:text-slate-700"
                                    }`}
                            >
                                {activeCategory === category && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-slate-900 rounded-xl shadow-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{category}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sub-services Grid */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid md:grid-cols-3 gap-8 cursor-pointer"
                        >
                            {serviceData[activeCategory].map((service, index) => (
                                <motion.div
                                    key={service.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
                                >
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-xl font-serif text-slate-900 mb-4 group-hover:text-amber-700 transition-colors">
                                            {service.name}
                                        </h3>
                                        <p className="text-slate-600 font-sans text-sm leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <button className="text-slate-900 font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-2 group/btn">
                                            Explore More
                                            <div className="w-6 h-px bg-slate-900 group-hover/btn:w-10 transition-all duration-300" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

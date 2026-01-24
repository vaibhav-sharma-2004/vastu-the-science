"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import { Product, ProductCategory, productData } from "@/src/utils/productInfo";

export default function Products() {
    const [activeCategory, setActiveCategory] = useState<ProductCategory>("Gem Stones");

    return (
        <section id="Products" className="py-24 px-4 relative overflow-hidden bg-slate-50/50 dark:bg-slate-900/20">
            <div className="max-w-6xl mx-auto relative z-1 pt-10 border-t border-slate-900/20 dark:border-white/30">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-amber-50 mb-6"
                    >
                        Sacred Products
                    </motion.h2>
                    <div className="w-24 h-1 bg-amber-200 dark:bg-amber-600 mx-auto rounded-full mb-12" />

                    {/* Category Selector */}
                    <div className="grid grid-cols-2 max-w-md mx-auto bg-white dark:bg-slate-800/50 p-2 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-inner">
                        {(["Gem Stones", "Rudraksha"] as ProductCategory[]).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`relative py-3 rounded-xl text-lg md:text-xl font-serif font-bold transition-all duration-300 flex items-center justify-center ${activeCategory === category
                                    ? "text-white"
                                    : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"
                                    }`}
                            >
                                {activeCategory === category && (
                                    <motion.div
                                        layoutId="activeProductTab"
                                        className="absolute inset-0 bg-slate-900 dark:bg-amber-600 rounded-xl shadow-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 whitespace-nowrap">{category}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer"
                        >
                            {productData[activeCategory].map((product, index) => (
                                <motion.div
                                    key={product.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white dark:bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 transition-all duration-500"
                                >
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 25vw"
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-lg font-serif text-slate-900 dark:text-amber-50 mb-3 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 font-sans text-xs leading-relaxed mb-4">
                                            {product.description}
                                        </p>
                                        <button className="text-slate-900 dark:text-amber-50 font-sans text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group/btn">
                                            View Details
                                            <div className="w-6 h-px bg-slate-900 dark:bg-amber-50 group-hover/btn:w-10 transition-all duration-300" />
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

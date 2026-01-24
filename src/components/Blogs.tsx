"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { blogs } from "../utils/blogInfo";

export default function Blogs() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="Blogs" className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10 pt-10 border-t border-slate-900/20">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-slate-900 mb-6"
                    >
                        Blogs
                    </motion.h2>
                    <div className="w-24 h-1 bg-amber-200 mx-auto rounded-full mb-8" />
                    <p className="text-slate-600 font-sans max-w-2xl mx-auto">
                        Explore the foundational principles of Vedic sciences and how they can transform your perspective on life and space.
                    </p>
                </div>

                <div className="space-y-4">
                    {blogs.map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <button
                                onClick={() => toggle(blog.id)}
                                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none group"
                            >
                                <span className="text-xl font-serif text-slate-800 group-hover:text-amber-700 transition-colors">
                                    {blog.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openId === blog.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-amber-700" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openId === blog.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-2">
                                            <div className="w-full h-px bg-slate-100 mb-4" />
                                            <p className="text-slate-600 font-sans leading-relaxed">
                                                {blog.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

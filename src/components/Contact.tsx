"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, Instagram, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import whatsapp from "../../public/whatsapp.png"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            setErrorMessage("Please fill in all fields.");
            return;
        }

        setStatus('loading');
        setErrorMessage("");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setStatus('success');
            setFormData({ name: "", email: "", message: "" });

            // Reset to idle after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);

        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message || "Failed to send message. Please try again.");
        }
    };

    const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
    const message = process.env.NEXT_PUBLIC_MESSAGE || ""

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section id="Contact" className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10 pt-10 border-t border-slate-900/20 dark:border-white/30">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-amber-50"
                    >
                        Get in Touch
                    </motion.h2>
                    <div className="w-24 h-1 bg-amber-200 dark:bg-amber-600 mx-auto rounded-full mb-8" />
                    <p className="text-slate-600 dark:text-slate-400 font-sans max-w-2xl mx-auto">
                        Have questions or seeking guidance? Reach out through the form below or connect via social media.
                    </p>
                </div>

                <div className="relative">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <AnimatePresence mode="wait">
                                    {status === 'success' ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl flex flex-col items-center text-center space-y-3"
                                        >
                                            <CheckCircle className="w-12 h-12 text-green-500" />
                                            <h3 className="text-lg font-bold text-green-900 dark:text-green-400 font-sans">Message Sent!</h3>
                                            <p className="text-green-700 dark:text-green-500 font-sans text-sm">We'll get back to you as soon as possible.</p>
                                        </motion.div>
                                    ) : (
                                        <motion.div key="form" className="space-y-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-sans font-semibold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    disabled={status === 'loading'}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white dark:bg-slate-900/50 disabled:opacity-50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-sans font-semibold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    disabled={status === 'loading'}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white dark:bg-slate-900/50 disabled:opacity-50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="block text-sm font-sans font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                                <textarea
                                                    id="message"
                                                    rows={4}
                                                    required
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    disabled={status === 'loading'}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white dark:bg-slate-900/50 resize-none disabled:opacity-50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                                    placeholder="How can we help you?"
                                                ></textarea>
                                            </div>

                                            {status === 'error' && (
                                                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-100 dark:border-red-900/50 uppercase tracking-tight font-bold text-xs">
                                                    <AlertCircle className="w-4 h-4" />
                                                    {errorMessage}
                                                </div>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={status === 'loading'}
                                                className="w-full py-4 bg-slate-900 dark:bg-amber-600 text-amber-50 dark:text-slate-900 font-sans font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-amber-500 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-slate-900/10 dark:shadow-amber-900/20 disabled:opacity-50 disabled:scale-100 cursor-pointer"
                                            >
                                                {status === 'loading' ? (
                                                    <>
                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send className="w-4 h-4" />
                                                    </>
                                                )}
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </motion.div>

                        {/* Desktop OR Separator */}
                        <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 items-center justify-center pointer-events-none">
                            <div className="h-full w-px bg-slate-200 dark:bg-slate-700 relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm">
                                    <span className="text-black dark:text-white font-serif font-medium text-xs italic">OR</span>
                                </div>
                            </div>
                        </div>

                        {/* Mobile OR Separator */}
                    <div className="flex md:hidden items-center justify-center gap-4 my-8">
                        <div className="h-px flex-grow bg-slate-200 dark:bg-slate-700" />
                        <span className="text-black dark:text-white font-serif font-medium text-xs italic">OR</span>
                        <div className="h-px flex-grow bg-slate-200 dark:bg-slate-700" />
                    </div>

                        {/* Social Channels */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col justify-center space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl font-serif text-slate-900 dark:text-amber-50 mb-4">Direct Message</h3>
                                <p className="text-slate-600 dark:text-slate-400 font-sans mb-8">
                                    Prefer a quicker response? Message us directly on your preferred platform.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <a href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer" className="flex items-center gap-4 py-4 px-3 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md dark:hover:shadow-black/20 hover:border-amber-200 dark:hover:border-amber-600/50 transition-all group">
                                        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all">
                                            <Image src={whatsapp} alt="WhatsApp" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-sans font-bold text-slate-900 dark:text-amber-50">WhatsApp</div>
                                            <div className="text-xs text-slate-500 dark:text-slate-400">Fast Response</div>
                                        </div>
                                    </a>

                                    <a href="https://www.instagram.com/direct/t/17846085054269632/" className="flex items-center gap-4 py-4 px-3 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md dark:hover:shadow-black/20 hover:border-amber-200 dark:hover:border-amber-600/50 transition-all group" target="_blank">
                                        <div className="w-12 h-12 rounded-full dark:bg-pink-700 bg-pink-200  flex items-center justify-center transition-all group-hover:bg-pink-600 dark:group-hover:bg-pink-600 group-hover:text-white">
                                            <Instagram className="w-5 h-5 text-pink-600 dark:text-pink-400 dark:text-white group-hover:text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-sans font-bold text-slate-900 dark:text-amber-50">Instagram</div>
                                            <div className="text-xs text-slate-500 dark:text-slate-400">Direct Message</div>
                                        </div>
                                    </a>

                                    <a href="mailto:vastuthescience@gmail.com" target="_blank"
                                        className="flex items-center gap-4 py-4 px-3 rounded-2xl bg-white dark:bg-slate-800/50
                                                    border border-slate-100 dark:border-slate-700 shadow-sm
                                                    hover:shadow-md dark:hover:shadow-black/20
                                                    hover:border-amber-200 dark:hover:border-amber-600/50
                                                    transition-all group"
                                        >
                                        {/* ICON */}
                                        <div className="w-12 h-12 shrink-0 rounded-full bg-slate-900/10 dark:bg-slate-700
                                                        flex items-center justify-center transition-all">
                                            <Mail className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                        </div>

                                        {/* TEXT */}
                                        <div className="min-w-0 flex-1">
                                            <div className="text-sm font-bold text-slate-900 dark:text-amber-50">
                                                    Email
                                            </div>

                                            <div className="text-xs text-slate-500 dark:text-slate-400 break-words">
                                                vastuthescience@gmail.com
                                            </div>
                                        </div>
                                    </a>



                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    );
}

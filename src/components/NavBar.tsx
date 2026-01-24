"use client"
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Vision", href: "#Vision" },
        { name: "Services", href: "#Services" },
        { name: "Products", href: "#Products" },
        { name: "Blogs", href: "#Blogs" },
        { name: "Contact", href: "#Contact" },
    ];

    return (
        <div>
            <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl ">
                <div className="backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border border-white/50 dark:border-slate-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-full px-6 md:px-10 py-3 md:py-4 flex items-center transition-all duration-500 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
                    {/* Left: Logo */}
                    <div className="flex-1 flex justify-start">
                        <a href="#Hero" className="text-xl md:text-2xl font-serif text-slate-900 dark:text-amber-50 font-bold tracking-tight">Vastu</a>
                    </div>

                    {/* Center: Links (Desktop) */}
                    <div className="hidden md:flex flex-[2] justify-center gap-10 text-sm font-sans font-semibold tracking-wide text-slate-600 dark:text-slate-300">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-amber-700 dark:hover:text-amber-400 transition-all hover:scale-110">
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right: Theme Toggle & Mobile Menu Button */}
                    <div className="flex-1 flex justify-end items-center gap-2 md:gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 md:p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 text-slate-700 dark:text-amber-400 hover:scale-110 active:scale-95 shadow-sm"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
                        </button>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Drawer */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMenuOpen(false)}
                                className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[-1] h-screen w-screen left-1/2 -translate-x-1/2"
                            />

                            {/* Drawer */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                className="absolute top-16 left-0 right-0 mx-auto w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-2xl p-6 md:hidden overflow-hidden"
                            >
                                <div className="flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-lg font-serif font-semibold text-slate-900 dark:text-amber-50 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-amber-50 dark:hover:bg-amber-900/20 active:scale-[0.98] transition-all"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    )
}
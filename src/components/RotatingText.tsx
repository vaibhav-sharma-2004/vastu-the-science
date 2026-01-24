"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Astrology", "Vastu", "Numerology"];

export default function RotatingText() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="inline-block relative text-center text-amber-600 dark:text-amber-500 font-serif italic h-[1.2em] align-top">
            {/* Invisible anchor to maintain stable width based on the longest word */}
            <span className="invisible pointer-events-none select-none">
                Numerology
            </span>

            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -20, opacity: 0, filter: "blur(5px)" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 block whitespace-nowrap text-center"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

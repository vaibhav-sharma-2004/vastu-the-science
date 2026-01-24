"use client";

import { motion } from "framer-motion";

export default function PlanetBackground() {
    const planets = [
        { name: "Mercury", size: "w-3 h-3", color: "bg-stone-300", orbit: "w-[180px] h-[180px]", duration: 5, delay: 0 },
        { name: "Venus", size: "w-5 h-5", color: "bg-orange-200", orbit: "w-[260px] h-[260px]", duration: 8, delay: 2 },
        { name: "Earth", size: "w-6 h-6", color: "bg-blue-400", orbit: "w-[360px] h-[360px]", duration: 12, delay: 1 },
        { name: "Mars", size: "w-4 h-4", color: "bg-red-400", orbit: "w-[460px] h-[460px]", duration: 20, delay: 3 },
        { name: "Jupiter", size: "w-12 h-12", color: "bg-amber-100", orbit: "w-[650px] h-[650px]", duration: 40, delay: 5 },
        { name: "Saturn", size: "w-10 h-10", color: "bg-yellow-200", orbit: "w-[850px] h-[850px]", duration: 60, delay: 8, hasRing: true },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
            {/* Parchment / Celestial Chart Gradient */}
            <div className="absolute inset-0 transition-colors duration-500" />

            {/* Noise Texture (Darker for visibility on light bg) */}
            <div className="absolute inset-0 opacity-10 mix-blend-multiply transition-all duration-500"></div>

            {/* Sun */}
            <motion.div
                className="absolute w-24 h-24 rounded-full bg-orange-400/80 blur-xl opacity-60 z-10"
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.7, 0.6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 shadow-[0_0_40px_rgba(245,158,11,0.6)] z-10" />

            {/* Solar System Orbits and Planets */}
            <div className="relative flex items-center justify-center w-[1000px] h-[1000px] scale-[0.6] md:scale-100 transition-transform duration-1000">
                {planets.map((planet, i) => (
                    <div
                        key={planet.name}
                        className={`absolute rounded-full border border-black/20 dark:border-white/20 ${planet.orbit}`}
                    >
                        <motion.div
                            className="absolute inset-0"
                            initial={{ rotate: i * 45 }}
                            animate={{ rotate: 360 + (i * 45) }}
                            transition={{
                                duration: planet.duration,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        >
                            <div
                                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${planet.size} rounded-full ${planet.color} shadow-[inset_-1px_-1px_3px_rgba(0,0,0,0.3)] border border-slate-900/20 dark:border-white/30`}
                            >
                                {planet.hasRing && (
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] border border-slate-900/30 dark:border-white rounded-full rotate-45 scale-y-50" />
                                )}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

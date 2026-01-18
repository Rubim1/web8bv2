"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulasi loading progress
        const timer = setInterval(() => {
            setProgress((prev) => {
                // Random increment biar kelihatan "loading beneran"
                const increment = Math.floor(Math.random() * 10) + 1;
                const newProgress = prev + increment;

                if (newProgress >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return newProgress;
            });
        }, 150);

        // Selesai loading setelah progress 100% + delay dikit
        if (progress === 100) {
            setTimeout(() => setIsLoading(false), 800);
        }

        return () => clearInterval(timer);
    }, [progress]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0f1c14] text-[#F5F1E8]"
                    initial={{ opacity: 1 }}
                    exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }} // Slide up reveal
                >
                    {/* Progress Number */}
                    <div className="relative overflow-hidden mb-4">
                        <motion.h1
                            className="text-8xl md:text-9xl font-bold font-[Outfit] tracking-tighter"
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                        >
                            {progress}%
                        </motion.h1>
                    </div>

                    {/* Loading Message */}
                    <motion.p
                        className="text-sm uppercase tracking-[0.3em] text-[#F5F1E8]/50 animate-pulse"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        Memuat Data Fosil 8B...
                    </motion.p>

                    {/* Dino Silhouette Walking */}
                    <div className="absolute bottom-10 right-10 opacity-20">
                        <span className="text-6xl animate-bounce">🦕</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

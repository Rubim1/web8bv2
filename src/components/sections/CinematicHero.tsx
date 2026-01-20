"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Fireflies from "@/components/ui/Fireflies";
import VelocityText from "@/components/ui/VelocityText";

export default function CinematicHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const yDino = useTransform(scrollYProgress, [0, 1], [0, -100]);

    // Stagger animation
    const containerVars: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5
            }
        }
    };

    const textVars: Variants = {
        hidden: { y: 100, rotate: 5, opacity: 0 },
        visible: {
            y: 0,
            rotate: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-[#1a2e22] text-[#F5F1E8]"
        >
            {/* 1. LAYER VISUAL & ATMOSPHERE */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(45,90,61,0.4),_#1a2e22_70%)] z-0" />
            <Fireflies count={25} />

            {/* Velocity Text (Marquee) di background */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full z-0 opacity-20 rotate-[-5deg] scale-110">
                <VelocityText />
            </div>

            {/* 2. MAIN CONTENT */}
            <div className="relative z-10 h-full flex flex-col justify-center px-4 md:px-20 container mx-auto">
                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    animate="visible"
                    className="relative"
                    style={{ y: yText }}
                >
                    {/* Top Label */}
                    <motion.div variants={textVars} className="flex items-center gap-4 mb-4">
                        <div className="h-[1px] w-12 bg-[#D4763A]" />
                        <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#D4763A]">
                            Since 2025
                        </span>
                    </motion.div>

                    {/* ASYMMETRIC TYPOGRAPHY */}
                    <div className="relative font-[Outfit] leading-[0.85]">
                        {/* "KELAS" - OUTLINE STYLE */}
                        <motion.h1
                            variants={textVars}
                            className="text-[12vw] md:text-[10vw] font-[900] tracking-tighter text-transparent"
                            style={{
                                WebkitTextStroke: "2px rgba(245, 241, 232, 0.5)",
                            }}
                        >
                            KELAS
                        </motion.h1>

                        {/* "8B" - SOLID & GLOW STYLE */}
                        <div className="relative">
                            <motion.h1
                                variants={textVars}
                                className="text-[25vw] md:text-[22vw] font-[900] tracking-tighter text-[#F5F1E8] mix-blend-overlay ml-[10vw] md:ml-[15vw] -mt-[2vw]"
                            >
                                8B
                            </motion.h1>

                            {/* Overlay Gradient Text untuk efek kedalaman */}
                            <motion.h1
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0, transition: { delay: 1, duration: 1 } }
                                }}
                                className="absolute top-0 left-0 text-[25vw] md:text-[22vw] font-[900] tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-[#D4763A] to-transparent mix-blend-color-dodge ml-[10vw] md:ml-[15vw] -mt-[2vw] pointer-events-none opacity-50"
                            >
                                8B
                            </motion.h1>
                        </div>

                        {/* "EXPLORERS" - SMALLER TEXT */}
                        <motion.h2
                            variants={textVars}
                            className="text-[4vw] md:text-[3vw] font-bold tracking-widest text-[#F5F1E8]/60 text-right mr-10 -mt-[4vw]"
                        >
                            THE EXPLORERS
                        </motion.h2>
                    </div>
                </motion.div>
            </div>

            {/* 3. PARALLAX DINO SILHOUETTE (Bottom Right) */}
            <motion.div
                style={{ y: yDino }}
                className="absolute -bottom-10 -right-10 md:right-10 opacity-30 z-20 pointer-events-none mix-blend-soft-light"
            >
                <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                    {/* Kita pakai Emoji dulu karena belum ada aset 3D, tapi di-blur biar artistik */}
                    <span className="text-[20rem] md:text-[30rem] filter blur-sm">🦖</span>
                </div>
            </motion.div>

            {/* 4. SCROLL DOWN INDICATOR */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 2, duration: 1 } }}
                className="absolute bottom-10 left-10 md:left-20 flex items-center gap-4 z-20"
            >
                <div className="w-12 h-12 rounded-full border border-[#F5F1E8]/30 flex items-center justify-center animate-spin-slow">
                    <span className="text-[10px]">SCROLL</span>
                </div>
                <span className="text-xs tracking-widest text-[#F5F1E8]/50">EXPLORE MORE</span>
            </motion.div>
        </section>
    );
}

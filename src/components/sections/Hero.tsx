// ============================================
// FILE: Hero.tsx
// FUNGSI: Section hero untuk halaman utama
// FITUR: Animasi parallax, floating dino, gradient
// ============================================

"use client"; // Client Component (butuh animasi)

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

// ============================================
// KOMPONEN HERO
// ============================================
export default function Hero() {
    // Ref untuk elemen yang akan dianimasikan dengan GSAP
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    // === GSAP ANIMATION ===
    useEffect(() => {
        // Pastikan ref sudah tersedia
        if (!heroRef.current || !titleRef.current) return;

        // Timeline GSAP untuk animasi berurutan
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Animasi title
        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1 }
        );

    }, []); // Jalankan sekali saat mount

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* === BACKGROUND === */}
            {/* Gradient background */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-[#F5F1E8] via-[#EDE8DC] to-[#F5F1E8]"
                aria-hidden="true"
            />

            {/* Pattern dekoratif (fosil/footprint) */}
            <div
                className="absolute inset-0 pattern-footprint opacity-50"
                aria-hidden="true"
            />

            {/* === DECORATIVE ELEMENTS === */}

            {/* Dino kiri bawah */}
            <motion.div
                className="absolute left-4 md:left-16 bottom-20 text-6xl md:text-8xl opacity-20"
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                aria-hidden="true"
            >
                🦕
            </motion.div>

            {/* Dino kanan atas */}
            <motion.div
                className="absolute right-4 md:right-20 top-32 text-5xl md:text-7xl opacity-20"
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                aria-hidden="true"
            >
                🦖
            </motion.div>

            {/* Tanaman purba kiri */}
            <motion.div
                className="absolute left-10 top-1/3 text-4xl md:text-6xl opacity-15"
                animate={{
                    rotate: [-5, 5, -5]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                aria-hidden="true"
            >
                🌿
            </motion.div>

            {/* Tanaman purba kanan */}
            <motion.div
                className="absolute right-10 bottom-1/3 text-4xl md:text-6xl opacity-15"
                animate={{
                    rotate: [5, -5, 5]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
                aria-hidden="true"
            >
                🌴
            </motion.div>

            {/* === MAIN CONTENT === */}
            <div className="container relative z-10 pt-20 pb-10">
                <div className="text-center max-w-4xl mx-auto">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-sm font-medium mb-6">
                            <span>🎓</span>
                            <span>{siteConfig.sekolah}</span>
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        ref={titleRef}
                        className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Text dengan gradient */}
                        <span className="block text-[#2C2C2C]">Selamat Datang di</span>
                        <span
                            className="block mt-2"
                            style={{
                                background: "linear-gradient(135deg, #2D5A3D 0%, #D4763A 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Kelas 8B
                        </span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        className="text-xl md:text-2xl text-[#6B7280] mb-8 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {siteConfig.tagline}
                        <br />
                        <span className="text-lg">Tahun Ajaran {siteConfig.tahunAjaran}</span>
                    </motion.p>

                    {/* Quick Stats */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-8 mb-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {/* Stat: Jumlah Siswa */}
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-bold text-[#2D5A3D]">
                                {siteConfig.totalSiswa}
                            </p>
                            <p className="text-[#6B7280] text-sm mt-1">Siswa Aktif</p>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-16 bg-[#2D5A3D]/20" />

                        {/* Stat: Tahun */}
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl font-bold text-[#D4763A]">
                                2026
                            </p>
                            <p className="text-[#6B7280] text-sm mt-1">Tahun Ajaran</p>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:block w-px h-16 bg-[#2D5A3D]/20" />

                        {/* Stat: Tema */}
                        <div className="text-center">
                            <p className="text-4xl md:text-5xl">🦕</p>
                            <p className="text-[#6B7280] text-sm mt-1">Tema Dino</p>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Button
                            href="/siswa"
                            size="lg"
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            }
                        >
                            Lihat Anggota Kelas
                        </Button>

                        <Button
                            href="/profil"
                            variant="secondary"
                            size="lg"
                            icon={
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                        >
                            Tentang Kelas
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* === SCROLL INDICATOR === */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.div
                    className="flex flex-col items-center gap-2 text-[#6B7280]"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <span className="text-sm">Scroll ke bawah</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}

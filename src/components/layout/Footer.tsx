// ============================================
// FILE: Footer.tsx
// FUNGSI: Komponen footer website
// BERISI: Link navigasi, info sekolah, sosmed
// ============================================

import Link from "next/link";
import { navLinks, siteConfig, developerInfo } from "@/data/siteConfig";

// ============================================
// KOMPONEN FOOTER
// ============================================
export default function Footer() {
    // Tahun sekarang (untuk copyright)
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#1D3A2D] text-white overflow-hidden">
            {/* === DECORATIVE: Silhouette gunung/volcano === */}
            <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
                <svg
                    viewBox="0 0 1440 120"
                    className="absolute bottom-0 w-full h-full"
                    preserveAspectRatio="none"
                >
                    {/* Path gunung/volcano silhouette */}
                    <path
                        d="M0,120 L0,60 Q120,20 240,50 T480,30 T720,60 T960,25 T1200,55 T1440,40 L1440,120 Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            {/* === MAIN FOOTER CONTENT === */}
            <div className="container relative z-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* === KOLOM 1: INFO KELAS === */}
                    <div className="lg:col-span-2">
                        {/* Logo dan nama */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-4xl">🦕</span>
                            <div>
                                <h3 className="font-bold text-xl font-[Outfit]">
                                    {siteConfig.nama}
                                </h3>
                                <p className="text-white/70 text-sm">
                                    {siteConfig.sekolah}
                                </p>
                            </div>
                        </div>

                        {/* Deskripsi singkat */}
                        <p className="text-white/60 mb-6 max-w-md leading-relaxed">
                            {siteConfig.deskripsi}
                        </p>

                        {/* Quick stats */}
                        <div className="flex gap-6">
                            <div>
                                <p className="text-3xl font-bold text-[#D4763A]">
                                    {siteConfig.totalSiswa}
                                </p>
                                <p className="text-white/60 text-sm">Siswa</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-[#D4763A]">
                                    {siteConfig.tahunAjaran.split('/')[0]}
                                </p>
                                <p className="text-white/60 text-sm">Tahun Ajaran</p>
                            </div>
                        </div>
                    </div>

                    {/* === KOLOM 2: NAVIGASI === */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 font-[Outfit]">
                            Navigasi
                        </h4>
                        <ul className="space-y-2">
                            {navLinks.slice(0, 5).map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* === KOLOM 3: LINK LAINNYA === */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 font-[Outfit]">
                            Lainnya
                        </h4>
                        <ul className="space-y-2">
                            {navLinks.slice(5).map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}

                            {/* Link eksternal */}
                            <li>
                                <a
                                    href={siteConfig.links.absensi}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/60 hover:text-[#D4763A] transition-colors duration-200 text-sm inline-flex items-center gap-1"
                                >
                                    Absensi Online
                                    {/* Icon external link */}
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={siteConfig.links.jurnal}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/60 hover:text-[#D4763A] transition-colors duration-200 text-sm inline-flex items-center gap-1"
                                >
                                    Jurnal Kelas
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* === BOTTOM BAR (Copyright) === */}
            <div className="border-t border-white/10">
                <div className="container py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright text */}
                        <p className="text-white/50 text-sm text-center md:text-left">
                            © {currentYear} {siteConfig.namaLengkap}.
                            Made with 💚 by{" "}
                            <a
                                href={developerInfo.links.email}
                                className="text-[#D4763A] hover:underline"
                            >
                                Contact Developer ({developerInfo.nama})
                            </a>
                        </p>

                        {/* Lokasi */}
                        <p className="text-white/50 text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {siteConfig.lokasi}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// ============================================
// FILE: siswa/page.tsx
// FUNGSI: Halaman daftar semua siswa (DARK MODE)
// ============================================

import { Metadata } from "next";
import StudentGrid from "@/components/sections/StudentGrid";
import Card from "@/components/ui/Card";
import { siteConfig } from "@/data/siteConfig";
import { students } from "@/data/students";
import OrganizationalStructure from "@/components/sections/OrganizationalStructure";

// ============================================
// METADATA (SEO)
// ============================================
export const metadata: Metadata = {
    title: "Daftar Siswa",
    description: `Daftar lengkap ${siteConfig.totalSiswa} siswa ${siteConfig.namaLengkap}`,
};

// ============================================
// KOMPONEN HALAMAN SISWA
// ============================================
export default function SiswaPage() {
    // Hitung statistik
    const totalSiswa = students.length;
    const pengurusCount = students.filter(s => s.jabatan).length;

    return (
        <div className="bg-[#0f1c14] min-h-screen text-[#F5F1E8] selection:bg-[#D4763A] selection:text-white">
            {/* === HERO SECTION === */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-24 right-10 text-8xl opacity-5 animate-float blur-sm text-white">🦕</div>
                <div className="absolute bottom-0 left-10 text-6xl opacity-5 animate-bounce-slow blur-sm text-white">🌿</div>

                <div className="container relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4763A]/10 border border-[#D4763A]/20 text-[#D4763A] text-sm font-medium mb-6">
                            <span>👥</span>
                            <span>Anggota Kelas</span>
                        </span>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-[Outfit] font-bold mb-6 text-glow text-[#F5F1E8]">
                            Daftar <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4763A] to-[#F5F1E8]">Siswa</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-[#F5F1E8]/60">
                            Kenali semua teman-teman kelas 8B yang luar biasa!
                        </p>
                    </div>

                    {/* === ORGANIZATIONAL STRUCTURE (NEW FEATURE) === */}
                    <OrganizationalStructure />

                </div>
            </section>

            {/* === SISWA GRID SECTION === */}
            <section className="py-10 bg-[#0f1c14]">
                <div className="container">
                    {/* Grid Siswa */}
                    <div className="bg-[#15231b]/50 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-[#F5F1E8]/5 shadow-2xl">
                        {/* Catatan Info */}
                        <div className="mb-8 flex justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5F1E8]/5 rounded-lg border border-[#F5F1E8]/10 text-xs text-[#F5F1E8]/60">
                                <span>💡</span>
                                <span>Catatan: Card siswa ditampilkan dengan mode <strong>Dark Glass</strong> untuk estetika maksimal.</span>
                            </div>
                        </div>

                        <StudentGrid />
                    </div>
                </div>
            </section>
        </div>
    );
}


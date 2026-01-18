// ============================================
// FILE: wali-kelas/page.tsx
// FUNGSI: Halaman profil wali kelas (DARK MODE)
// ============================================

import { Metadata } from "next";
import Card from "@/components/ui/Card";
import { siteConfig } from "@/data/siteConfig";
import { waliKelas } from "@/data/students";

// ============================================
// METADATA (SEO)
// ============================================
export const metadata: Metadata = {
    title: "Wali Kelas",
    description: `Profil wali kelas ${siteConfig.namaLengkap} - ${waliKelas.nama}`,
};

// ============================================
// KOMPONEN HALAMAN WALI KELAS
// ============================================
export default function WaliKelasPage() {
    return (
        <div className="bg-[#0f1c14] min-h-screen text-[#F5F1E8] selection:bg-[#D4763A] selection:text-white">
            {/* === HERO SECTION === */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-20 right-10 text-8xl opacity-5 animate-float blur-sm text-white">🦕</div>
                <div className="absolute bottom-10 left-10 text-6xl opacity-5 animate-bounce-slow blur-sm text-white">🌿</div>

                <div className="container relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4763A]/10 border border-[#D4763A]/20 text-[#D4763A] text-sm font-medium mb-6">
                            <span>👨‍🏫</span>
                            <span>Guru Pembimbing</span>
                        </span>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-[Outfit] font-bold mb-6 text-glow text-[#F5F1E8]">
                            Wali <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4763A] to-[#F5F1E8]">Kelas</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-[#F5F1E8]/60">
                            Guru yang membimbing dan mendampingi kelas 8B untuk mencapai potensi terbaik.
                        </p>
                    </div>
                </div>
            </section>

            {/* === PROFILE SECTION === */}
            <section className="py-20 bg-[#0f1c14]">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <Card className="overflow-hidden" variant="glass">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Foto */}
                                <div className="relative h-full min-h-[400px]">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D5A3D]/20 to-[#D4763A]/20 flex items-center justify-center">
                                        {/* Placeholder foto */}
                                        <div className="text-center">
                                            <span className="text-9xl block mb-6 drop-shadow-lg">👩‍🏫</span>
                                            <p className="text-sm text-[#F5F1E8]/50 uppercase tracking-widest">
                                                Foto Resmi
                                            </p>
                                        </div>
                                    </div>

                                    {/* Badge mata pelajaran */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="bg-[#0f1c14]/80 backdrop-blur-md rounded-xl px-4 py-3 border border-[#F5F1E8]/10">
                                            <p className="text-xs text-[#F5F1E8]/50 uppercase tracking-wider mb-1">Mata Pelajaran</p>
                                            <p className="font-bold text-[#D4763A] text-lg">{waliKelas.mataPelajaran}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex flex-col justify-center py-12 px-8 md:pr-12">
                                    <span className="inline-block text-[#D4763A] font-bold uppercase tracking-widest text-xs mb-2">
                                        Profil Lengkap
                                    </span>
                                    {/* Nama */}
                                    <h2 className="text-4xl md:text-5xl font-[Outfit] font-bold text-[#F5F1E8] mb-2 leading-tight">
                                        {waliKelas.nama}
                                    </h2>

                                    {/* Role */}
                                    <p className="text-[#F5F1E8]/60 font-medium mb-8 text-lg">
                                        Wali Kelas 8B • {siteConfig.tahunAjaran}
                                    </p>

                                    <div className="w-full h-px bg-[#F5F1E8]/10 mb-8" />

                                    {/* Quote */}
                                    <blockquote className="relative">
                                        <span className="absolute -top-4 -left-2 text-6xl text-[#D4763A]/20 font-serif">"</span>
                                        <p className="text-xl text-[#F5F1E8]/90 leading-relaxed italic pl-6 relative z-10 font-light">
                                            {waliKelas.quote}
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* === INFO CARDS === */}
            <section className="py-20 bg-[#15231b] border-t border-[#F5F1E8]/5">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: "📚", label: "Mengajar", value: waliKelas.mataPelajaran },
                                { icon: "🎯", label: "Membimbing", value: `${siteConfig.totalSiswa} Siswa` },
                                { icon: "🏫", label: "Sekolah", value: siteConfig.sekolah },
                            ].map((item, idx) => (
                                <Card key={idx} variant="glass" className="text-center py-10 group hover:bg-[#F5F1E8]/5 transition-colors">
                                    <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform">{item.icon}</span>
                                    <h3 className="font-bold text-lg text-[#F5F1E8] mb-2">{item.label}</h3>
                                    <p className="text-[#F5F1E8]/50">{item.value}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* === MESSAGE SECTION === */}
            <section className="py-20 bg-[#0f1c14] relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-6xl mb-8 block animate-pulse">💌</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#F5F1E8]">
                            Pesan untuk Kelas 8B
                        </h2>
                        <p className="text-[#F5F1E8]/80 text-lg md:text-xl leading-relaxed font-light">
                            "Anak-anakku yang hebat, selalu ingat bahwa belajar adalah investasi
                            terbaik untuk masa depan kalian. Jangan pernah menyerah, tetap semangat,
                            dan jadilah yang terbaik versi diri kalian sendiri. Bu Guru selalu
                            mendukung kalian! 💚"
                        </p>
                        <p className="mt-8 text-[#D4763A] font-bold tracking-widest uppercase text-sm">
                            — {waliKelas.nama}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

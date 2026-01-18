// ============================================
// FILE: profil/page.tsx
// FUNGSI: Halaman profil kelas (DARK MODE)
// ============================================

import { Metadata } from "next";
import Card from "@/components/ui/Card";
import { siteConfig, visiMisi } from "@/data/siteConfig";
import { students } from "@/data/students";

// ============================================
// METADATA (SEO)
// ============================================
export const metadata: Metadata = {
    title: "Profil Kelas",
    description: `Profil lengkap ${siteConfig.namaLengkap} - Visi, Misi, dan Nilai-nilai kelas.`,
};

// ============================================
// KOMPONEN HALAMAN PROFIL
// ============================================
export default function ProfilPage() {
    const pengurus = students.filter(s => s.jabatan);

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
                            <span>📖</span>
                            <span>Tentang Kami</span>
                        </span>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-[Outfit] font-bold mb-6 text-glow text-[#F5F1E8]">
                            Profil <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4763A] to-[#F5F1E8]">Kelas 8B</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-[#F5F1E8]/60">
                            {siteConfig.sekolah} • {siteConfig.lokasi}
                        </p>
                    </div>
                </div>
            </section>

            {/* === VISI MISI SECTION === */}
            <section className="py-20 bg-[#0f1c14]">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-[Outfit] font-bold mb-4 text-[#F5F1E8]">Visi & Misi</h2>
                        <p className="text-[#F5F1E8]/60 max-w-2xl mx-auto">Pedoman yang mengarahkan langkah kami menuju kesuksesan bersama.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Visi */}
                        <Card className="relative overflow-hidden min-h-[300px]" variant="glass">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2D5A3D]/20 rounded-bl-full blur-2xl" />
                            <div className="relative z-10 p-4">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-4xl">🎯</span>
                                    <h3 className="text-3xl font-bold text-[#F5F1E8]">Visi</h3>
                                </div>
                                <p className="text-[#F5F1E8]/90 leading-relaxed text-xl font-light">
                                    "{visiMisi.visi}"
                                </p>
                            </div>
                        </Card>

                        {/* Misi */}
                        <Card className="relative overflow-hidden min-h-[300px]" variant="glass">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4763A]/20 rounded-bl-full blur-2xl" />
                            <div className="relative z-10 p-4">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-4xl">🚀</span>
                                    <h3 className="text-3xl font-bold text-[#F5F1E8]">Misi</h3>
                                </div>
                                <ul className="space-y-4">
                                    {visiMisi.misi.map((misi, index) => (
                                        <li key={index} className="flex items-start gap-4 text-[#F5F1E8]/80">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4763A]/20 text-[#D4763A] text-xs flex items-center justify-center font-bold mt-1">
                                                {index + 1}
                                            </span>
                                            <span>{misi}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* === NILAI-NILAI SECTION === */}
            <section className="py-20 bg-[#15231b] border-y border-[#F5F1E8]/5 relative">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-[Outfit] font-bold mb-4 text-[#F5F1E8]">Nilai Kelas</h2>
                        <p className="text-[#F5F1E8]/60 max-w-2xl mx-auto">Prinsip yang kami pegang teguh.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {visiMisi.nilai.map((nilai, index) => {
                            const config = [
                                { emoji: "🤝", desc: "Solidaritas" },
                                { emoji: "💡", desc: "Kreativitas" },
                                { emoji: "🦁", desc: "Keberanian" },
                                { emoji: "⭐", desc: "Kejujuran" },
                            ];
                            return (
                                <Card key={index} variant="glass" className="text-center py-8 group hover:bg-[#F5F1E8]/5 transition-colors">
                                    <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform duration-300">{config[index].emoji}</span>
                                    <h3 className="font-bold text-xl mb-2 text-[#D4763A]">{nilai}</h3>
                                    <p className="text-sm text-[#F5F1E8]/50">{config[index].desc}</p>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* === STRUKTUR ORGANISASI (Dark Glass) === */}
            <section className="py-20 bg-[#0f1c14]">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-[Outfit] font-bold mb-4 text-[#F5F1E8]">Pengurus Kelas</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all">
                        {pengurus.map((siswa) => (
                            <Card key={siswa.id} variant="glass" className="text-center py-8">
                                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#F5F1E8]/5 border border-[#F5F1E8]/10 flex items-center justify-center text-3xl">
                                    {siswa.noAbsen % 2 === 0 ? "👦" : "👧"}
                                </div>
                                <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-wider rounded-full bg-[#D4763A]/10 text-[#D4763A] mb-3 uppercase">
                                    {siswa.jabatan}
                                </span>
                                <h3 className="font-bold text-[#F5F1E8]">{siswa.nama}</h3>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

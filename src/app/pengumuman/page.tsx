// ============================================
// FILE: pengumuman/page.tsx
// FUNGSI: Halaman daftar pengumuman lengkap (DARK MODE + LIGHT CARDS)
// ============================================

import { Metadata } from "next";
import AnnouncementList from "@/components/sections/AnnouncementList";
import Card from "@/components/ui/Card";
import { siteConfig } from "@/data/siteConfig";
import { announcements } from "@/data/announcements";

// ============================================
// METADATA (SEO)
// ============================================
export const metadata: Metadata = {
    title: "Pengumuman",
    description: `Pengumuman dan informasi terbaru ${siteConfig.namaLengkap}`,
};

// ============================================
// KOMPONEN HALAMAN PENGUMUMAN
// ============================================
export default function PengumumanPage() {
    // Hitung statistik
    const totalPengumuman = announcements.length;
    const pengumumanPenting = announcements.filter(a => a.penting).length;

    return (
        <div className="bg-[#0f1c14] min-h-screen text-[#F5F1E8] selection:bg-[#D4763A] selection:text-white">
            {/* === HERO SECTION === */}
            <section className="pt-40 pb-16 relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-24 right-10 text-8xl opacity-5 animate-float blur-sm text-white">🦕</div>
                <div className="absolute bottom-0 left-10 text-6xl opacity-5 animate-bounce-slow blur-sm text-white">📢</div>

                <div className="container relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4763A]/10 border border-[#D4763A]/20 text-[#D4763A] text-sm font-medium mb-6">
                            <span>📣</span>
                            <span>Info Terbaru</span>
                        </span>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-[Outfit] font-bold mb-6 text-glow text-[#F5F1E8]">
                            Papan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4763A] to-[#F5F1E8]">Pengumuman</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-[#F5F1E8]/60 mb-10">
                            Jangan lewatkan informasi penting seputar kegiatan kelas!
                        </p>

                        {/* Stats */}
                        <div className="flex justify-center gap-6">
                            <Card className="px-8 py-6 text-center" variant="glass">
                                <p className="text-4xl font-bold text-[#2D5A3D] mb-1">{totalPengumuman}</p>
                                <p className="text-sm font-medium text-[#F5F1E8]/60 uppercase tracking-wider">Total Info</p>
                            </Card>
                            <Card className="px-8 py-6 text-center" variant="glass">
                                <p className="text-4xl font-bold text-[#D4763A] mb-1">{pengumumanPenting}</p>
                                <p className="text-sm font-medium text-[#F5F1E8]/60 uppercase tracking-wider">Penting</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* === ANNOUNCEMENT LIST === */}
            <section className="py-16 bg-[#15231b] border-t border-[#F5F1E8]/5">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <AnnouncementList />
                    </div>
                </div>
            </section>

            {/* === INFO SECTION === */}
            <section className="py-20 bg-[#0f1c14]">
                <div className="container">
                    <div className="max-w-2xl mx-auto">
                        <Card className="text-center py-10" variant="glass">
                            <span className="text-4xl mb-6 block">💡</span>
                            <h3 className="text-xl font-bold text-[#F5F1E8] mb-4">
                                Tips Penting
                            </h3>
                            <p className="text-[#F5F1E8]/70 leading-relaxed">
                                Pengumuman dengan badge <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-sm font-bold mx-1">🔔 Penting</span> adalah
                                informasi wajib. Biasakan cek setiap hari Senin!
                            </p>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}

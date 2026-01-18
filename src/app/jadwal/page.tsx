import { Metadata } from "next";
import Card from "@/components/ui/Card";
import { siteConfig } from "@/data/siteConfig";
import JadwalContent from "@/components/sections/JadwalContent";

// ============================================
// METADATA (SEO)
// ============================================
export const metadata: Metadata = {
    title: "Jadwal Pelajaran & Piket",
    description: `Jadwal pelajaran dan piket kebersihan ${siteConfig.namaLengkap} tahun ajaran ${siteConfig.tahunAjaran}`,
};

// ============================================
// KOMPONEN HALAMAN JADWAL (DARK MODE FIXED)
// ============================================
export default function JadwalPage() {
    return (
        <div className="min-h-screen">
            {/* === HERO SECTION === */}
            <section className="pt-40 pb-10 relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-24 right-10 text-8xl opacity-5 animate-float blur-sm text-white">🦕</div>
                <div className="absolute bottom-0 left-10 text-6xl opacity-5 animate-bounce-slow blur-sm text-white">📅</div>

                <div className="container relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4763A]/10 border border-[#D4763A]/20 text-[#D4763A] text-sm font-medium mb-6">
                            <span>🗓️</span>
                            <span>Tahun Ajaran {siteConfig.tahunAjaran}</span>
                        </span>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 text-glow text-[#F5F1E8]">
                            Jadwal <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4763A] to-[#F5F1E8]">Kegiatan</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-[#F5F1E8]/60">
                            Cek jadwal pelajaran dan jadwal piket kebersihan di sini.
                        </p>
                    </div>
                </div>
            </section>

            {/* === INTERACTIVE CONTENT (Client Component) === */}
            <JadwalContent />

            {/* === EXTERNAL LINKS === */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-2xl mx-auto">
                        <Card className="text-center py-10" variant="glass">
                            <h3 className="text-2xl font-bold text-[#F5F1E8] mb-6 font-heading">
                                Absensi & Jurnal
                            </h3>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                {/* Link Absensi */}
                                <a
                                    href={siteConfig.links.absensi}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    <span>📋</span>
                                    <span>Absensi Online</span>
                                </a>

                                {/* Link Jurnal */}
                                <a
                                    href={siteConfig.links.jurnal}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary"
                                >
                                    <span>📝</span>
                                    <span>Jurnal Kelas</span>
                                </a>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}

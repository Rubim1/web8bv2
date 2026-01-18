// ============================================
// FILE: galeri/page.tsx
// FUNGSI: Halaman galeri foto kegiatan (DARK MODE)
// ============================================

import { Metadata } from "next";
import Card from "@/components/ui/Card";
import { siteConfig } from "@/data/siteConfig";
import { categories, isGalleryEmpty } from "@/data/gallery";

// ============================================
// METADATA (SEO)
// ============================================
export const metadata: Metadata = {
    title: "Galeri",
    description: `Galeri foto kegiatan ${siteConfig.namaLengkap}`,
};

// ============================================
// KOMPONEN HALAMAN GALERI
// ============================================
export default function GaleriPage() {
    return (
        <div className="bg-[#0f1c14] min-h-screen text-[#F5F1E8] selection:bg-[#D4763A] selection:text-white">
            {/* === HERO SECTION === */}
            <section className="pt-40 pb-16 relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-24 right-10 text-8xl opacity-5 animate-float blur-sm text-white">🦕</div>
                <div className="absolute bottom-0 left-10 text-6xl opacity-5 animate-bounce-slow blur-sm text-white">📷</div>

                <div className="container relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4763A]/10 border border-[#D4763A]/20 text-[#D4763A] text-sm font-medium mb-6">
                            <span>🖼️</span>
                            <span>Dokumentasi</span>
                        </span>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-[Outfit] font-bold mb-6 text-glow text-[#F5F1E8]">
                            Galeri <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4763A] to-[#F5F1E8]">Foto</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-[#F5F1E8]/60">
                            Dokumentasi momen-momen seru bersama kelas 8B!
                        </p>
                    </div>
                </div>
            </section>

            {/* === CATEGORY FILTER === */}
            <section className="py-8 bg-[#0f1c14]/80 backdrop-blur-md border-b border-[#F5F1E8]/10 sticky top-20 z-30">
                <div className="container">
                    <div className="flex gap-2 overflow-x-auto pb-2 justify-center scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`
                  px-6 py-2 rounded-full text-sm font-semibold
                  whitespace-nowrap transition-all duration-300 border
                  ${category === "Semua"
                                        ? "bg-[#D4763A] text-white border-[#D4763A]"
                                        : "bg-[#F5F1E8]/5 text-[#F5F1E8]/60 border-transparent hover:border-[#D4763A]/50 hover:text-[#F5F1E8]"
                                    }
                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* === GALLERY CONTENT === */}
            <section className="py-20 bg-[#0f1c14] min-h-[60vh]">
                <div className="container">
                    {/* Jika galeri kosong, tampilkan placeholder dengan style DARK GLASS */}
                    {isGalleryEmpty ? (
                        <div className="max-w-3xl mx-auto animate-fade-in-up">
                            <Card className="text-center py-20 relative overflow-hidden" variant="glass" padding="lg">
                                {/* Glow effect */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D4763A]/10 rounded-full blur-[100px]" />

                                <div className="relative z-10">
                                    {/* Ilustrasi */}
                                    <div className="mb-8">
                                        <span className="text-8xl block mb-4 drop-shadow-2xl grayscale opacity-80">📸</span>
                                        <div className="flex justify-center gap-4 opacity-30">
                                            <span className="text-4xl animate-bounce">🦕</span>
                                            <span className="text-4xl animate-bounce delay-100">🌿</span>
                                            <span className="text-4xl animate-bounce delay-200">🦖</span>
                                        </div>
                                    </div>

                                    {/* Pesan */}
                                    <h3 className="text-3xl font-bold text-[#F5F1E8] mb-4">
                                        Galeri Masih Kosong
                                    </h3>
                                    <p className="text-[#F5F1E8]/60 max-w-md mx-auto leading-relaxed mb-10 text-lg">
                                        "Sebuah gambar bernilai seribu kata, tapi saat ini belum ada yang diupload.
                                        Foto-foto kegiatan kelas akan segera hadir di sini!"
                                    </p>

                                    {/* Info tambahan */}
                                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D4763A]/10 border border-[#D4763A]/20 text-[#D4763A] text-sm font-bold tracking-wide uppercase">
                                        <span>⏳</span>
                                        <span>Coming Soon</span>
                                    </div>
                                </div>
                            </Card>

                            {/* Preview kategori yang akan ada */}
                            <div className="mt-16">
                                <h4 className="text-center text-[#F5F1E8]/40 mb-8 uppercase tracking-widest text-sm">
                                    Kategori Dokumentasi
                                </h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {categories.filter(c => c !== "Semua").map((category, index) => {
                                        const icons = ["📚", "⚽", "🎉", "🤝"];
                                        return (
                                            <Card
                                                key={category}
                                                variant="glass"
                                                className="text-center py-8 opacity-50 hover:opacity-100 transition-opacity cursor-not-allowed group"
                                            >
                                                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">
                                                    {icons[index] || "📷"}
                                                </span>
                                                <p className="text-sm font-bold text-[#F5F1E8]/70">
                                                    {category}
                                                </p>
                                            </Card>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* TODO: Grid galeri ketika ada foto */
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {/* Photo cards will go here */}
                        </div>
                    )}
                </div>
            </section>

            {/* === CTA SECTION === */}
            <section className="py-20 bg-[#15231b] border-t border-[#F5F1E8]/5 text-center">
                <div className="container">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-[#F5F1E8] mb-4">
                            Punya Foto Kegiatan Kelas?
                        </h3>
                        <p className="text-[#F5F1E8]/50 mb-8">
                            Kirim fotomu ke pengurus kelas untuk diabadikan di museum digital ini!
                        </p>
                        <button className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-[#F5F1E8]/5 border border-[#F5F1E8]/10 text-[#F5F1E8] hover:bg-[#D4763A] hover:border-[#D4763A] transition-all duration-300">
                            <span>📱</span>
                            <span className="font-bold">Hubungi Admin</span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

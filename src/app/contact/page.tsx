// ============================================
// FILE: contact/page.tsx
// FUNGSI: Halaman profil developer
// BERISI: Info developer, sosmed links
// ============================================

import { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { siteConfig, developerInfo } from "@/data/siteConfig";

// ============================================
// METADATA (SEO)
// ============================================
export const metadata: Metadata = {
    title: "Developer",
    description: `Profil developer website ${siteConfig.namaLengkap}`,
};

// ============================================
// KOMPONEN HALAMAN CONTACT/DEVELOPER
// ============================================
export default function ContactPage() {
    return (
        <>
            {/* === HERO SECTION === */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-[#F5F1E8] to-white relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-20 right-10 text-8xl opacity-10">🦕</div>
                <div className="absolute bottom-10 left-10 text-6xl opacity-10">💻</div>

                <div className="container relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-sm font-medium mb-6">
                            <span>👨‍💻</span>
                            <span>Pembuat Website</span>
                        </span>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C2C2C] mb-4">
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #2D5A3D 0%, #D4763A 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Developer
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg text-[#6B7280]">
                            Kenalan dengan pembuat website kelas ini!
                        </p>
                    </div>
                </div>
            </section>

            {/* === PROFILE SECTION === */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="max-w-2xl mx-auto">
                        <Card className="text-center py-12">
                            {/* Avatar */}
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#2D5A3D] to-[#D4763A] flex items-center justify-center text-6xl">
                                👨‍💻
                            </div>

                            {/* Nama */}
                            <h2 className="text-3xl font-bold text-[#2C2C2C] mb-2">
                                {developerInfo.nama}
                            </h2>

                            {/* Role */}
                            <p className="text-[#D4763A] font-medium mb-6">
                                Web Developer • Siswa Kelas 8B
                            </p>

                            {/* Divider */}
                            <div className="flex items-center gap-3 justify-center mb-6 max-w-xs mx-auto">
                                <span className="flex-1 h-px bg-gray-200" />
                                <span className="text-xl">🦕</span>
                                <span className="flex-1 h-px bg-gray-200" />
                            </div>

                            {/* Bio */}
                            <p className="text-[#6B7280] max-w-md mx-auto leading-relaxed mb-8">
                                {developerInfo.bio}
                            </p>

                            {/* Social Links */}
                            <div className="flex justify-center gap-4">
                                {/* Website */}
                                <a
                                    href={developerInfo.links.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl bg-[#2D5A3D]/10 text-[#2D5A3D] flex items-center justify-center hover:bg-[#2D5A3D] hover:text-white transition-all duration-300"
                                    title="Website"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a
                                    href={developerInfo.links.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all duration-300"
                                    title="Instagram"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>

                                {/* GitHub */}
                                <a
                                    href={developerInfo.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl bg-gray-100 text-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300"
                                    title="GitHub"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>

                                {/* Email */}
                                <a
                                    href={developerInfo.links.email}
                                    className="w-12 h-12 rounded-xl bg-[#D4763A]/10 text-[#D4763A] flex items-center justify-center hover:bg-[#D4763A] hover:text-white transition-all duration-300"
                                    title="Email"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </a>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* === TECH STACK === */}
            <section className="py-16 bg-[#F5F1E8]">
                <div className="container">
                    <h3 className="font-semibold text-center mb-8 text-[#2C2C2C] text-xl">
                        Teknologi yang Digunakan
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
                        {[
                            { name: "Next.js", icon: "⚡" },
                            { name: "React", icon: "⚛️" },
                            { name: "TypeScript", icon: "📘" },
                            { name: "Tailwind CSS", icon: "🎨" },
                            { name: "Framer Motion", icon: "✨" },
                            { name: "GSAP", icon: "🎬" },
                        ].map((tech) => (
                            <Card
                                key={tech.name}
                                className="px-4 py-3 flex items-center gap-2"
                                variant="hover"
                            >
                                <span className="text-xl">{tech.icon}</span>
                                <span className="font-medium text-[#4A4A4A]">{tech.name}</span>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* === CREDIT SECTION === */}
            <section className="py-16 bg-gradient-to-br from-[#2D5A3D] to-[#1D3A2D] text-white relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-10 left-10 text-6xl opacity-10">🦖</div>
                <div className="absolute bottom-10 right-10 text-6xl opacity-10">🦕</div>

                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-5xl mb-6 block">💚</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Terima Kasih!
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed">
                            Website ini dibuat dengan penuh ❤️ untuk kelas 8B tercinta.
                            Semoga bermanfaat sebagai wadah informasi dan dokumentasi kegiatan kelas kita!
                        </p>
                        <p className="mt-6 text-[#D4763A] font-medium">
                            — {developerInfo.nama}, {siteConfig.tahunAjaran}
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

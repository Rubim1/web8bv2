// ============================================
// FILE: page.tsx (Home - FINAL MIXED EDITION)
// FUNGSI: Halaman utama campuran (Dark Glass Squad + High Contrast Bento)
// ============================================

import CinematicHero from "@/components/sections/CinematicHero";
import StudentGrid from "@/components/sections/StudentGrid";
import AnnouncementList from "@/components/sections/AnnouncementList";
import TextReveal from "@/components/ui/TextReveal";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#0f1c14] min-h-screen text-[#F5F1E8] selection:bg-[#D4763A] selection:text-white">

      {/* 1. CINEMATIC HERO */}
      <CinematicHero />

      {/* 2. THE STORY */}
      <section className="py-32 relative container mx-auto px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#D4763A] tracking-[0.3em] text-sm font-bold mb-8 uppercase">
            Start The Journey
          </p>
          <TextReveal
            text="Kami bukan sekadar satu kelas. Kami adalah kumpulan penjelajah, pemimpi, dan calon pemimpin masa depan. Di Kelas 8B, setiap hari adalah petualangan baru menuju pengetahuan tak terbatas."
            className="text-4xl md:text-6xl font-[Outfit] font-bold leading-tight"
          />
        </div>
      </section>

      {/* 3. THE SQUAD (DARK GLASS - DEFAULT) */}
      <section className="py-20 relative bg-[#15231b] border-y border-[#F5F1E8]/5">
        <div className="container px-6 md:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl md:text-7xl font-[Outfit] font-bold mb-4 text-[#F5F1E8]">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4763A] to-[#F5F1E8]">Squad</span>
              </h2>
              <p className="text-[#F5F1E8]/60 text-lg max-w-md">
                Wajah-wajah di balik legendanya Kelas 8B. Kenali mereka lebih dekat.
              </p>
            </div>
            <Link href="/siswa" className="group flex items-center gap-2 text-lg font-medium hover:text-[#D4763A] transition-colors">
              <span className="w-12 h-[1px] bg-[#F5F1E8]/30 group-hover:bg-[#D4763A] transition-colors" />
              Lihat Semua
            </Link>
          </div>

          <div className="relative">
            {/* KEMBALI KE DEFAULT (Dark Glass) sesuai request user yang plin-plan */}
            <StudentGrid limit={6} />
          </div>
        </div>
      </section>

      {/* 4. BENTO GRID (High Contrast / Light Cards) */}
      <section className="py-32 container px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-[Outfit] font-bold mb-12 text-center text-[#F5F1E8]/80">
          Headquarters Updates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          {/* Jadwal Hari Ini (LIGHT CARD) */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-[#F5F1E8] text-[#0f1c14] md:p-10 p-6 flex flex-col justify-between hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <span className="text-9xl">📅</span>
            </div>
            <div>
              <span className="px-4 py-1.5 rounded-full border border-[#D4763A] text-[#D4763A] text-xs font-bold tracking-widest uppercase bg-white">
                Priority
              </span>
              <h3 className="text-5xl font-black mt-6 mb-4 leading-tight text-[#0f1c14]">Jadwal<br />Pelajaran</h3>
              <p className="text-[#0f1c14]/70 text-lg max-w-md font-medium">Jangan lupa buku paket dan PR untuk hari ini! Cek jadwal lengkap biar gak salah bawa buku.</p>
            </div>
            <div className="mt-8">
              <Link href="/jadwal" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0f1c14] text-white rounded-full font-bold hover:bg-[#D4763A] transition-all shadow-xl">
                Cek Jadwal Lengkap ↗
              </Link>
            </div>
          </div>

          {/* Pengumuman Terbaru (LIGHT CARD) */}
          <div className="relative rounded-3xl bg-[#F5F1E8] text-[#0f1c14] md:p-8 p-6 flex flex-col hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3 border-b border-black/10 pb-4 text-[#0f1c14]">
              <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-red-500/50 shadow-lg" />
              Latest Intel
            </h3>

            <div className="flex-1 overflow-hidden">
              <AnnouncementList limit={2} />
            </div>

            <Link href="/pengumuman" className="text-sm font-bold text-[#0f1c14]/60 hover:text-[#D4763A] mt-6 flex items-center gap-2 uppercase tracking-wider">
              View Archive →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-20 text-center container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-6xl md:text-9xl font-[Outfit] font-black text-[#F5F1E8] hover:text-[#D4763A] transition-colors cursor-default">
            JOIN US
          </h2>
          <p className="text-[#F5F1E8]/60 mt-6 mb-8 text-xl max-w-xl mx-auto">
            Siap mencetak sejarah bersama Kelas 8B?
          </p>
          <a href="https://wa.me/6289522749532" target="_blank" className="inline-block bg-[#D4763A] hover:bg-[#e88b4f] text-white px-12 py-5 text-lg font-bold rounded-full shadow-[0_10px_30px_rgba(212,118,58,0.4)] transition-all hover:-translate-y-1">
            Hubungi Admin Kelas
          </a>
        </div>
      </section>

    </main>
  );
}

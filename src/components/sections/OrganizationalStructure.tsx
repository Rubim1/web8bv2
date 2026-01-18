"use client";

import { motion } from "framer-motion";
import { waliKelas, students } from "@/data/students";
import Card from "@/components/ui/Card";

export default function OrganizationalStructure() {
    // Ambil data pengurus dari array students
    const ketua = students.find(s => s.jabatan === "Ketua Kelas");
    const wakil = students.find(s => s.jabatan === "Wakil Ketua");
    const sek1 = students.find(s => s.jabatan === "Sekretaris 1");
    const sek2 = students.find(s => s.jabatan === "Sekretaris 2");
    const ben1 = students.find(s => s.jabatan === "Bendahara 1");
    const ben2 = students.find(s => s.jabatan === "Bendahara 2");

    // Helper untuk render card pengurus
    const RenderCard = ({ title, name, variant = "default", className = "" }: { title: string, name: string | undefined, variant?: "default" | "glass", className?: string }) => (
        <Card className={`h-full flex flex-col items-center text-center p-6 ${className}`} variant={variant}>
            {/* Foto Placeholder (Lingkaran) */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4763A]/20 to-[#2D5A3D]/20 mb-4 flex items-center justify-center text-3xl border border-[#F5F1E8]/10 flex-shrink-0 mx-auto">
                {title.includes("Wali") ? "👩‍🏫" : "👮"}
            </div>

            {/* Jabatan Badge */}
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#D4763A]/10 text-[#D4763A] rounded-full mb-2">
                {title}
            </span>

            {/* Nama */}
            <h3 className="font-bold text-[#F5F1E8] text-sm md:text-base leading-tight">
                {name || "Belum Ditentukan"}
            </h3>
        </Card>
    );

    return (
        <section className="py-10">
            <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-[#F5F1E8] mb-2">Struktur Inti Kelas</h2>
                <div className="w-20 h-1 bg-[#D4763A] mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col gap-8 max-w-5xl mx-auto">
                {/* LEVEL 1: WALI KELAS */}
                <div className="flex justify-center">
                    <div className="w-full max-w-xs relative z-10">
                        <RenderCard
                            title="Wali Kelas"
                            name={waliKelas.nama}
                            variant="glass"
                            className="border-[#D4763A]/30 shadow-[0_0_50px_-10px_rgba(212,118,58,0.2)]"
                        />
                        {/* Connecting Line Down */}
                        <div className="absolute left-1/2 -bottom-8 w-px h-8 bg-[#F5F1E8]/20 -translate-x-1/2"></div>
                    </div>
                </div>

                {/* LEVEL 2: KETUA & WAKIL */}
                <div className="relative">
                    {/* Connecting Line Horizontal */}
                    <div className="absolute top-[-2rem] left-1/4 right-1/4 h-px bg-[#F5F1E8]/20 hidden md:block"></div>
                    {/* Connecting Lines Vertical Up */}
                    <div className="absolute top-[-2rem] left-1/4 w-px h-8 bg-[#F5F1E8]/20 hidden md:block"></div>
                    <div className="absolute top-[-2rem] right-1/4 w-px h-8 bg-[#F5F1E8]/20 hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 max-w-3xl mx-auto">
                        <div className="relative">
                            <RenderCard title="Ketua Kelas" name={ketua?.nama} variant="glass" />
                            {/* Line ke bawah (Sekretaris) */}
                            <div className="absolute left-1/2 -bottom-8 w-px h-8 bg-[#F5F1E8]/20 -translate-x-1/2 hidden md:block"></div>
                        </div>
                        <div className="relative">
                            <RenderCard title="Wakil Ketua" name={wakil?.nama} variant="glass" />
                            {/* Line ke bawah (Bendahara) */}
                            <div className="absolute left-1/2 -bottom-8 w-px h-8 bg-[#F5F1E8]/20 -translate-x-1/2 hidden md:block"></div>
                        </div>
                    </div>
                </div>

                {/* LEVEL 3: SEKRETARIS & BENDAHARA */}
                <div className="relative">
                    {/* Horizontal Lines for Groups */}
                    <div className="absolute top-[-2rem] left-[12%] right-[62%] h-px bg-[#F5F1E8]/20 hidden md:block"></div>
                    <div className="absolute top-[-2rem] left-[62%] right-[12%] h-px bg-[#F5F1E8]/20 hidden md:block"></div>


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Sekretaris Group */}
                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <RenderCard title="Sekretaris 1" name={sek1?.nama} variant="glass" />
                            <RenderCard title="Sekretaris 2" name={sek2?.nama} variant="glass" />
                        </div>

                        {/* Bendahara Group */}
                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <RenderCard title="Bendahara 1" name={ben1?.nama} variant="glass" />
                            <RenderCard title="Bendahara 2" name={ben2?.nama} variant="glass" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

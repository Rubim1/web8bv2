"use client";

import { motion, AnimatePresence } from "framer-motion";
import { students } from "@/data/students";
import Card from "@/components/ui/Card";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { jadwalPiket } from "@/data/piket"; // Import data piket
import { X, Calendar, User, Star, Quote } from "lucide-react";

interface StudentGridProps {
    limit?: number; // Batasi jumlah siswa yang ditampilkan (opsional)
    lightMode?: boolean; // Opsional: Paksa mode terang untuk Home Page
}

export default function StudentGrid({ limit, lightMode = false }: StudentGridProps) {
    // Ambil data siswa
    const displayedStudents = limit ? students.slice(0, limit) : students;
    const [selectedStudent, setSelectedStudent] = useState<any>(null); // State untuk modal
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // NUCLEAR OPTION SCROLL LOCK
    // Teknik paling ampuh: Ubah body jadi fixed position saat modal buka
    useEffect(() => {
        if (selectedStudent) {
            // 1. Simpan posisi scroll saat ini
            const scrollY = window.scrollY;

            // 2. Kunci body di posisi tersebut
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflowY = 'scroll'; // Tetap tampilkan scrollbar biar layout gak geser (optional)
        } else {
            // 3. Ambil posisi yang tersimpan
            const scrollY = document.body.style.top;

            // 4. Lepas kunci
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflowY = '';

            // 5. Restore scroll position
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }, [selectedStudent]);

    // Helper: Cari hari piket siswa
    const getPiketDay = (namaSiswa: string) => {
        const jadwal = jadwalPiket.find(p => p.anggota.some(a => a.toLowerCase().includes(namaSiswa.toLowerCase()) || namaSiswa.toLowerCase().includes(a.toLowerCase())));
        return jadwal ? jadwal.hari : "Bebas Tugas";
    };

    // Helper: Random Fun Quote/Description (Placeholder)
    const getFunFact = (id: number) => {
        const facts = [
            "Sering terlihat melamun memikirkan masa depan bumi.",
            "Ahli strategi dalam pemilihan menu kantin.",
            "Diam-diam menghanyutkan, sekali bergerak mengguncang dunia.",
            "Memiliki ambisi rahasia menguasai dunia pewayangan.",
            "Dikenal sebagai penjaga rahasia kelas yang handal.",
            "Hobi: Bernafas, Cita-cita: Jadi Ultraman.",
            "Selalu hadir tepat waktu, kecuali saat hujan meteor.",
        ];
        return facts[id % facts.length];
    };

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <div className="relative py-8">
            {/* Background Blobs */}
            {!lightMode && (
                <>
                    <div className="absolute top-20 left-10 w-96 h-96 bg-[#1DB954]/10 rounded-full blur-[100px] pointer-events-none -z-10" />
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#D4763A]/10 rounded-full blur-[80px] pointer-events-none -z-10" />
                </>
            )}

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-4"
            >
                {displayedStudents.map((student) => (
                    <motion.div
                        key={student.id}
                        variants={itemVariant}
                        className="h-full w-full relative"
                    >
                        {/* 
                            CARD CONTENT
                            UX FIX FINAL: Invisible Button Overlay
                            Tombol ini menutupi SELURUH kartu. Pasti kena klik.
                        */}
                        <div className="group relative w-full aspect-[4/5] flex items-end justify-center perspective-1000">

                            {/* !!! THE INVISIBLE BUTTON !!! */}
                            <button
                                onClick={() => setSelectedStudent(student)}
                                className="absolute inset-0 z-50 w-full h-full cursor-pointer opacity-0"
                                aria-label={`Lihat profil ${student.nama}`}
                            ></button>

                            {/* 1. GLASS FRAME Background */}
                            <div className="absolute bottom-0 w-full h-[85%] rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(29,185,84,0.3)] shadow-xl border border-white/20 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl overflow-visible pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                            </div>

                            {/* 2. Photo Layer */}
                            <div className="absolute bottom-4 w-[90%] h-[95%] transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) group-hover:scale-110 group-hover:-translate-y-6 z-10 flex items-end justify-center pointer-events-none">
                                <div className="w-full h-full flex items-center justify-center text-8xl drop-shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0 duration-500 select-none">
                                    {student.gender === "L" ? "👦🏻" : "👧🏻"}
                                </div>
                            </div>

                            {/* 3. Info Layer */}
                            <div className="absolute bottom-4 left-0 right-0 z-20 text-center px-2 pointer-events-none">
                                <div className="transition-all duration-300 transform group-hover:opacity-0 group-hover:-translate-y-2">
                                    <h3 className="text-xl font-bold text-white font-heading uppercase tracking-wider drop-shadow-md">
                                        {student.nama.split(" ")[0]}
                                    </h3>
                                    <div className="w-8 h-0.5 bg-white/30 mx-auto mt-2 rounded-full"></div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center justify-end pb-1">
                                    <p className="text-[10px] uppercase font-bold text-[#1DB954] mb-1 tracking-widest">Click Details</p>
                                    <span className="text-[10px] font-mono bg-black/50 backdrop-blur text-white px-2 py-0.5 rounded-sm border border-white/10">
                                        ABSEN {String(student.noAbsen).padStart(2, '0')}
                                    </span>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* MODAL DETAIL SISWA (PORTAL VERSION) - Fix Z-Index & Positioning Issues */}
            {mounted && createPortal(
                <AnimatePresence>
                    {selectedStudent && (
                        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6" style={{ perspective: "1000px" }}>

                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedStudent(null)}
                                className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
                            />

                            {/* Modal Content */}
                            <motion.div
                                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: 50, opacity: 0, scale: 0.95 }}
                                className="relative w-full max-w-2xl bg-[#121212] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-[10000] max-h-[90vh] md:max-h-[600px]"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedStudent(null)}
                                    className="absolute top-4 right-4 z-50 p-2 bg-black/60 text-white rounded-full hover:bg-[#D4763A] transition-colors border border-white/10"
                                    aria-label="Close Modal"
                                >
                                    <X size={24} />
                                </button>

                                {/* Left Panel */}
                                <div className="w-full md:w-5/12 bg-gradient-to-b from-[#222] to-[#0f0f0f] flex flex-col items-center justify-center p-8 relative overflow-hidden shrink-0">
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                                    <div className="relative text-[8rem] md:text-[10rem] z-10 filter drop-shadow-2xl animate-float">
                                        {selectedStudent.gender === "L" ? "👦🏻" : "👧🏻"}
                                    </div>
                                    <div className="mt-4 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                                        <span className="text-xs font-mono text-white/60 uppercase tracking-widest font-bold">
                                            {selectedStudent.gender === "L" ? "LAKI-LAKI" : "PEREMPUAN"}
                                        </span>
                                    </div>
                                </div>

                                {/* Right Panel */}
                                <div className="w-full md:w-7/12 p-6 md:p-10 flex flex-col overflow-y-auto bg-[#181818] relative">
                                    <div className="absolute top-0 right-0 p-32 bg-[#1DB954]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="relative z-10">
                                        <div className="mb-6 border-b border-white/5 pb-6">
                                            <h4 className="text-[#1DB954] font-bold tracking-wider text-xs uppercase mb-2 flex items-center gap-2">
                                                <Star size={12} /> Student Profile
                                            </h4>
                                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white leading-tight mb-3">
                                                {selectedStudent.nama}
                                            </h2>
                                            <div className="flex items-center gap-2 text-white/50 text-sm font-medium">
                                                <User size={14} />
                                                <span>No. Absen {selectedStudent.noAbsen}</span>
                                                <span className="w-1 h-1 bg-white/30 rounded-full mx-1"></span>
                                                <span>{selectedStudent.jabatan || "Member 8B"}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="bg-[#222] p-5 rounded-2xl border border-white/5 relative group">
                                                <Quote size={24} className="text-[#D4763A] opacity-20 absolute top-4 right-4" />
                                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Character Bio</h4>
                                                <p className="text-gray-200 text-sm md:text-base italic leading-relaxed font-serif">
                                                    "{getFunFact(selectedStudent.id)}"
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-between bg-[#2D5A3D]/10 p-4 rounded-xl border border-[#2D5A3D]/20 hover:border-[#2D5A3D]/50 transition-colors">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2.5 bg-[#2D5A3D] rounded-lg text-white shadow-lg shadow-[#2D5A3D]/20">
                                                        <Calendar size={18} />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[10px] font-bold text-[#1DB954] uppercase tracking-wider mb-0.5">Jadwal Piket</h4>
                                                        <p className="text-white font-bold text-lg">{getPiketDay(selectedStudent.nama)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <button
                                                onClick={() => setSelectedStudent(null)}
                                                className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2 text-sm"
                                            >
                                                Tutup Profil
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
}

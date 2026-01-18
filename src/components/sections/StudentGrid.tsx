"use client";

import { motion } from "framer-motion";
import { students } from "@/data/students";
import Card from "@/components/ui/Card";
import Image from "next/image";

interface StudentGridProps {
    limit?: number; // Batasi jumlah siswa yang ditampilkan (opsional)
    lightMode?: boolean; // Opsional: Paksa mode terang untuk Home Page
}

export default function StudentGrid({ limit, lightMode = false }: StudentGridProps) {
    // Ambil data siswa
    const displayedStudents = limit ? students.slice(0, limit) : students;

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
            {displayedStudents.map((student) => (
                <motion.div key={student.id} variants={item}>
                    <Card
                        className={`
                h-full flex flex-col items-center text-center group transition-all duration-300
                ${lightMode ? "bg-white border-0 shadow-sm" : "hover:bg-white/5"}
            `}
                        // Kalau lightMode, paksa variant default (yang udah di-override class-nya)
                        variant={lightMode ? "default" : "default"}
                        padding="sm"
                    >
                        {/* Foto Profile */}
                        <div className={`
                relative w-20 h-20 mb-4 rounded-full overflow-hidden border-2 flex-shrink-0 mx-auto
                ${lightMode
                                ? "border-[#D4763A]/20 group-hover:border-[#D4763A] bg-gray-50"
                                : "border-[#F5F1E8]/20 group-hover:border-[#D4763A] bg-[#F5F1E8]/5"
                            } 
                transition-colors
            `}>
                            {/* Fallback Emoji jika belum ada foto, atau Image component */}
                            <div className="flex items-center justify-center w-full h-full text-3xl bg-cover bg-center leading-none select-none pt-1">
                                {/* Kita pakai emoji random gender based on absen genap/ganjil dummy logic */}
                                {student.noAbsen % 2 === 0 ? "👧" : "👦"}
                            </div>
                        </div>

                        {/* Nomor Absen Badge */}
                        <span className={`
                text-[10px] uppercase tracking-wider font-bold mb-2 px-2 py-0.5 rounded-full
                ${lightMode
                                ? "text-[#D4763A] bg-[#D4763A]/10"
                                : "text-[#F5F1E8]/40 bg-[#F5F1E8]/5"
                            }
            `}>
                            No. {student.noAbsen}
                        </span>

                        {/* Detail Siswa */}
                        <h3 className={`font-bold text-sm mb-1 leading-tight ${lightMode ? "text-[#0f1c14]" : "text-[#F5F1E8]"}`}>
                            {student.nama}
                        </h3>

                        {student.jabatan && (
                            <p className={`text-xs font-medium ${lightMode ? "text-[#D4763A]" : "text-[#D4763A]"}`}>
                                {student.jabatan}
                            </p>
                        )}
                    </Card>
                </motion.div>
            ))}
        </motion.div>
    );
}

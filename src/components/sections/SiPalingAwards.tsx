"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { students } from "@/data/students";
import { awards } from "@/data/awards";
import { Crown, Trophy, Sparkles } from "lucide-react";

export default function SiPalingAwards() {
    const scrollRef = useRef(null);

    return (
        <section className="py-8 relative overflow-hidden">

            {/* Header Section */}
            <div className="flex items-center gap-3 mb-6 px-1">
                <div className="p-2 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl shadow-lg shadow-amber-500/20">
                    <Trophy size={24} className="text-white" strokeWidth={2.5} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold font-heading text-white tracking-tight flex items-center gap-2">
                        Hall of Fame
                        <span className="text-[10px] bg-white/10 text-white/60 px-2 py-0.5 rounded-full border border-white/5 font-mono">SEASON 1</span>
                    </h2>
                    <p className="text-xs text-[#b3b3b3]">Penghargaan bergengsi kelas 8B</p>
                </div>
            </div>

            {/* Scrolling Container */}
            <div
                className="flex gap-4 overflow-x-auto pb-8 pt-2 px-1 snap-x hide-scrollbar mask-linear-fade"
                ref={scrollRef}
            >
                {awards.map((award, index) => {
                    // Cari data siswa pemenang
                    const winner = students.find(s => s.id === award.studentId);

                    if (!winner) return null; // Skip kalau ID ga ketemu

                    return (
                        <motion.div
                            key={award.id}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative flex-shrink-0 w-64 snap-start group"
                        >
                            {/* AWARD CARD */}
                            <div className="relative h-80 rounded-3xl overflow-hidden bg-[#181818] border border-white/10 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-white/30 group-hover:shadow-2xl">

                                {/* Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-40 mix-blend-overlay group-hover:opacity-60 transition-opacity duration-500`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                                {/* Crown Icon (Floating) */}
                                <div className="absolute top-4 right-4 z-20 animate-bounce-slow">
                                    <Crown className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" size={24} fill="currentColor" />
                                </div>

                                {/* Main Visual (Emoji + Photo) */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 z-10">
                                    {/* Circle Glow */}
                                    <div className={`absolute w-32 h-32 rounded-full bg-gradient-to-r ${award.color} blur-[60px] opacity-50`}></div>

                                    {/* Photo */}
                                    <div className="relative w-32 h-32 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500">
                                        {/* Pake Emoji 3D atau component Image nanti */}
                                        <div className="w-full h-full flex items-center justify-center text-7xl drop-shadow-2xl scale-110 group-hover:scale-125 transition-transform duration-500">
                                            {winner.gender === "L" ? "🤴🏻" : "👸🏻"}
                                        </div>
                                        {/* Floating Emoji Title */}
                                        <div className="absolute -bottom-2 -right-2 text-4xl animate-pulse">
                                            {award.emoji}
                                        </div>
                                    </div>
                                </div>

                                {/* Text Info */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                                    <h3 className="text-xs font-bold font-mono text-white/60 mb-1 uppercase tracking-wider flex items-center gap-1">
                                        <Sparkles size={10} className="text-yellow-400" />
                                        {award.title}
                                    </h3>
                                    <h2 className="text-xl font-bold font-heading text-white leading-tight mb-2 truncate">
                                        {winner.nama}
                                    </h2>
                                    <p className="text-[10px] text-white/70 line-clamp-2 leading-relaxed bg-white/5 p-2 rounded-lg border border-white/5 backdrop-blur-sm">
                                        "{award.desc}"
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    );
                })}

                {/* Card "Coming Soon" */}
                <div className="flex-shrink-0 w-48 h-80 rounded-3xl bg-[#121212] border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-center p-4">
                    <span className="text-4xl grayscale opacity-50 mb-2">🤔</span>
                    <p className="text-sm font-bold text-white/50">Si Paling ???</p>
                    <p className="text-xs text-white/30 mt-1">Saranin nominasi baru!</p>
                </div>
            </div>

            {/* Fake Scroll Shadow */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#121212] to-transparent pointer-events-none z-30"></div>
        </section>
    );
}

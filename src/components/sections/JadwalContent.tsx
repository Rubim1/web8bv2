"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weeklySchedule } from "@/data/schedule";
import { jadwalPiket } from "@/data/piket";
import Card from "@/components/ui/Card";
import { getDayNameInfo } from "@/utils/timeUtils";
import { LayoutGrid, ListMusic, Clock, CalendarDays } from "lucide-react";

export default function JadwalContent() {
    const [activeTab, setActiveTab] = useState<"pelajaran" | "piket">("pelajaran");
    const [viewMode, setViewMode] = useState<"grid" | "lyrics">("grid");
    const { dayName: currentDay } = getDayNameInfo();

    // Logic untuk Lyrics View (Realtime Active Lesson)
    // Mencari pelajaran aktif berdasarkan jam sistem
    const [activeIndex, setActiveIndex] = useState(-1);
    const [currentTimeString, setCurrentTimeString] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const timeStr = `${hours}:${minutes}`;
            setCurrentTimeString(timeStr);

            // Cari index pelajaran aktif hari ini
            const todaySchedule = weeklySchedule.find(s => s.hari === currentDay);
            if (todaySchedule) {
                const idx = todaySchedule.jadwal.findIndex(item => {
                    const [start, end] = item.jam.split(' - ');
                    return timeStr >= start && timeStr <= end;
                });
                setActiveIndex(idx);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [currentDay]);

    return (
        <section className="py-8 bg-transparent min-h-[600px]">
            <div className="container">

                {/* CONTROLS HEADER */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                    {/* View Mode Toggle */}
                    <div className="flex bg-[#1e1e1e] p-1 rounded-lg border border-[#333]">
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`p-2 rounded-md transition-all ${viewMode === "grid" ? "bg-[#333] text-white" : "text-[#888] hover:text-white"}`}
                            title="Grid View"
                        >
                            <LayoutGrid size={20} />
                        </button>
                        <button
                            onClick={() => setViewMode("lyrics")}
                            className={`p-2 rounded-md transition-all ${viewMode === "lyrics" ? "bg-[#333] text-[#1DB954]" : "text-[#888] hover:text-white"}`}
                            title="Lyrics View (Immersive)"
                        >
                            <ListMusic size={20} />
                        </button>
                    </div>

                    {/* Tab Switcher (Original style but cleaner) */}
                    <div className="bg-[#1e1e1e] p-1.5 rounded-xl inline-flex gap-2 border border-[#333]">
                        <button
                            onClick={() => setActiveTab("pelajaran")}
                            className={`
                                px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 flex items-center gap-2
                                ${activeTab === "pelajaran"
                                    ? "bg-[#1DB954] text-black shadow-lg shadow-[#1DB954]/20"
                                    : "text-[#b3b3b3] hover:text-white hover:bg-[#333]"}
                            `}
                        >
                            <CalendarDays size={16} />
                            <span>Pelajaran</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("piket")}
                            className={`
                                px-6 py-2 rounded-lg font-bold text-sm transition-all duration-300 flex items-center gap-2
                                ${activeTab === "piket"
                                    ? "bg-[#D4763A] text-white shadow-lg shadow-[#D4763A]/20"
                                    : "text-[#b3b3b3] hover:text-white hover:bg-[#333]"}
                            `}
                        >
                            <span className="text-lg">🧹</span>
                            <span>Piket</span>
                        </button>
                    </div>

                    {/* Clock Display */}
                    <div className="hidden md:flex items-center gap-2 text-[#b3b3b3] font-mono bg-[#1e1e1e] px-4 py-2 rounded-lg border border-[#333]">
                        <Clock size={16} />
                        <span>{currentTimeString || "--:--"}</span>
                    </div>
                </div>

                {/* CONTENT AREA */}
                <AnimatePresence mode="wait">
                    {viewMode === "grid" ? (
                        /* === GRID VIEW (Classic) === */
                        <motion.div
                            key="grid"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {activeTab === "pelajaran" ? (
                                weeklySchedule?.map((schedule, idx) => {
                                    const isToday = schedule.hari === currentDay;
                                    return (
                                        <div
                                            key={idx}
                                            className={`
                                                relative overflow-hidden rounded-xl p-6 transition-all duration-300 group
                                                ${isToday ? "bg-[#282828] border border-[#1DB954]/50 shadow-[0_0_30px_-5px_rgba(29,185,84,0.1)]" : "bg-[#181818] border border-[#282828] hover:bg-[#202020]"}
                                            `}
                                        >
                                            {isToday && (
                                                <div className="absolute top-0 right-0 px-3 py-1 bg-[#1DB954] text-black text-[10px] font-bold uppercase rounded-bl-xl z-20">
                                                    Hari Ini
                                                </div>
                                            )}

                                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${isToday ? "bg-[#1DB954] text-black" : "bg-[#333] text-[#b3b3b3]"}`}>
                                                    {idx + 1}
                                                </div>
                                                <h3 className={`text-xl font-bold font-heading ${isToday ? "text-[#1DB954]" : "text-white"}`}>
                                                    {schedule.hari}
                                                </h3>
                                            </div>

                                            <ul className="space-y-4 relative z-10">
                                                {schedule.jadwal?.map((item, i) => (
                                                    <li key={i} className="flex justify-between items-start group/item">
                                                        <div className="flex flex-col">
                                                            {item.jp && (
                                                                <span className="text-[10px] font-bold text-[#b3b3b3] uppercase tracking-wider mb-0.5">
                                                                    {item.jp}
                                                                </span>
                                                            )}
                                                            <span className="font-medium text-[#eaeaea] group-hover/item:text-white transition-colors">{item.pelajaran}</span>
                                                        </div>
                                                        <span className="text-xs font-mono text-[#666] group-hover/item:text-[#1DB954] transition-colors">
                                                            {item.jam}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })
                            ) : (
                                jadwalPiket?.map((piket, idx) => {
                                    const isToday = piket.hari === currentDay;
                                    return (
                                        <div
                                            key={idx}
                                            className={`
                                                relative overflow-hidden rounded-xl p-6 transition-all duration-300
                                                ${isToday ? "bg-[#282828] border border-[#D4763A]/50" : "bg-[#181818] border border-[#282828] hover:bg-[#202020]"}
                                            `}
                                        >
                                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-inner ${isToday ? "bg-[#D4763A] text-white" : "bg-[#333] text-[#b3b3b3]"}`}>
                                                    🧹
                                                </div>
                                                <h3 className={`text-xl font-bold font-heading ${isToday ? "text-[#D4763A]" : "text-white"}`}>
                                                    {piket.hari}
                                                </h3>
                                            </div>
                                            <ul className="space-y-3 relative z-10">
                                                {piket.anggota?.map((nama, i) => (
                                                    <li key={i} className="flex items-center gap-3 group">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#555] group-hover:bg-[#D4763A] transition-colors"></div>
                                                        <span className="text-[#b3b3b3] group-hover:text-white transition-colors text-sm font-medium">{nama}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                })
                            )}
                        </motion.div>
                    ) : (
                        /* === LYRICS VIEW (Immersive) === */
                        <motion.div
                            key="lyrics"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            className="w-full flex flex-col items-center justify-start min-h-[60vh] py-10 text-center"
                        >
                            {activeTab === "pelajaran" ? (
                                (() => {
                                    const todaySchedule = weeklySchedule.find(s => s.hari === currentDay);

                                    if (!todaySchedule) return <div className="text-2xl text-white/50">Hari Libur / Tidak Ada Jadwal</div>;

                                    return (
                                        <div className="flex flex-col gap-8 w-full max-w-2xl relative">
                                            {/* Decorative Background Glow */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#1DB954]/5 blur-[100px] rounded-full pointer-events-none" />

                                            <h2 className="text-4xl font-bold font-heading text-white mb-8 tracking-tight">Today's <span className="text-[#1DB954]">Setlist</span></h2>

                                            {todaySchedule.jadwal.map((item, i) => {
                                                // State Logic (Simplified)
                                                // 0: Passed, 1: Active, 2: Upcoming
                                                // const state = i < activeIndex ? 0 : i === activeIndex ? 1 : 2;
                                                // Kalau activeIndex -1 (blm mulai/dah lewat), sesuaikan
                                                // Logic: highlight semua jika view mode, tapi fokus ke aktif

                                                const isActive = i === activeIndex;
                                                const isPassed = i < activeIndex; // Jika activeIndex valid

                                                // Visual Styles
                                                let opacity = "opacity-50 hover:opacity-100";
                                                let scale = "scale-100";
                                                let color = "text-[#b3b3b3]";

                                                if (isActive) {
                                                    opacity = "opacity-100";
                                                    scale = "scale-110";
                                                    color = "text-[#1DB954]";
                                                } else if (isPassed) {
                                                    opacity = "opacity-30 hover:opacity-60";
                                                }

                                                return (
                                                    <motion.div
                                                        key={i}
                                                        className={`transition-all duration-500 cursor-pointer flex flex-col items-center gap-1 ${opacity} ${scale}`}
                                                        layout
                                                    >
                                                        {isActive && <span className="text-[10px] uppercase tracking-[0.2em] text-[#1DB954] font-bold animate-pulse mb-1">Now Playing</span>}

                                                        <h3 className={`text-2xl md:text-4xl font-bold font-heading ${isActive ? "text-white" : color}`}>
                                                            {item.pelajaran}
                                                        </h3>

                                                        <div className="flex items-center gap-3 mt-1">
                                                            <span className="text-sm font-mono text-[#666]">{item.jam}</span>
                                                            {item.jp && <span className="px-2 py-0.5 bg-[#333] rounded text-[10px] text-[#aaa] font-bold">{item.jp}</span>}
                                                        </div>
                                                    </motion.div>
                                                )
                                            })}
                                        </div>
                                    );
                                })()
                            ) : (
                                // PIKET LYRICS VIEW
                                <div className="flex flex-col items-center gap-6 w-full max-w-xl">
                                    <h2 className="text-4xl font-bold font-heading text-white mb-2 tracking-tight">Piket <span className="text-[#D4763A]">Crew</span></h2>
                                    <p className="text-[#b3b3b3] mb-8">Daftar petugas kebersihan hari ini ({currentDay})</p>
                                    <div className="flex flex-col gap-4 w-full">
                                        {(() => {
                                            const todayPiket = jadwalPiket.find(p => p.hari === currentDay);
                                            if (!todayPiket) return <div className="text-xl text-white/50">Tidak ada jadwal piket.</div>;

                                            return todayPiket.anggota.map((nama, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="flex items-center gap-4 bg-[#282828] p-4 rounded-xl border border-[#333] hover:border-[#D4763A] transition-colors group"
                                                >
                                                    <span className="w-8 h-8 rounded-full bg-[#181818] flex items-center justify-center text-[#D4763A] font-bold text-sm border border-[#333] group-hover:bg-[#D4763A] group-hover:text-white transition-colors">
                                                        {idx + 1}
                                                    </span>
                                                    <span className="text-lg font-bold text-white tracking-wide">{nama}</span>
                                                </motion.div>
                                            ))
                                        })()}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

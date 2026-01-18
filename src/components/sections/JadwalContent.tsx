"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { weeklySchedule } from "@/data/schedule";
import { jadwalPiket } from "@/data/piket";
import Card from "@/components/ui/Card";
import { getDayNameInfo } from "@/utils/timeUtils";

export default function JadwalContent() {
    const [activeTab, setActiveTab] = useState<"pelajaran" | "piket">("pelajaran");
    const { dayName: currentDay } = getDayNameInfo();

    return (
        <section className="py-12 bg-transparent min-h-[600px]">
            <div className="container">

                {/* Tab Switcher */}
                <div className="flex justify-center mb-16">
                    <div className="bg-[#F5F1E8]/5 backdrop-blur-sm p-1.5 rounded-2xl inline-flex gap-2 border border-[#F5F1E8]/10">
                        <button
                            onClick={() => setActiveTab("pelajaran")}
                            className={`
                px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2
                ${activeTab === "pelajaran"
                                    ? "bg-[#2D5A3D] text-white shadow-lg shadow-[#2D5A3D]/20 scale-105"
                                    : "text-[#F5F1E8]/60 hover:text-[#F5F1E8] hover:bg-[#F5F1E8]/5"}
              `}
                        >
                            <span>📚</span>
                            <span>Jadwal Pelajaran</span>
                        </button>
                        <button
                            onClick={() => setActiveTab("piket")}
                            className={`
                px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2
                ${activeTab === "piket"
                                    ? "bg-[#D4763A] text-white shadow-lg shadow-[#D4763A]/20 scale-105"
                                    : "text-[#F5F1E8]/60 hover:text-[#F5F1E8] hover:bg-[#F5F1E8]/5"}
              `}
                        >
                            <span>🧹</span>
                            <span>Jadwal Piket</span>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="animate-fade-in-up">
                    {activeTab === "pelajaran" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {weeklySchedule?.map((schedule, idx) => {
                                const isToday = schedule.hari === currentDay;
                                return (
                                    <Card
                                        key={idx}
                                        className={`relative overflow-hidden transition-all duration-300 ${isToday ? "border-[#D4763A] shadow-[0_0_30px_-5px_rgba(212,118,58,0.2)] transform scale-[1.02]" : "hover:border-[#F5F1E8]/20"}`}
                                        variant={isToday ? "glass" : "default"}
                                    >
                                        {isToday && (
                                            <div className="absolute top-0 right-0 px-3 py-1 bg-[#D4763A] text-white text-[10px] font-bold uppercase rounded-bl-xl z-20">
                                                Hari Ini
                                            </div>
                                        )}

                                        <div className="flex items-center gap-3 mb-6 relative z-10">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-inner ${isToday ? "bg-[#D4763A]/20 text-[#D4763A]" : "bg-[#F5F1E8]/5 text-[#F5F1E8]"}`}>
                                                {idx + 1}
                                            </div>
                                            <h3 className={`text-xl font-bold ${isToday ? "text-[#D4763A]" : "text-[#F5F1E8]"}`}>
                                                {schedule.hari}
                                            </h3>
                                        </div>

                                        <ul className="space-y-4 relative z-10">
                                            {schedule.jadwal?.map((item, i) => (
                                                <li key={i} className="flex justify-between items-start group">
                                                    <span className="font-medium text-[#F5F1E8]/90 group-hover:text-[#F5F1E8] transition-colors">{item.pelajaran}</span>
                                                    <span className="text-xs font-mono text-[#F5F1E8]/40 bg-[#F5F1E8]/5 px-2 py-1 rounded group-hover:bg-[#F5F1E8]/10 transition-colors">
                                                        {item.jam}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {jadwalPiket?.map((piket, idx) => {
                                const isToday = piket.hari === currentDay;
                                return (
                                    <Card
                                        key={idx}
                                        className={`relative overflow-hidden transition-all duration-300 ${isToday ? "border-[#2D5A3D] shadow-[0_0_30px_-5px_rgba(45,90,61,0.2)] transform scale-[1.02]" : "hover:border-[#F5F1E8]/20"}`}
                                        variant={isToday ? "glass" : "default"}
                                    >
                                        {isToday && (
                                            <div className="absolute top-0 right-0 px-3 py-1 bg-[#2D5A3D] text-white text-[10px] font-bold uppercase rounded-bl-xl z-20">
                                                Hari Ini
                                            </div>
                                        )}

                                        <div className="flex items-center gap-3 mb-6 relative z-10">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-inner ${isToday ? "bg-[#2D5A3D]/20 text-[#2D5A3D]" : "bg-[#F5F1E8]/5 text-[#F5F1E8]"}`}>
                                                🧹
                                            </div>
                                            <h3 className={`text-xl font-bold ${isToday ? "text-[#2D5A3D]" : "text-[#F5F1E8]"}`}>
                                                {piket.hari}
                                            </h3>
                                        </div>

                                        <ul className="space-y-3 relative z-10">
                                            {piket.anggota?.map((nama, i) => (
                                                <li key={i} className="flex items-center gap-3 group">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5F1E8]/20 group-hover:bg-[#D4763A] transition-colors"></span>
                                                    <span className="text-[#F5F1E8]/80 group-hover:text-[#F5F1E8] transition-colors text-sm font-medium">{nama}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                );
                            })}
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}

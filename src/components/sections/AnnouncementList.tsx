// ============================================
// FILE: AnnouncementList.tsx
// FUNGSI: Menampilkan daftar pengumuman
// FITUR: Badge kategori, highlight penting
// ============================================

"use client"; // Client Component

import { motion } from "framer-motion";
import { announcements, categoryColors, getSortedAnnouncements } from "@/data/announcements";
import Card from "@/components/ui/Card";

// ============================================
// INTERFACE PROPS
// ============================================
interface AnnouncementListProps {
    limit?: number;  // Batasi jumlah pengumuman (opsional)
}

// ============================================
// KOMPONEN ANNOUNCEMENT LIST
// ============================================
export default function AnnouncementList({ limit }: AnnouncementListProps) {
    // Ambil pengumuman yang sudah diurutkan
    const sortedAnnouncements = getSortedAnnouncements();

    // Batasi jika ada limit
    const displayedAnnouncements = limit
        ? sortedAnnouncements.slice(0, limit)
        : sortedAnnouncements;

    return (
        <div className="space-y-4">
            {displayedAnnouncements.map((announcement, index) => (
                <motion.div
                    key={announcement.id}
                    // Animasi muncul dari bawah
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                    <Card
                        // Kita override variant jadi glass atau default tapi paksa bg-white agar teks hitam terbaca
                        variant="default"
                        className={`
                            bg-white shadow-sm hover:shadow-md transition-shadow
                            ${announcement.penting
                                ? "border-l-4 border-l-[#D4763A]"
                                : ""
                            }
                        `}
                    >
                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                            {/* Tanggal */}
                            <div className="flex-shrink-0 text-center md:text-left">
                                <div className="inline-flex flex-col items-center justify-center w-14 h-14 rounded-xl bg-[#2D5A3D]/10">
                                    {/* Ambil tanggal dari string */}
                                    <span className="text-xl font-bold text-[#2D5A3D]">
                                        {announcement.tanggal.split(" ")[0]}
                                    </span>
                                    <span className="text-xs text-[#6B7280]">
                                        {announcement.tanggal.split(" ")[1]?.slice(0, 3)}
                                    </span>
                                </div>
                            </div>

                            {/* Konten */}
                            <div className="flex-1">
                                {/* Header: Badge + Judul */}
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    {/* Badge kategori */}
                                    <span
                                        className={`
                      inline-block px-2 py-0.5 text-xs font-medium rounded-full
                      ${categoryColors[announcement.kategori] || "bg-gray-100 text-gray-800"}
                    `}
                                    >
                                        {announcement.kategori}
                                    </span>

                                    {/* Badge penting */}
                                    {announcement.penting && (
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full bg-red-100 text-red-800">
                                            <span>🔔</span>
                                            Penting
                                        </span>
                                    )}
                                </div>

                                {/* Judul */}
                                <h3 className="font-semibold text-lg text-[#2C2C2C] mb-2">
                                    {announcement.judul}
                                </h3>

                                {/* Preview text */}
                                <p className="text-[#6B7280] text-sm leading-relaxed">
                                    {announcement.preview}
                                </p>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            ))}

            {/* Pesan jika tidak ada pengumuman */}
            {displayedAnnouncements.length === 0 && (
                <Card className="text-center py-12">
                    <span className="text-4xl mb-4 block">📭</span>
                    <p className="text-[#6B7280]">Belum ada pengumuman</p>
                </Card>
            )}
        </div>
    );
}

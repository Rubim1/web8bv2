"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, User, Calendar, MapPin, ExternalLink, Hash } from "lucide-react";
import { students } from "@/data/students"; // Pastikan path import benar
import { navLinks, siteConfig } from "@/data/siteConfig";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Data type untuk hasil pencarian
type SearchResult = {
    id: string;
    type: "student" | "page" | "schedule" | "link";
    title: string;
    subtitle: string;
    href: string;
    icon: any;
};

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Focus input saat modal dibuka
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    // Reset saat tutup
    useEffect(() => {
        if (!isOpen) {
            setQuery("");
            setResults([]);
        }
    }, [isOpen]);

    // Logic Pencarian
    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const q = query.toLowerCase();
        const searchResults: SearchResult[] = [];

        // 1. Cari Halaman (NavLinks)
        navLinks.forEach(link => {
            if (link.label && link.label.toLowerCase().includes(q)) {
                searchResults.push({
                    id: `page-${link.href}`,
                    type: "page",
                    title: link.label,
                    subtitle: "Halaman Website",
                    href: link.href,
                    icon: MapPin
                });
            }
        });

        // 2. Cari Siswa
        students.slice(0, 50).forEach(student => { // Limit cek agar tidak berat
            // Fix: remove 'panggilan' coz it doesn't exist in data type
            // Fix: safaguard .nama check
            if (student.nama && student.nama.toLowerCase().includes(q)) {
                searchResults.push({
                    id: `student-${student.id}`, // Gunakan ID karena NISN mungkin null
                    type: "student",
                    title: student.nama,
                    subtitle: `Siswa - No. Absen ${student.noAbsen}`,
                    href: `/siswa`, // Sementara ke list siswa dulu krn blm ada halaman detail
                    icon: User
                });
            }
        });

        // 3. Cari External (Jurnal/Absen)
        if ("absensi".includes(q) || "absen".includes(q)) {
            searchResults.push({
                id: "ext-absen",
                type: "link",
                title: "Absensi Online",
                subtitle: "Link External",
                href: siteConfig.links.absensi,
                icon: ExternalLink
            });
        }

        setResults(searchResults.slice(0, 8)); // Limit display results
        setSelectedIndex(0);

    }, [query]);

    // Keyboard Navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex(prev => (prev + 1) % results.length);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (results[selectedIndex]) {
                handleSelect(results[selectedIndex]);
            }
        } else if (e.key === "Escape") {
            onClose();
        }
    };

    const handleSelect = (item: SearchResult) => {
        // Efek Suara (Nanti diintegrasikan)
        // playSound('pop'); 

        if (item.type === "link") {
            window.open(item.href, "_blank");
        } else {
            router.push(item.href);
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4">
            {/* Backdrop Blur */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-[#1e1e1e] rounded-xl shadow-2xl border border-[#333] overflow-hidden flex flex-col animate-fade-in-down">

                {/* Search Header */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-[#333]">
                    <Search className="text-[#b3b3b3]" size={20} />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Cari siswa, jadwal, atau halaman..."
                        className="flex-1 bg-transparent border-none outline-none text-white placeholder-[#555] text-lg font-medium"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button onClick={onClose} className="p-1 hover:bg-[#333] rounded-md text-[#b3b3b3]">
                        <X size={20} />
                    </button>
                </div>

                {/* Results List */}
                <div className="max-h-[60vh] overflow-y-auto custom-scrollbar p-2">
                    {results.length > 0 ? (
                        <div className="flex flex-col gap-1">
                            {results.map((item, index) => {
                                const Icon = item.icon;
                                const isSelected = index === selectedIndex;
                                return (
                                    <div
                                        key={item.id}
                                        onClick={() => handleSelect(item)}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                        className={`
                                            flex items-center gap-4 px-3 py-3 rounded-lg cursor-pointer transition-colors
                                            ${isSelected ? "bg-[#282828]" : "hover:bg-[#282828]"}
                                        `}
                                    >
                                        <div className={`
                                            w-10 h-10 rounded-full flex items-center justify-center
                                            ${isSelected ? "bg-[#1DB954] text-black" : "bg-[#333] text-[#b3b3b3]"}
                                        `}>
                                            <Icon size={20} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className={`font-medium ${isSelected ? "text-white" : "text-[#eaeaea]"}`}>
                                                {item.title}
                                            </span>
                                            <span className="text-xs text-[#888]">
                                                {item.subtitle}
                                            </span>
                                        </div>
                                        {isSelected && (
                                            <div className="ml-auto text-xs text-[#b3b3b3] font-mono opacity-50">
                                                Go ↵
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="py-12 text-center text-[#555]">
                            {query ? (
                                <p>Tidak ada hasil untuk "{query}"</p>
                            ) : (
                                <div className="flex flex-col items-center gap-2">
                                    <Hash size={32} className="opacity-20 mb-2" />
                                    <p className="text-sm">Ketik untuk mulai mencari...</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer Hint */}
                <div className="px-4 py-2 bg-[#181818] border-t border-[#333] flex justify-between items-center text-[10px] text-[#555]">
                    <div className="flex gap-2">
                        <span>↑↓ navigasi</span>
                        <span>↵ pilih</span>
                        <span>esc tutup</span>
                    </div>
                    <span>8B Search Engine</span>
                </div>
            </div>
        </div>
    );
}

// Tambahan CSS Animation inline untuk modal ini
// Add to globals.css later: .animate-fade-in-down { animation: fadeInDown 0.2s ease-out; }

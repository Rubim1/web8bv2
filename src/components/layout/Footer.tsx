"use client";

import { useState } from "react";
import {
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Shuffle,
    Repeat,
    Mic2,
    ListMusic,
    MonitorSpeaker,
    Volume2,
    Maximize2,
    Heart
} from "lucide-react";

export default function Footer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(30); // Dummy progress
    const [isMinimized, setIsMinimized] = useState(false);

    // Kalau minimized, tampilkan bar kecil aja (atau tombol restore)
    if (isMinimized) {
        return (
            <div className="fixed bottom-4 right-4 z-[100] animate-fade-in-up">
                <button
                    onClick={() => setIsMinimized(false)}
                    className="flex items-center gap-2 bg-[#181818] border border-[#282828] text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                    <span className="text-xs font-bold text-[#1DB954]">Now Playing</span>
                    <span className="text-xs max-w-[100px] truncate">8B Jurassic Anthem</span>
                    <Maximize2 size={14} className="ml-2" />
                </button>
            </div>
        );
    }

    return (
        <footer className="fixed bottom-[64px] md:bottom-0 left-0 right-0 bg-[#181818] border-t border-[#282828] px-4 py-3 z-[100] md:h-[90px] h-[64px] flex items-center justify-between pb-[env(safe-area-inset-bottom)] transition-all duration-300">

            {/* Toggle Minimize Button (Absolute position) */}
            <button
                onClick={() => setIsMinimized(true)}
                className="absolute top-[-12px] right-4 bg-[#181818] border border-[#282828] border-b-0 rounded-t-md px-2 py-0.5 text-[#b3b3b3] hover:text-white z-50 flex items-center gap-1 shadow-sm"
                title="Minimize Player"
            >
                <div className="w-8 h-1 bg-[#b3b3b3]/20 rounded-full mx-auto" />
            </button>

            {/* === LEFT: Now Playing Info === */}
            <div className="flex items-center gap-4 w-[30%] min-w-[120px]">
                {/* Album Art (Bisa diganti foto kelas nanti) */}
                <div className="relative group hidden md:block">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1DB954] to-[#0f1c14] rounded shadow-lg flex items-center justify-center text-2xl">
                        🦕
                    </div>
                </div>
                {/* Mobile Album Art (Smaller) */}
                <div className="relative group md:hidden">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1DB954] to-[#0f1c14] rounded shadow-sm flex items-center justify-center text-lg">
                        🦕
                    </div>
                </div>

                <div className="flex flex-col justify-center overflow-hidden">
                    <a href="#" className="font-bold text-sm text-white hover:underline truncate">
                        8B Jurassic Anthem
                    </a>
                    <a href="#" className="text-xs text-[#b3b3b3] hover:underline truncate">
                        Siswa & Wali Kelas
                    </a>
                </div>

                <button className="text-[#1DB954] hidden md:block hover:scale-105 transition-transform">
                    <Heart size={18} fill="#1DB954" />
                </button>
            </div>


            {/* === CENTER: Player Controls (Desktop Only Mostly) === */}
            <div className="flex flex-col items-center w-[40%] max-w-[722px] px-4 hidden md:flex">
                <div className="flex items-center gap-6 mb-2">
                    <button className="text-[#b3b3b3] hover:text-white transition-colors" title="Shuffle">
                        <Shuffle size={18} />
                    </button>
                    <button className="text-[#b3b3b3] hover:text-white transition-colors" title="Previous">
                        <SkipBack size={20} fill="currentColor" />
                    </button>
                    <button
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform text-black"
                        onClick={() => setIsPlaying(!isPlaying)}
                    >
                        {isPlaying ? <Pause size={18} fill="black" /> : <Play size={18} fill="black" className="ml-0.5" />}
                    </button>
                    <button className="text-[#b3b3b3] hover:text-white transition-colors" title="Next">
                        <SkipForward size={20} fill="currentColor" />
                    </button>
                    <button className="text-[#b3b3b3] hover:text-white transition-colors" title="Repeat">
                        <Repeat size={18} />
                    </button>
                </div>

                {/* Progress Bar (Dummy) */}
                <div className="w-full flex items-center gap-2 text-xs font-mono text-[#b3b3b3]">
                    <span>1:23</span>
                    <div className="h-1 flex-1 bg-[#4d4d4d] rounded-full overflow-hidden group cursor-pointer">
                        <div className="h-full bg-white w-[30%] group-hover:bg-[#1DB954] relative"></div>
                    </div>
                    <span>4:20</span>
                </div>
            </div>


            {/* === RIGHT: Volume & Extras (Desktop Only) === */}
            <div className="flex items-center justify-end gap-4 w-[30%] min-w-[120px] hidden md:flex">
                <button className="text-[#b3b3b3] hover:text-white">
                    <Mic2 size={18} />
                </button>
                <button className="text-[#b3b3b3] hover:text-white">
                    <ListMusic size={18} />
                </button>
                <button className="text-[#b3b3b3] hover:text-white">
                    <MonitorSpeaker size={18} />
                </button>
                <div className="flex items-center gap-2 w-24">
                    <Volume2 size={18} className="text-[#b3b3b3]" />
                    <div className="h-1 flex-1 bg-[#4d4d4d] rounded-full overflow-hidden cursor-pointer group">
                        <div className="h-full bg-white w-[80%] group-hover:bg-[#1DB954]"></div>
                    </div>
                </div>
                <button className="text-[#b3b3b3] hover:text-white">
                    <Maximize2 size={18} />
                </button>
            </div>

            {/* === MOBILE CONTROLS (Simplificado) === */}
            <div className="flex items-center gap-4 md:hidden">
                <button className="text-[#1DB954]">
                    <Heart size={20} fill="#1DB954" />
                </button>
                <button
                    className="text-white"
                    onClick={() => setIsPlaying(!isPlaying)}
                >
                    {isPlaying ? <Pause size={28} fill="white" /> : <Play size={28} fill="white" />}
                </button>
            </div>

        </footer>
    );
}

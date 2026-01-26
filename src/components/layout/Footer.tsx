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
    VolumeX,
    Maximize2,
    Heart,
    ChevronDown,
    ChevronUp
} from "lucide-react";

import { useSound } from "@/context/SoundContext";
// ... imports

export default function Footer() {
    const [isPlaying, setIsPlaying] = useState(false); // Dummy Playback state
    const [progress, setProgress] = useState(30);
    const [isMinimized, setIsMinimized] = useState(false);

    // Connect to Global Sound Context
    const { isMuted, toggleMute } = useSound();

    // Kalau minimized, tampilkan bar kecil aja (Floating)
    if (isMinimized) {
        return (
            <div className="fixed bottom-[80px] md:bottom-6 right-4 z-[9999] animate-fade-in-up">
                <button
                    onClick={() => setIsMinimized(false)}
                    className="flex items-center gap-3 bg-[#181818] border border-[#282828] text-white pl-4 pr-3 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform"
                >
                    <div className="w-2 h-2 bg-[#1DB954] rounded-full animate-pulse" />
                    <div className="flex flex-col items-start mr-2">
                        <span className="text-[10px] font-bold text-[#1DB954] uppercase leading-none">Music Player</span>
                        <span className="text-xs font-bold max-w-[100px] truncate leading-tight">8B Anthem</span>
                    </div>
                    <ChevronUp size={20} className="text-[#b3b3b3]" />
                </button>
            </div>
        );
    }

    return (
        <footer className="fixed bottom-[64px] md:bottom-0 left-0 right-0 bg-[#181818] border-t border-[#282828] px-4 py-3 z-[100] md:h-[90px] h-[64px] flex items-center justify-between pb-[env(safe-area-inset-bottom)] transition-all duration-300 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">

            {/* Toggle Minimize Button (Absolute position) */}
            <button
                onClick={() => setIsMinimized(true)}
                className="absolute top-[-24px] right-4 bg-[#181818] border border-[#282828] border-b-0 rounded-t-lg px-3 py-1 text-[#b3b3b3] hover:text-white z-50 flex items-center justify-center shadow-lg group"
                title="Minimize Player"
            >
                <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </button>

            {/* === CENTER: Player Controls (Desktop) === */}
            <div className="flex flex-col items-center w-[40%] max-w-[722px] px-4 hidden md:flex">
                <div className="flex items-center gap-6 mb-2">
                    {/* ... (Shuffle, Prev) ... */}
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


            {/* === RIGHT: Volume & Extras (Desktop) === */}
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

                {/* Volume Control Connected to Context */}
                <div className="flex items-center gap-2 w-24 group">
                    <button onClick={toggleMute} className="text-[#b3b3b3] hover:text-white" title={isMuted ? "Unmute" : "Mute"}>
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                    <div className="h-1 flex-1 bg-[#4d4d4d] rounded-full overflow-hidden cursor-pointer">
                        <div className={`h-full ${isMuted ? 'bg-[#b3b3b3]' : 'bg-[#1DB954]'} w-[${isMuted ? '0%' : '80%'}] group-hover:bg-[#1ed760] transition-all`}></div>
                    </div>
                </div>

                <button className="text-[#b3b3b3] hover:text-white">
                    <Maximize2 size={18} />
                </button>
            </div>

            {/* === MOBILE CONTROLS (Updated with Mute) === */}
            <div className="flex items-center gap-4 md:hidden">
                {/* Button Mute di Mobile */}
                <button
                    className={`${isMuted ? 'text-red-500' : 'text-[#b3b3b3]'} hover:text-white`}
                    onClick={toggleMute}
                >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
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

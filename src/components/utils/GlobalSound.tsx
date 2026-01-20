"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function GlobalSound() {
    const [isMuted, setIsMuted] = useState(false);
    const audioContextRef = useRef<AudioContext | null>(null);

    // Initialize Audio Context on first interaction
    useEffect(() => {
        const initAudio = () => {
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            if (audioContextRef.current.state === "suspended") {
                audioContextRef.current.resume();
            }
        };

        window.addEventListener("click", initAudio, { once: true });
        return () => window.removeEventListener("click", initAudio);
    }, []);

    // SOUND GENERATORS
    const playSound = (type: "click" | "hover" | "switch") => {
        if (isMuted || !audioContextRef.current) return;

        const ctx = audioContextRef.current;
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        const now = ctx.currentTime;

        if (type === "click") {
            // "Pop" Sound - High pitch short decay
            osc.type = "sine";
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(300, now + 0.1);
            gainNode.gain.setValueAtTime(0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            osc.start(now);
            osc.stop(now + 0.1);

        } else if (type === "hover") {
            // "Tick" Sound - Very subtle
            osc.type = "triangle";
            osc.frequency.setValueAtTime(400, now);
            gainNode.gain.setValueAtTime(0.05, now);
            gainNode.gain.linearRampToValueAtTime(0.001, now + 0.03);
            osc.start(now);
            osc.stop(now + 0.03);

        } else if (type === "switch") {
            // "Swoosh/Swipe" Sound - Frequency sweep
            osc.type = "sine";
            osc.frequency.setValueAtTime(300, now);
            osc.frequency.linearRampToValueAtTime(600, now + 0.15);
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.linearRampToValueAtTime(0.01, now + 0.15);
            osc.start(now);
            osc.stop(now + 0.15);
        }
    };

    // GLOBAL EVENT LISTENERS
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Cek apakah yang diklik adalah button, link, atau punya role="button"
            const clickable = target.closest("button, a, [role='button'], .cursor-pointer");
            if (clickable) {
                playSound("click");
            }
        };

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const hoverable = target.closest("button, a, [role='button']");
            if (hoverable) {
                playSound("hover");
            }
        };

        window.addEventListener("click", handleClick);
        // Hover agak tricky kalau global, bisa berisik. Kita pasang selektif atau global tapi debounce.
        // Untuk sekarang saya disable global hover biar ga annoying, cukup click dulu.
        // window.addEventListener("mouseover", handleMouseEnter); 

        return () => {
            window.removeEventListener("click", handleClick);
            // window.removeEventListener("mouseover", handleMouseEnter);
        };
    }, [isMuted]);

    // Render Mute Button (Floating)
    return (
        <div className="fixed bottom-24 right-6 z-[200] md:bottom-6 md:right-6">
            <button
                onClick={() => setIsMuted(!isMuted)}
                className="bg-[#121212]/80 backdrop-blur border border-[#333] p-2 rounded-full text-[#b3b3b3] hover:text-white hover:border-[#1DB954] transition-all shadow-lg"
                title={isMuted ? "Unmute Sounds" : "Mute Sounds"}
            >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
        </div>
    );
}

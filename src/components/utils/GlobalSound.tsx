"use client";

import { useEffect } from "react";
import { useSound } from "@/context/SoundContext";

export default function GlobalSound() {
    const { playSound } = useSound();

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
        // window.addEventListener("mouseover", handleMouseEnter); 

        return () => {
            window.removeEventListener("click", handleClick);
            // window.removeEventListener("mouseover", handleMouseEnter);
        };
    }, [playSound]);

    // Render nothing (Logic only)
    return null;
}

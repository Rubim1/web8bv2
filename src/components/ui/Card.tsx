"use client";

import { ReactNode, useRef, useState, MouseEvent } from "react";

// ============================================
// INTERFACE PROPS
// ============================================
interface CardProps {
    children: ReactNode;
    className?: string;
    variant?: "default" | "hover" | "glass";
    padding?: "sm" | "md" | "lg";
    onClick?: () => void;
    spotlight?: boolean;
}

// ============================================
// KOMPONEN CARD (DARK MODE COMPATIBLE)
// ============================================
export default function Card({
    children,
    className = "",
    variant = "default",
    padding = "md",
    onClick,
    spotlight = true,
}: CardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || !spotlight) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        if (spotlight) setOpacity(1);
    };

    const handleMouseLeave = () => {
        if (spotlight) setOpacity(0);
    };

    // Mapping padding size
    const paddingClasses = {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    };

    // Mapping variant ke class css utility yang sudah kita define di globals.css
    // Kita GANTI 'bg-white' jadi class .card (yang pake var --color-card)
    const variantClasses = {
        default: "card",
        hover: "card card-hover cursor-pointer",
        glass: "backdrop-blur-xl bg-white/5 border border-white/10", // Manual glass super
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`
        relative overflow-hidden
        ${paddingClasses[padding]}
        ${variantClasses[variant]}
        ${className}
      `}
            onClick={onClick}
        >
            {/* SPOTLIGHT EFFECT LAYER (UPDATED COLOR) */}
            {spotlight && (
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                    style={{
                        opacity,
                        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212, 118, 58, 0.08), transparent 40%)`,
                    }}
                />
            )}

            {/* ADDITIONAL BORDER GLOW */}
            {spotlight && (
                <div
                    className="pointer-events-none absolute inset-0 rounded-2xl transition duration-300 opacity-0"
                    style={{
                        opacity,
                        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212, 118, 58, 0.15), transparent 40%)`,
                        maskImage: "linear-gradient(black, black), content-box",
                        maskComposite: "exclude",
                        WebkitMaskImage: "linear-gradient(black, black), content-box",
                        WebkitMaskComposite: "xor",
                        padding: "1px",
                    }}
                />
            )}

            {/* CONTENT */}
            <div className="relative z-10 text-[var(--color-text)]">
                {children}
            </div>
        </div>
    );
}

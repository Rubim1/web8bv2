"use client";

import { useEffect, useState } from "react";

// ============================================
// KOMPONEN FIREFLIES
// FUNGSI: Menampilkan partikel kunang-kunang melayang
// PERFORMANCE: Menggunakan CSS Animation murni
// ============================================

export default function Fireflies({ count = 15 }: { count?: number }) {
    const [fireflies, setFireflies] = useState<{ id: number; style: any }[]>([]);

    useEffect(() => {
        // Generate random fireflies di client-side (biar ga hydration mismatch)
        const newFireflies = Array.from({ length: count }).map((_, i) => {
            // Random properties
            const size = Math.random() * 4 + 2; // 2px - 6px
            const top = Math.random() * 100; // 0% - 100%
            const left = Math.random() * 100; // 0% - 100%
            const duration = Math.random() * 10 + 10; // 10s - 20s animation
            const delay = Math.random() * 5; // 0s - 5s delay

            return {
                id: i,
                style: {
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `${top}%`,
                    left: `${left}%`,
                    animationDuration: `${duration}s`,
                    animationDelay: `${delay}s`,
                },
            };
        });

        setFireflies(newFireflies);
    }, [count]);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {fireflies.map((firefly) => (
                <div
                    key={firefly.id}
                    className="absolute rounded-full bg-[#D4763A] opacity-60 mix-blend-screen animate-float-random"
                    style={{
                        ...firefly.style,
                        boxShadow: "0 0 10px 2px rgba(212, 118, 58, 0.4)", // Glow effect
                    }}
                />
            ))}
            <style jsx>{`
        @keyframes float-random {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translate(20px, -30px) scale(1.2);
            opacity: 0.8;
          }
          50% {
            transform: translate(-10px, -50px) scale(0.9);
            opacity: 0.4;
          }
          75% {
            transform: translate(-30px, -20px) scale(1.1);
            opacity: 0.7;
          }
        }
        .animate-float-random {
          animation-name: float-random;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
        </div>
    );
}

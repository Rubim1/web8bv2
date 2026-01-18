// ============================================
// FILE: PageTransition.tsx
// FUNGSI: Wrapper untuk animasi transisi halaman
// LIBRARY: Framer Motion
// ============================================

"use client"; // Client Component (butuh animasi)

import { motion } from "framer-motion";
import { ReactNode } from "react";

// ============================================
// INTERFACE PROPS
// ============================================
interface PageTransitionProps {
    children: ReactNode;  // Konten halaman yang dibungkus
}

// ============================================
// KONFIGURASI ANIMASI
// ============================================

// Variants untuk animasi masuk/keluar
const pageVariants = {
    // State awal (sebelum animasi masuk)
    initial: {
        opacity: 0,           // Transparan
        y: 20,                // 20px ke bawah
    },
    // State akhir (setelah animasi masuk)
    animate: {
        opacity: 1,           // Fully visible
        y: 0,                 // Posisi normal
    },
    // State keluar (saat pindah halaman)
    exit: {
        opacity: 0,
        y: -20,               // 20px ke atas
    },
};

// Konfigurasi transisi
const pageTransition = {
    type: "tween",          // Tipe animasi (tween = smooth)
    ease: "easeOut",        // Easing function
    duration: 0.3,          // Durasi 300ms
};

// ============================================
// KOMPONEN PAGE TRANSITION
// ============================================
export default function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div
            // Gunakan variants yang sudah didefinisikan
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
        >
            {children}
        </motion.div>
    );
}

// ============================================
// FILE: SectionHeading.tsx
// FUNGSI: Komponen heading untuk setiap section
// REUSABLE: Dipakai di semua halaman
// ============================================

import { ReactNode } from "react";

// ============================================
// INTERFACE PROPS
// ============================================
interface SectionHeadingProps {
    title: string;              // Judul utama
    subtitle?: string;          // Subjudul/deskripsi (opsional)
    badge?: string;             // Badge/label kecil di atas judul (opsional)
    align?: "left" | "center";  // Alignment (default: center)
    children?: ReactNode;       // Konten tambahan di bawah (opsional)
}

// ============================================
// KOMPONEN SECTION HEADING
// ============================================
export default function SectionHeading({
    title,
    subtitle,
    badge,
    align = "center",
    children,
}: SectionHeadingProps) {
    return (
        <div
            className={`
        mb-12
        ${align === "center" ? "text-center" : "text-left"}
      `}
        >
            {/* Badge (opsional) - Label kecil di atas judul */}
            {badge && (
                <span className="badge badge-primary mb-3 inline-block">
                    {badge}
                </span>
            )}

            {/* Judul utama dengan gradient accent */}
            <h2 className="text-[#2C2C2C] mb-4">
                {title}
            </h2>

            {/* Garis dekoratif di bawah judul */}
            <div
                className={`
          flex items-center gap-2 mb-4
          ${align === "center" ? "justify-center" : "justify-start"}
        `}
            >
                {/* Garis kiri */}
                <span className="w-12 h-1 bg-[#2D5A3D] rounded-full" />
                {/* Emoji dino */}
                <span className="text-xl">🦕</span>
                {/* Garis kanan */}
                <span className="w-12 h-1 bg-[#D4763A] rounded-full" />
            </div>

            {/* Subtitle (opsional) */}
            {subtitle && (
                <p
                    className={`
            text-[#6B7280] max-w-2xl leading-relaxed
            ${align === "center" ? "mx-auto" : ""}
          `}
                >
                    {subtitle}
                </p>
            )}

            {/* Konten tambahan */}
            {children}
        </div>
    );
}

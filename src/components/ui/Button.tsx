// ============================================
// FILE: Button.tsx
// FUNGSI: Komponen button reusable
// VARIANT: Primary, secondary, accent, ghost
// ============================================

import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

// ============================================
// INTERFACE PROPS
// ============================================
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;                         // Konten button
    variant?: "primary" | "secondary" | "accent" | "ghost"; // Variant styling
    size?: "sm" | "md" | "lg";                   // Ukuran button
    href?: string;                               // Jika ada, render sebagai Link
    icon?: ReactNode;                            // Icon di samping text (opsional)
    iconPosition?: "left" | "right";             // Posisi icon
    fullWidth?: boolean;                         // Apakah full width
    isLoading?: boolean;                         // State loading
}

// ============================================
// KOMPONEN BUTTON
// ============================================
export default function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    icon,
    iconPosition = "left",
    fullWidth = false,
    isLoading = false,
    className = "",
    disabled,
    ...props
}: ButtonProps) {
    // === MAPPING CLASSES ===

    // Class untuk ukuran
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    // Class untuk variant
    const variantClasses = {
        primary: `
      bg-gradient-to-r from-[#2D5A3D] to-[#3D7A52]
      text-white
      shadow-md hover:shadow-lg
      hover:-translate-y-0.5
    `,
        secondary: `
      bg-transparent
      text-[#2D5A3D]
      border-2 border-[#2D5A3D]
      hover:bg-[#2D5A3D] hover:text-white
    `,
        accent: `
      bg-gradient-to-r from-[#D4763A] to-[#E89050]
      text-white
      shadow-md hover:shadow-lg
      hover:-translate-y-0.5
    `,
        ghost: `
      bg-transparent
      text-[#2D5A3D]
      hover:bg-[#2D5A3D]/10
    `,
    };

    // Gabungkan semua class
    const buttonClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-xl
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

    // === KONTEN BUTTON ===
    const content = (
        <>
            {/* Icon kiri */}
            {icon && iconPosition === "left" && !isLoading && (
                <span className="flex-shrink-0">{icon}</span>
            )}

            {/* Loading spinner */}
            {isLoading && (
                <svg
                    className="animate-spin h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                </svg>
            )}

            {/* Text */}
            <span>{children}</span>

            {/* Icon kanan */}
            {icon && iconPosition === "right" && !isLoading && (
                <span className="flex-shrink-0">{icon}</span>
            )}
        </>
    );

    // === RENDER ===
    // Jika ada href, render sebagai Link
    if (href) {
        return (
            <Link href={href} className={buttonClasses}>
                {content}
            </Link>
        );
    }

    // Default: render sebagai button
    return (
        <button
            className={buttonClasses}
            disabled={disabled || isLoading}
            {...props}
        >
            {content}
        </button>
    );
}

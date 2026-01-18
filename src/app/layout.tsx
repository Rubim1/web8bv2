// ============================================
// FILE: layout.tsx
// FUNGSI: Root layout untuk seluruh website
// BERISI: Metadata, fonts, Global Components (Cursor, Preloader, dll)
// ============================================

// Import dependencies
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

// Import komponen layout
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Import komponen utilitas & visual effects
import AOSInit from "@/components/utils/AOSInit";
import SmoothScroll from "@/components/utils/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";

// Import konfigurasi
import { siteConfig } from "@/data/siteConfig";

// ============================================
// FONT CONFIGURATION
// ============================================

// Font untuk body text
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

// Font untuk heading
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

// ============================================
// METADATA (SEO)
// ============================================
export const metadata: Metadata = {
  title: {
    default: `${siteConfig.namaLengkap} | ${siteConfig.tahunAjaran}`,
    template: `%s | ${siteConfig.nama}`,
  },
  description: siteConfig.deskripsi,
  keywords: [
    "Kelas 8B",
    "SMPN 1 Cluring",
    "Solidaritas",
    "Website Kelas",
    siteConfig.tahunAjaran,
  ],
  authors: [{ name: "itsbym" }],
  openGraph: {
    title: siteConfig.namaLengkap,
    description: siteConfig.deskripsi,
    type: "website",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ============================================
// ROOT LAYOUT COMPONENT
// ============================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        {/* GLOBAL VISUAL LAYERS */}
        <Preloader />      {/* 1. Loading Screen (Paling atas) */}
        <CustomCursor />   {/* 2. Custom Cursor (Desktop only) */}
        <SmoothScroll />   {/* 3. Smooth Scroll Logic */}
        <AOSInit />        {/* 4. Scroll Animation Logic */}

        {/* APP STRUCTURE */}

        {/* Navbar - Fixed di atas */}
        <Navbar />

        {/* Main content area */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

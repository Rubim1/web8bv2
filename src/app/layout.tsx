// ============================================
// FILE: layout.tsx
// FUNGSI: Root layout untuk seluruh website
// BERISI: Metadata, fonts, Global Components (Cursor, Preloader, dll)
// ============================================

// Import dependencies
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

// Import komponen layout
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Import komponen utilitas & visual effects
import AOSInit from "@/components/utils/AOSInit";
import SmoothScroll from "@/components/utils/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";
import GlobalSound from "@/components/utils/GlobalSound";
import { SoundProvider } from "@/context/SoundContext";

// Import konfigurasi
import { siteConfig } from "@/data/siteConfig";

// ============================================
// FONT CONFIGURATION
// ============================================

// Font untuk body text (Sans Serif Modern)
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

// Font untuk Display / Headings (Artistic & Bold Hierarki)
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

// ... METADATA ...

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
      className={`${plusJakarta.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <SoundProvider>
          {/* GLOBAL VISUAL LAYERS */}
          <Preloader />      {/* 1. Loading Screen (Paling atas) */}
          <CustomCursor />   {/* 2. Custom Cursor (Desktop only) */}
          <SmoothScroll />   {/* 3. Smooth Scroll Logic */}
          <AOSInit />        {/* 4. Scroll Animation Logic */}
          <GlobalSound />    {/* 5. Global Audio Logic (No UI) */}

          {/* APP STRUCTURE */}
          <Navbar />

          {/* Main content area */}
          <main className="min-h-screen md:pl-[var(--sidebar-width)] pb-20 md:pb-0 relative z-0 transition-[padding] duration-300 ease-in-out">
            {children}
          </main>

          {/* Footer */}
          <div className="md:pl-[var(--sidebar-width)] transition-[padding] duration-300 ease-in-out">
            <Footer />
          </div>
        </SoundProvider>
      </body>
    </html>
  );
}

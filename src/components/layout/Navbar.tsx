"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, navLinks } from "@/data/siteConfig";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled
                    ? "bg-[#0f1c14]/80 backdrop-blur-md shadow-sm py-3 border-b border-[#F5F1E8]/10"
                    : "bg-transparent py-5"
                }
      `}
        >
            <div className="container flex items-center justify-between">
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative">
                        <span className="text-3xl transition-transform duration-300 group-hover:scale-110 block">
                            🦕
                        </span>
                    </div>
                    <span className="text-xl font-bold font-heading text-[#F5F1E8] tracking-tight hover:text-[#D4763A] transition-colors drop-shadow-md">
                        Kelas 8B
                    </span>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                  relative px-4 py-2 text-sm font-medium transition-colors rounded-full
                  ${isActive
                                        ? "text-[#D4763A] bg-[#D4763A]/10"
                                        : "text-[#F5F1E8]/70 hover:text-[#F5F1E8] hover:bg-[#F5F1E8]/5"
                                    }
                `}
                            >
                                {item.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 rounded-full border border-[#D4763A]/20"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-[#F5F1E8] rounded-lg hover:bg-[#F5F1E8]/10 transition-colors"
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span
                            className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                                }`}
                        />
                        <span
                            className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""
                                }`}
                        />
                    </div>
                </button>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0f1c14] border-b border-[#F5F1E8]/10 overflow-hidden"
                    >
                        <div className="container py-4 flex flex-col gap-2">
                            {navLinks.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`
                      px-4 py-3 rounded-xl text-sm font-medium transition-colors
                      ${isActive
                                                ? "bg-[#D4763A]/10 text-[#D4763A]"
                                                : "text-[#F5F1E8]/70 hover:bg-[#F5F1E8]/5 hover:text-[#F5F1E8]"
                                            }
                    `}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

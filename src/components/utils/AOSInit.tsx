"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            once: true, // Animasi hanya sekali saat scroll ke bawah
            duration: 800, // Durasi animasi dalam ms
            easing: "ease-out-cubic", // Easing function yang smooth
            offset: 50, // Trigger animasi 50px sebelum elemen muncul
        });
    }, []);

    return null;
}

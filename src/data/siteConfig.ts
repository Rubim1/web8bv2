// ============================================
// FILE: siteConfig.ts
// FUNGSI: Konfigurasi umum website (metadata, links, dll)
// CARA EDIT: Ganti nilai sesuai kebutuhan
// ============================================

// Konfigurasi metadata website
export const siteConfig = {
    // Informasi dasar
    nama: "Kelas 8B",                              // Nama kelas
    namaLengkap: "Kelas 8B SMPN 1 Cluring",        // Nama lengkap dengan sekolah
    sekolah: "SMP Negeri 1 Cluring",               // Nama sekolah
    lokasi: "Banyuwangi, Jawa Timur",              // Lokasi sekolah
    tahunAjaran: "2025/2026",                      // Tahun ajaran aktif

    // Tagline dan deskripsi
    tagline: "Bersama Menuju Prestasi 🦕",         // Tagline di hero section
    deskripsi: "Website resmi Kelas 8B SMP Negeri 1 Cluring. Wadah informasi, dokumentasi, dan portofolio kelas kami.",

    // Jumlah siswa
    totalSiswa: 31,                                // Total siswa aktif

    // Tema dinosaurus
    maskot: "Rex",                                 // Nama maskot (opsional)

    // Link eksternal
    links: {
        absensi: "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID", // Link spreadsheet absensi
        jurnal: "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID",  // Link spreadsheet jurnal
    }
};

// Informasi developer (untuk halaman Contact)
export const developerInfo = {
    nama: "itsbym",                                // Username/nama developer
    bio: "Siswa kelas 8B yang suka ngulik teknologi. Website ini dibuat sebagai proyek belajar web development.",
    links: {
        website: "#",                                // Link website personal (ganti nanti)
        instagram: "#",                              // Link Instagram (ganti nanti)
        github: "#",                                 // Link GitHub (ganti nanti)
        email: "mailto:example@email.com",           // Email (ganti nanti)
    }
};

// Navigasi menu
// Digunakan di Navbar dan Footer
export const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/profil", label: "Profil" },
    { href: "/siswa", label: "Siswa" },
    { href: "/wali-kelas", label: "Wali Kelas" },
    { href: "/galeri", label: "Galeri" },
    { href: "/jadwal", label: "Jadwal" },
    { href: "/pengumuman", label: "Pengumuman" },
];

// Visi dan Misi kelas
export const visiMisi = {
    visi: "Menjadi kelas yang unggul dalam prestasi akademik dan non-akademik, berakhlak mulia, serta kompak dalam kebersamaan.",
    misi: [
        "Meningkatkan semangat belajar dan prestasi akademik",
        "Aktif dalam kegiatan ekstrakurikuler dan pengembangan bakat",
        "Menjaga kebersamaan dan kekompakan antar siswa",
        "Menerapkan nilai-nilai kejujuran dan tanggung jawab",
        "Menjaga kebersihan dan kenyamanan kelas",
    ],
    nilai: [
        "Kompak",      // Nilai 1
        "Kreatif",     // Nilai 2
        "Berani",      // Nilai 3
        "Jujur",       // Nilai 4
    ]
};

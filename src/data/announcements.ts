// ============================================
// FILE: announcements.ts
// FUNGSI: Menyimpan data pengumuman kelas
// CARA EDIT: Tambah/hapus pengumuman sesuai kebutuhan
// ============================================

// Interface untuk satu pengumuman
export interface Announcement {
    id: number;           // ID unik pengumuman
    judul: string;        // Judul pengumuman
    tanggal: string;      // Tanggal pengumuman (format: "DD Month YYYY")
    preview: string;      // Preview singkat (untuk tampilan card)
    konten: string;       // Isi lengkap pengumuman
    kategori: string;     // Kategori: "Akademik", "Kegiatan", "Penting", dll
    penting: boolean;     // Flag apakah pengumuman penting (untuk highlight)
}

// Daftar warna untuk setiap kategori
export const categoryColors: Record<string, string> = {
    "Akademik": "bg-blue-100 text-blue-800",
    "Kegiatan": "bg-green-100 text-green-800",
    "Penting": "bg-red-100 text-red-800",
    "Info": "bg-gray-100 text-gray-800",
    "Ekstrakurikuler": "bg-purple-100 text-purple-800",
};

// Data pengumuman
// DUMMY DATA - Ganti/tambah dengan pengumuman asli!
export const announcements: Announcement[] = [
    {
        id: 1,
        judul: "Ujian Tengah Semester Ganjil",
        tanggal: "15 Januari 2026",
        preview: "Ujian Tengah Semester akan dilaksanakan pada tanggal 20-25 Januari 2026.",
        konten: "Ujian Tengah Semester (UTS) Ganjil akan dilaksanakan pada tanggal 20-25 Januari 2026. Harap semua siswa mempersiapkan diri dengan baik. Jadwal ujian akan diumumkan melalui grup kelas. Jangan lupa bawa alat tulis lengkap dan kartu ujian.",
        kategori: "Akademik",
        penting: true
    },
    {
        id: 2,
        judul: "Pengumpulan Tugas Prakarya",
        tanggal: "12 Januari 2026",
        preview: "Deadline pengumpulan tugas prakarya kerajinan tangan diperpanjang.",
        konten: "Deadline pengumpulan tugas prakarya kerajinan tangan diperpanjang hingga tanggal 18 Januari 2026. Tugas dikumpulkan di meja guru prakarya. Pastikan nama dan kelas tertera jelas pada tugas yang dikumpulkan.",
        kategori: "Akademik",
        penting: false
    },
    {
        id: 3,
        judul: "Latihan Pramuka",
        tanggal: "10 Januari 2026",
        preview: "Latihan rutin pramuka akan diadakan setiap Jumat sore.",
        konten: "Latihan rutin pramuka akan diadakan setiap hari Jumat pukul 15:00-17:00 di lapangan sekolah. Wajib memakai seragam pramuka lengkap. Kegiatan meliputi PBB, pioneering, dan permainan edukatif.",
        kategori: "Ekstrakurikuler",
        penting: false
    },
    {
        id: 4,
        judul: "Rapat Wali Murid",
        tanggal: "8 Januari 2026",
        preview: "Rapat wali murid akan diadakan pada akhir bulan ini.",
        konten: "Diberitahukan kepada seluruh wali murid kelas 8B bahwa rapat wali murid akan dilaksanakan pada hari Sabtu, 25 Januari 2026 pukul 09:00 WIB di aula sekolah. Agenda: pembahasan perkembangan akademik siswa dan informasi kegiatan semester depan.",
        kategori: "Penting",
        penting: true
    },
    {
        id: 5,
        judul: "Selamat Datang di Website Kelas 8B!",
        tanggal: "5 Januari 2026",
        preview: "Website resmi kelas 8B SMPN 1 Cluring telah diluncurkan.",
        konten: "Halo teman-teman! Website resmi kelas 8B SMPN 1 Cluring telah resmi diluncurkan. Website ini akan menjadi wadah informasi, dokumentasi kegiatan, dan portofolio kelas kita. Selamat menjelajah! 🦕",
        kategori: "Info",
        penting: false
    },
];

// Fungsi helper untuk mengurutkan pengumuman berdasarkan tanggal (terbaru dulu)
// Catatan: Ini dummy sort karena tanggal dalam format string
export const getSortedAnnouncements = () => {
    // Pengumuman penting ditampilkan di atas
    return [...announcements].sort((a, b) => {
        if (a.penting && !b.penting) return -1;
        if (!a.penting && b.penting) return 1;
        return b.id - a.id; // ID lebih besar = lebih baru
    });
};

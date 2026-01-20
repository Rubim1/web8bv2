// ============================================
// FILE: awards.ts
// FUNGSI: Data pemenang nominasi "Si Paling"
// CARA EDIT: Masukkan ID siswa yang sesuai dari students.ts
// ============================================

export interface Award {
    id: string; // Unik ID untuk award
    title: string; // Gelar, misal: Si Paling Turu
    emoji: string; // Ikon gelar
    studentId: number; // ID siswa pemenang (Cek nomer ID di students.ts)
    color: string; // Kode warna gradasi (Tailwind class)
    desc: string; // Alasan menang
}

export const awards: Award[] = [
    {
        id: "award-1",
        title: "Si Paling Sigma",
        emoji: "🗿",
        studentId: 1, // Ganti dengan ID siswa yang cocok
        color: "from-gray-700 to-black",
        desc: "Jarang ngomong, sekali ngomong pinjam dulu seratus."
    },
    {
        id: "award-2",
        title: "Si Paling Turu",
        emoji: "😴",
        studentId: 4,
        color: "from-blue-400 to-indigo-600",
        desc: "Bisa tidur dalam posisi berdiri saat upacara."
    },
    {
        id: "award-3",
        title: "Si Paling Anime",
        emoji: "⛩️",
        studentId: 5,
        color: "from-pink-500 to-rose-500",
        desc: "Kalo lari tangannya ke belakang (Naruto Run)."
    },
    {
        id: "award-4",
        title: "Si Paling Telat",
        emoji: "🏃💨",
        studentId: 10,
        color: "from-orange-400 to-red-600",
        desc: "Datang saat gerbang sudah mau ditutup adalah passion."
    },
    {
        id: "award-5",
        title: "Si Paling Skincare",
        emoji: "✨",
        studentId: 2,
        color: "from-teal-400 to-emerald-600",
        desc: "Wajah lebih glowing daripada masa depan kita."
    },
    {
        id: "award-6",
        title: "Si Paling Gamers",
        emoji: "🎮",
        studentId: 14,
        color: "from-purple-500 to-violet-700",
        desc: "Push rank terus, push nilai pusing."
    }
];

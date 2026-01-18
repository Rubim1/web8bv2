// ============================================
// FILE: schedule.ts
// FUNGSI: Menyimpan data jadwal pelajaran kelas 8B
// CARA EDIT: Ganti mata pelajaran sesuai jadwal asli
// ============================================

// Interface untuk satu slot jadwal pelajaran
export interface ScheduleSlot {
    jam: string;          // Rentang waktu (contoh: "07:00 - 07:40")
    pelajaran: string;    // Nama mata pelajaran
    guru?: string;        // Nama guru (opsional)
}

// Interface untuk jadwal satu hari
export interface DaySchedule {
    hari: string;                 // Nama hari
    jadwal: ScheduleSlot[];       // Array jadwal untuk hari tersebut
}

// Daftar warna untuk setiap mata pelajaran (untuk styling)
// Key = nama pelajaran, Value = kode warna atau class CSS
export const subjectColors: Record<string, string> = {
    "Bahasa Indonesia": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "Matematika": "bg-blue-100 text-blue-800 border-blue-300",
    "IPA": "bg-purple-100 text-purple-800 border-purple-300",
    "IPS": "bg-yellow-100 text-yellow-800 border-yellow-300",
    "Bahasa Inggris": "bg-pink-100 text-pink-800 border-pink-300",
    "PPKN": "bg-red-100 text-red-800 border-red-300",
    "Seni Budaya": "bg-orange-100 text-orange-800 border-orange-300",
    "PJOK": "bg-green-100 text-green-800 border-green-300",
    "Prakarya": "bg-cyan-100 text-cyan-800 border-cyan-300",
    "Agama": "bg-indigo-100 text-indigo-800 border-indigo-300",
    "Bahasa Jawa": "bg-amber-100 text-amber-800 border-amber-300",
    "TIK": "bg-slate-100 text-slate-800 border-slate-300",
    "Istirahat": "bg-gray-100 text-gray-600 border-gray-300",
    "Upacara": "bg-rose-100 text-rose-800 border-rose-300",
};

// Data jadwal lengkap untuk semua hari
// DUMMY DATA - Ganti dengan jadwal asli!
export const weeklySchedule: DaySchedule[] = [
    {
        hari: "Senin",
        jadwal: [
            { jam: "07:00 - 07:40", pelajaran: "Upacara" },
            { jam: "07:40 - 08:20", pelajaran: "Bahasa Indonesia" },
            { jam: "08:20 - 09:00", pelajaran: "Bahasa Indonesia" },
            { jam: "09:00 - 09:20", pelajaran: "Istirahat" },
            { jam: "09:20 - 10:00", pelajaran: "Matematika" },
            { jam: "10:00 - 10:40", pelajaran: "Matematika" },
            { jam: "10:40 - 11:20", pelajaran: "IPA" },
            { jam: "11:20 - 12:00", pelajaran: "IPA" },
        ]
    },
    {
        hari: "Selasa",
        jadwal: [
            { jam: "07:00 - 07:40", pelajaran: "Bahasa Inggris" },
            { jam: "07:40 - 08:20", pelajaran: "Bahasa Inggris" },
            { jam: "08:20 - 09:00", pelajaran: "IPS" },
            { jam: "09:00 - 09:20", pelajaran: "Istirahat" },
            { jam: "09:20 - 10:00", pelajaran: "IPS" },
            { jam: "10:00 - 10:40", pelajaran: "PPKN" },
            { jam: "10:40 - 11:20", pelajaran: "PPKN" },
            { jam: "11:20 - 12:00", pelajaran: "Agama" },
        ]
    },
    {
        hari: "Rabu",
        jadwal: [
            { jam: "07:00 - 07:40", pelajaran: "Matematika" },
            { jam: "07:40 - 08:20", pelajaran: "Matematika" },
            { jam: "08:20 - 09:00", pelajaran: "Seni Budaya" },
            { jam: "09:00 - 09:20", pelajaran: "Istirahat" },
            { jam: "09:20 - 10:00", pelajaran: "Seni Budaya" },
            { jam: "10:00 - 10:40", pelajaran: "Bahasa Indonesia" },
            { jam: "10:40 - 11:20", pelajaran: "Bahasa Indonesia" },
            { jam: "11:20 - 12:00", pelajaran: "TIK" },
        ]
    },
    {
        hari: "Kamis",
        jadwal: [
            { jam: "07:00 - 07:40", pelajaran: "IPA" },
            { jam: "07:40 - 08:20", pelajaran: "IPA" },
            { jam: "08:20 - 09:00", pelajaran: "Prakarya" },
            { jam: "09:00 - 09:20", pelajaran: "Istirahat" },
            { jam: "09:20 - 10:00", pelajaran: "Prakarya" },
            { jam: "10:00 - 10:40", pelajaran: "Bahasa Jawa" },
            { jam: "10:40 - 11:20", pelajaran: "Bahasa Jawa" },
            { jam: "11:20 - 12:00", pelajaran: "Agama" },
        ]
    },
    {
        hari: "Jumat",
        jadwal: [
            { jam: "07:00 - 07:40", pelajaran: "PJOK" },
            { jam: "07:40 - 08:20", pelajaran: "PJOK" },
            { jam: "08:20 - 09:00", pelajaran: "PJOK" },
            { jam: "09:00 - 09:20", pelajaran: "Istirahat" },
            { jam: "09:20 - 10:00", pelajaran: "Bahasa Inggris" },
            { jam: "10:00 - 10:40", pelajaran: "Bahasa Inggris" },
        ]
    },
    {
        hari: "Sabtu",
        jadwal: [
            { jam: "07:00 - 07:40", pelajaran: "Matematika" },
            { jam: "07:40 - 08:20", pelajaran: "Matematika" },
            { jam: "08:20 - 09:00", pelajaran: "IPS" },
            { jam: "09:00 - 09:20", pelajaran: "Istirahat" },
            { jam: "09:20 - 10:00", pelajaran: "IPS" },
            { jam: "10:00 - 10:40", pelajaran: "TIK" },
        ]
    },
];

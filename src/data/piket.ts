// ============================================
// FILE: piket.ts
// FUNGSI: Data jadwal piket kebersihan kelas
// ============================================

export interface PiketGroup {
    hari: string;
    anggota: string[];
}

export const jadwalPiket: PiketGroup[] = [
    {
        hari: "Senin",
        anggota: [
            "Afida",
            "Bacila",
            "Naura",
            "Zicho",
            "Rubim",
            "Adrian"
        ]
    },
    {
        hari: "Selasa",
        anggota: [
            "Afifah",
            "Albert",
            "Bunga",
            "Jovan",
            "Neyshira"
        ]
    },
    {
        hari: "Rabu",
        anggota: [
            "Nury",
            "Desta",
            "Anindya",
            "Alvaro",
            "Wahyu"
        ]
    },
    {
        hari: "Kamis",
        anggota: [
            "Argisel",
            "Dafa",
            "Gita",
            "Rexahnafia",
            "Vino"
        ]
    },
    {
        hari: "Jumat",
        anggota: [
            "Khansa",
            "Rexamalia",
            "Kiano",
            "Diko"
        ]
    },
    {
        hari: "Sabtu",
        anggota: [
            "Dyrandra",
            "Mirna",
            "Aura",
            "Tika",
            "Cakra",
            "Sandi"
        ]
    }
];
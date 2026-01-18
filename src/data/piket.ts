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
            "Ahmad Fauzi",
            "Bunga Citra",
            "Cahya Dewi",
            "Dimas Pratama",
            "Eka Saputra"
        ]
    },
    {
        hari: "Selasa",
        anggota: [
            "Fitri Handayani",
            "Gilang Ramadhan",
            "Hana Permata",
            "Irfan Hakim",
            "Jasmine Putri"
        ]
    },
    {
        hari: "Rabu",
        anggota: [
            "Kevin Wijaya",
            "Lina Marlina",
            "Muhammad Rizky",
            "Nadya Safitri",
            "Oscar Pratama"
        ]
    },
    {
        hari: "Kamis",
        anggota: [
            "Putri Ayu",
            "Qori Firmansyah",
            "Rina Wulandari",
            "Sandi Nugroho",
            "Tania Maharani"
        ]
    },
    {
        hari: "Jumat",
        anggota: [
            "Umar Faruq",
            "Vina Oktavia",
            "Wahyu Hidayat",
            "Xena Amelia",
            "Yoga Permana"
        ]
    },
    {
        hari: "Sabtu",
        anggota: [
            "Zahra Kirana",
            "Adi Nugraha",
            "Bella Sari",
            "Candra Wijaya",
            "Dina Rahayu",
            "Evan Maulana"
        ]
    }
];

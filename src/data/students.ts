// ============================================
// FILE: students.ts
// FUNGSI: Menyimpan data semua siswa kelas 8B
// CARA EDIT: Ganti nama, nomor absen, dan jabatan sesuai data asli
// ============================================

// Interface/tipe data untuk setiap siswa
// Ini mendefinisikan struktur data yang harus diikuti
export interface Student {
  id: number;           // ID unik untuk setiap siswa (untuk React key)
  noAbsen: number;      // Nomor absen siswa (1-31)
  nama: string;         // Nama lengkap siswa
  jabatan?: string;     // Jabatan di kelas (opsional, pakai ? artinya boleh kosong)
  foto: string;         // Path ke foto siswa (nanti ganti dengan foto asli)
}

// Array berisi data semua 31 siswa
// DUMMY DATA - Ganti dengan data asli nanti!
export const students: Student[] = [
  { id: 1, noAbsen: 1, nama: "Ahmad Fauzi", jabatan: "Ketua Kelas", foto: "/images/students/default.png" },
  { id: 2, noAbsen: 2, nama: "Bunga Citra", jabatan: "Wakil Ketua", foto: "/images/students/default.png" },
  { id: 3, noAbsen: 3, nama: "Cahya Dewi", jabatan: "Sekretaris 1", foto: "/images/students/default.png" },
  { id: 4, noAbsen: 4, nama: "Dimas Pratama", jabatan: "Bendahara 1", foto: "/images/students/default.png" },

  // Promosi Jabatan (Dummy Data)
  { id: 5, noAbsen: 5, nama: "Eka Saputra", jabatan: "Sekretaris 2", foto: "/images/students/default.png" },
  { id: 6, noAbsen: 6, nama: "Fitri Handayani", jabatan: "Bendahara 2", foto: "/images/students/default.png" },

  // Siswa biasa
  { id: 7, noAbsen: 7, nama: "Gilang Ramadhan", foto: "/images/students/default.png" },
  { id: 8, noAbsen: 8, nama: "Hana Permata", foto: "/images/students/default.png" },
  { id: 9, noAbsen: 9, nama: "Irfan Hakim", foto: "/images/students/default.png" },
  { id: 10, noAbsen: 10, nama: "Jasmine Putri", foto: "/images/students/default.png" },
  { id: 11, noAbsen: 11, nama: "Kevin Wijaya", foto: "/images/students/default.png" },
  { id: 12, noAbsen: 12, nama: "Lina Marlina", foto: "/images/students/default.png" },
  { id: 13, noAbsen: 13, nama: "Muhammad Rizky", foto: "/images/students/default.png" },
  { id: 14, noAbsen: 14, nama: "Nadya Safitri", foto: "/images/students/default.png" },
  { id: 15, noAbsen: 15, nama: "Oscar Pratama", foto: "/images/students/default.png" },
  { id: 16, noAbsen: 16, nama: "Putri Ayu", foto: "/images/students/default.png" },
  { id: 17, noAbsen: 17, nama: "Qori Firmansyah", foto: "/images/students/default.png" },
  { id: 18, noAbsen: 18, nama: "Rina Wulandari", foto: "/images/students/default.png" },
  { id: 19, noAbsen: 19, nama: "Sandi Nugroho", foto: "/images/students/default.png" },
  { id: 20, noAbsen: 20, nama: "Tania Maharani", foto: "/images/students/default.png" },
  { id: 21, noAbsen: 21, nama: "Umar Faruq", foto: "/images/students/default.png" },
  { id: 22, noAbsen: 22, nama: "Vina Oktavia", foto: "/images/students/default.png" },
  { id: 23, noAbsen: 23, nama: "Wahyu Hidayat", foto: "/images/students/default.png" },
  { id: 24, noAbsen: 24, nama: "Xena Amelia", foto: "/images/students/default.png" },
  { id: 25, noAbsen: 25, nama: "Yoga Permana", foto: "/images/students/default.png" },
  { id: 26, noAbsen: 26, nama: "Zahra Kirana", foto: "/images/students/default.png" },
  { id: 27, noAbsen: 27, nama: "Adi Nugraha", foto: "/images/students/default.png" },
  { id: 28, noAbsen: 28, nama: "Bella Sari", foto: "/images/students/default.png" },
  { id: 29, noAbsen: 29, nama: "Candra Wijaya", foto: "/images/students/default.png" },
  { id: 30, noAbsen: 30, nama: "Dina Rahayu", foto: "/images/students/default.png" },
  { id: 31, noAbsen: 31, nama: "Evan Maulana", foto: "/images/students/default.png" },
];

// Data wali kelas
// Ganti dengan data wali kelas yang sebenarnya
export interface WaliKelas {
  nama: string;           // Nama lengkap dengan gelar
  mataPelajaran: string;  // Mata pelajaran yang diampu
  foto: string;           // Path ke foto wali kelas
  quote: string;          // Pesan/quote dari wali kelas
}

export const waliKelas: WaliKelas = {
  nama: "Rizki Ayu Maulana, S.Pd.",
  mataPelajaran: "Bahasa Indonesia",
  foto: "/images/wali-kelas/default.png",
  quote: "Pendidikan adalah senjata paling ampuh untuk mengubah dunia. Teruslah belajar dan jangan pernah menyerah!"
};

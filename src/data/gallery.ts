// ============================================
// FILE: gallery.ts
// FUNGSI: Menyimpan data galeri foto kegiatan
// CARA EDIT: Tambah foto dengan menambah object baru ke array
// ============================================

// Interface untuk satu item galeri
export interface GalleryItem {
    id: number;           // ID unik foto
    src: string;          // Path ke file gambar
    alt: string;          // Alt text untuk accessibility
    judul: string;        // Judul/caption foto
    kategori: string;     // Kategori: "Pembelajaran", "Ekstrakurikuler", "Event", dll
    tanggal?: string;     // Tanggal foto diambil (opsional)
}

// Daftar kategori yang tersedia
export const categories = [
    "Semua",             // Untuk menampilkan semua foto
    "Pembelajaran",      // Foto kegiatan belajar mengajar
    "Ekstrakurikuler",   // Foto kegiatan ekskul
    "Event",             // Foto acara/event khusus
    "Kebersamaan",       // Foto candid/kebersamaan
];

// Data galeri
// PLACEHOLDER - Foto akan ditambahkan nanti
// Untuk sekarang, galeri akan menampilkan pesan placeholder
export const galleryItems: GalleryItem[] = [
    // Contoh format data (uncomment dan ganti path sesuai foto asli):
    // {
    //   id: 1,
    //   src: "/images/gallery/foto1.jpg",
    //   alt: "Suasana belajar di kelas",
    //   judul: "Belajar Matematika",
    //   kategori: "Pembelajaran",
    //   tanggal: "10 Januari 2026"
    // },
];

// Flag untuk mengecek apakah galeri masih kosong
export const isGalleryEmpty = galleryItems.length === 0;

// Fungsi untuk filter galeri berdasarkan kategori
export const getGalleryByCategory = (kategori: string): GalleryItem[] => {
    // Jika kategori "Semua", kembalikan semua foto
    if (kategori === "Semua") {
        return galleryItems;
    }
    // Filter berdasarkan kategori yang dipilih
    return galleryItems.filter(item => item.kategori === kategori);
};



# Spesifikasi Final Lengkap!

Sempurna, semua informasi sudah terkumpul. Berikut **context prompt** lengkap yang bisa kamu gunakan:

---

# Context Prompt: Website Kelas 8B SMPN 1 Cluring

## 📋 Project Overview

Buatkan website kelas untuk **Kelas 8B SMP Negeri 1 Cluring**, Banyuwangi, Jawa Timur. Website ini berfungsi sebagai **portofolio kelas** dan **dokumentasi kegiatan** selama tahun ajaran berlangsung.

## 🛠️ Tech Stack

| Teknologi | Fungsi |
|-----------|--------|
| **Next.js 14+** | Framework utama (App Router) |
| **Tailwind CSS** | Styling dan responsive design |
| **GSAP + ScrollTrigger** | Animasi scroll dan timeline |
| **AOS (Animate on Scroll)** | Animasi saat elemen muncul di viewport |
| **Framer Motion** | Micro-interactions dan page transitions |
| **Vercel** | Hosting dan deployment |

## 🎨 Design Reference & Theme

### Referensi Utama
- **Stripe.com** — Clean layout, whitespace yang lega, gradient halus, micro-interactions saat hover, modular components

### Tema Visual
- **Zaman Purba / Dinosaurus** dengan sentuhan modern dan profesional
- Kombinasi elemen: **Ilustrasi karakter dino**, **tekstur fosil/batu**, **silhouette dinosaurus**

### Color Palette (Aturan 60-30-10)

```css
:root {
  /* Primary - Dominan 60% */
  --color-primary: #2D5A3D;      /* Deep Forest Green */
  
  /* Secondary - 30% */
  --color-secondary: #8B7355;    /* Earthy Brown/Tan */
  
  /* Accent - 10% */
  --color-accent: #D4763A;       /* Volcanic Orange/Amber */
  
  /* Neutrals */
  --color-background: #F5F1E8;   /* Warm Cream */
  --color-text: #2C2C2C;         /* Charcoal */
  
  /* Additional */
  --color-card: #FFFFFF;
  --color-muted: #6B7280;
}
```

### Typography
- **Heading**: Font bold/semi-bold dengan sedikit sentuhan "primitif" tapi tetap readable
- **Body**: Font clean dan modern untuk readability tinggi
- Rekomendasi: **Poppins** atau **Plus Jakarta Sans** untuk body, **Playfair Display** atau custom untuk heading

## 📄 Struktur Halaman

### 1. Home (Landing Page)
- **Hero Section**: Judul besar "Kelas 8B", tagline, background dengan elemen dinosaurus (parallax effect)
- **Quick Stats**: Jumlah siswa, tahun ajaran, dll
- **Preview Sections**: Snippet dari galeri, pengumuman terbaru
- **CTA Buttons**: Navigasi ke halaman utama

### 2. Profil Kelas
- Visi dan misi kelas
- Deskripsi singkat tentang kelas 8B
- Nilai-nilai yang dijunjung
- Struktur organisasi kelas (ketua, wakil, sekretaris, bendahara)

### 3. Daftar Siswa
- **Grid layout** dengan card untuk setiap siswa
- Setiap card berisi: Foto asli, nama, nomor absen, jabatan (jika ada)
- Hover effect: Card terangkat dengan shadow
- Filter/search (opsional)

### 4. Wali Kelas
- Profil lengkap wali kelas
- Foto, nama, mata pelajaran yang diampu
- Pesan/quote dari wali kelas

### 5. Galeri
- **Masonry grid** atau **grid layout** untuk foto kegiatan
- Kategori: Pembelajaran, Ekstrakurikuler, Event, dll
- Lightbox untuk melihat foto lebih besar
- Animasi fade-in saat scroll

### 6. Jadwal Pelajaran
- **Tabel responsif** jadwal mingguan (Senin-Sabtu)
- Jam pelajaran dan mata pelajaran
- Warna berbeda untuk setiap mata pelajaran
- Mobile: Bisa di-swipe horizontal atau accordion per hari

### 7. Pengumuman
- List pengumuman dengan tanggal
- Card layout dengan judul, preview text, tanggal
- Bisa di-expand untuk baca selengkapnya

### 8. Contact Developer
- Profil singkat developer (pembuat website)
- Sosial media links: Instagram, GitHub, Email
- Tidak perlu form (website statis)

## ✨ Animasi & Interactions

### GSAP + ScrollTrigger
- **Parallax** pada hero section dengan elemen dinosaurus berlayer
- **Pin sections** untuk storytelling effect
- **Text reveal** animasi pada heading

### AOS (Animate on Scroll)
- Fade-up untuk cards dan sections
- Zoom-in untuk gambar galeri
- Slide-in untuk list items

### Framer Motion
- **Page transitions** smooth antar halaman
- **Hover effects** pada buttons dan cards
- **Stagger animations** untuk grid items

### Micro-interactions (Stripe-inspired)
- Button hover: Subtle scale + shadow
- Card hover: Lift effect dengan shadow
- Link hover: Underline animation
- Navigation: Active state indicator

## 🦕 Elemen Visual Dinosaurus

### Ilustrasi & Grafis
- Maskot dinosaurus kelas (bisa T-Rex atau yang friendly)
- Ilustrasi dino kecil sebagai decorative elements
- Leaf/fern decorations (tanaman zaman purba)

### Tekstur
- Subtle stone/fossil texture pada cards atau sections
- Crack patterns sebagai divider
- Footprint trail sebagai decorative element

### Silhouette
- Dinosaur silhouettes di background (opacity rendah)
- Mountain/volcano silhouette di footer
- Flying pterodactyl sebagai loading indicator

## 📁 Folder Structure (Next.js App Router)

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── profil/page.tsx
│   ├── siswa/page.tsx
│   ├── wali-kelas/page.tsx
│   ├── galeri/page.tsx
│   ├── jadwal/page.tsx
│   ├── pengumuman/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageTransition.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── SectionHeading.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── StudentGrid.tsx
│   │   └── GalleryGrid.tsx
│   └── decorative/
│       ├── DinoIllustration.tsx
│       └── FossilTexture.tsx
├── data/
│   ├── students.ts (placeholder)
│   ├── schedule.ts
│   └── announcements.ts
├── lib/
│   └── animations.ts (GSAP configs)
├── public/
│   ├── images/
│   │   ├── students/
│   │   ├── gallery/
│   │   └── decorative/
│   └── fonts/
└── styles/
    └── globals.css
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔗 External Links

- **Absensi**: Link ke Google Spreadsheet (dikelola teman)
- **Jurnal**: Link ke Google Spreadsheet (dikelola teman)

## 📝 Data Placeholder

Semua data siswa, wali kelas, dan konten akan diisi manual oleh developer. Buat struktur data yang mudah di-edit di file terpisah (`/data/`).

---

## 🎯 Prioritas Development

1. Setup Next.js + Tailwind + Animasi libraries
2. Buat layout dasar (Navbar, Footer, Page Transitions)
3. Develop halaman Home dengan Hero section
4. Develop halaman-halaman lain secara berurutan
5. Tambahkan animasi dan polish
6. Testing responsive
7. Deploy ke Vercel

---

**Gunakan prompt ini sebagai panduan untuk membangun website. Semua placeholder data (nama siswa, foto, jadwal, dll) akan diisi secara manual setelah struktur website selesai.**

---

Apakah ada yang perlu ditambahkan atau diubah dari context prompt ini? 🦖
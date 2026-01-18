// ============================================
// FILE: timeUtils.ts
// FUNGSI: Helper untuk waktu dan tanggal
// ============================================

/**
 * Mendapatkan informasi nama hari dan tanggal saat ini
 * dalam format Bahasa Indonesia.
 * return { dayName: "Senin", date: "18 Januari 2026", fullDate: Date }
 */
export function getDayNameInfo() {
  const now = new Date();

  // Array nama hari (Bahasa Indonesia)
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  // Array nama bulan
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const dayName = days[now.getDay()];
  const date = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

  return {
    dayName, // "Senin", "Selasa", dst
    date,    // "18 Januari 2026"
    fullDate: now
  };
}

/**
 * Mendapatkan salam berdasarkan waktu (Pagi/Siang/Sore/Malam)
 */
export function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 11) return "Selamat Pagi";
  if (hour < 15) return "Selamat Siang";
  if (hour < 18) return "Selamat Sore";
  return "Selamat Malam";
}

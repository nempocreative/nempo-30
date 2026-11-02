/**
 * Isi lonceng notifikasi (header) dan halaman /notifikasi.
 *
 * Satu sumber browser-safe: semua teks diambil dari halaman yang benar-benar
 * ada di situs ini — harga dari modul data layanan, judul acara dari
 * portofolio event, dan kanal kontak dari src/lib/contact.ts.
 * Tidak ada tabel notifikasi di basis data, jadi isinya indeed statistik.
 */

export type NotificationType = "info" | "update" | "promo" | "event" | "warning";

export type NotificationItem = {
  id: number;
  type: NotificationType;
  title: string;
  message: string;
  /** Halaman tujuan. Harus rute yang terdaftar di src/nempo-app.tsx. */
  href: string;
  /** Berapa jam lalu notifikasi ini muncul, dihitung dari sekarang. */
  hoursAgo: number;
};

export const notificationItems: NotificationItem[] = [
  {
    id: 1,
    type: "event",
    title: "Riuh Rona, 5 September 2026 di Maru",
    message:
      "Acara terbaru di portofolio Nempo. Poster dan daftar acara lain — dari Secangkir Kopi sampai Grand Opening GGS Beauty — ada di bagian Event halaman Portofolio.",
    href: "/portofolio#event",
    hoursAgo: 1,
  },
  {
    id: 2,
    type: "update",
    title: "Open recruitment Nempo Community dibuka",
    message:
      "Isi formulir recruitment: terbuka untuk pelajar, mahasiswa, dan umum, tanpa biaya pendaftaran. Tim kami menghubungimu lewat WhatsApp.",
    href: "/recruitment",
    hoursAgo: 3,
  },
  {
    id: 3,
    type: "info",
    title: "Portofolio kumpul di satu halaman",
    message:
      "Poster event, hasil kelola sosmed (Beauty, Fashion, Food, Cafe, Event, Skincare), dan 16 tema undangan digital bisa dibuka berurutan di halaman Portofolio.",
    href: "/portofolio",
    hoursAgo: 6,
  },
  {
    id: 4,
    type: "promo",
    title: "Promo sosmed UMKM Rp1.500.000/bulan",
    message:
      "Paket Growth: 8 desain Feed, 8 video Reels, 12 Instagram Story, content planning, posting dan penjadwalan, 1x kunjungan produksi konten, dan monthly report.",
    href: "/sosmed-management",
    hoursAgo: 9,
  },
  {
    id: 5,
    type: "info",
    title: "Paket wedding: Essential, Signature, Premium",
    message:
      "Essential Rp2.500.000 (tim 4), Signature Rp4.000.000 (tim 6), Premium Rp6.000.000 (tim 8). Signature ke atas sudah termasuk undangan digital dan sawer.",
    href: "/wedding-organizer",
    hoursAgo: 20,
  },
  {
    id: 6,
    type: "update",
    title: "16 tema undangan digital siap dilihat",
    message:
      "Delapan tema — Biru Bunga, Peach Klasik, Navy Elegan, Mocca Hangat, Hitam Mewah, Biru Taman, Rose Dusty, Merah Marun — masing-masing versi foto dan tanpa foto.",
    href: "/wedding-invitation",
    hoursAgo: 26,
  },
  {
    id: 7,
    type: "promo",
    title: "Desain kreatif mulai Rp35.000",
    message:
      "Instagram Story Rp35.000, Feed Rp50.000, Poster/Flyer Rp100.000, Banner Rp150.000, Logo Rp500.000, Branding Identity Rp1.500.000.",
    href: "/design-creative",
    hoursAgo: 30,
  },
  {
    id: 8,
    type: "info",
    title: "Website UMKM mulai Rp2.500.000",
    message:
      "Landing Page Rp1.500.000, Website UMKM Rp2.500.000, Company Profile Rp4.000.000, Website Professional Rp7.500.000, Website E-Commerce Rp8.500.000.",
    href: "/web-development",
    hoursAgo: 40,
  },
  {
    id: 9,
    type: "info",
    title: "Sapa Nempo lewat WhatsApp, Instagram, atau TikTok",
    message:
      "Konsultasi bisa lewat WhatsApp +62 857-2498-1356, DM Instagram @nempo.id, atau TikTok @nempo.id. Ketiganya ada di halaman Contact.",
    href: "/contact",
    hoursAgo: 50,
  },
  {
    id: 10,
    type: "info",
    title: "Rincian harga kerja sama",
    message:
      "Daftar harga tiap layanan dan ketentuan kerja sama bisa dicek sendiri di halaman Price List sebelum menghubungi tim.",
    href: "/kerja-sama",
    hoursAgo: 60,
  },
  {
    id: 11,
    type: "info",
    title: "Talent dan influencer untuk acara kamu",
    message:
      "Daftar talent yang bisa diajak kerja sama ada di halaman Talent Management, lengkap dengan contoh karya.",
    href: "/talent",
    hoursAgo: 70,
  },
  {
    id: 12,
    type: "info",
    title: "Coba demo sistem usaha Nempo",
    message:
      "Super App, kasir, ticketing, QR menu, dan layanan digital lain bisa dicoba langsung dari demo di halaman Business System.",
    href: "/business-system",
    hoursAgo: 80,
  },
];

export type Notification = NotificationItem & { created_at: string };

/** Urut dari yang terbaru, dengan created_at dihitung dari hari ini. */
export function buildNotifications(now: Date = new Date()): Notification[] {
  return notificationItems
    .map((item) => ({
      ...item,
      created_at: new Date(now.getTime() - item.hoursAgo * 3_600_000).toISOString(),
    }))
    .sort((a, b) => a.hoursAgo - b.hoursAgo);
}

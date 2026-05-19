"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Apakah aplikasi ini gratis?",
    answer:
      "PrayerTV menyediakan trial 7 hari dengan akses penuh ke semua fitur. Setelah masa trial habis, Anda perlu membeli lisensi untuk melanjutkan penggunaan. Jika Anda mengirimkan feedback (bug report atau saran perbaikan UI) selama masa trial, Anda akan mendapatkan harga khusus saat membeli lisensi.",
  },
  {
    question: "Perangkat apa saja yang didukung?",
    answer:
      "PrayerTV mendukung Android TV, Set-Top Box (STB) seperti HG680P, B860H, ZTE B760H, serta Android TV Box (Mi Box, Tanix, dll). Minimal Android 5.0 ke atas dengan resolusi 1080p.",
  },
  {
    question: "Bagaimana cara setup pertama kali?",
    answer:
      "Install APK → buka aplikasi → hubungkan WiFi sekali → aplikasi akan otomatis mendeteksi lokasi dan mengunduh jadwal sholat 30 hari ke depan. Setelah itu WiFi bisa dimatikan, aplikasi berjalan offline.",
  },
  {
    question: "Apakah perlu koneksi internet terus-menerus?",
    answer:
      "Tidak. Internet hanya diperlukan sekali saat setup awal untuk deteksi lokasi dan cache jadwal sholat. Setelah itu aplikasi berjalan sepenuhnya offline. Jadwal dihitung secara lokal menggunakan library Adhan.",
  },
  {
    question: "Bagaimana cara mengatur pengaturan?",
    answer:
      "Semua pengaturan dilakukan langsung di TV melalui menu settings yang bisa diakses dengan remote. Tekan tombol tertentu atau navigasi ke ikon ⚙ di layar. Panel settings akan muncul dari sisi kanan layar.",
  },
  {
    question: "Bagaimana cara konek ke audio/speaker masjid?",
    answer:
      "Hubungkan output audio TV (jack 3.5mm, HDMI ARC, atau optical) ke amplifier/mixer masjid. Aplikasi akan otomatis memutar murrotal dan tarhim sebelum waktu adzan. Volume bisa diatur dari menu settings.",
  },
  {
    question: "Apa yang terjadi jika listrik mati?",
    answer:
      "Aplikasi memiliki fitur auto-start. Saat TV/STB menyala kembali setelah listrik padam, PrayerTV akan otomatis berjalan tanpa perlu membuka manual. Jika STB Anda tidak punya baterai internal, gunakan modul RTC USB (DS3231) sebagai backup waktu.",
  },
  {
    question: "Apa itu fitur RTC dan kapan dibutuhkan?",
    answer:
      "RTC (Real-Time Clock) adalah modul hardware USB yang menyimpan waktu walau perangkat mati. Dibutuhkan jika STB Anda tidak memiliki baterai CMOS (waktu reset ke 1970 setiap mati listrik). Cukup colok modul DS3231 ke port USB, aplikasi akan otomatis membaca waktu dari sana.",
  },
  {
    question: "Bisa menampilkan video atau foto?",
    answer:
      "Ya. PrayerTV memiliki media player built-in yang bisa memutar video atau slideshow foto sebagai background layar atau di panel samping (layout Side-bar). Cocok untuk menampilkan kegiatan masjid, pengumuman visual, atau konten dakwah.",
  },
  {
    question: "Ada berapa pilihan layout?",
    answer:
      "Saat ini tersedia 3 layout: Default (jadwal di bawah, jam besar di tengah), Side-bar (panel kiri jadwal, panel kanan media), dan Top (jadwal di atas). Semua dioptimasi untuk layar TV 1920x1080.",
  },
  {
    question: "Bagaimana cara membeli lisensi setelah trial habis?",
    answer:
      "Saat trial berakhir, aplikasi akan menampilkan layar aktivasi lisensi. Hubungi kami untuk mendapatkan kode lisensi. Format kode: PTVA-XXXX-XXXX. Satu lisensi berlaku untuk satu perangkat.",
  },
  {
    question: "Apakah bisa koreksi waktu sholat?",
    answer:
      "Ya. Anda bisa mengatur offset per-waktu sholat (±menit) dari menu settings. Misalnya jika waktu Subuh di daerah Anda perlu dimajukan 2 menit, cukup set offset Subuh = +2. Tanggal Hijriyah juga bisa dikoreksi (±hari).",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Jawaban untuk pertanyaan yang sering ditanyakan tentang PrayerTV.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border/50 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-muted/50 transition-colors"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="text-sm md:text-base font-medium pr-4">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-5 pb-4 md:pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

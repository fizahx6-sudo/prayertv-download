import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    title: "Auto Tartil & Tarhim",
    description:
      "Langsung konek ke audio masjid. Murrotal dan tarhim diputar otomatis tepat sebelum waktu adzan dengan presisi tinggi.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M18.36 6.64A9 9 0 0 1 20.77 15" />
        <path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" />
        <path d="M12 2v4" />
        <path d="m2 2 20 20" />
        <path d="M12 12v8" />
      </svg>
    ),
    title: "Auto-start Saat Listrik Mati",
    description:
      "TV mati karena listrik padam? Aplikasi otomatis berjalan kembali saat TV menyala tanpa perlu sentuhan manual.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </svg>
    ),
    title: "Media Player (Video & Slideshow)",
    description:
      "Putar video atau foto slideshow sebagai background atau di panel samping. Cocok untuk menampilkan kegiatan masjid.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
        <polyline points="17 2 12 7 7 2" />
      </svg>
    ),
    title: "Stand-alone (Tanpa Aplikasi Lain)",
    description:
      "Semua pengaturan ada di dalam TV. Tidak perlu HP, laptop, atau aplikasi tambahan untuk mengontrol. Cukup remote TV.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="3" y="3" width="7" height="18" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "Berbagai Macam Layout",
    description:
      "Pilih tampilan Default, Side-bar, atau Top layout sesuai selera. Masing-masing dioptimasi untuk layar TV 1080p.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Waktu Sholat via GPS",
    description:
      "Deteksi lokasi otomatis saat pertama kali setup. Perhitungan akurat menggunakan library Adhan dengan metode Kemenag/MUIS.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Koreksi Waktu & Hijriyah",
    description:
      "Sesuaikan offset waktu sholat per-waktu (±menit) dan koreksi tanggal Hijriyah sesuai keputusan pemerintah setempat.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M7 2v4" />
        <path d="M17 2v4" />
        <rect x="2" y="4" width="20" height="18" rx="2" />
        <path d="M12 12h.01" />
        <path d="M12 16h.01" />
        <path d="M16 12h.01" />
        <path d="M8 12h.01" />
      </svg>
    ),
    title: "Support RTC (Backup Waktu)",
    description:
      "Mendukung modul RTC USB (DS3231) sebagai cadangan waktu jika STB tidak memiliki baterai internal. Waktu tetap akurat walau offline.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
    title: "Dim Malam (Hemat Listrik)",
    description:
      "Layar TV otomatis meredup atau mati di malam hari sesuai jadwal yang ditentukan. Hemat listrik, perpanjang umur TV.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M2 20h.01" />
        <path d="M7 20v-4" />
        <path d="M12 20v-8" />
        <path d="M17 20V8" />
        <path d="M22 4v16" />
      </svg>
    ),
    title: "Internet Hanya Sekali",
    description:
      "Koneksi internet hanya diperlukan saat setup awal. Setelah itu aplikasi berjalan sepenuhnya offline dengan cache 30 hari.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Fitur Unggulan
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dirancang khusus untuk kebutuhan masjid dan musholla. Satu aplikasi,
            semua kebutuhan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border/50 bg-card/50 hover:bg-card/80 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

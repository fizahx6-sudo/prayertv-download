import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export function DownloadSection() {
  return (
    <section id="download" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Download & Coba
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nikmati trial 7 hari penuh tanpa batasan fitur. Kirim feedback dan
            dapatkan harga khusus saat membeli lisensi.
          </p>
        </div>

        <Card className="max-w-lg mx-auto border-border/50 bg-card/50">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold">PrayerTV</h3>
                <p className="text-sm text-muted-foreground">Android TV App</p>
              </div>
              <Badge variant="secondary">v1.0</Badge>
            </div>

            <Separator className="mb-6" />

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Platform</span>
                <span>Android TV / STB / Android Box</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Ukuran</span>
                <span>~159 MB</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Min. Android</span>
                <span>Android 5.0+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Arsitektur</span>
                <span>ARM, ARM64, x86, x86_64</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Trial</span>
                <span>7 hari (full fitur)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Lisensi</span>
                <span>Berbayar (per-device)</span>
              </div>
            </div>

            <Separator className="mb-6" />

            <a
              href="/download/prayertv-v1.0.apk"
              download
              className={cn(buttonVariants({ size: "lg" }), "w-full text-base")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-5 w-5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download APK (Trial 7 Hari)
            </a>

            <div className="mt-4 p-3 rounded-md bg-muted/50 border border-border/50">
              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                💡 Kirim feedback (bug atau saran UI) selama masa trial dan
                dapatkan <span className="text-foreground font-medium">harga khusus</span> saat
                membeli lisensi.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Installation steps */}
        <div className="max-w-2xl mx-auto mt-12 md:mt-16">
          <h3 className="text-lg font-semibold text-center mb-8">
            Cara Install & Setup
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted mx-auto mb-3">
                <span className="text-sm font-semibold">1</span>
              </div>
              <p className="text-sm font-medium mb-1">Download APK</p>
              <p className="text-xs text-muted-foreground">
                Download ke flashdisk atau langsung ke TV
              </p>
            </div>
            <div className="text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted mx-auto mb-3">
                <span className="text-sm font-semibold">2</span>
              </div>
              <p className="text-sm font-medium mb-1">Install di TV</p>
              <p className="text-xs text-muted-foreground">
                Buka APK, aktifkan &quot;Unknown Sources&quot; jika diminta
              </p>
            </div>
            <div className="text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted mx-auto mb-3">
                <span className="text-sm font-semibold">3</span>
              </div>
              <p className="text-sm font-medium mb-1">Konek WiFi</p>
              <p className="text-xs text-muted-foreground">
                Hubungkan internet sekali untuk deteksi lokasi & cache jadwal
              </p>
            </div>
            <div className="text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted mx-auto mb-3">
                <span className="text-sm font-semibold">4</span>
              </div>
              <p className="text-sm font-medium mb-1">Selesai</p>
              <p className="text-xs text-muted-foreground">
                Atur via menu settings di TV, lalu biarkan berjalan otomatis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

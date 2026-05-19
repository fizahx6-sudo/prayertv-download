import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3 text-primary-foreground"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-sm font-medium">PrayerTV</span>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Dibuat untuk masjid dan musholla di Indonesia
          </p>

          <p className="text-xs text-muted-foreground">
            &copy; 2026 PrayerTV
          </p>
        </div>

        <Separator className="my-6" />

        <p className="text-xs text-muted-foreground text-center">
          Trial 7 hari gratis. Kirim feedback untuk mendapatkan harga khusus
          lisensi.
        </p>
      </div>
    </footer>
  );
}

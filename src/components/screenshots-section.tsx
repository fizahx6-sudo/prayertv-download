"use client";

import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const screenshots = [
  {
    src: "/screenshots/default-mode.jpg",
    alt: "Default Layout - Tampilan utama jadwal sholat",
    label: "Default Layout",
    description: "Tampilan utama dengan jam besar, jadwal sholat, dan countdown",
  },
  {
    src: "/screenshots/side-bar.jpg",
    alt: "Side-bar Layout dengan media player",
    label: "Side-bar Layout",
    description: "Panel kiri jadwal sholat, panel kanan media slideshow/video",
  },
  {
    src: "/screenshots/top-bar.jpg",
    alt: "Top Layout - Bar jadwal di atas",
    label: "Top Layout",
    description: "Bar jadwal sholat di bagian atas layar dengan background penuh",
  },
  {
    src: "/screenshots/media-player.jpg",
    alt: "Media Player - Video dan slideshow",
    label: "Media Player",
    description: "Putar video atau foto slideshow kegiatan masjid",
  },
  {
    src: "/screenshots/setting-overlay.jpg",
    alt: "Settings Menu Overlay",
    label: "Menu Pengaturan",
    description: "Panel settings slide-in dari kanan, semua konfigurasi di TV",
  },
];

function ScreenshotCard({
  src,
  alt,
  label,
  description,
}: {
  src: string;
  alt: string;
  label: string;
  description: string;
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="group overflow-hidden rounded-lg border border-border/50 bg-muted/30 transition-colors hover:border-border">
      <div className="relative w-full">
        {hasError ? (
          <div className="aspect-video flex flex-col items-center justify-center p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10 text-muted-foreground/40 mb-3"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            <p className="text-xs text-muted-foreground/60 text-center">
              Screenshot segera hadir
            </p>
          </div>
        ) : (
          <>
            {isLoading && (
              <Skeleton className="aspect-video w-full rounded-none" />
            )}
            <Image
              src={src}
              alt={alt}
              width={1920}
              height={1080}
              className={`w-full h-auto transition-opacity duration-300 ${
                isLoading ? "opacity-0 absolute" : "opacity-100"
              }`}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setHasError(true);
                setIsLoading(false);
              }}
            />
          </>
        )}
      </div>
      <div className="p-4">
        {isLoading && !hasError ? (
          <>
            <Skeleton className="h-4 w-32 mb-1.5" />
            <Skeleton className="h-3 w-56" />
          </>
        ) : (
          <>
            <p className="text-sm font-medium">{label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
          </>
        )}
      </div>
    </div>
  );
}

export function ScreenshotsSection() {
  return (
    <section id="screenshots" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Tampilan Aplikasi
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Desain yang bersih dan mudah dibaca dari jarak jauh, dioptimasi untuk
            resolusi 1920x1080.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {screenshots.map((screenshot) => (
            <ScreenshotCard key={screenshot.src} {...screenshot} />
          ))}
        </div>
      </div>
    </section>
  );
}

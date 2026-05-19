import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrayerTV - Jadwal Sholat untuk Android TV",
  description:
    "Aplikasi jadwal sholat stand-alone untuk Android TV & STB. Auto tartil, tarhim, media player, multi-layout, dan banyak lagi. Trial 7 hari gratis.",
  keywords: [
    "prayer",
    "sholat",
    "jadwal sholat",
    "android tv",
    "masjid",
    "stb",
    "tarhim",
    "murrotal",
  ],
  openGraph: {
    title: "PrayerTV - Jadwal Sholat untuk Android TV",
    description:
      "Tampilkan jadwal sholat di TV masjid dengan tampilan elegan. Stand-alone, auto-start, dan mudah dikonfigurasi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="light" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

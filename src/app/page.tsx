import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { DownloadSection } from "@/components/download-section";
import { ScreenshotsSection } from "@/components/screenshots-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { PageLoader } from "@/components/page-loader";

export default function Home() {
  return (
    <PageLoader>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <FeaturesSection />
          <ScreenshotsSection />
          <DownloadSection />
          <FAQSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </PageLoader>
  );
}

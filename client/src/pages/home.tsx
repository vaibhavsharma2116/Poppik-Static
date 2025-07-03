import Navigation from "@/components/navigation";
import BannerCarousel from "@/components/banner-carousel";
import AboutSection from "@/components/about-section";
import MissionSection from "@/components/mission-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <BannerCarousel />
        <AboutSection />
        <MissionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

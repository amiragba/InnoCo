import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
import UpcomingEventsSection from "@/components/upcoming-events-section";
import SuccessStoriesSection from "@/components/success-stories-section";
import NewsletterSection from "@/components/newsletter-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <UpcomingEventsSection />
      <SuccessStoriesSection />
      <NewsletterSection />
    </div>
  );
}

import Hero from "@/app/components/Hero/Hero"
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import FooterCalloutSection from "@/app/components/FooterCalloutSection";
import FaqSection from "@/app/components/Faq";
import AboutSection from "@/app/components/AboutSection";
import HighlightedFeatureSection from "@/app/components/FeatureSection/HighlightedFeatureSection";
import FeatureSection from "@/app/components/FeatureSection/FeatureSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <FeatureSection />
      <HighlightedFeatureSection />
      <TestimonialsSection />
      <FaqSection />
      <FooterCalloutSection />
      <Footer />
    </>
  )
}

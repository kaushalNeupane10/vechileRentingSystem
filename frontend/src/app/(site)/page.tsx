import ExperienceSection from "@/components/user/homePage/ExperienceSection";
import TestimonialsSection from "@/components/user/homePage/TestimonialsSection";
import FaqSection from "@/components/user/homePage/Faqsection";
import Hero from "@/components/user/homePage/Hero";
import HowItWorksSection from "@/components/user/homePage/HowItWorksSection";

export default function page() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <FaqSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </>
  );
}

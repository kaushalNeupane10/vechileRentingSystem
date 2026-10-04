import AllVehiclesSection from "@/components/user/homePage/AllVehicleSection";
import ExperienceSection from "@/components/user/homePage/ExperienceSection";
import FaqSection from "@/components/user/homePage/Faqsection";
import FeaturedVehiclesSection from "@/components/user/homePage/FeaturedVehicleSection";
import Hero from "@/components/user/homePage/Hero";
import HowItWorksSection from "@/components/user/homePage/HowItWorksSection";
import TestimonialSection from "@/components/user/homePage/TestimonialsSection";
import TopRentedSection from "@/components/user/homePage/TopRentedSection";

export default function page() {
  return (
    <>
      <Hero />
      <TopRentedSection />
      <FeaturedVehiclesSection />
      <AllVehiclesSection />
      <ExperienceSection />
      <HowItWorksSection />
      <FaqSection />
      <TestimonialSection />
    </>
  );
}

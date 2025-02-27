import {
  CTASection,
  FaqSection,
  FeatureSection,
  // HeroSection2,
  HeroSection3,
  PodcastSection,
  Services,
  StatsSection,
  TestimonialSection,
} from "./sections";

import ScrollToTop from "../../../utilities/ScrollToTop";

function LandingPage() {
  return (
    <div className="text-blue">
      <ScrollToTop />
      <HeroSection3 />
      <FeatureSection />
      <Services />
      <PodcastSection />
      <StatsSection />
      <TestimonialSection />
      <FaqSection />
      <CTASection />
    </div>
  );
}

export default LandingPage;

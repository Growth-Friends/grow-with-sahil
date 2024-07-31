import BlogSection from "@/components/BlogSection/BlogSection";
import ExpertSection from "@/components/ExpertSection/ExpertSection";
import GrowthResourcesSection from "@/components/GrowthResourcesSection/GrowthResourcesSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import MarketingToolSection from "@/components/MarketingToolSection/MarketingToolSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExpertSection />
      <MarketingToolSection />
      <GrowthResourcesSection />
      <BlogSection />
      <div className="bg-black h-[450px] " />
    </>
  );
}

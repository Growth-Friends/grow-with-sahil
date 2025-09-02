import BlogSection from "@/components/BlogSection/BlogSection";
import ExpertSection from "@/components/ExpertSection/ExpertSection";
import GrowthResourcesSection from "@/components/GrowthResourcesSection/GrowthResourcesSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import MarketingToolSection from "@/components/MarketingToolSection/MarketingToolSection";

export default function Home() {
  return (
    <>
      <HeroSection home={true} />
      <ExpertSection home={true} />
      <MarketingToolSection />
      <GrowthResourcesSection />
      <BlogSection />
    </>
  );
}

export async function generateMetadata() {
  // const response = await fetch(
  //   "https://growwithsahil.com/blog/wp-json/wp/v2/seo-api/?_fields=acf&acf_format=standard",
  //   { method: "GET" }
  // ).then((res) => res.json());
  // const seoDetail = response.filter((item) => item.acf["page_slug"] === "/")[0]
  //   ?.acf;
  return {
    title:
      "Grow With Sahil | Growth Marketing Strategies, Funnels & AI-Driven Scale",
    description:
      "Discover how Sahil, a performance and growth marketer, drives ROI through AI-powered funnels, retention strategies, and full-funnel marketing. Learn proven tactics to scale D2C, SaaS, and fintech brands with actionable insights, case studies, and growth playbooks.",
  };
}

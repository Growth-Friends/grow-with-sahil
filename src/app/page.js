import BlogSection from "@/components/BlogSection/BlogSection";
import ExpertSection from "@/components/ExpertSection/ExpertSection";
import GrowthResourcesSection from "@/components/GrowthResourcesSection/GrowthResourcesSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import MarketingToolSection from "@/components/MarketingToolSection/MarketingToolSection";
import { Description } from "@mui/icons-material";
import { headers } from "next/headers";

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
  const response = await fetch(
    "https://growwithsahil.com/blog/wp-json/wp/v2/seo-api/?_fields=acf&acf_format=standard"
  ).then((res) => res.json());
  const seoDetail = response.filter((item) => item.acf["page_slug"] === "/")[0]
    ?.acf;
  return {
    title: seoDetail?.title,
    description: seoDetail?.description,
  };
}

import { PageMain } from "@/components/Layout/PageMain/PageMain";
import { SectionFacialAnalysis } from "@/components/Sections/SectionFacialAnalysis/SectionFacialAnalysis";
import { SectionFAQ } from "@/components/Sections/SectionFAQ/SectionFAQ";
import { SectionHero } from "@/components/Sections/SectionHero/SectionHero";
import { SectionGlowUp } from "@/components/Sections/SectionGlowUp/SectionGlowUp";

export const revalidate = 300;

export default function Home() {
  return (
    <PageMain>
      <SectionHero />
      <SectionFacialAnalysis />
      <SectionFAQ />
      <SectionGlowUp />

      <div style={{ height: "100vh" }} />
    </PageMain>
  );
}

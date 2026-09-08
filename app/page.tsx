import { PageMain } from "@/components/Layout/PageMain/PageMain";
import { SectionFacialAnalysis } from "@/components/Sections/SectionFacialAnalysis/SectionFacialAnalysis";
import { SectionHero } from "@/components/Sections/SectionHero/SectionHero";

export const revalidate = 300;

export default function Home() {
  return (
    <PageMain>
      <SectionHero className="max-desktop:hidden" />
      <SectionFacialAnalysis />
    </PageMain>
  );
}

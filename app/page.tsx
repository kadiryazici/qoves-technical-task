import { PageMain } from "@/components/PageMain/PageMain";
import { SectionHero } from "@/components/SectionHero/SectionHero";

export const revalidate = 300;

export default function Home() {
  return (
    <PageMain>
      <SectionHero />
    </PageMain>
  );
}

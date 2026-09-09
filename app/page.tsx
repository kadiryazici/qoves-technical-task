import { PageMain } from "@/components/Layout/PageMain/PageMain";
import { SectionFacialAnalysis } from "@/components/Sections/SectionFacialAnalysis/SectionFacialAnalysis";
import { SectionFAQ } from "@/components/Sections/SectionFAQ/SectionFAQ";
import { SectionHero } from "@/components/Sections/SectionHero/SectionHero";
import styles from "./page.module.scss";

export const revalidate = 300;

export default function Home() {
  return (
    <PageMain>
      <SectionHero className={styles.hero} />
      <SectionFacialAnalysis />
      <SectionFAQ />
    </PageMain>
  );
}

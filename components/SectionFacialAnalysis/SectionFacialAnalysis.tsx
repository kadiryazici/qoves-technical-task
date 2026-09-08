import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"
import { PageSection } from "../PageSection/PageSection"
import { PageSectionContent } from "../PageSectionContent/PageSectionContent"
import { ContentHeader } from "../ContentHeader/ContentHeader"
import { PageSectionContentBackground } from "../PageSectionContentBackground/PageSectionContentBackground"
import Image from "next/image"

export type SectionFacialAnalysisProps = Omit<ComponentProps<typeof PageSection>, "children">

export function SectionFacialAnalysis(props: SectionFacialAnalysisProps) {
  const { className, ...attrs } = props

  return (
    <PageSection
      {...attrs}
      className={cn("min-h-[832px] bg-primary-400 overflow-clip",className)}
    >
      <PageSectionContentBackground className="max-w-full overflow-hidden items-center justify-center">
        <div className="relative shrink-0 will-change-[filter] blur-[250px] w-[820px] h-[1000px]">
          <Image
            alt="blurred background image"
            aria-hidden="true"
            className="print:invisible object-contain"
            fill
            src="/images/facial-analysis-background-blur.webp"
          />
        </div>
      </PageSectionContentBackground>


      <PageSectionContent className="pt-14">
        <ContentHeader
          gap="lg"
          type="primary"
          className="text-center max-w-[556px] mx-auto"
          label="Personalized aesthetics"
          heading={<>
            Your complete
            {" "}
            <span className="text-white/50">facial analysis</span>
          </>}
          description={
            <>
              <span className="contents text-text-button-primary">
                Every face is unique. We assess more than 100 unique facial markers to
                <br />
                give you a precise understanding of your aesthetics.
              </span>
            </>
          }
        />

        <div className="aspect-732/1097 absolute left-[348px] top-[112px] w-full max-w-[732px]">
          <Image
            src="/images/facial-analysis/image.webp"
            alt="facial analysis poster woman"
            className="object-contain object-top inset-0"
            fill
          />
        </div>
      </PageSectionContent>
    </PageSection>
  )
}

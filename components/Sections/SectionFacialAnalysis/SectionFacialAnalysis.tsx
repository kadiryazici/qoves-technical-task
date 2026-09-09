import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"
import { ContentHeader } from "@/components/Atoms/ContentHeader/ContentHeader"
import { PageSection } from "@/components/Layout/PageSection/PageSection"
import { PageSectionContent } from "@/components/Layout/PageSectionContent/PageSectionContent"
import { PageSectionContentBackground } from "@/components/Layout/PageSectionContentBackground/PageSectionContentBackground"
import Image from "next/image"
import { BrowsFallGraphic } from "@/components/Graphics/BrowsFallGraphic/BrowsFallGraphic"
import { EyebrowDensityChart } from "@/components/Graphics/EyebrowDensityChart/EyebrowDensityChart"
import { LipSmoothnessGraphic } from "@/components/Graphics/LipSmoothnessGraphic/LipSmoothnessGraphic"
import { MelaninConcentrationGraphic } from "@/components/Graphics/MelaninConcentrationGraphic/MelaninConcentrationGraphic"
import { FacialThirdsGraphic } from "@/components/Graphics/FacialThirdsGraphic/FacialThirdsGraphic"
import { SymmetryGraphic } from "@/components/Graphics/SymmetryGraphic/SymmetryGraphic"

export type SectionFacialAnalysisProps = Omit<ComponentProps<typeof PageSection>, "children">

export function SectionFacialAnalysis(props: SectionFacialAnalysisProps) {
  const { className, ...attrs } = props

  return (
    <PageSection
      {...attrs}
      className={cn("min-h-[832px] bg-primary-400 overflow-clip",className)}
    >
      <PageSectionContentBackground className="isolate max-w-full overflow-hidden items-center justify-center">
        <div className="pointer-events-none z-[-1] relative shrink-0 will-change-[filter] blur-[250px] w-[820px] h-[1000px]">
          <Image
            alt="blurred background image"
            aria-hidden="true"
            className="print:invisible object-contain"
            fill
            src="/images/facial-analysis-background-blur.webp"
          />
        </div>

        <BackgroundGraphics />
      </PageSectionContentBackground>


      <PageSectionContent className="pointer-events-none pt-14 pointer">
        <ContentHeader
          gap="lg"
          type="primary"
          className="pointer-events-auto text-center max-w-[556px] mx-auto"
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

        <div className="aspect-732/1097 absolute left-0 right-0 mx-auto top-[112px] w-full max-w-[732px]">
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

function BackgroundGraphics() {
  return (
    <div className="pointer-events-auto flex flex-row w-[1565px] justify-between absolute left-1/2 -translate-x-1/2 bottom-[154px]">
      <div className="flex flex-row gap-4">
        <BrowsFallGraphic className="shrink-0" />
        <div className="flex flex-col gap-[14.18px] shrink-0">
          <EyebrowDensityChart />
          <LipSmoothnessGraphic />
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <MelaninConcentrationGraphic className="shrink-0" />
        <div className="flex flex-col gap-4 shrink-0">
          <FacialThirdsGraphic />
          <SymmetryGraphic />
        </div>
      </div>
    </div>
  )
}

function CornerBlur() {
  <div className="absolute inset-0 ">

  </div>
}

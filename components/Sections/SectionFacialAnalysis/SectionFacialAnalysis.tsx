"use client"

import type { ComponentProps } from "react"
import { useLayoutEffect, useRef } from "react"

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
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export type SectionFacialAnalysisProps = Omit<ComponentProps<typeof PageSection>, "children">

export function SectionFacialAnalysis(props: SectionFacialAnalysisProps) {
  const { className, ...attrs } = props

  const headerRef = useRef<HTMLDivElement>(null)
  const backgroundGraphicsRef = useRef<HTMLDivElement>(null)
  const portraitParallaxRef = useRef<HTMLDivElement>(null)
  const portraitRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const header = headerRef.current
    const backgroundGraphics = backgroundGraphicsRef.current
    const portraitParallax = portraitParallaxRef.current
    const portrait = portraitRef.current

    if (!header || !backgroundGraphics || !portraitParallax || !portrait) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      gsap.to(backgroundGraphics, {
        y: 48,
        ease: "none",
        scrollTrigger: {
          trigger: backgroundGraphics,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      gsap.to(portraitParallax, {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: portraitParallax,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      const timeline = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
          once: true,
        },
      })

      timeline
        .from(header, { autoAlpha: 0, y: 24, duration: 0.7 })
        .from(backgroundGraphics, { autoAlpha: 0, scale: 1.05, duration: 0.8 }, "+=0.15")
        .from(portrait, { autoAlpha: 0, y: 40, scale: 0.97, duration: 0.8 }, "-=0.35")
    })

    return () => {
      context.revert()
    }
  }, [])

  return (
    <PageSection
      {...attrs}
      className={cn("min-h-[832px] bg-primary-400 overflow-clip",className)}
    >
      <PageSectionContentBackground className="z-[-2] isolate max-w-full overflow-hidden items-center justify-center">
        <div className="pointer-events-none z-[-1] relative shrink-0 will-change-[filter] blur-[250px] w-[820px] h-[1000px]">
          <Image
            alt="blurred background image"
            aria-hidden="true"
            className="print:invisible object-contain"
            fill
            src="/images/facial-analysis-background-blur.webp"
          />
        </div>
        <BackgroundGraphics ref={backgroundGraphicsRef} />
      </PageSectionContentBackground>

      <CornerBlurs />


      <PageSectionContent className="pointer-events-none pt-14 pointer">
          <ContentHeader
            gap="lg"
            type="primary"
            className="pointer-events-auto text-center max-w-[556px] mx-auto"
            label="Personalized aesthetics"
            ref={headerRef}
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

        <div ref={portraitParallaxRef} className="aspect-732/1097 absolute left-0 right-0 mx-auto top-[112px] w-full max-w-[732px]">
          <div ref={portraitRef} className="relative size-full">
            <Image
              src="/images/facial-analysis/image.webp"
              alt="facial analysis poster woman"
              className="object-contain object-top inset-0"
              fill
            />
          </div>
        </div>
      </PageSectionContent>
    </PageSection>
  )
}

function BackgroundGraphics(props: ComponentProps<"div">) {
  const { className, ...attrs } = props

  return (
    <div
      {...attrs}
      className={cn("pointer-events-auto flex flex-row w-[1565px] justify-between absolute left-1/2 -translate-x-1/2 bottom-[154px]", className)}
    >
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

function CornerBlurs() {
  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none">
      <div
        className="h-full w-[16%] backdrop-blur-xs absolute left-0 top-0"
        style={{
          maskImage: "linear-gradient(to right, #000 70%, transparent 100%)"
        }}
      />
      <div
        className="h-full w-[16%] backdrop-blur-xs absolute right-0 top-0"
        style={{
          maskImage: "linear-gradient(to left, #000 70%, transparent 100%)"
        }}
      />
    </div>
  )
}

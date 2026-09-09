"use client"

import { clsx } from "clsx"
import type { ComponentProps } from "react"
import { useLayoutEffect, useRef } from "react"

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
import styles from "./SectionFacialAnalysis.module.scss"

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
      className={clsx(styles.root, className)}
    >
      <PageSectionContentBackground className={styles.background}>
        <div className={styles.backgroundGlow}>
          <Image
            alt="blurred background image"
            aria-hidden="true"
            className={styles.backgroundImage}
            fill
            src="/images/facial-analysis-background-blur.webp"
          />
        </div>
        <BackgroundGraphics ref={backgroundGraphicsRef} />
      </PageSectionContentBackground>

      <CornerBlurs />


      <PageSectionContent className={styles.content}>
          <ContentHeader
            gap="lg"
            type="primary"
            className={styles.header}
            label="Personalized aesthetics"
            ref={headerRef}
            heading={<>
              Your complete
              {" "}
              <span className={styles.mutedHeading}>facial analysis</span>
            </>}
            description={
              <>
                <span className={styles.description}>
                  Every face is unique. We assess more than 100 unique facial markers to
                  <br />
                  give you a precise understanding of your aesthetics.
                </span>
              </>
            }
          />

        <div ref={portraitParallaxRef} className={styles.portraitParallax}>
          <div ref={portraitRef} className={styles.portrait}>
            <Image
              src="/images/facial-analysis/image.webp"
              alt="facial analysis poster woman"
              className={styles.portraitImage}
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
      className={clsx(styles.graphics, className)}
    >
      <div className={styles.graphicsGroup}>
        <BrowsFallGraphic className={styles.graphic} />
        <div className={styles.graphicsColumnTight}>
          <EyebrowDensityChart />
          <LipSmoothnessGraphic />
        </div>
      </div>

      <div className={styles.graphicsGroup}>
        <MelaninConcentrationGraphic className={styles.graphic} />
        <div className={styles.graphicsColumn}>
          <FacialThirdsGraphic />
          <SymmetryGraphic />
        </div>
      </div>
    </div>
  )
}

function CornerBlurs() {
  return (
    <div className={styles.cornerBlurs}>
      <div
        className={clsx(styles.cornerBlur, styles.cornerBlurLeft)}
      />
      <div
        className={clsx(styles.cornerBlur, styles.cornerBlurRight)}
      />
    </div>
  )
}

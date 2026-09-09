"use client"

import type { ComponentProps } from "react"
import { useLayoutEffect, useRef } from "react"
import { ContentHeader } from "@/components/Atoms/ContentHeader/ContentHeader";
import { BeforeAfterComparison } from "@/components/Atoms/BeforeAfterComparison/BeforeAfterComparison";
import { GlowupCard } from "@/components/Atoms/GlowupCard/GlowupCard";
import { PageSection } from "@/components/Layout/PageSection/PageSection";
import { PageSectionContent } from "@/components/Layout/PageSectionContent/PageSectionContent";
import { cn } from "@/utils/cn";
import { gsap } from "gsap"

const glowupCardBodies = [
  <>
    Get your expert facial
    <br />
    analysis
  </>,
  <>
    Visualise your best
    <br />
    looking self
  </>,
  <>
    Get your personalized
    <br />
    glow-up protocol
  </>,
  <>
    Track your progress and see
    <br />
    dramatic results
  </>,
]

export function SectionHero(props: Omit<ComponentProps<"div">, "children">) {
  const { className, ...attrs } = props

  const headerRef = useRef<HTMLDivElement>(null)
  const beforeAfterRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const header = headerRef.current
    const beforeAfter = beforeAfterRef.current
    const cardsContainer = cardsContainerRef.current

    if (!header || !beforeAfter || !cardsContainer) {
      return
    }

    const context = gsap.context(() => {
      const cards = cardsContainer.querySelectorAll(".glowup-card-animation-item")
      const timeline = gsap.timeline({ defaults: { ease: "power2.out" } })

      timeline
        .delay(0.25)
        .from(header, { autoAlpha: 0, y: 24, duration: 0.7 })
        .from(beforeAfter, { autoAlpha: 0, scale: 1.05, y: 24, filter: "blur(6px)", duration: 1 })
        .from(cards, { autoAlpha: 0, x: -24, duration: 1, filter: "blur(3px)", stagger: 0.20 })
    })

    return () => {
      context.revert()
    }
  }, [])

  return (
    <div
      {...attrs}
      className={cn("", className)}
    >
      <PageSection
        {...attrs}
        className="inner-border-b"
      >
        <PageSectionContent className="inner-border-x">
          <div ref={headerRef}>
            <ContentHeader
              type="secondary"
              className="mx-auto py-10 text-center max-w-[700px]"
              label="Personalized Analysis"
              heading={<>
                Get your personalised
                {" "}
                <span className="text-text-disabled">Qoves plan</span>
              </>}
              description={
                <>
                  Understand your facial features and start your glow-up today
                  <br />
                  with a proven action plan, no plastic surgery needed.
                </>
              }
            />
          </div>
        </PageSectionContent>
      </PageSection>

      <PageSection
        {...attrs}
        className="inner-border-b"
      >
        <PageSectionContent className="inner-border-x p-4">
          <div ref={beforeAfterRef}>
            <BeforeAfterComparison />
          </div>
        </PageSectionContent>
      </PageSection>

      <PageSection
        {...attrs}
        className="inner-border-b"
      >
        <PageSectionContent className="inner-border-x">
          <div ref={cardsContainerRef} className="grid grid-cols-4 auto-cols-fr">
            {glowupCardBodies.map((body, index) => (
              <div
                key={index}
                className={cn(
                  "glowup-card-animation-item p-4 flex",
                  index !== glowupCardBodies.length - 1 && "inner-border-r"
                )}
              >
                <GlowupCard className="w-full" number={index + 1}>
                  {body}
                </GlowupCard>
              </div>
            ))}
          </div>
        </PageSectionContent>
      </PageSection>

      <PageSection>
        <PageSectionContent className="inner-border-x h-[120px]" />
    </PageSection>
    </div>
  )
}

"use client"

import { clsx } from "clsx"
import type { ComponentProps } from "react"
import { useLayoutEffect, useRef } from "react"
import { ContentHeader } from "@/components/Atoms/ContentHeader/ContentHeader";
import { BeforeAfterComparison } from "@/components/Atoms/BeforeAfterComparison/BeforeAfterComparison";
import { NumberCard } from "@/components/Atoms/NumberCard/NumberCard";
import { PageSection } from "@/components/Layout/PageSection/PageSection";
import { PageSectionContent } from "@/components/Layout/PageSectionContent/PageSectionContent";
import { gsap } from "gsap"
import styles from "./SectionHero.module.scss"

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
      const cards = cardsContainer.querySelectorAll(`.${styles.cardItem}`)
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
      className={clsx(className)}
    >
      <PageSection
        {...attrs}
        className={styles.sectionBorder}
      >
        <PageSectionContent className={styles.contentBorder}>
          <div ref={headerRef}>
            <ContentHeader
              type="secondary"
              className={styles.header}
              label="Personalized Analysis"
              heading={<>
                Get your personalised
                {" "}
                <span className={styles.disabled}>Qoves plan</span>
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
        className={styles.sectionBorder}
      >
        <PageSectionContent className={styles.comparisonContent}>
          <div ref={beforeAfterRef}>
            <BeforeAfterComparison />
          </div>
        </PageSectionContent>
      </PageSection>

      <PageSection
        {...attrs}
        className={styles.sectionBorder}
      >
        <PageSectionContent className={styles.contentBorder}>
          <div ref={cardsContainerRef} className={styles.cards}>
            {glowupCardBodies.map((body, index) => (
              <div
                key={index}
                className={clsx(
                  styles.cardItem,
                  index !== glowupCardBodies.length - 1 && styles.cardDivider,
                )}
              >
                <NumberCard className={styles.card} number={index + 1}>
                  {body}
                </NumberCard>
              </div>
            ))}
          </div>
        </PageSectionContent>
      </PageSection>

      <PageSection>
        <PageSectionContent className={styles.spacer} />
    </PageSection>
    </div>
  )
}

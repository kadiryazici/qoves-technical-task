"use client"

import { clsx } from "clsx"
import type { ComponentProps } from "react"
import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { PageSection } from "@/components/Layout/PageSection/PageSection"
import { PageSectionContent } from "@/components/Layout/PageSectionContent/PageSectionContent"
import { Accordion } from "@/components/Atoms/Accordion/Accordion"
import { ContentHeader } from "@/components/Atoms/ContentHeader/ContentHeader"
import styles from "./SectionFAQ.module.scss"

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus feugiat ante et magna finibus dapibus. Suspendisse posuere nisl ante, a sagittis nulla posuere vel. Donec a mattis ex. Sed finibus, turpis non condimentum placerat, velit turpis commodo justo, eu imperdiet ipsum arcu ut enim."

const qovesDescription = "Qoves is the best platform to improve your looks and achieve a real facial transformation without surgery. We provide you, from the comfort of your home, with a personalized facial analysis and transformation plan based on over 2,000 academic studies."

export type SectionFAQProps = Omit<ComponentProps<"div">, "div">

export function SectionFAQ(props: SectionFAQProps) {
  const { children, className, ...attrs } = props
  const headerRef = useRef<HTMLDivElement>(null)
  const accordionRootRef = useRef<HTMLDivElement>(null)
  const accordionItemRefs = useRef<Array<HTMLDivElement | null>>([])

  useLayoutEffect(() => {
    const header = headerRef.current
    const accordionRoot = accordionRootRef.current
    const accordionItems = accordionItemRefs.current.filter(isAccordionItem)

    if (!header || !accordionRoot || accordionItems.length === 0) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
          once: true,
        },
      })

      timeline
        .from(header, { autoAlpha: 0, y: 24, delay: 0.25, duration: 0.7 })
        .from(accordionRoot, { autoAlpha: 0, scale: 0.95, duration: 0.35 }, "-=0.2")
        .from(accordionItems, { autoAlpha: 0, scale: 0.95, filter: "blur(4px)", duration: 0.2, stagger: 0.08 })
    })

    return () => {
      context.revert()
    }
  }, [])

  return (
    <>
      <PageSection className={styles.sectionBorder}>
        <PageSectionContent className={styles.spacer} />
      </PageSection>

      <PageSection
        {...attrs}
        className={clsx(styles.sectionBorder, className)}
      >
        <PageSectionContent className={styles.content}>
          <ContentHeader
            label="Your Questions"
            className={styles.header}
            ref={headerRef}
            gap="base"
            type="secondary"
            headingType="heading-5"
            heading={
              <>
                Frequently asked
                {" "}
                <span className={styles.disabled}>questions</span>
              </>
            }
            description={
              <>
                If you have any further questions, please use the chat box in the bottom right or contact
                <br />
                us by email at hello@qoves.com
              </>
            }
          />

          <div className={styles.accordionContainer}>
            <Accordion.Root ref={accordionRootRef} className={styles.accordion}>
              <Accordion.Item
                ref={(element) => handleAccordionItemRef(0, element)}
                heading="General Questions"
                body={
                  <div className={styles.body}>
                    <Accordion.Root>
                      <Accordion.Item heading="What is Qoves?" body={<p>{qovesDescription}</p>} />
                      <Accordion.Item heading="Who is this for?" body={<p>{qovesDescription}</p>} />
                      <Accordion.Item heading="What exactly will I receive?" body={<p>{qovesDescription}</p>} />
                      <Accordion.Item heading="How does it work?" body={<p>{qovesDescription}</p>} />
                      <Accordion.Item heading="How long will it take for me to receive my results?" body={<p>{qovesDescription}</p>} />
                      <Accordion.Item heading="Is this a one-time report or a continuous service?" body={<p>{qovesDescription}</p>} />
                      <Accordion.Item heading="How often do I need to submit photos?" body={<p>{qovesDescription}</p>} />
                      <Accordion.Item heading="What makes Qoves different from beauty apps or filters?" body={<p>{qovesDescription}</p>} />
                      <Accordion.Item heading="Can I really get results without surgery?" body={<p>{qovesDescription}</p>} />
                    </Accordion.Root>
                  </div>
                }
              />
              <Accordion.Item ref={(element) => handleAccordionItemRef(1, element)} heading="About the Analysis" body={<p className={styles.body}>{loremIpsum}</p>} />
              <Accordion.Item ref={(element) => handleAccordionItemRef(2, element)} heading="About the Protocol" body={<p className={styles.body}>{loremIpsum}</p>} />
              <Accordion.Item ref={(element) => handleAccordionItemRef(3, element)} heading="Experience & Use" body={<p className={styles.body}>{loremIpsum}</p>} />
              <Accordion.Item ref={(element) => handleAccordionItemRef(4, element)} heading="Pricing & Subscription" body={<p className={styles.body}>{loremIpsum}</p>} />
              <Accordion.Item ref={(element) => handleAccordionItemRef(5, element)} heading="Privacy & Data" body={<p className={styles.body}>{loremIpsum}</p>} />
              <Accordion.Item ref={(element) => handleAccordionItemRef(6, element)} heading="Mindset & Philosophy" body={<p className={styles.body}>{loremIpsum}</p>} />
              <Accordion.Item ref={(element) => handleAccordionItemRef(7, element)} heading="Practical Concerns" body={<p className={styles.body}>{loremIpsum}</p>} />
              <Accordion.Item ref={(element) => handleAccordionItemRef(8, element)} heading="About Support" body={<p className={styles.body}>{loremIpsum}</p>} />
            </Accordion.Root>
          </div>
        </PageSectionContent>
      </PageSection>

      <PageSection>
        <PageSectionContent className={styles.spacer} />
      </PageSection>
    </>
  )

  function handleAccordionItemRef(index: number, element: HTMLDivElement | null) {
    accordionItemRefs.current[index] = element
  }
}

function isAccordionItem(item: HTMLDivElement | null): item is HTMLDivElement {
  return item !== null
}

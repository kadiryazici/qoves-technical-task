"use client";

import { clsx } from "clsx";
import type { ComponentProps, RefObject } from "react";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./SectionGlowUp.module.scss";
import { PageSection } from "@/components/Layout/PageSection/PageSection";
import { PageSectionContent } from "@/components/Layout/PageSectionContent/PageSectionContent";
import { Badge } from "@/components/Atoms/Badge/Badge";
import { ContentHeader } from "@/components/Atoms/ContentHeader/ContentHeader";
import { GlowUpCard } from "@/components/Atoms/GlowUpCard/GlowUpCard";
import Image from "next/image";
import { InfoCard } from "@/components/Atoms/InfoCard/InfoCard";

export type SectionGlowUpProps = Omit<ComponentProps<"div">, "children">;

const cards = [
  {
    img: "/images/glow-up/lifestyle-factors.webp",
    heading: "Lifestyle factors",
    description: "Considers diet, climate, stress, sleep, and habits.",
  },
  {
    img: "/images/glow-up/cultural-beauty.webp",
    heading: "Cultural beauty standards",
    description: "Adapts to regional and societal ideals.",
  },
  {
    img: "/images/glow-up/genetic-factors.webp",
    heading: "Genetic factors",
    description:
      "Takes into account genetic factors and how they might impact your facial aesthetics. ",
  },
];

export function SectionGlowUp(props: SectionGlowUpProps) {
  const { className, ...attrs } = props;
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.to(video, {
        filter: "blur(48px)",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${section.offsetHeight * 0.2}`,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <PageSection {...attrs} className={clsx(styles.root, className)}>
        <BackgroundVideo videoRef={videoRef} />
        <PageSectionContent className={styles.content}>
          <div className={styles.fixedContentContainer}>
            <div className={styles.contentHeading}>
              <ContentHeader
                label="Backed by 2000+ research papers"
                className={styles.header}
                gap="base"
                type="primary"
                heading={
                  <>
                    Will analyzing my face
                    <br />
                    <span style={{ opacity: "0.7" }}>Make me insecure?</span>
                  </>
                }
                description="Most insecurity comes from uncertainty-not knowing if your concerns are real or imagined. When you're guessing about your appearance, your mind often makes things seem worse than they are."
              />
            </div>

            <div className={styles.contentCardsContainer}>
              {cards.map((card, index) => (
                <div key={index} className={styles.cardContainer}>
                  <GlowUpCard
                    heading={card.heading}
                    description={card.description}
                    image={<Image alt={card.heading} src={card.img} fill />}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.floatingHeaderContainer}>
            <ContentHeader
              className={styles.floatingHeader}
              gap="base"
              type="primary"
              heading={
                <>
                  Is it vain to care
                  <br />
                  <span style={{ opacity: "0.5" }}>about your appearance?</span>
                </>
              }
              description="Many feel guilty about wanting to improve their looks, fearing it means they’re shallow or insecure. But here's what research tells us : caring about appearance is natural. Like health, finances, and education, it’s just another form of self-improvement."
            />
          </div>

          <InfoCards />
        </PageSectionContent>
      </PageSection>
    </div>
  );
}

type BackgroundVideoProps = Omit<ComponentProps<"div">, "children"> & {
  videoRef: RefObject<HTMLVideoElement | null>;
};

function BackgroundVideo(props: BackgroundVideoProps) {
  const { className, videoRef, ...attrs } = props;

  return (
    <div className={clsx(styles.videoContainer, className)} {...attrs}>
      <div>
        <div className={styles.videoGradientFilter} />

        <video
          ref={videoRef}
          playsInline
          autoPlay
          loop
          muted
          src="/videos/landing-video-compressed.mp4"
        />
      </div>
    </div>
  );
}

function InfoCards(props: Omit<ComponentProps<"div">, "children">) {
  const { className, ...attrs } = props;

  return (
    <div
      {...attrs}
      className={clsx(styles.infoCards, className)}
    >
      <InfoCard
        className={styles.infoCardConsider}
        heading="Consider this..."
      >
        <InfoCard.Item>First impressions matter</InfoCard.Item>
        <InfoCard.Item>It has a considerable impact on interpersonal interactions</InfoCard.Item>
        <InfoCard.Item>Small improvements can drastically impact quality of life</InfoCard.Item>
      </InfoCard>

      <InfoCard
        className={styles.infoCardApproach}
        heading={<>
          The key is approaching
          <br />
          it intelligently
        </>}
      >
        <InfoCard.Item>Not chasing unrealistic standards</InfoCard.Item>
        <InfoCard.Item>Not trying to look like someone else</InfoCard.Item>
        <InfoCard.Item>Not seeking perfection</InfoCard.Item>
        <InfoCard.Item>Aiming only for a better version of yourself</InfoCard.Item>
      </InfoCard>
    </div>
  )
}

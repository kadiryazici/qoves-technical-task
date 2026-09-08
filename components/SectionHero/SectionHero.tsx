import { ComponentProps } from "react";
import { PageSection } from "../PageSection/PageSection";
import { PageSectionContent } from "../PageSectionContent/PageSectionContent";
import { cn } from "@/utils/cn";
import { ContentHeader } from "../ContentHeader/ContentHeader";
import { GlowupCard } from "../GlowupCard/GlowupCard";

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
          <ContentHeader
            className="mx-auto py-10 text-center max-w-[660px]"
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
        </PageSectionContent>
      </PageSection>

      <PageSection
        {...attrs}
        className="inner-border-b"
      >
        <PageSectionContent className="inner-border-x">
          <div className="h-[300px]"></div>
        </PageSectionContent>
      </PageSection>

      <PageSection
        {...attrs}
        className="inner-border-b"
      >
        <PageSectionContent className="inner-border-x">
          <div className="grid grid-cols-4">
            {glowupCardBodies.map((body, index) => (
              <div
                key={index}
                className={cn(
                  "p-4",
                  index !== glowupCardBodies.length - 1 && "inner-border-r"
                )}
              >
                <GlowupCard number={index + 1}>
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

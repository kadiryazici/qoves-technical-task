import type { ComponentProps } from "react";
import { ContentHeader } from "@/components/Atoms/ContentHeader/ContentHeader";
import { BeforeAfterComparison } from "@/components/Atoms/BeforeAfterComparison/BeforeAfterComparison";
import { GlowupCard } from "@/components/Atoms/GlowupCard/GlowupCard";
import { PageSection } from "@/components/Layout/PageSection/PageSection";
import { PageSectionContent } from "@/components/Layout/PageSectionContent/PageSectionContent";
import { cn } from "@/utils/cn";

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
        </PageSectionContent>
      </PageSection>

      <PageSection
        {...attrs}
        className="inner-border-b"
      >
        <PageSectionContent className="inner-border-x p-4">
          <BeforeAfterComparison />
        </PageSectionContent>
      </PageSection>

      <PageSection
        {...attrs}
        className="inner-border-b"
      >
        <PageSectionContent className="inner-border-x">
          <div className="grid grid-cols-4 auto-cols-fr">
            {glowupCardBodies.map((body, index) => (
              <div
                key={index}
                className={cn(
                  "p-4 flex",
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

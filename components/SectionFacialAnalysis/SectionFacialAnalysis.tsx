import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type SectionFacialAnalysisProps = ComponentProps<"div">

export function SectionFacialAnalysis(props: SectionFacialAnalysisProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

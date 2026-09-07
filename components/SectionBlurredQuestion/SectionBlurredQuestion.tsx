import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type SectionBlurredQuestionProps = ComponentProps<"div">

export function SectionBlurredQuestion(props: SectionBlurredQuestionProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

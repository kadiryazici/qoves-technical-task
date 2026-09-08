import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type SectionYourQuestionsProps = ComponentProps<"div">

export function SectionYourQuestions(props: SectionYourQuestionsProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

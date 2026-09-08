import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type SectionFAQProps = ComponentProps<"div">

export function SectionFAQ(props: SectionFAQProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

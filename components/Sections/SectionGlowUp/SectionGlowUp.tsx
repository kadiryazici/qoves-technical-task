import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type SectionGlowUpProps = ComponentProps<"div">

export function SectionGlowUp(props: SectionGlowUpProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

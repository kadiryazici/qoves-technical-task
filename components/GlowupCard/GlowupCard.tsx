import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type GlowupCardProps = ComponentProps<"div"> & {
  number: number
}

export function GlowupCard(props: GlowupCardProps) {
  const { children, className, number, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

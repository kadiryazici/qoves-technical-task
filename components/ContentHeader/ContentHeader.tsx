import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/utils/cn"

export type ContentHeaderAlign = "centered" | "left" | "right"

export type ContentHeaderProps = ComponentProps<"div"> & {
  label?: ReactNode
  heading: ReactNode
  description: ReactNode
  align: ContentHeaderAlign
}

export function ContentHeader(props: ContentHeaderProps) {
  const { align, children, className, description, heading, label, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

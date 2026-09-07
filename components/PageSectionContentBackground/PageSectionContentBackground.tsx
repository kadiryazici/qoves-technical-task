import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type PageSectionContentBackgroundProps = ComponentProps<"div">

export function PageSectionContentBackground(props: PageSectionContentBackgroundProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

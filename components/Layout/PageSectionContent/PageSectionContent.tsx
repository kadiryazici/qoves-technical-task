import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type PageSectionContentProps = ComponentProps<"div">

export function PageSectionContent(props: PageSectionContentProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn("w-full max-w-340 mx-auto relative",className)}>
      {children}
    </div>
  )
}

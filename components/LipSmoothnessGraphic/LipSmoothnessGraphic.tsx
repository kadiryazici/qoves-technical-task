import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type LipSmoothnessGraphicProps = ComponentProps<"div">

export function LipSmoothnessGraphic(props: LipSmoothnessGraphicProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

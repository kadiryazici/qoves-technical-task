import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type FacialThirdsGraphicProps = ComponentProps<"div">

export function FacialThirdsGraphic(props: FacialThirdsGraphicProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type MelaninConcentrationGraphicProps = ComponentProps<"div">

export function MelaninConcentrationGraphic(props: MelaninConcentrationGraphicProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

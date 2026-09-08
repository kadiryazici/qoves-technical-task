import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type BrowsFallGraphicProps = ComponentProps<"div">

export function BrowsFallGraphic(props: BrowsFallGraphicProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

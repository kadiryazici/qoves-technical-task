import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type SymmetryGraphicProps = ComponentProps<"div">

export function SymmetryGraphic(props: SymmetryGraphicProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

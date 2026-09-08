import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type EyebrowDensityChartProps = ComponentProps<"div">

export function EyebrowDensityChart(props: EyebrowDensityChartProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

import type { ComponentProps, ElementType } from "react"

import { cn } from "@/utils/cn"

export type PageSectionProps<T extends ElementType = "section"> = {
  as?: T
  className?: string
} & Omit<ComponentProps<T>, "as" | "className">

export function PageSection<T extends ElementType = "section">(props: PageSectionProps<T>) {
  const { as, children, className, ...attrs } = props
  const Component = as ?? "section"

  return (
    <Component {...attrs} className={cn("isolate relative w-full", className)}>
      {children}
    </Component>
  )
}

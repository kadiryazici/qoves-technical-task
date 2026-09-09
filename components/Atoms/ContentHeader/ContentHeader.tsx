import type { ComponentProps, ReactNode } from "react"

import { Badge } from "@/components/Atoms/Badge/Badge"
import { cn } from "@/utils/cn"

export type ContentHeaderProps = Omit<ComponentProps<"div">, "children"> & {
  label?: ReactNode
  heading: ReactNode
  description: ReactNode
  type: "primary" | "secondary"
  gap?: "base" | "lg"
  headingType?: "heading-4" | "heading-5"
}

export function ContentHeader(props: ContentHeaderProps) {
  const { className, type, gap = "base", headingType = "heading-4", description, heading, label, ...attrs } = props

  return (
    <div
      {...attrs}
      className={cn(
        "*:[text-align:inherit] flex flex-col",
        className,
        gap === "base" ? "gap-4" : "gap-6"
      )}
    >
      {label && (
        <div className="w-full">
          <Badge type={type}>
            {label}
          </Badge>
        </div>
      )}

      <h2
        className={cn(
          "text-balance",
          type === "primary" ? "text-white" : "text-text-primary",
          {
            "text-heading-4": headingType === "heading-4",
            "text-heading-5": headingType === "heading-5",
          }
        )}
      >
        {heading}
      </h2>

      <p
        className={cn(
          "text-body-2 text-balance",
          type === "primary" ? "text-text-button-primary" : "text-text-secondary"
        )}
      >
        {description}
      </p>
    </div>
  )
}

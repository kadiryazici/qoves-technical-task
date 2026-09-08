import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/utils/cn"

export type ContentHeaderProps = Omit<ComponentProps<"div">, "children"> & {
  label?: ReactNode
  heading: ReactNode
  description: ReactNode
  type: "primary" | "secondary"
  gap?: "base" | "lg"
}

export function ContentHeader(props: ContentHeaderProps) {
  const { className, type, gap = "base", description, heading, label, ...attrs } = props

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
          "text-balance text-heading-4",
          type === "primary" ? "text-white" : "text-text-primary"
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

type BadgeProps = ComponentProps<"div"> & {
  type: ContentHeaderProps["type"]
}

function Badge(props: BadgeProps) {
  const { className, type, children, ...attrs } = props;

  return (
    <div
      {...attrs}
      className={cn(
        "inline-flex flex-none items-center justify-center gap-2 whitespace-nowrap rounded-full ring px-[10px] py-[7px]",
        className,
        type === "primary" ? "ring-[#F2F2F21A]" : "ring-[#C7D1D54D]"
      )}
    >
      <span
        style={{
          textBox: "trim-both cap alphabetic"
        }}
        className={cn(
          "flex-none text-center font-zagma text-body-4-zagma uppercase",
          type === "primary" ? "text-text-button-primary" : "text-text-button-secondary-disabled"
        )}
      >
        {children}
      </span>
    </div>
  )
}

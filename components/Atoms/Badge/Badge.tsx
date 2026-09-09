import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type BadgeProps = ComponentProps<"div"> & {
  type: "primary" | "secondary"
}

export function Badge(props: BadgeProps) {
  const { className, type, children, ...attrs } = props

  return (
    <div
      {...attrs}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-2.5 ring",
        className,
        type === "primary"
          ? "py-1 ring-[#F2F2F21A]"
          : "py-1.75 ring-[#C7D1D54D]"
      )}
    >
      <span
        style={{
          textBox: type === "primary" ? undefined : "trim-both cap alphabetic",
        }}
        className={cn(
          "flex-none whitespace-nowrap text-center font-zagma uppercase",
          type === "primary"
            ? "text-body-5-zagma text-text-button-primary"
            : "text-body-4-zagma text-text-button-secondary-disabled"
        )}
      >
        {children}
      </span>
    </div>
  )
}

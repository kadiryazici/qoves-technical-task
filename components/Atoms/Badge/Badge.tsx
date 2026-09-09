import { clsx } from "clsx"
import type { ComponentProps } from "react"

import styles from "./Badge.module.scss"

export type BadgeProps = ComponentProps<"div"> & {
  type: "primary" | "secondary" | "tertiary"
}

export function Badge(props: BadgeProps) {
  const { className, type, children, ...attrs } = props

  return (
    <div
      {...attrs}
      className={clsx(
        styles.root,
        className,
        {
          [styles.primary]: type === "primary",
          [styles.secondary]: type === "secondary",
          [styles.tertiary]: type === "tertiary",
        },
      )}
    >
      <span
        className={clsx(
          styles.label,
          {
            [styles.primaryLabel]: type === "primary",
            [styles.secondaryLabel]: type === "secondary",
            [styles.tertiaryLabel]: type === "tertiary",
          },
        )}
      >
        {children}
      </span>
    </div>
  )
}

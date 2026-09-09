import { clsx } from "clsx"
import type { ComponentProps } from "react"

import styles from "./Badge.module.scss"

export type BadgeProps = ComponentProps<"div"> & {
  type: "primary" | "secondary"
}

export function Badge(props: BadgeProps) {
  const { className, type, children, ...attrs } = props

  return (
    <div
      {...attrs}
      className={clsx(
        styles.root,
        className,
        type === "primary" ? styles.primary : styles.secondary,
      )}
    >
      <span
        className={clsx(
          styles.label,
          type === "primary" ? styles.primaryLabel : styles.secondaryLabel,
        )}
      >
        {children}
      </span>
    </div>
  )
}

import { clsx } from "clsx"
import type { ComponentProps, ReactNode } from "react"

import { Badge } from "@/components/Atoms/Badge/Badge"
import styles from "./ContentHeader.module.scss"

export type ContentHeaderProps = Omit<ComponentProps<"div">, "children"> & {
  label?: ReactNode
  heading: ReactNode
  description: ReactNode
  type: "primary" | "secondary"
  gap?: "base" | "lg"
  headingType?: "heading-4" | "heading-5"
  descriptionType?: "body-2" | "body-3"
}

export function ContentHeader(props: ContentHeaderProps) {
  const { className, type, descriptionType = "body-2", gap = "base", headingType = "heading-4", description, heading, label, ...attrs } = props

  return (
    <div
      {...attrs}
      className={clsx(
        styles.root,
        className,
        gap === "base" ? styles.gapBase : styles.gapLarge,
      )}
    >
      {label && (
        <div className={styles.label}>
          <Badge type={type}>
            {label}
          </Badge>
        </div>
      )}

      <h2
        className={clsx(
          "heading",
          styles.heading,
          type === "primary" ? styles.primaryText : styles.secondaryHeading,
          headingType === "heading-4" ? styles.heading4 : styles.heading5,
        )}
      >
        {heading}
      </h2>

      <p
        className={clsx(

          styles.description,
          type === "primary" ? styles.primaryText : styles.secondaryDescription,
          {
            [styles.descriptionBody2]: descriptionType === "body-2",
            [styles.descriptionBody3]: descriptionType === "body-3",
          }
        )}
      >
        {description}
      </p>
    </div>
  )
}

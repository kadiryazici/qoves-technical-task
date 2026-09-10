import { clsx } from "clsx"
import { ReactNode, type ComponentProps } from "react"

import styles from "./GlowUpCard.module.scss"

export type GlowUpCardProps = ComponentProps<"div"> & {
  image: ReactNode
  heading: ReactNode
  description: ReactNode
}

export function GlowUpCard(props: GlowUpCardProps) {
  const { className, image, heading, description, ...attrs } = props

  return (
    <div
      {...attrs}
      className={clsx(styles.root, className)}
    >
      <div className={styles.imageContainer}>
        {image}
      </div>

      <div className={styles.content}>
        <h3 className={styles.heading}>
          {heading}
        </h3>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  )
}

import { clsx } from "clsx"
import { memo, type ComponentProps } from "react"

import styles from "./NumberCard.module.scss"

export type NumberCardProps = ComponentProps<"div"> & {
  number: number
}

export function NumberCard(props: NumberCardProps) {
  const { children, className, number, ...attrs } = props

  return (
    <div
      {...attrs}
      className={clsx(styles.root, className)}
    >
      <GlowupCardBackgroundBlur />

      <div className={styles.number}>
        <span>{number}</span>
      </div>

      <p className={styles.body}>
        {children}
      </p>
    </div>
  )
}

const GlowupCardBackgroundBlur = memo(function GlowupCardBackgroundBlur(props: ComponentProps<"div">) {
  const { className, ...attrs } = props
  return (
    <div
      {...attrs}
      className={clsx(styles.background, className)}
    >
      <div className={clsx(styles.circle, styles.leftCircle)} />
      <div className={clsx(styles.circle, styles.rightCircle)} />
    </div>
  )
})

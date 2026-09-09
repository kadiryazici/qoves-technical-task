import { clsx } from "clsx"
import type { ComponentProps, ReactNode } from "react"
import styles from "./InfoCard.module.scss"

export type InfoCardProps = ComponentProps<"div"> & {
  heading: ReactNode,
}

export function InfoCard(props: InfoCardProps) {
  const { children, heading, className, ...attrs } = props

  return (
    <div {...attrs} className={clsx(styles.root, className)}>
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.items}>
        {children}
      </div>
    </div>
  )
}

InfoCard.Item = function InfoCardItem(props: ComponentProps<"div">) {
  const { className, children, ...attrs } = props;

  return (
    <div {...attrs} className={clsx(styles.item, className)}>
      {children}
    </div>
  )
}

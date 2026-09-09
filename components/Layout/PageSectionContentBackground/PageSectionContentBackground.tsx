import { clsx } from "clsx"
import type { ComponentProps } from "react"

import styles from "./PageSectionContentBackground.module.scss"

export type PageSectionContentBackgroundProps = ComponentProps<"div">

export function PageSectionContentBackground(props: PageSectionContentBackgroundProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={clsx(styles.root, className)}>
      {children}
    </div>
  )
}

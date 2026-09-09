import { clsx } from "clsx"
import type { ComponentProps } from "react"

import styles from "./PageSectionContent.module.scss"

export type PageSectionContentProps = ComponentProps<"div">

export function PageSectionContent(props: PageSectionContentProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={clsx(styles.root, className)}>
      {children}
    </div>
  )
}

import { clsx } from "clsx"
import type { ComponentProps } from "react"

import styles from "./SectionGlowUp.module.scss"

export type SectionGlowUpProps = ComponentProps<"div">

export function SectionGlowUp(props: SectionGlowUpProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={clsx(styles.root, className)}>
      {children}
    </div>
  )
}

import { clsx } from "clsx"
import type { ComponentProps } from "react"

import styles from "./SectionBlurredQuestion.module.scss"

export type SectionBlurredQuestionProps = ComponentProps<"div">

export function SectionBlurredQuestion(props: SectionBlurredQuestionProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={clsx(styles.root, className)}>
      {children}
    </div>
  )
}

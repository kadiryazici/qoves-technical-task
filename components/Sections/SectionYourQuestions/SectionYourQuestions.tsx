import { clsx } from "clsx"
import type { ComponentProps } from "react"

import styles from "./SectionYourQuestions.module.scss"

export type SectionYourQuestionsProps = ComponentProps<"div">

export function SectionYourQuestions(props: SectionYourQuestionsProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={clsx(styles.root, className)}>
      {children}
    </div>
  )
}

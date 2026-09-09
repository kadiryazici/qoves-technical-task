import { clsx } from "clsx"
import type { ComponentProps, ElementType } from "react"

import styles from "./PageSection.module.scss"

export type PageSectionProps<T extends ElementType = "section"> = {
  as?: T
  className?: string
} & Omit<ComponentProps<T>, "as" | "className">

export function PageSection<T extends ElementType = "section">(props: PageSectionProps<T>) {
  const { as, children, className, ...attrs } = props
  const Component = as ?? "section"

  return (
    <Component {...attrs} className={clsx(styles.root, className)}>
      {children}
    </Component>
  )
}

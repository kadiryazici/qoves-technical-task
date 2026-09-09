import { clsx } from "clsx"
import type { ComponentProps } from "react"

import styles from "./PageMain.module.scss"

export function PageMain(props: ComponentProps<"main">) {
  const { className, children, ...attrs } = props

  return (
    <main
      {...attrs}
      className={clsx(styles.root, className)}
    >
      {children}
    </main>
  )
}

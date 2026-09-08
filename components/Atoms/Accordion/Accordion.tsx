import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type AccordionProps = ComponentProps<"div">
export type AccordionHeaderProps = ComponentProps<"div">
export type AccordionBodyProps = ComponentProps<"div">

function AccordionRoot(props: AccordionProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

function AccordionHeader(props: AccordionHeaderProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

function AccordionBody(props: AccordionBodyProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

export const Accordion = Object.assign(AccordionRoot, {
  Header: AccordionHeader,
  Body: AccordionBody,
})

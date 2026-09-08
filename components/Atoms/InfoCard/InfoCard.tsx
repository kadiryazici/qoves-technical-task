import type { ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type InfoCardProps = ComponentProps<"div">
export type InfoCardItemProps = ComponentProps<"div">
export type InfoCardHeadingProps = ComponentProps<"div">

function InfoCardRoot(props: InfoCardProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

function InfoCardItem(props: InfoCardItemProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

function InfoCardHeading(props: InfoCardHeadingProps) {
  const { children, className, ...attrs } = props

  return (
    <div {...attrs} className={cn(className)}>
      {children}
    </div>
  )
}

export const InfoCard = Object.assign(InfoCardRoot, {
  Item: InfoCardItem,
  Heading: InfoCardHeading,
})

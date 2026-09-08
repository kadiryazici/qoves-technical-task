import { memo, type ComponentProps } from "react"

import { cn } from "@/utils/cn"

export type GlowupCardProps = ComponentProps<"div"> & {
  number: number
}

export function GlowupCard(props: GlowupCardProps) {
  const { children, className, number, ...attrs } = props

  return (
    <div
      {...attrs}
      className={cn("overflow-hidden duration-600 **:duration-600 transition-[background-color,box-shadow] select-none isolate hover:bg-primary-400 hover:shadow-glow-up-card group relative flex min-w-0 flex-col items-start justify-between gap-12 rounded-xl border border-border-primary-muted p-4", className)}
    >
      <GlowupCardBackgroundBlur className="transition-opacity opacity-0 group-hover:opacity-100 rounded-xl" />

      <div className="transition-colors group-hover:bg-white/20 size-6 grid place-items-center font-zagma text-body-4-zagma rounded-full bg-primary-400 text-text-button-primary">
        {number}
      </div>

      <p className="transition-colors group-hover:text-text-button-primary text-heading-8 text-text-primary">
        {children}
      </p>
    </div>
  )
}

const GlowupCardBackgroundBlur = memo(function GlowupCardBackgroundBlur(props: ComponentProps<"div">) {
  const { className, ...attrs } = props
  const circleStyles = cn("absolute w-[52.59%] aspect-square rounded-full blur-[105.84px]")

  return (
    <div
      {...attrs}
      className={cn("pointer-events-none translate-z-0 z-[-1] isolate rounded-[inherit] absolute inset-0 overflow-hidden", className)}
    >
      <div className={cn("top-0 bottom-0 my-auto left-[-6.35px] rotate-90 bg-[#A37156]", circleStyles)} />
      <div className={cn("top-0 bottom-0 my-auto right-[-6.35px] opacity-50 bg-black", circleStyles)} />
    </div>
  )
})

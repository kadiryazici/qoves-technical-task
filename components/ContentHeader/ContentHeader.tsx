import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/utils/cn"

export type ContentHeaderProps = Omit<ComponentProps<"div">, "children"> & {
  label?: ReactNode
  heading: ReactNode
  description: ReactNode
}

export function ContentHeader(props: ContentHeaderProps) {
  const { className, description, heading, label, ...attrs } = props

  return (
    <div
      {...attrs}
      className={cn(
        "*:[text-align:inherit] flex flex-col gap-[16px]",
        className,
      )}
    >
      {label && (
        <div className="w-full">
          <Badge>
            {label}
          </Badge>
        </div>
      )}

      <h2 className="text-heading-4 text-balance text-text-primary">
        {heading}
      </h2>

      <p className="text-body-2 text-balance text-text-secondary">
        {description}
      </p>
    </div>
  )
}

function Badge(props: ComponentProps<"div">) {
  const { className, children, ...attrs } = props;

  return (
    <div
      {...attrs}
      className={cn(
        "inline-flex flex-none items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#C7D1D54D] bg-bg-base px-[10px] py-[7px]",
        className,
      )}
    >
      <span className="flex-none text-center font-zagma text-body-4-zagma uppercase text-text-button-secondary-disabled">
        {children}
      </span>
    </div>
  )
}

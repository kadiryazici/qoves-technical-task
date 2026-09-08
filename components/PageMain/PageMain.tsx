import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

export function PageMain(props: ComponentProps<"main">) {
  const { className, children, ...attrs } = props

  return (
    <main
      {...attrs}
      className={cn("min-h-screen", className)}
    >
      {children}
    </main>
  )
}

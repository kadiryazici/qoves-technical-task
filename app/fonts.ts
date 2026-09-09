import { clsx } from "clsx"
import localFont from "next/font/local"

const ppNeueMontreal = localFont({
  src: [
    { path: "../public/PP_Neue_Montreal/PPNeueMontreal-Book.otf", weight: "400" },
    { path: "../public/PP_Neue_Montreal/PPNeueMontreal-Medium.otf", weight: "500" },
  ],
  display: "swap",
  variable: "--font-pp-neue",
})

const f37Zagma = localFont({
  src: "../public/Zagma_Mono/F37ZagmaMonoTrial-Book.otf",
  display: "swap",
  variable: "--font-zagma",
})

export const fontClassName = clsx(ppNeueMontreal.variable, f37Zagma.variable)

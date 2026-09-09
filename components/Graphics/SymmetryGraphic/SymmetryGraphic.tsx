"use client";

import { ReactNode, useEffect, useState, type ComponentProps } from "react"

import { cn } from "@/utils/cn"
import { getRandomInt } from "@/utils/random"
import { animate, percent, useMotionValue, useMotionValueEvent } from "motion/react"

export type SymmetryGraphicProps = Omit<ComponentProps<"div">, "children">

const INITIAL_IDEAL = 81
const INITIAL_YOU = 77.5;
const INITIAL_AVERAGE = 56.5;

export function SymmetryGraphic(props: SymmetryGraphicProps) {
  const { className, ...attrs } = props

  const [idealPercentage, setIdealPercentage] = useState(INITIAL_IDEAL)
  const [youPercentage, setYouPercentage] = useState(INITIAL_YOU)
  const [averagePercentage, setAveragePercentage] = useState(INITIAL_AVERAGE)

  function handleMouseEnter() {
    setIdealPercentage(getRandomInt(30, 80))
    setYouPercentage(getRandomInt(40, 95))
    setAveragePercentage(getRandomInt(30, 60))
  }

  function handleMouseLeave() {
    setIdealPercentage(INITIAL_IDEAL)
    setYouPercentage(INITIAL_YOU)
    setAveragePercentage(INITIAL_AVERAGE)
  }

  return (
    <div
      {...attrs}
      className={cn("relative w-[284.55px] h-[156px] bg-black/10 backdrop-blur-[22.5px] flex flex-col justify-between pt-[13.5px] px-[9px] pb-[9px] gap-[6.75px] rounded-lg ring ring-[#F2F2F21A]", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full relative isolate h-full flex">
        <VerticalLinesBackground className="z-[-1]" />
        <div className="flex flex-col h-[44px] w-full justify-between my-auto">
          <HorizontalChartLine
            color="200"
            text="Ideal"
            percentage={idealPercentage}
          />
          <HorizontalChartLine
            color="400"
            text="You"
            percentage={youPercentage}
          />
          <HorizontalChartLine
            color="600"
            text="Average"
            percentage={averagePercentage}
          />
        </div>
      </div>

      <div className="text-text-button-primary-disabled py-[1.12px] flex flex-row items-center justify-between font-zagma font-normal text-[6.93104px] leading-[8px] tracking-[-0.005em] uppercase">
        <span>Asymmetrical</span>
        <span>Symmetrical</span>
      </div>
    </div>
  )
}

type HorizontalChartLineProps = Omit<ComponentProps<"div">, "children" | "color"> & {
  percentage: number,
  text: ReactNode
  color: "200" | "400" | "600"
}

function HorizontalChartLine(props: HorizontalChartLineProps) {
  const {
    className,
    percentage,
    text,
    color,
    ...attrs
  } = props

  const bg = cn({
    "bg-primary-200": color === "200",
    "bg-primary-400": color === "400",
    "bg-primary-600": color === "600",
  })

  return (
    <div
      {...attrs}
      className={cn(
        "h-[1px] isolate relative w-full",
        className
      )}
    >
      <svg className="w-full absolute z-[-1] inset-0 m-auto" width="267" height="1" viewBox="0 0 267 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0.28125H266.231" stroke="#CDDBE1" strokeWidth="0.5625" strokeDasharray="2.25 2.25"/>
      </svg>

      <div
        className={cn("transiton-[width] duration-500 absolute my-auto inset-0 z-[2] h-[2.25px]", bg)}
        style={{
          width: `${percentage}%`
        }}
      >
        <div className="flex flex-row gap-[2.25px] size-fit items-center px-[2.25px] py-[1.12px] bg-bg-base rounded-[1.95px] border-[0.28px] border-border-base absolute left-[calc(100%-3px)] top-0 bottom-0 my-auto">
          <div className="shrink-0 aspect-square size-[6.75px] grid place-items-center bg-bg-subtle rounded-[1.13px]">
            <div className={cn("aspect-square shrink-0 size-[3.38px] rounded-[0.56px]", bg)} />
          </div>

          <span className="font-zagma font-normal text-[5.625px] leading-[8px] tracking-[-0.005em] uppercase text-text-secondary">
            {text}
          </span>
        </div>
      </div>
    </div>
  )
}

function VerticalLinesBackground(props: Omit<ComponentProps<"div">, "children">) {
  const { className, ...attrs } = props

  return (
    <div
      {...attrs}
      className={cn("isolate absolute inset-0 flex flex-row justify-between items-stretch", className)}
    >
      {Array.from({ length: 11 }, (_, index) => (
        <VerticalLine key={index} />
      ))}
    </div>
  )
}

function VerticalLine(props: ComponentProps<"svg">) {
  return (
    <svg
      width="1"
      height="116"
      viewBox="0 0 1 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.5"
        d="M0.28125 0L0.281255 115.5"
        stroke="#E8E8E8"
        strokeWidth="0.5625"
        strokeDasharray="0.66 0.66"
      />
    </svg>
  )
}

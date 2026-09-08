"use client";

import { useState, type ComponentProps } from "react"

import { cn } from "@/utils/cn"
import { getRandomInt } from "@/utils/random";

export type FacialThirdsGraphicProps = Omit<ComponentProps<"div">, "children">

const INITIAL_BARS = [31,38, 31]

export function FacialThirdsGraphic(props: FacialThirdsGraphicProps) {
  const { className, ...attrs } = props

  const [bars, setBars] = useState(INITIAL_BARS)

  function handleMouseEnter() {
    const first = getRandomInt(20, 50);
    const second = getRandomInt(20, 100 - first);
    const third = 100 - first - second;

    setBars([first, second, third])
  }

  function handleMouseLeave() {
    setBars(INITIAL_BARS)
  }

  const barElements = [
    ["Lower Third [c]", bars[0], "bg-primary-600"],
    ["Middle Third [b]", bars[1], "bg-primary-400"],
    ["", bars[2], "bg-bg-secondary-disabled"],
  ] as const

  return (
    <div
      {...attrs}
      className={cn("w-[352px] h-[165px] bg-black/10 backdrop-blur-[22.5px] flex flex-col justify-between px-[6.75px] py-[9px] rounded-[8px] ring ring-[#F2F2F21A]", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="uppercase font-zagma font-normal text-[6.93104px] leading-[8px] text-text-button-primary-disabled">
        Facial Thirds
      </div>

      <div className="mt-auto flex flex-row flex-nowrap w-full">
        {barElements.map(([text, value, bgColor], index) => (
          <div
            key={index}
            className="duration-600 flex flex-col gap-[4.5px] items-center justify-end transition-[width]"
            style={{
              width: `${value}%`
            }}
          >
            <div className="font-zagma font-normal text-[6.93px] leading-[8.09px] tracking-[-0.005em] uppercase text-text-button-primary-disabled">
              {text}
            </div>
            <div className={cn("w-full h-[3.38px]", bgColor)}/>
            <div className="text-text-button-primary font-medium text-[7.88px] leading-[10.13px] tracking-normal">
              {String(value / 10)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

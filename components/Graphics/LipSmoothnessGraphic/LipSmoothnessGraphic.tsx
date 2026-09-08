"use client";

import { useEffect, useRef, useState, type ComponentProps } from "react"

import { cn } from "@/utils/cn"
import { getRandomInt } from "@/utils/random"
import { gsap } from "gsap"

export type LipSmoothnessGraphicProps = Omit<ComponentProps<"div">, "children">

const INITIAL_PERCENTAGE = 56

export function LipSmoothnessGraphic(props: LipSmoothnessGraphicProps) {
  const { className, ...attrs } = props

  const [percentage, setPercentage] = useState(56)

  function handleMouseEnter() {
    setPercentage(getRandomInt(15, 85))
  }

  function handleMouseLeave() {
    setPercentage(INITIAL_PERCENTAGE)
  }

  return (
    <div
      {...attrs}
      className={cn("duration-[500] relative w-[284px] h-[126px] bg-black/10 backdrop-blur-[22.5px] flex flex-col justify-between p-[6.75px] rounded-[8px] ring ring-[#F2F2F21A]", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <PercentageCursor value={percentage}  />

      <div className="mr-auto space-y-[1.12px] pt-[4.5px]">
        <div className="font-zagma font-normal text-[6.75px] leading-[7.88px] tracking-[-0.005em] uppercase text-text-disabled">
          Lip Smoothness
        </div>

        <div className="text-bg-base text-[27px] leading-[31.5px] tracking-[-0.015em] text-right">
          <AnimatedNumber value={percentage} />%
        </div>
      </div>

      <div className="mt-auto flex flex-col">
        <div className="flex flex-row justify-between">
          <div className="space-y-[2.91px]">
            <div className="font-medium text-[5.63px] leading-[7.88px] tracking-normal text-right text-text-button-primary">
              Rough <span className="text-text-button-primary/50">(0%)</span>
            </div>
            <div className="h-[9.28px] w-[0.56px] bg-bg-secondary-disabled mx-auto" />
          </div>

          <div className="space-y-[2.91px]">
            <div className="font-medium text-[5.63px] leading-[7.88px] tracking-normal text-right text-text-button-primary">
              Smooth <span className="text-text-button-primary/50">(100%)</span>
            </div>
            <div className="h-[9.28px] w-[0.56px] bg-bg-secondary-disabled mx-auto" />
          </div>
        </div>

          <div className="mt-[1.12px] rounded-full overflow-clip flex flex-row flex-nowrap w-full">
            <div className="h-[6.75px] w-[11.25px] shrink-0 bg-primary-100" />
            <div className="h-[6.75px] w-[146.25px] shrink-0 bg-primary-200" />
            <div className="h-[6.75px] w-[76.5px] shrink-0 bg-primary-300" />
            <div className="h-[6.75px] w-full shrink bg-primary-400" />
          </div>
      </div>
    </div>
  )
}

type AnimatedNumberProps = Omit<ComponentProps<"span">, "children"> & {
  value: number
}

function AnimatedNumber(props: AnimatedNumberProps) {
  const { className, value, ...attrs } = props
  const [displayValue, setDisplayValue] = useState(value)
  const displayValueRef = useRef(value)

  useEffect(() => {
    const animation = gsap.to(displayValueRef, {
      current: value,
      duration: 0.5,
      onUpdate() {
        setDisplayValue(Math.round(displayValueRef.current))
      },
    })

    return () => {
      animation.kill()
    }
  }, [value])

  return (
    <span {...attrs} className={className}>
      {displayValue}
    </span>
  )
}

type PercentageCursorProps = Omit<ComponentProps<"div">, "children"> & {
  value: number
}

function PercentageCursor(props: PercentageCursorProps) {
  const { className, value, style = {}, ...attrs } = props

  return (
    <div
      {...attrs}
      className={cn("isolate transition-[left] duration-500 absolute top-0 bottom-[13.25px] w-fit", className)}
      style={{
        left: `${value}%`,
        ...style,
      }}
    >
      <div
        className={cn(
          "transition-transform whitespace-nowrap bg-[#fafafa]/20 text-text-button-primary rounded-[7.88px] font-medium text-[5.63px] leading-[7.88px] tracking-normal bottom-[36px] left-[0px] absolute w-fit px-[3.94px]",
          value < 20
            ? "translate-x-[7.74px]"
            : "translate-x-[calc(-100%-7.74px)]"
        )}
      >
        <AnimatedNumber value={value} />%
        {" "}
        <span className="text-text-button-primary/50">(You)</span>
      </div>

      <svg
        width="4"
        height="115"
        viewBox="0 0 4 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
      <path d="M1.90502 2.8125L3.24757 -7.09782e-08L-2.5034e-05 7.09788e-08L1.34252 2.8125L1.90502 2.8125ZM1.62378 114.124L3.24758 112.5L1.62378 110.876L-2.01164e-05 112.5L1.62378 114.124ZM1.62377 3.375L1.34252 3.375L1.34252 5.625L1.62377 5.625L1.90502 5.625L1.90502 3.375L1.62377 3.375ZM1.62377 7.875L1.34252 7.875L1.34252 10.125L1.62377 10.125L1.90502 10.125L1.90502 7.875L1.62377 7.875ZM1.62377 12.375L1.34252 12.375L1.34252 14.625L1.62377 14.625L1.90502 14.625L1.90502 12.375L1.62377 12.375ZM1.62377 16.875L1.34252 16.875L1.34252 19.125L1.62377 19.125L1.90502 19.125L1.90502 16.875L1.62377 16.875ZM1.62377 21.375L1.34252 21.375L1.34252 23.625L1.62377 23.625L1.90502 23.625L1.90502 21.375L1.62377 21.375ZM1.62377 25.875L1.34252 25.875L1.34252 28.125L1.62377 28.125L1.90502 28.125L1.90502 25.875L1.62377 25.875ZM1.62377 30.375L1.34252 30.375L1.34252 32.625L1.62377 32.625L1.90502 32.625L1.90502 30.375L1.62377 30.375ZM1.62377 34.875L1.34252 34.875L1.34252 37.125L1.62377 37.125L1.90502 37.125L1.90502 34.875L1.62377 34.875ZM1.62377 39.375L1.34252 39.375L1.34252 41.625L1.62377 41.625L1.90502 41.625L1.90502 39.375L1.62377 39.375ZM1.62377 43.875L1.34252 43.875L1.34252 46.125L1.62377 46.125L1.90502 46.125L1.90502 43.875L1.62377 43.875ZM1.62377 48.375L1.34252 48.375L1.34252 50.625L1.62377 50.625L1.90502 50.625L1.90502 48.375L1.62377 48.375ZM1.62377 52.875L1.34252 52.875L1.34253 55.125L1.62378 55.125L1.90503 55.125L1.90502 52.875L1.62377 52.875ZM1.62378 57.375L1.34253 57.375L1.34253 59.625L1.62378 59.625L1.90503 59.625L1.90503 57.375L1.62378 57.375ZM1.62378 61.875L1.34253 61.875L1.34253 64.125L1.62378 64.125L1.90503 64.125L1.90503 61.875L1.62378 61.875ZM1.62378 66.375L1.34253 66.375L1.34253 68.625L1.62378 68.625L1.90503 68.625L1.90503 66.375L1.62378 66.375ZM1.62378 70.875L1.34253 70.875L1.34253 73.125L1.62378 73.125L1.90503 73.125L1.90503 70.875L1.62378 70.875ZM1.62378 75.375L1.34253 75.375L1.34253 77.625L1.62378 77.625L1.90503 77.625L1.90503 75.375L1.62378 75.375ZM1.62378 79.875L1.34253 79.875L1.34253 82.125L1.62378 82.125L1.90503 82.125L1.90503 79.875L1.62378 79.875ZM1.62378 84.375L1.34253 84.375L1.34253 86.625L1.62378 86.625L1.90503 86.625L1.90503 84.375L1.62378 84.375ZM1.62378 88.875L1.34253 88.875L1.34253 91.125L1.62378 91.125L1.90503 91.125L1.90503 88.875L1.62378 88.875ZM1.62378 93.375L1.34253 93.375L1.34253 95.625L1.62378 95.625L1.90503 95.625L1.90503 93.375L1.62378 93.375ZM1.62378 97.875L1.34253 97.875L1.34253 100.125L1.62378 100.125L1.90503 100.125L1.90503 97.875L1.62378 97.875ZM1.62378 102.375L1.34253 102.375L1.34253 104.625L1.62378 104.625L1.90503 104.625L1.90503 102.375L1.62378 102.375ZM1.62378 106.875L1.34253 106.875L1.34253 109.125L1.62378 109.125L1.90503 109.125L1.90503 106.875L1.62378 106.875ZM1.62378 111.375L1.34253 111.375L1.34253 112.5L1.62378 112.5L1.90503 112.5L1.90503 111.375L1.62378 111.375Z" fill="#CDDBE1"/>
      </svg>
    </div>
  )
}

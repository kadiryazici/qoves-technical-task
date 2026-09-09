"use client";

import { clsx } from "clsx"
import { useEffect, useState, type ComponentProps, type ReactNode } from "react"

import { getRandomInt } from "@/utils/random"
import { animate, percent, useMotionValue, useMotionValueEvent } from "motion/react"
import styles from "./SymmetryGraphic.module.scss"

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
      className={clsx(styles.root, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.chart}>
        <VerticalLinesBackground />
        <div className={styles.chartLines}>
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

      <div className={styles.footer}>
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

  const colorClassName = clsx({
    [styles.primary200]: color === "200",
    [styles.primary400]: color === "400",
    [styles.primary600]: color === "600",
  })

  return (
    <div
      {...attrs}
      className={clsx(styles.line, className)}
    >
      <svg className={styles.lineBackground} width="267" height="1" viewBox="0 0 267 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0.28125H266.231" stroke="#CDDBE1" strokeWidth="0.5625" strokeDasharray="2.25 2.25"/>
      </svg>

      <div
        className={clsx(styles.lineFill, colorClassName)}
        style={{
          width: `${percentage}%`
        }}
      >
        <div className={styles.marker}>
          <div className={styles.markerSwatch}>
            <div className={clsx(styles.markerColor, colorClassName)} />
          </div>

          <span className={styles.markerLabel}>
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
      className={clsx(styles.verticalLines, className)}
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

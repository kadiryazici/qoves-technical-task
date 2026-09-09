"use client";

import { clsx } from "clsx"
import { useState, type ComponentProps } from "react"

import { getRandomInt } from "@/utils/random";
import styles from "./FacialThirdsGraphic.module.scss"

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
    ["Lower Third [c]", bars[0], styles.primary600],
    ["Middle Third [b]", bars[1], styles.primary400],
    ["", bars[2], styles.secondaryDisabled],
  ] as const

  return (
    <div
      {...attrs}
      className={clsx(styles.root, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.title}>
        Facial Thirds
      </div>

      <div className={styles.bars}>
        {barElements.map(([text, value, bgColor], index) => (
          <div
            key={index}
            className={styles.bar}
            style={{
              width: `${value}%`
            }}
          >
            <div className={styles.barLabel}>
              {text}
            </div>
            <div className={clsx(styles.barFill, bgColor)} />
            <div className={styles.value}>
              {String(value / 10)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

"use client"

import type { ComponentProps, ReactNode, RefObject } from "react"
import { useLayoutEffect, useRef } from "react"
import ReactDOM from "react-dom"

import { cn } from "@/utils/cn"
import { gsap } from "gsap"
import Image from "next/image"

export type BeforeAfterComparisonProps = Omit<ComponentProps<"div">, "children">

const beforeImageSrc = "/images/before-after/before.webp"
const afterImageSrc = "/images/before-after/after.webp"

type MotionPathTrailProps = {
  gradientId: string
  trailRef: RefObject<SVGPathElement | null>
}

type MotionPathMarkerProps = {
  markerRef: RefObject<SVGGElement | null>
}

export function BeforeAfterComparison(props: BeforeAfterComparisonProps) {
  const { className, ...attrs } = props

  ReactDOM.preload(beforeImageSrc, { as: "image" })
  ReactDOM.preload(afterImageSrc, { as: "image" })

  return (
    <div
      {...attrs}
      className={cn("relative isolate flex justify-between w-full",className)}
    >
      <MotionPathSVG className="absolute inset-0 z-[-1]" preserveAspectRatio="none" />

      <PhotoCard
        heading="Before"
        image={
          <Image
            alt="before image of a woman"
            src={beforeImageSrc}
            fill
            loading="eager"
          />
        }
      />

      <PhotoCard
        heading="After"
        image={
          <Image
            alt="after image of a woman"
            src={afterImageSrc}
            fill
            loading="eager"
          />
        }
      />
    </div>
  )
}

type PhotoCardProps = ComponentProps<"div"> & {
  image: ReactNode
  heading: ReactNode
}

function PhotoCard(props: PhotoCardProps) {
  const { className, image, heading, ...attrs } = props

  return (
    <div
      {...attrs}
      className={cn("shadow-hero-photo p-[12.21px] rounded-xl w-[462.15px] h-[524.59px] shrink-0 flex", className)}
    >
      <div className="overflow-clip isolate relative rounded-lg bg-bg-secondary-hover min-w-0 size-full">
        <h3 className="w-full py-[16.15px] uppercase font-zagma text-body-3-zagma text-center text-text-button-primary">{heading}</h3>

        <div className="absolute z-[-1] size-full top-[26.91px] left-0 right-0 *:size-full *:object-cover">
          {image}
        </div>
      </div>
    </div>
  )
}

function MotionPathSVG(props: ComponentProps<"svg">) {
  const svgRef = useRef<SVGSVGElement>(null)
  const firstTrailRef = useRef<SVGPathElement>(null)
  const secondTrailRef = useRef<SVGPathElement>(null)
  const firstTrailGradientRef = useRef<SVGLinearGradientElement>(null)
  const secondTrailGradientRef = useRef<SVGLinearGradientElement>(null)
  const firstMarkerRef = useRef<SVGGElement>(null)
  const secondMarkerRef = useRef<SVGGElement>(null)

  useLayoutEffect(() => {
    const svg = svgRef.current
    const motionPath = svg?.querySelector<SVGPathElement>("#before-after-motion-path")
    const firstTrail = firstTrailRef.current
    const secondTrail = secondTrailRef.current
    const firstTrailGradient = firstTrailGradientRef.current
    const secondTrailGradient = secondTrailGradientRef.current
    const firstMarker = firstMarkerRef.current
    const secondMarker = secondMarkerRef.current

    if (!motionPath || !firstTrail || !secondTrail || !firstTrailGradient || !secondTrailGradient || !firstMarker || !secondMarker) {
      return
    }

    const currentMotionPath = motionPath
    const pathLength = currentMotionPath.getTotalLength()
    const animation = { progress: 0 }
    const followers = [
      { gradient: firstTrailGradient, marker: firstMarker, offset: 0.095, trail: firstTrail },
      { gradient: secondTrailGradient, marker: secondMarker, offset: 0.595, trail: secondTrail },
    ]

    function updateFollowers() {
      followers.forEach((follower) => {
        const progress = (animation.progress + follower.offset) % 1
        const point = getPointOnPath({ motionPath: currentMotionPath, pathLength, progress })
        const trailPath = getTrailPath({
          headDistance: progress * pathLength,
          motionPath: currentMotionPath,
          pathLength,
        })
        const trailGradient = getTrailGradient({
          headDistance: progress * pathLength,
          motionPath: currentMotionPath,
          pathLength,
        })

        gsap.set(follower.marker, {
          attr: { transform: `translate(${point.x} ${point.y}) rotate(${point.angle})` },
        })
        follower.trail.setAttribute("d", trailPath)
        follower.gradient.setAttribute("x1", trailGradient.x1.toString())
        follower.gradient.setAttribute("y1", trailGradient.y1.toString())
        follower.gradient.setAttribute("x2", trailGradient.x2.toString())
        follower.gradient.setAttribute("y2", trailGradient.y2.toString())
      })
    }

    const timeline = gsap.to(animation, {
      duration: 24,
      ease: "none",
      onUpdate: updateFollowers,
      progress: 1,
      repeat: -1,
    })

    updateFollowers()

    return () => {
      timeline.kill()
    }
  }, [])

  return (
    <svg
      ref={svgRef}
      width="1328"
      height="526"
      viewBox="0 0 1328 526"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="before-after-motion-path"
        d="M449 0.514557C449.007 0.514255 449.015 0.51396 449.022 0.513672M449.022 0.513672C453.029 0.355419 461.101 2.43198 461.5 12.0146V222.515C461.667 229.349 466.2 243.215 483 244.015H845C851.5 244.349 864.9 240.315 866.5 221.515V11.5153C866.667 7.68192 869.8 0.115253 881 0.515253H1316.18C1319.95 0.848059 1327.5 3.61367 1327.5 12.0137V512.514C1327.5 516.18 1325.1 523.714 1315.5 524.514H878.5C874.167 524.18 865.7 521.014 866.5 511.014V303.514C866.833 297.014 862.9 283.514 844.5 281.514H484C477.167 281.68 463.1 285.914 461.5 301.514V512.514C461.333 516.847 458.6 525.214 449 524.014H13C9.16667 524.514 1.3 522.914 0.5 512.514V11.5137C0.5 8.01367 3 0.913672 13 0.513672H449.022Z"
        stroke="#D7E5EB"
      />

      <MotionPathTrail gradientId="before-after-first-trail-gradient" trailRef={firstTrailRef} />
      <MotionPathTrail gradientId="before-after-second-trail-gradient" trailRef={secondTrailRef} />

      <MotionPathMarker markerRef={firstMarkerRef} />
      <MotionPathMarker markerRef={secondMarkerRef} />

      <defs>
        <linearGradient
          ref={firstTrailGradientRef}
          id="before-after-first-trail-gradient"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CDDBE1" />
          <stop offset="1" stopColor="#869AA1" />
        </linearGradient>

        <linearGradient
          ref={secondTrailGradientRef}
          id="before-after-second-trail-gradient"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CDDBE1" />
          <stop offset="1" stopColor="#869AA1" />
        </linearGradient>

        <filter
          id="before-after-square-shadow"
          x="-9.41964"
          y="-6.7283"
          width="16.148"
          height="16.1481"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-1.34566" dy="1.34566" />
          <feGaussianBlur stdDeviation="2.69132" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.603922 0 0 0 0 0.682353 0 0 0 0 0.709804 0 0 0 0.6 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_17338" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_17338" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

function MotionPathTrail(props: MotionPathTrailProps) {
  const { gradientId, trailRef } = props

  return (
    <path
      ref={trailRef}
      aria-hidden="true"
      fill="none"
      stroke={`url(#${gradientId})`}
      strokeWidth="1.34566"
      style={{ filter: "drop-shadow(0 0 2.69132px rgb(145 174 196 / 0.6))" }}
    />
  )
}

function MotionPathMarker(props: MotionPathMarkerProps) {
  const { markerRef } = props

  return (
    <g ref={markerRef} aria-hidden="true">
      <g filter="url(#before-after-square-shadow)">
        <rect
          x="-2.69132"
          y="-2.69132"
          width="5.38264"
          height="5.38264"
          rx="1.34566"
          fill="#869AA1"
        />
      </g>
    </g>
  )
}

type GetPointOnPathOptions = {
  motionPath: SVGPathElement
  pathLength: number
  progress: number
}

function getPointOnPath(options: GetPointOnPathOptions) {
  const { motionPath, pathLength, progress } = options
  const distance = progress * pathLength
  const point = motionPath.getPointAtLength(distance)
  const nextPoint = motionPath.getPointAtLength((distance + 1) % pathLength)
  const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180 / Math.PI

  return { angle, x: point.x, y: point.y }
}

type GetTrailPathOptions = {
  headDistance: number
  motionPath: SVGPathElement
  pathLength: number
}

function getTrailPath(options: GetTrailPathOptions) {
  const { headDistance, motionPath, pathLength } = options
  const trailEndDistance = (headDistance - 5.38269 + pathLength) % pathLength
  const trailStartDistance = (trailEndDistance - 174.93531 + pathLength) % pathLength

  if (trailStartDistance < trailEndDistance) {
    return getPathRange({ endDistance: trailEndDistance, motionPath, startDistance: trailStartDistance })
  }

  const firstRange = getPathRange({ endDistance: pathLength, motionPath, startDistance: trailStartDistance })
  const secondRange = getPathRange({ endDistance: trailEndDistance, motionPath, startDistance: 0 })

  return `${firstRange}${secondRange}`
}

function getTrailGradient(options: GetTrailPathOptions) {
  const { headDistance, motionPath, pathLength } = options
  const trailEndDistance = (headDistance - 5.38269 + pathLength) % pathLength
  const trailStartDistance = (trailEndDistance - 174.93531 + pathLength) % pathLength
  const startPoint = motionPath.getPointAtLength(trailStartDistance)
  const endPoint = motionPath.getPointAtLength(headDistance)

  return { x1: startPoint.x, x2: endPoint.x, y1: startPoint.y, y2: endPoint.y }
}

type GetPathRangeOptions = {
  endDistance: number
  motionPath: SVGPathElement
  startDistance: number
}

function getPathRange(options: GetPathRangeOptions) {
  const { endDistance, motionPath, startDistance } = options
  const segmentCount = Math.max(2, Math.ceil((endDistance - startDistance) / 4))

  return Array.from({ length: segmentCount + 1 }, (_, index) => {
    const distance = startDistance + (endDistance - startDistance) * index / segmentCount
    const point = motionPath.getPointAtLength(distance)
    const command = index === 0 ? "M" : "L"

    return `${command}${point.x.toFixed(2)} ${point.y.toFixed(2)}`
  }).join("")
}

import { gsap } from "gsap"
import { useLayoutEffect, useRef } from "react"

const mobileMotionPath = "M12.5 0.5H597.5Q610 0.5 610 12.5V222.5Q610 244 631.5 244H696.5Q718 244 718 222.5V12.5Q718 0.5 730.5 0.5H1315Q1327.5 0.5 1327.5 13V512Q1327.5 524.5 1315 524.5H730.5Q718 524.5 718 512V303Q718 281.5 696.5 281.5H631.5Q610 281.5 610 303V512Q610 524.5 597.5 524.5H13Q0.5 524.5 0.5 512V13Q0.5 0.5 12.5 0.5Z"

const animationDuration = 24
const firstFollowerOffset = 0.095
const secondFollowerOffset = 0.595
const trailLength = 174.93531
const trailGap = 5.38269
const trailSampleSpacing = 4

/**
 * Animates two followers along the responsive SVG path and cleans up on unmount.
 */
export function useMotionPathFollowers() {
  const motionPathRef = useRef<SVGPathElement>(null)
  const firstFollower = useFollowerRefs()
  const secondFollower = useFollowerRefs()
  const { gradient: firstGradient, marker: firstMarker, trail: firstTrail } = firstFollower
  const { gradient: secondGradient, marker: secondMarker, trail: secondTrail } = secondFollower

  useLayoutEffect(() => {
    const path = motionPathRef.current

    if (!path) {
      return
    }

    const motionPath = path
    const desktopMotionPath = motionPath.getAttribute("d")!
    const mobileQuery = window.matchMedia("(max-width: 767px)")
    const animation = { progress: 0 }
    const followers = [
      {
        gradient: firstGradient.current,
        marker: firstMarker.current,
        trail: firstTrail.current,
        offset: firstFollowerOffset,
      },
      {
        gradient: secondGradient.current,
        marker: secondMarker.current,
        trail: secondTrail.current,
        offset: secondFollowerOffset,
      },
    ]
    let pathLength = motionPath.getTotalLength()

    /**
     * Applies the current animation progress to each marker, trail, and gradient.
     */
    function updateFollowers() {
      followers.forEach(({ gradient, marker, trail, offset }) => {
        if (!gradient || !marker || !trail) {
          return
        }

        const { point, angle, trailPath, gradientStart } = getFollowerGeometry({
          motionPath,
          pathLength,
          progress: (animation.progress + offset) % 1,
        })

        gsap.set(marker, {
          attr: { transform: `translate(${point.x} ${point.y}) rotate(${angle})` },
        })
        trail.setAttribute("d", trailPath)
        gradient.setAttribute("x1", gradientStart.x.toString())
        gradient.setAttribute("y1", gradientStart.y.toString())
        gradient.setAttribute("x2", point.x.toString())
        gradient.setAttribute("y2", point.y.toString())
      })
    }

    /**
     * Selects the path for the current breakpoint and refreshes follower geometry.
     */
    function updateMotionPath() {
      motionPath.setAttribute("d", mobileQuery.matches ? mobileMotionPath : desktopMotionPath)
      pathLength = motionPath.getTotalLength()
      updateFollowers()
    }

    updateMotionPath()
    mobileQuery.addEventListener("change", updateMotionPath)

    const tween = gsap.to(animation, {
      duration: animationDuration,
      ease: "none",
      onUpdate: updateFollowers,
      progress: 1,
      repeat: -1,
    })

    return () => {
      tween.kill()
      mobileQuery.removeEventListener("change", updateMotionPath)
      motionPath.setAttribute("d", desktopMotionPath)
    }
  }, [firstGradient, firstMarker, firstTrail, secondGradient, secondMarker, secondTrail])

  return { motionPathRef, firstFollower, secondFollower }
}

/**
 * Groups stable references to the SVG elements that make up one follower.
 */
function useFollowerRefs() {
  const gradient = useRef<SVGLinearGradientElement>(null)
  const marker = useRef<SVGGElement>(null)
  const trail = useRef<SVGPathElement>(null)

  return { gradient, marker, trail }
}

type GetFollowerGeometryOptions = {
  motionPath: SVGPathElement
  pathLength: number
  progress: number
}

/**
 * Calculates marker position and rotation, trail geometry, and gradient origin.
 * Keeps the trail continuous across the closed path's seam without drawing a shortcut.
 */
function getFollowerGeometry(options: GetFollowerGeometryOptions) {
  const { motionPath, pathLength, progress } = options
  const headDistance = progress * pathLength
  const trailEndDistance = (headDistance - trailGap + pathLength) % pathLength
  const trailStartDistance = (trailEndDistance - trailLength + pathLength) % pathLength
  const point = motionPath.getPointAtLength(headDistance)
  const nextPoint = motionPath.getPointAtLength((headDistance + 1) % pathLength)
  const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180 / Math.PI
  const gradientStart = motionPath.getPointAtLength(trailStartDistance)
  // Split at the seam so the trail never draws a shortcut across the closed path.
  const trailPath = trailStartDistance < trailEndDistance
    ? getPathRange({ endDistance: trailEndDistance, motionPath, startDistance: trailStartDistance })
    : getPathRange({ endDistance: pathLength, motionPath, startDistance: trailStartDistance })
      + getPathRange({ endDistance: trailEndDistance, motionPath, startDistance: 0 })

  return { point, angle, trailPath, gradientStart }
}

type GetPathRangeOptions = {
  endDistance: number
  motionPath: SVGPathElement
  startDistance: number
}

/**
 * Samples a distance range along the SVG path into move and line commands for a trail segment.
 */
function getPathRange(options: GetPathRangeOptions) {
  const { endDistance, motionPath, startDistance } = options
  const segmentCount = Math.max(2, Math.ceil((endDistance - startDistance) / trailSampleSpacing))

  return Array.from({ length: segmentCount + 1 }, (_, index) => {
    const distance = startDistance + (endDistance - startDistance) * index / segmentCount
    const point = motionPath.getPointAtLength(distance)
    const command = index === 0 ? "M" : "L"

    return `${command}${point.x.toFixed(2)} ${point.y.toFixed(2)}`
  }).join("")
}

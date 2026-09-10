"use client"

import { clsx } from "clsx"
import { gsap } from "gsap"
import Image from "next/image"
import {
  createContext,
  type Dispatch,
  type SetStateAction,
  useContext,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react"

import { IconClose, IconMinus, IconPlus } from "../Icons/Icons"
import styles from "./Accordion.module.scss"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type AccordionContext = {
  activeId: string
  setActiveId: Dispatch<SetStateAction<string>>
  isSubAccordion: boolean
}

const accordionContext = createContext<AccordionContext | undefined>(undefined)

function AccordionRoot(props: ComponentProps<"div">) {
  const { children, className, ...attrs } = props
  const parent = useContext(accordionContext)

  const [activeId, setActiveId] = useState("")
  const isSubAccordion = parent != null

  return (
    <accordionContext.Provider
      value={{ activeId, setActiveId, isSubAccordion }}
    >
      <div
        {...attrs}
        className={clsx(
          styles.root,
          isSubAccordion ? styles.rootSub : styles.rootPrimary,
          className,
        )}
      >
        {children}
      </div>
    </accordionContext.Provider>
  )
}

type AccordionItemProps = ComponentProps<"div"> & {
  heading: ReactNode
  body: ReactNode
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6
}

function AccordionItem(props: AccordionItemProps) {
  const { className, heading, body, headingLevel, ...attrs } = props
  const { activeId, isSubAccordion, setActiveId } = useContext(accordionContext)!
  const id = useId()
  const triggerId = `${id}-trigger`
  const panelId = `${id}-panel`

  const visible = activeId === id

  function handleToggle() {
    setActiveId((v) => (v === id ? "" : id))
  }

  const Icon = !visible
    ? IconPlus
    : (isSubAccordion ? IconMinus : IconClose)

  return (
    <div
      {...attrs}
      className={clsx(
        styles.item,
        isSubAccordion ? styles.itemSub : styles.itemPrimary,
        isSubAccordion && visible && styles.itemSubVisible,
        isSubAccordion && !visible && styles.itemSubHidden,
        !isSubAccordion && visible && styles.itemPrimaryVisible,
        !isSubAccordion && !visible && styles.itemPrimaryHidden,
        className,
      )}
    >
      {!isSubAccordion && (
        <div
          className={clsx(styles.background, visible && styles.backgroundVisible)}
        >
          <Image
            alt=""
            aria-hidden="true"
            className={styles.backgroundImage}
            fill
            src="/images/facial-analysis-background-blur.webp"
          />
        </div>
      )}

      <div
        role="heading"
        aria-level={headingLevel ?? (isSubAccordion ? 4 : 3)}
      >
        <button
          id={triggerId}
          type="button"
          aria-expanded={visible}
          aria-controls={panelId}
          onClick={handleToggle}
          className={clsx(styles.trigger, !isSubAccordion && styles.primaryTrigger)}
        >
          <span
            className={clsx(
              styles.heading,
              isSubAccordion ? styles.subHeading : styles.primaryHeading,
              isSubAccordion || visible ? styles.activeText : styles.inactiveText,
            )}
          >
            {heading}
          </span>

          <Icon
            aria-hidden="true"
            focusable="false"
            className={clsx(
              styles.icon,
              isSubAccordion || visible ? styles.activeText : styles.inactiveIcon,
            )}
          />
        </button>
      </div>

      <AnimatedAccordionBody
        id={panelId}
        aria-labelledby={triggerId}
        isOpen={visible}
      >
        <div
          className={clsx(styles.body, isSubAccordion && styles.subBody)}
        >
          {body}
        </div>
      </AnimatedAccordionBody>
    </div>
  )
}

type AnimatedAccordionBodyProps = ComponentProps<"div"> & {
  isOpen: boolean
  children: ReactNode
}

function AnimatedAccordionBody(props: AnimatedAccordionBodyProps) {
  const { children, isOpen, className, ...attrs } = props
  const bodyRef = useRef<HTMLDivElement>(null)
  const [safeToUnmount, setSafeToUnmount] = useState(!isOpen)

  useLayoutEffect(() => {
    if (isOpen && safeToUnmount) {
      setSafeToUnmount(false)

      return
    }

    const body = bodyRef.current

    if (!body || safeToUnmount) {
      return
    }

    gsap.killTweensOf(body)

    if (isOpen) {
      gsap.set(body, { height: "auto" })

      const height = body.offsetHeight

      gsap.fromTo(
        body,
        { height: 0 },
        {
          height,
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(body, { height: "auto" })
            ScrollTrigger.refresh(true)
          },
        },
      )

      return;
    }

    gsap.to(body, {
      height: 0,
      duration: 0.35,
      ease: "power2.out",
      onComplete: () => {
        setSafeToUnmount(true)
        ScrollTrigger.refresh(true)
      },
    })
  }, [isOpen, safeToUnmount])

  return (
    <div
      {...attrs}
      ref={bodyRef}
      role="region"
      aria-hidden={!isOpen}
      inert={!isOpen}
      hidden={safeToUnmount}
      className={clsx(styles.animatedBody, className)}
    >
      {!safeToUnmount && children}
    </div>
  )
}

export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
})

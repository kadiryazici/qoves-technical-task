"use client";

import { clsx } from "clsx";
import { gsap } from "gsap";
import Image from "next/image";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentProps,
  type ReactNode,
} from "react";

import { IconClose, IconMinus, IconPlus } from "../Icons/Icons";
import styles from "./Accordion.module.scss";

type AccordionContext = {
  activeId: string;
  setActiveId: Dispatch<SetStateAction<string>>;
  isSubAccordion: boolean;
};

const accordionContext = createContext<AccordionContext | undefined>(undefined);

function AccordionRoot(props: ComponentProps<"div">) {
  const { children, className, ...attrs } = props;
  const parent = useContext(accordionContext);

  const [activeId, setActiveId] = useState("");
  const isSubAccordion = parent != null;

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
  );
}

type AccordionItemProps = ComponentProps<"div"> & {
  heading: ReactNode;
  body: ReactNode;
};

function AccordionItem(props: AccordionItemProps) {
  const { className, heading, body, ...attrs } = props;
  const { activeId, isSubAccordion, setActiveId } = useContext(accordionContext)!;
  const id = useId();

  const visible = activeId === id;

  function handleToggle() {
    setActiveId((v) => (v === id ? "" : id));
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
            alt="blurred background image"
            aria-hidden="true"
            className={styles.backgroundImage}
            fill
            src="/images/facial-analysis-background-blur.webp"
          />
        </div>
      )}

      <div
        role="button"
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
          className={clsx(
            styles.icon,
            isSubAccordion || visible ? styles.activeText : styles.inactiveIcon,
          )}
        />
      </div>

      <AnimatedAccordionBody isOpen={visible}>
        <div
          className={clsx(styles.body, isSubAccordion && styles.subBody)}
        >
          {body}
        </div>
      </AnimatedAccordionBody>
    </div>
  );
}

type AnimatedAccordionBodyProps = {
  isOpen: boolean;
  children: ReactNode;
};

function AnimatedAccordionBody(props: AnimatedAccordionBodyProps) {
  const { children, isOpen } = props;
  const bodyRef = useRef<HTMLDivElement>(null);
  const [safeToUnmount, setSafeToUnmount] = useState(!isOpen);

  useLayoutEffect(() => {
    if (isOpen && safeToUnmount) {
      setSafeToUnmount(false);

      return;
    }

    const body = bodyRef.current;

    if (!body) {
      return;
    }

    gsap.killTweensOf(body);

    if (isOpen) {
      gsap.set(body, { height: "auto" });

      const height = body.offsetHeight;

      gsap.fromTo(
        body,
        { height: 0 },
        {
          height,
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(body, { height: "auto" });
          },
        },
      );

      return;
    }

    gsap.to(body, {
      height: 0,
      duration: 0.35,
      ease: "power2.out",
      onComplete: () => {
        setSafeToUnmount(true);
      },
    });
  }, [isOpen, safeToUnmount]);

  if (safeToUnmount) {
    return null;
  }

  return (
    <div ref={bodyRef} className={styles.animatedBody}>
      {children}
    </div>
  );
}

export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
});

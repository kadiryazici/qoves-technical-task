"use client";

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
import { gsap } from "gsap";

import { cn } from "@/utils/cn";
import { IconClose, IconMinus, IconPlus } from "../Icons/Icons";
import Image from "next/image";

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
        className={cn(
          "flex flex-col *:w-full p-2 translate-z-0",
          isSubAccordion
            ? "bg-white/20 backdrop-blur-[12px] rounded-lg"
            : "bg-primary-50 backdrop-blur-[12px] rounded-xl",
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
      className={cn(
        "flex flex-col not-last:border-b border-transparent transition-[background-color,border-radius] isolate relative overflow-clip",
        isSubAccordion
          ? [
            "p-3",
            visible
              ? "bg-white/20 shadow-[0px_16px_16px_0px_#23313708]"
              : "border-b-white/10"
          ]
          : [
            "p-2",
            visible
              ? "bg-primary-400 shadow-[0px_14px_17.5px_0px_#9AAEB51A]"
              : "border-b-border-primary-muted"
          ],
        visible && [
          isSubAccordion ? "rounded-md" : "rounded-lg"
        ],
        className,
      )}
    >
      {!isSubAccordion && (
        <div
          className={cn(
            "blur-[150px] z-[-1] absolute left-0 right-0 mx-auto top-0 aspect-444/542 w-1/2 -translate-y-2/7 opacity-0 transition-opacity duration-500",
            visible && "opacity-100"
          )}
        >
          <Image
            alt="blurred background image"
            aria-hidden="true"
            className="print:invisible object-contain -rotate-90"
            fill
            src="/images/facial-analysis-background-blur.webp"
          />
        </div>
      )}

      <div
        role="button"
        onClick={handleToggle}
        className={cn(
          "cursor-pointer flex flex-row justify-between gap-4 items-center",
          !isSubAccordion && "p-4",
        )}
      >
        <span
          className={cn(
            isSubAccordion ? "text-body-2" : "text-heading-8 transition-colors",
            isSubAccordion || visible
              ? "text-icon-button-primary"
              : "text-text-primary",
            "font-medium"
          )}
        >
          {heading}
        </span>

        <Icon
          className={cn(
            "text-base",
            isSubAccordion || visible
              ? "text-icon-button-primary"
              : "text-icon-secondary",
          )}
        />
      </div>

      <AnimatedAccordionBody isOpen={visible}>
        <div
          className={cn(
            "text-text-button-primary text-body-3",
            isSubAccordion && "pt-2",
          )}
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
    <div ref={bodyRef} className="h-0 overflow-clip">
      {children}
    </div>
  );
}

export const Accordion = Object.assign(AccordionRoot, {
  Root: AccordionRoot,
  Item: AccordionItem,
});

"use client";

import { clsx } from "clsx";
import { useState, type ComponentProps } from "react";

import { getRandomFloat } from "@/utils/random";
import styles from "./MelaninConcentrationGraphic.module.scss";

export type MelaninConcentrationGraphicProps = Omit<
  ComponentProps<"div">,
  "children"
>;

const colors: [height: number, name: string, color: string][] = [
  [19.66, "Light Blue", "#D4E7F4"],
  [19.66, "Sky Blue", "#ACD6DA"],
  [9.83, "Gray Blue", "#91AEC4"],
  [9.83, "Blue", "#6C97C0"],
  [9.83, "Dark Blue", "#698DB5"],
  [9.83, "Light Olive Green", "#ADB291"],
  [9.83, "Sage Green", "#7E9F9A"],
  [9.83, "Gray Green", "#4E676E"],
  [9.83, "Olive Green", "#72736D"],
  [9.83, "Dark Green", "#252F38"],
  [9.83, "Deep Green", "#292D39"],
  [9.83, "Honey Brown", "#C6A363"],
  [9.83, "Golden Brown", "#A58345"],
  [9.83, "Hazel Brown", "#988155"],
  [9.83, "Copper Brown", "#B9805B"],
  [9.83, "Light Brown", "#BB956E"],
  [9.83, "Warm Brown", "#AA886C"],
  [9.83, "Dark Brown", "#624934"],
  [9.83, "Chocolate Brown", "#775A38"],
  [9.83, "Red Brown", "#8B5644"],
  [9.83, "Auburn Brown", "#B06045"],
  [9.83, "Mahogany Brown", "#814642"],
  [9.83, "Plum Brown", "#814642"],
  [9.83, "Burgundy Brown", "#5C4A56"],
  [9.83, "Deep Brown", "#5A3139"],
  [9.83, "Black Brown", "#482F33"],
  [9.83, "Black Brown", "#170C08"],
];

const colorsTotalHeight = colors.reduce((acc, [height]) => acc + height, 0);
const INITIAL_TOP = 192.63;

export function MelaninConcentrationGraphic(
  props: MelaninConcentrationGraphicProps,
) {
  const { className, ...attrs } = props;
  const [top, setTop] = useState(INITIAL_TOP);

  function handleMouseEnter() {
    setTop(getRandomFloat(20, 260));
  }

  function handleMouseLeave() {
    setTop(INITIAL_TOP);
  }

  return (
    <div
      {...attrs}
      className={clsx(styles.root, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.content}>
        <div className={styles.chart}>
          <VerticalColorGallery className={styles.galleryPosition} />
          <VerticalCursor top={top} />
        </div>
      </div>

      <div className={styles.message}>
        <span className={styles.messageText}>
          Your eyes have a medium <span className={styles.emphasis}>melanin</span>{" "}
          concentration.
        </span>
      </div>
    </div>
  );
}

const colorGalleryLabels: [
  text: string,
  top: number,
  side: "right" | "left",
][] = [
  ["Blue", 21.37, "right"],
  ["Green", 96.21, "left"],
  ["Brown", 171.05, "right"],
  ["Deep", 245.88, "left"],
];

function VerticalColorGallery(props: Omit<ComponentProps<"div">, "children">) {
  const { className, ...attrs } = props;

  return (
    <div
      {...attrs}
      className={clsx(styles.gallery, className)}
    >
      <div className={styles.galleryColors}>
        {colorGalleryLabels.map(([text, top, side], index) => (
          <div
            key={index}
            style={{
              top: `${top}px`,
            }}
            className={clsx(
              styles.galleryLabel,
              side === "right" ? styles.galleryLabelRight : styles.galleryLabelLeft,
            )}
          >
            <span className={clsx(side === "right" && styles.galleryLabelTextRight)}>{text}</span>
            <div className={styles.galleryLabelLine} />
          </div>
        ))}

        <div className={styles.galleryFrame} />

        {colors.map(([height, , color], index) => (
          <div
            key={index}
            style={{ backgroundColor: color, height: `${height}px` }}
          />
        ))}
      </div>
    </div>
  );
}

type VerticalCursorProps = Omit<ComponentProps<"div">, "children"> & {
  top: number;
};

function VerticalCursor(props: VerticalCursorProps) {
  const { top, className, style = {}, ...attrs } = props;
  const [, colorName, colorValue] = getColorAtPosition(top);

  return (
    <div
      {...attrs}
      className={clsx(styles.cursor, className)}
      style={{
        top: `${top}px`,
        ...style,
      }}
    >
      <div className={styles.cursorOutline} />

      <div className={styles.cursorLine}>
        <div className={styles.cursorCard}>
          <div className={styles.swatch}>
            <div
              className={styles.swatchColor}
              style={{
                backgroundColor: colorValue,
              }}
            />
          </div>

          <span className={styles.cursorLabel}>
            {colorName}
          </span>
        </div>

        <svg
          width="143"
          height="4"
          viewBox="0 0 143 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M2.8125 1.3418L1.4083e-07 -0.00075078L-1.4083e-07 3.24684L2.8125 1.9043L2.8125 1.3418ZM142.249 1.62306L140.625 -0.000738388L139.001 1.62306L140.625 3.24686L142.249 1.62306ZM3.40222 1.62305L3.40222 1.9043L5.67036 1.9043L5.67036 1.62305L5.67036 1.3418L3.40222 1.3418L3.40222 1.62305ZM7.93851 1.62305L7.93851 1.9043L10.2067 1.9043L10.2067 1.62305L10.2067 1.3418L7.93851 1.3418L7.93851 1.62305ZM12.4748 1.62305L12.4748 1.9043L14.7429 1.9043L14.7429 1.62305L14.7429 1.3418L12.4748 1.3418L12.4748 1.62305ZM17.0111 1.62305L17.0111 1.9043L19.2792 1.9043L19.2792 1.62305L19.2792 1.3418L17.0111 1.3418L17.0111 1.62305ZM21.5474 1.62305L21.5474 1.9043L23.8155 1.9043L23.8155 1.62305L23.8155 1.3418L21.5474 1.3418L21.5474 1.62305ZM26.0837 1.62305L26.0837 1.9043L28.3518 1.9043L28.3518 1.62305L28.3518 1.3418L26.0837 1.3418L26.0837 1.62305ZM30.62 1.62305L30.62 1.9043L32.8881 1.9043L32.8881 1.62305L32.8881 1.3418L30.62 1.3418L30.62 1.62305ZM35.1562 1.62305L35.1562 1.9043L37.4244 1.9043L37.4244 1.62305L37.4244 1.3418L35.1562 1.3418L35.1562 1.62305ZM39.6925 1.62305L39.6925 1.9043L41.9607 1.9043L41.9607 1.62305L41.9607 1.3418L39.6925 1.3418L39.6925 1.62305ZM44.2288 1.62305L44.2288 1.9043L46.497 1.9043L46.497 1.62305L46.497 1.3418L44.2288 1.3418L44.2288 1.62305ZM48.7651 1.62305L48.7651 1.9043L51.0333 1.9043L51.0333 1.62305L51.0333 1.3418L48.7651 1.3418L48.7651 1.62305ZM53.3014 1.62305L53.3014 1.9043L55.5696 1.9043L55.5696 1.62305L55.5696 1.3418L53.3014 1.3418L53.3014 1.62305ZM57.8377 1.62305L57.8377 1.9043L60.1059 1.9043L60.1059 1.62305L60.1059 1.3418L57.8377 1.3418L57.8377 1.62305ZM62.374 1.62305L62.374 1.9043L64.6422 1.9043L64.6422 1.62305L64.6422 1.3418L62.374 1.3418L62.374 1.62305ZM66.9103 1.62305L66.9103 1.9043L69.1784 1.9043L69.1784 1.62305L69.1784 1.3418L66.9103 1.3418L66.9103 1.62305ZM71.4466 1.62305L71.4466 1.9043L73.7147 1.9043L73.7147 1.62305L73.7147 1.3418L71.4466 1.3418L71.4466 1.62305ZM75.9829 1.62305L75.9829 1.9043L78.251 1.9043L78.251 1.62305L78.251 1.3418L75.9829 1.3418L75.9829 1.62305ZM80.5192 1.62305L80.5192 1.9043L82.7873 1.9043L82.7873 1.62305L82.7873 1.3418L80.5192 1.3418L80.5192 1.62305ZM85.0554 1.62305L85.0554 1.9043L87.3236 1.9043L87.3236 1.62305L87.3236 1.3418L85.0554 1.3418L85.0554 1.62305ZM89.5917 1.62305L89.5917 1.9043L91.8599 1.9043L91.8599 1.62305L91.8599 1.3418L89.5917 1.3418L89.5917 1.62305ZM94.128 1.62306L94.128 1.90431L96.3962 1.90431L96.3962 1.62306L96.3962 1.34181L94.128 1.34181L94.128 1.62306ZM98.6643 1.62306L98.6643 1.90431L100.932 1.90431L100.932 1.62306L100.932 1.34181L98.6643 1.34181L98.6643 1.62306ZM103.201 1.62306L103.201 1.90431L105.469 1.90431L105.469 1.62306L105.469 1.34181L103.201 1.34181L103.201 1.62306ZM107.737 1.62306L107.737 1.90431L110.005 1.90431L110.005 1.62306L110.005 1.34181L107.737 1.34181L107.737 1.62306ZM112.273 1.62306L112.273 1.90431L114.541 1.90431L114.541 1.62306L114.541 1.34181L112.273 1.34181L112.273 1.62306ZM116.809 1.62306L116.809 1.90431L119.078 1.90431L119.078 1.62306L119.078 1.34181L116.809 1.34181L116.809 1.62306ZM121.346 1.62306L121.346 1.90431L123.614 1.90431L123.614 1.62306L123.614 1.34181L121.346 1.34181L121.346 1.62306ZM125.882 1.62306L125.882 1.90431L128.15 1.90431L128.15 1.62306L128.15 1.34181L125.882 1.34181L125.882 1.62306ZM130.418 1.62306L130.418 1.90431L132.686 1.90431L132.686 1.62306L132.686 1.34181L130.418 1.34181L130.418 1.62306ZM134.955 1.62306L134.955 1.90431L137.223 1.90431L137.223 1.62306L137.223 1.34181L134.955 1.34181L134.955 1.62306ZM139.491 1.62306L139.491 1.90431L140.625 1.90431L140.625 1.62306L140.625 1.34181L139.491 1.34181L139.491 1.62306Z"
            fill="#E8E8E8"
          />
        </svg>
      </div>

      <div className={styles.youLine}>
        <div className={styles.youCard}>
          <span className={styles.cursorLabel}>
            You
          </span>
        </div>

        <svg
          width="135"
          height="4"
          viewBox="0 0 135 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={styles.youPath}
            opacity="0.5"
            d="M131.393 1.9043L134.206 3.24684V-0.00075078L131.393 1.3418V1.9043ZM-1.52588e-05 1.62305L1.62378 3.24684L3.24757 1.62305L1.62378 -0.00075078L-1.52588e-05 1.62305ZM130.777 1.62305V1.3418L128.491 1.3418V1.62305V1.9043L130.777 1.9043V1.62305ZM126.205 1.62305V1.3418L123.919 1.3418V1.62305V1.9043L126.205 1.9043V1.62305ZM121.633 1.62305V1.3418L119.347 1.3418V1.62305V1.9043L121.633 1.9043V1.62305ZM117.062 1.62305V1.3418L114.776 1.3418V1.62305V1.9043L117.062 1.9043V1.62305ZM112.49 1.62305V1.3418L110.204 1.3418V1.62305V1.9043L112.49 1.9043V1.62305ZM107.918 1.62305V1.3418L105.632 1.3418V1.62305V1.9043L107.918 1.9043V1.62305ZM103.346 1.62305V1.3418L101.06 1.3418V1.62305V1.9043L103.346 1.9043V1.62305ZM98.7744 1.62305V1.3418L96.4885 1.3418V1.62305V1.9043L98.7744 1.9043V1.62305ZM94.2026 1.62305V1.3418L91.9167 1.3418V1.62305V1.9043L94.2026 1.9043V1.62305ZM89.6308 1.62305V1.3418L87.3449 1.3418V1.62305V1.9043L89.6308 1.9043V1.62305ZM85.059 1.62305V1.3418L82.7731 1.3418V1.62305V1.9043L85.059 1.9043V1.62305ZM80.4872 1.62305V1.3418L78.2013 1.3418V1.62305V1.9043L80.4872 1.9043V1.62305ZM75.9154 1.62305V1.3418L73.6295 1.3418V1.62305V1.9043L75.9154 1.9043V1.62305ZM71.3437 1.62305V1.3418L69.0578 1.3418V1.62305V1.9043L71.3437 1.9043V1.62305ZM66.7719 1.62305V1.3418L64.486 1.3418V1.62305V1.9043L66.7719 1.9043V1.62305ZM62.2001 1.62305V1.3418L59.9142 1.3418V1.62305V1.9043L62.2001 1.9043V1.62305ZM57.6283 1.62305V1.3418L55.3424 1.3418V1.62305V1.9043L57.6283 1.9043V1.62305ZM53.0565 1.62305V1.3418L50.7706 1.3418V1.62305V1.9043L53.0565 1.9043V1.62305ZM48.4847 1.62305V1.3418L46.1988 1.3418V1.62305V1.9043L48.4847 1.9043V1.62305ZM43.9129 1.62305V1.3418L41.627 1.3418V1.62305V1.9043L43.9129 1.9043V1.62305ZM39.3411 1.62305V1.3418L37.0552 1.3418V1.62305V1.9043L39.3411 1.9043V1.62305ZM34.7693 1.62305V1.3418L32.4834 1.3418V1.62305V1.9043L34.7693 1.9043V1.62305ZM30.1975 1.62305V1.3418L27.9116 1.3418V1.62305V1.9043L30.1975 1.9043V1.62305ZM25.6257 1.62305V1.3418L23.3398 1.3418V1.62305V1.9043L25.6257 1.9043V1.62305ZM21.0539 1.62305V1.3418L18.768 1.3418V1.62305V1.9043L21.0539 1.9043V1.62305ZM16.4821 1.62305V1.3418L14.1962 1.3418V1.62305V1.9043L16.4821 1.9043V1.62305ZM11.9103 1.62305V1.3418L9.62444 1.3418V1.62305V1.9043L11.9103 1.9043V1.62305ZM7.33855 1.62305V1.3418L5.05266 1.3418V1.62305V1.9043L7.33855 1.9043V1.62305ZM2.76675 1.62305V1.3418L1.62378 1.3418V1.62305V1.9043L2.76675 1.9043V1.62305Z"
            fill="#E8E8E8"
          />
        </svg>
      </div>
    </div>
  );
}

function getColorAtPosition(top: number) {
  const position = Math.min(Math.max(top, 0), colorsTotalHeight);
  const color = colors.find(([, ,], index) => {
    const colorEndPosition = colors
      .slice(0, index + 1)
      .reduce((total, [height]) => total + height, 0);

    return position < colorEndPosition;
  });

  return color ?? colors[colors.length - 1];
}

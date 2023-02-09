"use client";

import { useRef, useEffect } from "react";
import { animate, scroll, ScrollOffset } from "motion";
import Image from "next/image";

import styles from "./NostalgiaSection.module.scss";
import NostalgiaSvg from "../../public/nostalgia.svg";
import NostalgiaDecoration from "../../public/nostalgia-decoration.png";

function randomDecimalGenerator(minimum: number, maximum: number) {
  return Math.random() * (maximum - minimum) + minimum;
}

function NostalgiaSection() {
  const nostalgiaSvgWrapperRef = useRef<HTMLDivElement>(null);
  const nostalgiaDecorationRef = useRef<HTMLImageElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  function setupNostalgiaSvgAnimation() {
    if (!nostalgiaSvgWrapperRef.current) return;

    const target = nostalgiaSvgWrapperRef.current;
    const svg = target.firstElementChild as SVGSVGElement;
    const rects = Array.from(svg.children);

    rects.forEach((rect) => {
      const animation = animate(rect, { opacity: [0, 1] });
      const randStart = randomDecimalGenerator(0.8, 1);
      const randEnd = randomDecimalGenerator(0.5, 0.8);

      scroll(animation, { target, offset: [randStart, randEnd] });
    });
  }

  function setupDecorationAnimation() {
    if (!nostalgiaDecorationRef.current || !quoteRef.current) return;

    const animation = animate(
      nostalgiaDecorationRef.current,
      {
        y: ["10%", "0%"],
      },
      { easing: "ease-in-out" }
    );

    const scrollOptions = {
      target: quoteRef.current,
      offset: [...ScrollOffset.Enter, ...ScrollOffset.Exit],
    };

    scroll(animation, scrollOptions);
  }

  useEffect(() => {
    setupNostalgiaSvgAnimation();
    setupDecorationAnimation();
  }, []);

  return (
    <section className={styles.nostalgiaSection}>
      <h2 className={styles.title}>
        Looking at what shoppers checked out this year, one theme was clear:
      </h2>

      <div ref={nostalgiaSvgWrapperRef} className={styles.nostalgiaSvgWrapper}>
        <NostalgiaSvg />
      </div>

      <p className={styles.description}>
        <span>
          Blasts from the past across fashion, technology, and culture made for
          feel-good throwbacks from every era. And history is closer than you
          might think. Thanks to the digital age, our cultural memory is shorter
          than ever. Former favorites are coming back en vogue even faster than
          before.
        </span>
        <span>
          From velour track pants to wired headphones, this was a year when
          things from recent memory became classics: 2022 gave the past a place
          in the present. Some of these items became trends this year because of
          the people who loved them the first time around (hello, ‘90s kids),
          others came to the fore with a distinct Gen-Z spin.
        </span>
      </p>

      <div className={styles.quote} ref={quoteRef}>
        <p className={styles.quoteCopy}>
          “Against the backdrop of a changing world, people have been escaping
          to more comfortable territories as the antidote to everyday life.
          Looking at this year’s trending items, it’s clear that people have
          been turning to products that remind them of happier, more carefree
          times.”
        </p>

        <p className={styles.author}>
          –Agus ‘@thealgorythm’ Panzoni, Trend expert.
        </p>

        <Image
          ref={nostalgiaDecorationRef}
          className={styles.decoration}
          src={NostalgiaDecoration}
          alt="Agus Panzoni"
        />
      </div>
    </section>
  );
}

export default NostalgiaSection;

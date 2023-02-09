"use client";

import { useRef, useEffect } from "react";
import { scroll, animate, ScrollOffset, timeline, stagger } from "motion";

import FiveSvg from "../../public/five.svg";

import styles from "./TrendsSection.module.scss";

function TrendsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mainTitleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const itemListRef = useRef<HTMLULList>(null);
  const fiveSvgWrapperRef = useRef<HTMLSpanElement>(null);
  const headingWrapperRef = useRef<HTMLDivElement>(null);

  function setupMainTitleAnimation() {
    const timelineSteps = [
      [fiveSvgWrapperRef.current, { width: ["0vw", "20vw"] }],
      [headingWrapperRef.current, { y: ["40vh", "0vh"] }],
      [subtitleRef.current, { opacity: [0, 1] }, { at: "<" }],
      [
        itemListRef.current?.children,
        { y: ["100vh", "0vh"] },
        { delay: stagger(0.05) },
      ],
    ];

    const timelineAnimation = timeline(timelineSteps);

    scroll(timelineAnimation, {
      target: sectionRef.current,
      offset: [0, 0.9],
    });
  }

  useEffect(() => {
    setupMainTitleAnimation();
  }, []);

  return (
    <section className={styles.trendsSection} ref={sectionRef}>
      <div className={styles.content}>
        <div className={styles.headingWrapper} ref={headingWrapperRef}>
          <h2 className={styles.mainTitle} ref={mainTitleRef}>
            The{" "}
            <span className={styles.fiveSvgWrapper} ref={fiveSvgWrapperRef}>
              <FiveSvg className={styles.fiveSvg} />
            </span>{" "}
            trends.
          </h2>

          <p className={styles.subtitle} ref={subtitleRef}>
            Five nostalgic trends rose to the top in 2022.
          </p>
        </div>

        <ul className={styles.list} ref={itemListRef}>
          <li className={styles.item}></li>
          <li className={styles.item}></li>
          <li className={styles.item}></li>
          <li className={styles.item}></li>
          <li className={styles.item}></li>
        </ul>
      </div>
    </section>
  );
}

export default TrendsSection;

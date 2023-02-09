"use client";

import { useRef, useEffect } from "react";
import { animate, scroll, ScrollOffset } from "motion";

import styles from "./NostalgiaSection.module.scss";
// import NostalgiaSvg from "../../public/nostalgia.svg";
import NostalgiaSvg from "./NostalgiaSvg";

function NostalgiaSection() {
  const nostalgiaSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!nostalgiaSvgRef.current) return;

    const animation = animate(nostalgiaSvgRef.current, { opacity: [0, 1] });
    const scrollOptions = {
      target: nostalgiaSvgRef.current,
      offset: [0.7, 0],
    };

    scroll(animation, scrollOptions);
  }, []);

  return (
    <section className={styles.nostalgiaSection}>
      <h2 className={styles.title}>
        Looking at what shoppers checked out this year, one theme was clear:
      </h2>

      <NostalgiaSvg ref={nostalgiaSvgRef} className={styles.nostalgiaSvg} />
    </section>
  );
}

export default NostalgiaSection;

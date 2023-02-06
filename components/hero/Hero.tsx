import { Inter } from "@next/font/google";

import styles from "./Hero.module.scss";

const inter = Inter({ subsets: ["latin"] });

function Hero() {
  return (
    <section>
      <video src="hero-foreground-desktop.webm" className={styles.video} />
      <h1 className={inter.className}>I'm the hero</h1>
    </section>
  );
}

export default Hero;

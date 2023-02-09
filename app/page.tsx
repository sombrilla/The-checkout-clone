import styles from "./page.module.css";

import Hero from "../components/hero/Hero";
import GrainOverlay from "../components/grain-overlay/GrainOverlay";
import NostalgiaSection from "../components/nostalgia-section/NostalgiaSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <GrainOverlay />
      <Hero />
      <NostalgiaSection />
    </main>
  );
}

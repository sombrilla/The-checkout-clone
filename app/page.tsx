import styles from "./page.module.css";

import GrainOverlay from "../components/grain-overlay/GrainOverlay";
import SiteHeader from "../components/site-header/SiteHeader";
import Hero from "../components/hero/Hero";
import NostalgiaSection from "../components/nostalgia-section/NostalgiaSection";
import TrendsSection from "../components/trends-section/TrendsSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <GrainOverlay />
      <SiteHeader />
      <Hero />
      <NostalgiaSection />
      <TrendsSection />
      <div style={{ background: "red", height: "200vh", width: "100%" }} />
    </main>
  );
}

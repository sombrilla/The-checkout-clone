import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/hero-background-desktop.mp4"
        className={styles.videoBackground}
      />

      <div className={styles.content}>
        <video
          autoPlay
          muted
          playsInline
          src="/hero-foreground-desktop.webm"
          className={styles.videoForeground}
        />

        <p className={styles.subtitle}>
          The Checkout is Klarna’s global, annual summary of the year through
          the lens of our purchases.
        </p>
      </div>
    </section>
  );
}

export default Hero;

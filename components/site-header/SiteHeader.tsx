import styles from "./SiteHeader.module.scss";

import Logo from "../../public/logo.svg";

function SiteHeader() {
  return (
    <div className={styles.siteHeader}>
      <a href="#" className={styles.logoWrapper}>
        <Logo />
      </a>

      <button className={styles.menuButton}>
        Menu <span className={styles.menuIcon} />
      </button>
    </div>
  );
}

export default SiteHeader;

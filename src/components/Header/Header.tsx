import styles from "./Header.module.css";

import igniteLogo from "../../assets/ignite-logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={igniteLogo} alt="Ignite Feed" />
      <strong className={styles.title}>Ignite Feed</strong>
    </header>
  );
};

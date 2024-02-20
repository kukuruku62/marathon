import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerInner}>
          <Link to="/">
            <img className={styles.flag} src="../../assets/img/flag.svg" alt="Vlajka" />
          </Link>
          <h2 className={styles.headerTitle}>STUPAVA MARATÓN</h2>
        </div>
      </div>
    </header>
  );
};

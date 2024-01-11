import React from "react";
import styles from "./Header.module.scss";
import { Timer } from "../Timer/Timer";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerInner}>
          <img className={styles.flag} src="../src/assets/img/flag.svg" alt="Flag" />
          <h2 className={styles.headerTitle}>STUPAVA MARATHON</h2>
          <Timer />
        </div>
      </div>
    </header>
  );
};

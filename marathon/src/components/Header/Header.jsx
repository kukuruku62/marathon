import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

import FlagSvg from "../../assets/svg/flag.svg?react";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerInner}>
          <Link to="/">
            <FlagSvg className={styles.flag}  alt="Vlajka"/>
          </Link>
          <h2 className={styles.headerTitle}>STUPAVA MARATÓN</h2>
        </div>
      </div>
    </header>
  );
};

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import styles from "./Header.module.scss";

import { BurgerMenu } from "./BurgerMenu";
import FlagSvg from "../../assets/svg/flag.svg?react";

export const Header = () => {
  const [isBurgerWindow, setIsBurgerWindow] = useState(false);

  useEffect(() => {
    if (isBurgerWindow) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isBurgerWindow])

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <Link to="/">
              <FlagSvg className={styles.flag} alt="Vlajka" />
            </Link>
            <h2 className={styles.headerTitle}>STUPAVA MARATÓN</h2>
          </div>
        </div>
        <div className={styles.burgerBtnContainer} onClick={() => setIsBurgerWindow(!isBurgerWindow)}>
          <div className={styles.burgerBtn}>
            {Array.from({length: 3}).map((line, index) => <span key={index} className={isBurgerWindow ? styles.active : ''}></span>)}
          </div>
        </div>
        {createPortal(
          <BurgerMenu isBurgerWindow={isBurgerWindow} setIsBurgerWindow={setIsBurgerWindow} />,
          document.body
        )}
      </div>
    </header>
  );
};

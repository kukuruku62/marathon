import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { BurgerMenu } from "./BurgerMenu";
import styles from "./Header.module.scss";



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
            <Link to="/" onClick={() => setIsBurgerWindow(false)}>
              <div className={styles.content}>
                <h1 className={styles.title}>STUPAVA MARATÓN</h1>
              </div>
            </Link>
        </div>
        <div className={styles.burgerBtnContainer} onClick={() => setIsBurgerWindow(!isBurgerWindow)}>
          <div className={styles.burgerBtn}>
            {Array.from({length: 3}).map(( _, index ) => <span key={index} className={isBurgerWindow ? styles.active : ''}></span>)}
          </div>
        </div>
        { isBurgerWindow && createPortal(
          <BurgerMenu isBurgerWindow={isBurgerWindow} setIsBurgerWindow={setIsBurgerWindow} />,
          document.body
        )}
      </div>
    </header>
  );
};

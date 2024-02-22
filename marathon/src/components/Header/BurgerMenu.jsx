import React from "react";
import styles from "./Header.module.scss";

export const BurgerMenu = ({ isBurgerWindow, setIsBurgerWindow }) => {

  const listItemsMenu = ["Hlavná stránka", "Podporte nás", "Kontakt"];

  return (
    <div className={isBurgerWindow ? styles["burgerMenu"] : styles["burgerMenu active"]} >
      <nav className={styles.navBurgerMenu} >
        <ul>
          {listItemsMenu.map((item, index) => 
            <li key={index} onClick={() => setIsBurgerWindow(false)}><p>{item}</p></li>)}
        </ul>
      </nav>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export const BurgerMenu = ({ isBurgerWindow, setIsBurgerWindow }) => {
  const listItemsMenu = [
    { title: "Podporte nás", href: "/donate" },
    { title: "Kontakt", href: "/contact" },
  ];

  return (
    <div className={isBurgerWindow ? styles["burgerMenu"] : styles["burgerMenu active"]}>
      <nav className={styles.navBurgerMenu}>
        <ul>
          {listItemsMenu.map(({title, href}, index) => (
            <li key={index} onClick={() => setIsBurgerWindow(false)}>
              <Link className={styles.link} to={href}>
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

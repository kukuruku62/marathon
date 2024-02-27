import React from "react";
import styles from "./About.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const About = () => {
  const firstEvent = useSelector((state) => state.events.firstEvent);
  const dateOfNextEvent = useSelector((state) => state.events.dateOfNextEvent);

  const listItemsMenu = [
    { title: "Podporte nás", href: "/donate" },
    { title: "Kontakt", href: "/contact" },
  ];

  return (
    <section className={styles.slider}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          {firstEvent && dateOfNextEvent && (
            <h1 className={styles.title}>
              {`${firstEvent.name} ${dateOfNextEvent} ${firstEvent.timeOfStartEvent} `}
            </h1>
          )}
          <p className={styles.description}>
            Stupava Marathon ponúka preteky pre deti aj dospelých v krásnom prostredí Malých Karpát
            už viac ako 10 rokov. Vyberte si z rôznych tratí a zažite vzrušenie z prekonávania seba
            samého v úchvatnej prírode.
          </p>
        </div>
        <div className={styles.linksBlock}>
          <nav className={styles.navigation}>
            <ul className={styles.listLinks}>
              {listItemsMenu.map(({ title, href }, index) => (
                <li key={index} className={styles.linkWrapper}>
                  <Link className={styles.link} to={href}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

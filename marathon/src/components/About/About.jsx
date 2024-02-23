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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi, expedita neque
            quod consequatur minima voluptas impedit obcaecati veritatis, reprehenderit dolorem
            quisquam ipsum dolor exercitationem iusto officiis harum ratione accusantium.
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

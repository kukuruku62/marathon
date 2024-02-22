import React from "react";
import styles from "./About.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const About = () => {
  const firstEvent = useSelector((state) => state.events.firstEvent);
  const dateOfNextEvent = useSelector((state) => state.events.dateOfNextEvent);

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
          <nav>
            <ul>
              <li className={styles.linkWrapper}>
                <Link className={styles.link}>Registrácia</Link>
              </li>
              <li className={styles.linkWrapper}>
                <Link className={styles.link}>Spojte sa s nami</Link>
              </li>
              <li className={styles.linkWrapper}>
                <Link className={styles.link}>Podpor nás</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

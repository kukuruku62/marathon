import React from "react";
import styles from "./About.module.scss";

export const About = ({dateOfNextEvent, firstEvent}) => {
  return (
    <section className={styles.slider}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
        {firstEvent && <h1 className={styles.title}>{`${firstEvent.name} ${dateOfNextEvent} ${firstEvent.timeOfStartEvent} `} </h1>}
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi, expedita neque
            quod consequatur minima voluptas impedit obcaecati veritatis, reprehenderit dolorem
            quisquam ipsum dolor exercitationem iusto officiis harum ratione accusantium.
          </p>
        </div>
        <div className={styles.linksBlock}>
          <nav>
            <ul className={styles.linksBlock__container}>
              <li className={styles.linksBlock__link_wrapper}>
                <a className={styles.linksBlock__link} href="">
                  Зарегистрироваться
                </a>
              </li>
              <li className={styles.linksBlock__link_wrapper}>
                <a className={styles.linksBlock__link} href="">
                  Посмотреть расписание
                </a>
              </li>
              <li className={styles.linksBlock__link_wrapper}>
                <a className={styles.linksBlock__link} href="">
                  Поддержать проект
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <img className={styles.sliderImg} src="../src/assets/img/start-marathon.jpg" alt="Image start of the marathon" /> */}
    </section>
  );
};

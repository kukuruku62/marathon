import React from "react";
import { Link } from "react-router-dom";
import { useGetAllEventsQuery } from "../../redux/api";
import styles from "./About.module.scss";

export const About = () => {
  const { data, isSuccess, isError } = useGetAllEventsQuery(undefined, {
    selectFromResult: (result) => ({
      isSuccess: result?.isSuccess,
      isError: result?.isError,
      data: result?.data?.eventsData?.[0],
    }),
  });
  
  const { name, timeOfStartEvent, dateOfEvent } = { ...data };

  let formatedDate;
  if (isSuccess) {
    formatedDate = new Date(dateOfEvent).toLocaleDateString();
  }

  const listItemsMenu = [
    { title: "Podporte nás", href: "/donate" },
    { title: "Kontakt", href: "/contact" },
  ];

  return (
    <section className={styles.slider}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          {isSuccess && formatedDate && (
            <h2 className={styles.title}>{`${name} ${formatedDate} ${timeOfStartEvent}`}</h2>
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

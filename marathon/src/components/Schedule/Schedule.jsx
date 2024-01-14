import React from "react";
import styles from "./Schedule.module.scss";
import { Skeleton } from "../Skeleton/Skeleton";

export const Schedule = ({statusOfFetch, listOfEvents}) => {

  return (
    <section className={styles.schedule}>
      <h2 className={styles.title}>Schedule</h2>
      {statusOfFetch === "loading" && <Skeleton message={"Loading..."}/>}
      {statusOfFetch === "rejected" && errorMessage ? <Skeleton message={'An error that we are already working on eliminating. Come back a little later'}/> : null}
      {statusOfFetch === "resolved" && !listOfEvents.length && <Skeleton message={"There is no any events yet"}/>}
      {statusOfFetch === "resolved" && listOfEvents.length ? (
        <ol className={styles.grid}>
          {listOfEvents.map((event, index) => (
            <li key={index} className={styles.gridItem}>
              <article className={styles.content}>
                <div className={styles.subtitlesWrapper}>
                  <h3 className={styles.subtitle}>{event.place}</h3>
                  <h3 className={styles.subtitle}>{event.variant}</h3>
                  <h3 className={styles.subtitle}>{event.type}</h3>
                </div>
                <div className={styles.distanceContainer}>
                  {event.length.map((el, index) => (
                    <p key={index} className={styles.distance}>{el}</p>
                  ))}
                  {<p className={styles.measurement}>{event.measurement}</p>}
                </div>
                <p className={styles.date}>{event.date.split("-").reverse().join(".")}</p>
              </article>
            </li>
          ))}
        </ol>
      ) : null}
    </section>
  );
};

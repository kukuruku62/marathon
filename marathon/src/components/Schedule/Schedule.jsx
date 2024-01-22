import React from "react";
import styles from "./Schedule.module.scss";
import { Skeleton } from "../Skeleton/Skeleton";
import { Link } from "react-router-dom";

export const Schedule = ({ statusOfFetch, listOfEvents, errorMessage }) => {
  return (
    <section className={styles.schedule}>
      <h2 className={styles.title}>Schedule</h2>
      {statusOfFetch === "loading" && <Skeleton message={"Loading..."} />}
      {statusOfFetch === "rejected" && errorMessage ? (
        <Skeleton message={"Error:( Please, try again."} />
      ) : null}
      {statusOfFetch === "resolved" && !listOfEvents.length && (
        <Skeleton message={"There is no any events yet"} />
      )}
      {statusOfFetch === "resolved" && listOfEvents.length ? (
        <ol className={styles.grid}>
          {listOfEvents.map((event, index) => (
            // TODO: change key to event.id
            <li key={index} className={styles.gridItem}>
              <Link to={`/event/${event.id}`}>
                <article className={styles.content}>
                  <div className={styles.subtitlesWrapper}>
                    <h3 className={styles.subtitle}>{event.place}</h3>
                    <h3 className={styles.subtitle}>{event.variant}</h3>
                    <h3 className={styles.subtitle}>{event.type}</h3>
                  </div>
                  <div className={styles.distanceContainer}>
                    {event.length.map((el, index) => (
                      <p key={index} className={styles.distance}>
                        {el}
                      </p>
                    ))}
                    {<p className={styles.measurement}>{event.measurement}</p>}
                  </div>
                  <p className={styles.date}>{event.date.split("-").reverse().join(".")}</p>
                </article>
              </Link>
            </li>
          ))}
        </ol>
      ) : null}
    </section>
  );
};

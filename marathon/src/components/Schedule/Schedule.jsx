import React from "react";
import styles from "./Schedule.module.scss";
import { Skeleton } from "../Skeleton/Skeleton";
import { Link } from "react-router-dom";

export const Schedule = ({ statusOfFetch, listEvents, errorMessage }) => {
  return (
    <section>
      <h2 className={styles.title}>ROZVRH</h2>
      {statusOfFetch === "loading" && <Skeleton message={"Loading..."} />}
      {statusOfFetch === "rejected" && errorMessage ? (
        <Skeleton message={"Error:( Please, try again."} />
      ) : null}
      {statusOfFetch === "resolved" && !listEvents.length && (
        <Skeleton message={"There is no any events yet"} />
      )}
      {statusOfFetch === "resolved" && listEvents.length ? (
        <ul className={styles.wrapper}>
          {listEvents.map(({ _id, name, dateOfEvent, timeOfStartEvent, lengthsOfRoutes, measurement }) => (
              <li key={_id} className={styles.gridItem}>
                <Link to={`/event/${_id}`}>
                  <article className={styles.content}>
                      <h3 className={styles.subtitle}>{name}</h3>
                    <div className={styles.distanceContainer}>
                      {lengthsOfRoutes.map((length, index) => (<p key={index} className={styles.distance}>{length}</p>))}
                      {<p className={styles.measurement}>{measurement}</p>}
                    </div>
                    <div className={styles.dateAndTimeWrapper}>
                      <p className={styles.date}>{dateOfEvent.split("-").reverse().join(".")}</p>
                      <p className={styles.date}>{timeOfStartEvent}</p>
                    </div>
                  </article>
                </Link>
              </li>
            )
          )}
        </ul>
      ) : null}
    </section>
  );
};

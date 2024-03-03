import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Skeleton } from "../Skeleton/Skeleton";
import { SkeletonBike } from "../SkeletonBike/SkeletonBike";
import styles from "./Schedule.module.scss";



export const Schedule = () => {
  const status = useSelector((state) => state.events.status);
  const listEvents = useSelector((state) => state.events.listEvents);

  return (
    <section>
      <h2 className={styles.title}>ROZVRH</h2>
      <ul className={styles.wrapper}>
        {status === "loading" && <SkeletonBike />}

        {listEvents && listEvents.map(({ _id, name, dateOfEvent, timeOfStartEvent, distances, measurement }) => (
          <li key={_id} className={styles.gridItem}>
            <Link to={`/events/${_id}`}>
              <article className={styles.content}>
                <h3 className={styles.subtitle}>{name}</h3>
                <div className={styles.distanceContainer}>
                  {distances.map((distance, index) => (
                    <p key={index} className={styles.distance}>
                      {distance}
                    </p>
                  ))}
                  {<p className={styles.measurement}>{measurement}</p>}
                </div>
                <div className={styles.dateAndTimeWrapper}>
                  <p className={styles.date}>{dateOfEvent.split("-").reverse().join(".")}</p>
                  <p className={styles.date}>{timeOfStartEvent}</p>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>

      {status === "rejected" && <Skeleton message={"Error:( Please, try again."} />}
    </section>
  );
};

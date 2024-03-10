import React from "react";
import { Link } from "react-router-dom";
import { useGetAllEventsQuery } from "../../redux/api";
import { Skeleton } from "../Skeleton/Skeleton";
import { SkeletonBike } from "../SkeletonBike/SkeletonBike";
import styles from "./Schedule.module.scss";


export const Schedule = () => {
  const {data, isSuccess, isError, isLoading} = useGetAllEventsQuery(undefined, {
    selectFromResult: (result) => ({
      isSuccess: result?.isSuccess,
      isLoading: result?.isLoading,
      data: result?.data?.eventsData
    })
  });


  return (
    <section>
      <h2 className={styles.title}>ROZVRH</h2>
      <ul className={styles.wrapper}>

        {isLoading && <SkeletonBike />}

        {isSuccess && data.map(({ _id, name, dateOfEvent, timeOfStartEvent, distances, measurement }) => (
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

      {isError && <Skeleton message={"Error:( Please, try again."} />}

    </section>
  );
};

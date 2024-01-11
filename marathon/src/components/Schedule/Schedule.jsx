import React, { useEffect } from "react";
import styles from "./Schedule.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchedule } from "../../store/slices";
import { Skeleton } from "../Skeleton/Skeleton";

export const Schedule = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.events.status);
  const errorMessage = useSelector((state) => state.events.errorMessage);
  const events = useSelector((state) => state.events.events);
  // const eventsDate = events.date;

  useEffect(() => {
    dispatch(fetchSchedule());
    // console.log(events.date)
  }, [dispatch]);

  return (
    <section className={styles.schedule}>
      <h2>Schedule</h2>
      {status === "loading" && <Skeleton />}
      {status === "rejected" && errorMessage ? <h2>Error: {errorMessage}</h2> : null}
      {status === "resolved" && !events.length && <h2>There is no any events yet</h2>}
      {status === "resolved" && events.length ? (
        <ol className={styles.grid}>
          {events.map((event, index) => (
            <li key={index} className={styles.gridItem}>
              <article className={styles.content}>
                <div className={styles.eventTitles}>
                  <h3 className={styles.title}>{event.place}</h3>
                  <h3 className={styles.title}>{event.variant}</h3>
                  <h3 className={styles.title}>{event.type}</h3>
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

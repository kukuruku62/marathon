import React from "react";
import { useTimer } from "../../hooks/useTimer";
import { useGetAllEventsQuery } from "../../redux/api";
import styles from "./Timer.module.scss";


export const Timer = () => {

  const {data, isSuccess} = useGetAllEventsQuery(undefined, {
    selectFromResult: (result) => ({
      isSuccess: result?.isSuccess,
      data: result?.data?.eventsData?.[0]
    })
  });

  const { timerDays, timerHours, timerMinutes, isReady } = useTimer(
    isSuccess && data ? `${data.dateOfEvent} ${data.timeOfStartEvent}` : null
  );


  return (
    <div className={styles.wrapper}>
      {isReady && (
        <>
          <h3 className={styles.title}>ĎALŠÍ ŠTART</h3>
          <div className={styles.timerContent}>
            <div className={styles.timerItem}>
              <span className={styles.timerData}>{timerDays}</span>
              <span className={styles.timerText}>dni</span>
            </div>
            <div className={styles.timerItem}>
              <span className={styles.timerData}>{timerHours}</span>
              <span className={styles.timerText}>hodiny</span>
            </div>
            <div className={styles.timerItem}>
              <span className={styles.timerData}>{timerMinutes}</span>
              <span className={styles.timerText}>minúty</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
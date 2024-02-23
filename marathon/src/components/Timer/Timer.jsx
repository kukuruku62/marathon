import React from "react";
import { useSelector } from "react-redux";
import { useTimer } from "../../hooks/useTimer";

import styles from "./Timer.module.scss";


export const Timer = () => {
  const dateAndTimeFirstEvent = useSelector((state) => state.events.dateAndTimeFirstEvent);
  const { timerDays, timerHours, timerMinutes, isReady } = useTimer(dateAndTimeFirstEvent);

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

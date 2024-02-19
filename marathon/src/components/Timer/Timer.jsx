import React from "react";
import { useTimer } from "../../hooks/useTimer";

import styles from "./Timer.module.scss";

export const Timer = ({ dateAndTimeFirstEvent }) => {
  const { timerDays, timerHours, timerMinutes, isReady } = useTimer(dateAndTimeFirstEvent);

  return (
    <div className={styles.wrapper}>
      {isReady && (
        <>
          <h3 className={styles.title}>ĎALŠÍ ŠTART</h3>
          <div className={styles.timerContainer}>
            <div className={styles.timerUnitWrapper}>
              <span className={styles.timerData}>{timerDays}</span>
              <span className={styles.timerText}>days</span>
            </div>
            <div className={styles.timerUnitWrapper}>
              <span className={styles.timerData}>{timerHours}</span>
              <span className={styles.timerText}>hours</span>
            </div>
            <div className={styles.timerUnitWrapper}>
              <span className={styles.timerData}>{timerMinutes}</span>
              <span className={styles.timerText}>minutes</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

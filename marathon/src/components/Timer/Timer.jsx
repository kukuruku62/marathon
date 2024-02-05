import React, { useEffect, useState, useRef } from "react";
import styles from "./Timer.module.scss";

export const Timer = ({ timeOfStartFirstEvent }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [timerDays, setTimerDays] = useState(false);
  const [timerHours, setTimerHours] = useState(false);
  const [timerMinutes, setTimerMinutes] = useState(false);

  let interval = useRef();

  function setDataLength(data) {
    if (data < 10) {
      return String(data).padStart(2, "0");
    } else {
      return data;
    }
  }

  const startTimer = () => {
    const countdownDate = new Date(timeOfStartFirstEvent).getTime();

    interval = setTimeout(() => {
      const currentTime = new Date().getTime();
      const differenceOfTime = countdownDate - currentTime;

      const days = setDataLength(Math.floor(differenceOfTime / (1000 * 60 * 60 * 24)));
      const hours = setDataLength(
        Math.floor((differenceOfTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const minutes = setDataLength(
        Math.floor((differenceOfTime % (1000 * 60 * 60)) / (1000 * 60))
      );

      if (differenceOfTime < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setIsComplete(true);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className={styles.wrapper}>
      {isComplete && (
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

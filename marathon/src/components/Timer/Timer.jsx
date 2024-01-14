import React, { useEffect, useState, useRef } from "react";
import styles from "./Timer.module.scss";
import { useSelector } from "react-redux";


export const Timer = () => {
  const timeOfStartFirstEvent = useSelector((state)=> state.events.startFirstEvent)
  // console.log(timeOfStartFirstEvent)
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  // const [timerSeconds, setTimerSeconds] = useState("00");
  // console.log(new Date(timeOfStartFirstEvent), new Date(timeOfStartFirstEvent).getDay())

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
    // console.log(new Date("January 20, 2024 11:30:00"))

    interval = setTimeout(() => {
      const currentTime = new Date().getTime();
      const differenceOfTime = countdownDate - currentTime;

      const days = setDataLength(Math.floor(differenceOfTime / (1000 * 60 * 60 * 24)));
      const hours =   setDataLength(Math.floor((differenceOfTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const minutes = setDataLength(Math.floor((differenceOfTime % (1000 * 60 * 60)) / (1000 * 60)));
      // const seconds = setDataLength(Math.floor((differenceOfTime % (1000 * 60)) / 1000));

      if (differenceOfTime < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        // setTimerSeconds(seconds);
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
    <div className={styles.timer}>
      <div className={styles.timerUnitWrapper}>
        <span className={styles.timerText}>days</span>
        <span className={styles.timerData}>{timerDays}</span>
      </div>
      <div className={styles.separator}>
        <span>.</span>
        <span>.</span>
      </div>

      <div className={styles.timerUnitWrapper}>
        <span className={styles.timerText}>hours</span>
        <span className={styles.timerData}>{timerHours}</span>
      </div>
      <div className={styles.separator}>
        <span>.</span>
        <span>.</span>
      </div>
      <div className={styles.timerUnitWrapper}>
        <span className={styles.timerText}>minutes</span>
        <span className={styles.timerData}>{timerMinutes}</span>
      </div>
      {/* <div className={styles.separator}>
        <span>.</span>
        <span>.</span>
      </div>
      <div className={styles.timerUnitWrapper}>
        <span className={styles.timerText}>seconds</span>
        <span className={styles.timerData}>{timerSeconds}</span>
      </div> */}
    </div>
  );
};

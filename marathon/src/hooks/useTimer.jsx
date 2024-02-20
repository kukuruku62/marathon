import { useEffect, useState, useRef } from "react";

export const useTimer = ( dateAndTimeFirstEvent ) => {
  
  const [isReady, setIsReady] = useState(false);
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");

  let interval = useRef();

  function setTwoDigitsTime(data) {
    if (data < 10) {
      return String(data).padStart(2, "0");
    } else {
      return data;
    }
  }

  const startTimer = () => {
    const countdownDate = new Date(dateAndTimeFirstEvent).getTime();

    interval = setTimeout(() => {
      const currentTime = new Date().getTime();
      const differenceOfTime = countdownDate - currentTime;

      const days = setTwoDigitsTime(Math.floor(differenceOfTime / (1000 * 60 * 60 * 24)));
      const hours = setTwoDigitsTime(
        Math.floor((differenceOfTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const minutes = setTwoDigitsTime(
        Math.floor((differenceOfTime % (1000 * 60 * 60)) / (1000 * 60))
      );

      if (differenceOfTime < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setIsReady(true);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return { timerDays, timerHours, timerMinutes, isReady };
};

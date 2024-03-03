import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSchedule } from "../redux/listEventsSlice.js";
import { Schedule } from "../components/Schedule/Schedule.jsx";
import { About } from "../components/About/About.jsx";
import { Advertising } from "../components/Advertising/Advertising.jsx";
import { Timer } from "../components/Timer/Timer.jsx";


export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSchedule());
  }, [dispatch]);

  return (
    <>
      <Timer />
      <About />
      <Schedule />
      <Advertising />
    </>
  );
};

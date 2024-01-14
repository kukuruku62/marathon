import { Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchedule } from "./store/slices.js";

import {useDateEvents} from "./components/useDateEvents.js";
import { Schedule } from "./components/Schedule/Schedule.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Slider } from "./components/Slider/Slider.jsx";
import { Advertising } from "./components/Advertising/Advertising.jsx";


import "./index.css";




function App() {
  const dispatch = useDispatch();
  const dateOfNextEvent = useSelector((state) => state.events.dateOfNextEvent);
  const statusOfFetch = useSelector((state) => state.events.status);
  // const errorMessage = useSelector((state) => state.events.errorMessage);
  const listOfEvents = useSelector((state) => state.events.events);
  const {transformFormatOfDate, renderSeasonOfEvent} = useDateEvents();

    useEffect(() => {
      dispatch(fetchSchedule());
    }, [dispatch]);

  return (
    <>
      <Header />
      <Slider seasonOfNextEvent={renderSeasonOfEvent(dateOfNextEvent)} dateOfNextEvent={transformFormatOfDate(dateOfNextEvent)}/>
      <Schedule statusOfFetch={statusOfFetch} listOfEvents={listOfEvents}/>
      <Advertising />
      <Footer />
    </>
  );
}

export default App;

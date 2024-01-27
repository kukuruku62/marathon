import React from 'react'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchedule } from "../store/listEventsSlice.js";
import { useDateEvents } from "../components/useDateEvents.js";
import { Schedule } from '../components/Schedule/Schedule.jsx';
import { Slider } from "../components/Slider/Slider.jsx";
import { Advertising } from "../components/Advertising/Advertising.jsx";


export const Home = () => {
  const dispatch = useDispatch();
  const dateOfNextEvent = useSelector((state) => state.events.dateOfNextEvent);
  const statusOfFetch = useSelector((state) => state.events.status);
  const errorMessage = useSelector((state) => state.events.errorMessage);
  const listOfEvents = useSelector((state) => state.events.events);
  const listMainSponsors = useSelector((state) => state.events.listMainSponsors)
  const { transformFormatOfDate, renderSeasonOfEvent } = useDateEvents();

  useEffect(() => {
    dispatch(fetchSchedule());
  }, [dispatch]);

  return (
    <>
      <Slider
        seasonOfNextEvent={renderSeasonOfEvent(dateOfNextEvent)}
        dateOfNextEvent={transformFormatOfDate(dateOfNextEvent)}
      />
      <Schedule
        statusOfFetch={statusOfFetch}
        listOfEvents={listOfEvents}
        errorMessage={errorMessage}
      />
      <Advertising listMainSponsors={listMainSponsors}/>
    </>
  );
}
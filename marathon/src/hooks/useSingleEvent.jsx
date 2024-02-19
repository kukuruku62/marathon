import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchSchedule } from "../redux/listEventsSlice";

export const useSingleEvent = (id) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.events.status);
  const {
    _id,
    name,
    place,
    type,
    dateOfEvent,
    addDate,
    timeOfStartEvent,
    distances,
    measurement,
    participants,
    startpoint,
    registration,
    addRegistration,
    presentation,
    addPresentation,
    payments,
    addPayments,
    addCategories,
    categoriesFemale,
    categoriesMale,
    sponsorsEvent,
    addTimeStartEvent,
  } = useSelector((state) => state.events.singleEvent);

  useEffect(() => {
    dispatch(fetchSchedule(id));
  }, [dispatch, id]);

  return {
    status,
    _id,
    name,
    place,
    type,
    dateOfEvent,
    addDate,
    timeOfStartEvent,
    distances,
    measurement,
    participants,
    startpoint,
    registration,
    addRegistration,
    presentation,
    addPresentation,
    payments,
    addPayments,
    addCategories,
    categoriesFemale,
    categoriesMale,
    sponsorsEvent,
    addTimeStartEvent,
  };
};

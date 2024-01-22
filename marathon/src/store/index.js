import { configureStore } from "@reduxjs/toolkit";
import eventsReduces from './listEventsSlice'
import singleEventSlice from "./singleEventSlice";


export const store = configureStore({
  reducer: {
    events: eventsReduces,
    event: singleEventSlice
  }
})
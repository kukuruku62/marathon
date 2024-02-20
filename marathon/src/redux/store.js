import { configureStore } from "@reduxjs/toolkit";
import eventsSliceReducer from "./listEventsSlice";

export const store = configureStore({
  reducer: {
    events: eventsSliceReducer,
  },
});

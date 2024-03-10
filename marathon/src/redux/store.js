import { configureStore } from "@reduxjs/toolkit";
import eventsSliceReducer from "./listEventsSlice";
import { eventsAPI } from "./api";

export const store = configureStore({
  reducer: {
    events: eventsSliceReducer,
    [eventsAPI.reducerPath]: eventsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(eventsAPI.middleware),
});

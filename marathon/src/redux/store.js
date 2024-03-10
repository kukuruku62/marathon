import { configureStore } from "@reduxjs/toolkit";
import participantSliceReducer from "./participantSlice";
import { eventsAPI } from "./api";

export const store = configureStore({
  reducer: {
    events: participantSliceReducer,
    [eventsAPI.reducerPath]: eventsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(eventsAPI.middleware),
});

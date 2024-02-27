import { configureStore } from "@reduxjs/toolkit";
import eventsSliceReducer from "./listEventsSlice";
import imagesMainSponsorsSlice from "./mainSponsorsSlice"


export const store = configureStore({
  reducer: {
    events: eventsSliceReducer,
    imagesSponsors: imagesMainSponsorsSlice,
  },
});

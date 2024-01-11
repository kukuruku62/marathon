import { configureStore } from "@reduxjs/toolkit";
import eventsReduces from './slices'

export const store = configureStore({
  reducer: {
    events: eventsReduces,
  }
})
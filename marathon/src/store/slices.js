import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sortArrayOfEventsByDateAndTime } from "./sortfunc.js";

export const fetchSchedule = createAsyncThunk(
  "events/fetchSchedule",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("https://74ba3dbbf50fde17.mokky.dev/events");

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    startFirstEvent: null,
    status: null,
    errorMessage: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchedule.pending, (state) => {
        state.status = "loading";
        state.errorMessage = null;
      })
      .addCase(fetchSchedule.fulfilled, (state, action) => {
        state.status = "resolved";
        //filter fetched data by actual events and sort them by date and time
        state.events = action.payload
          .filter((elem) => Date.parse(elem.date + " " + elem.time) >= Date.now())
          .sort(sortArrayOfEventsByDateAndTime);
        state.startFirstEvent = state.events[0].date + " " + state.events[0].time;
      })
      .addCase(fetchSchedule.rejected, (state, action) => {
        state.status = "rejected";
        state.errorMessage = action.payload;
      });
  },
});

export default eventsSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sortArrayOfEventsByDateAndTime } from "../helpers/sortArrayByParams.js";

export const fetchSchedule = createAsyncThunk(
  "events/fetchSchedule",
  async function (id='', { rejectWithValue }) {
    try {
      // console.log(id)
      const response = await fetch(`https://74ba3dbbf50fde17.mokky.dev/events/${id}`);

      // if (!response.ok) {
      //   throw new Error ('ssdfsde')
      // }

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
    firstEvent: null,
    startFirstEvent: null,
    dateOfNextEvent: null,
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
        // console.log(action.payload)
        if (Array.isArray(action.payload)) {
            state.events = action.payload
            .filter((elem) => Date.parse(elem.date + " " + elem.time) >= Date.now())
            .sort(sortArrayOfEventsByDateAndTime);
            console.log(state.events)
          state.startFirstEvent = state.events[0].date + " " + state.events[0].time;
          state.dateOfNextEvent = state.events[0].date;
          state.firstEvent = state.events[0];
        } else {
          state.events = action.payload
          // console.log('else', state.events)
        }
        //filter fetched data by actual events and sort them by date and time
        
      })
      .addCase(fetchSchedule.rejected, (state, action) => {
        state.status = "rejected";
        state.errorMessage = action.payload;
      });
  },
});

export default eventsSlice.reducer;

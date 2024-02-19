import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sortArrayOfEventsByDateAndTime } from "../helpers/sortArrayByParams.js";

export const fetchSchedule = createAsyncThunk(
  // RENAME sCHEDULE TO DATA
  "events/fetchSchedule",
  async function (id = "", thunkAPI) {
    try {
      const response = await fetch(`http://localhost:3002/api/events/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    singleEvent: "",
    listEvents: [],
    listMainSponsors: [],
    listParticipants: [],
    dateAndTimeFirstEvent: null,
    firstEvent: null,
    dateOfNextEvent: null,
    status: null,
    fetchErrorMessage: null,
    registeredParticipant: null,
  },
  reducers: {
    addParticipant(state, action) {
      state.registeredParticipant = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchedule.pending, (state) => {
        state.status = "loading";
        state.fetchErrorMessage = null;
      })
      .addCase(fetchSchedule.fulfilled, (state, action) => {
        state.status = "resolved";
        state.fetchErrorMessage = null;
        if (Array.isArray(action.payload)) {
          state.listEvents = action.payload.sort(sortArrayOfEventsByDateAndTime);
          state.firstEvent = state.listEvents[0];
          state.dateAndTimeFirstEvent = state.listEvents[0].dateOfEvent + " " + state.listEvents[0].timeOfStartEvent;
          state.dateOfNextEvent = new Date(state.listEvents[0].dateOfEvent).toLocaleDateString();

          // state.listMainSponsors = action.payload
          //   .filter((el) => el.mainSponsors)
          //   .flatMap((elem) => elem.mainSponsors);
        } else {
          state.listEvents = [action.payload];
          state.firstEvent = action.payload;
          state.dateAndTimeFirstEvent = action.payload.dateOfEvent + " " + action.payload.timeOfStartEvent;
          state.dateOfNextEvent = new Date(action.payload.dateOfEvent).toLocaleDateString();

          state.singleEvent = action.payload;
        }
      })
      .addCase(fetchSchedule.rejected, (state, action) => {
        state.status = "rejected";
        state.fetchErrorMessage = action.payload;
      });
  },
});

export const { addParticipant } = eventsSlice.actions;
export default eventsSlice.reducer;

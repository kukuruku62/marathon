import { createSlice } from "@reduxjs/toolkit";


const participantSlice = createSlice({
  name: "events",
  initialState: {
    registeredParticipant: null,
  },
  reducers: {
    addParticipant(state, action) {
      state.registeredParticipant = action.payload;
    },
  },
});

export const { addParticipant } = participantSlice.actions;
export default participantSlice.reducer;

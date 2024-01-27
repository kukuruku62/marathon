import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSingleEvent = createAsyncThunk(
  "event/fetchSingleEvent",
  async function (id, thunkApi) {
    try {
      const response = await fetch(`https://74ba3dbbf50fde17.mokky.dev/events/${id}`);

      const data = response.json();
      return data;
    } catch (error) {}
  }
);

const singleEventSlice = createSlice({
  name: "event",
  initialState: {
    status: null,
    error: null,
    event: "",
    placeEvent: "",
    dateEvent: "",
    timeEvent: "",
    timeEvent: "",
    coordinatesEvent: "",
    categories: "",
    addCategories: null,
    priceEvent: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSingleEvent.fulfilled, (state, action) => {
      state.status = 'resolved'
      state.event = action.payload
      state.placeEvent = action.payload.place
      // state.categoriesSex = Object.keys(action.payload.categories)
      // // console.log(action.payload.categories.map((el) => Object.keys(el)).flat())
      // console.log(Array.isArray(state.categoriesSex))
      // state.categories = Object.values(action.payload.categories).map((elem) => Object.keys(elem))
      state.categories = action.payload.categories
      // state.addCategories = action.payload.addCategories
      console.log(action.payload.sponsors)
    })
  }
});

export default singleEventSlice.reducer

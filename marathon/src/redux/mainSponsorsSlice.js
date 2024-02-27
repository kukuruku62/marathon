import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchImagesMainSponsors = createAsyncThunk(
  "imagesMainSponsors/fetchImagesMainSponsors",
  async function (_, thunkAPI) {
    try {
      const response = await fetch('http://localhost:3002/api/events/mainsponsors');
      const imagesData = await response.json();
      return imagesData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

const imagesMainSponsorsSlice = createSlice ({
  name: "imagesMainSponsors",
  initialState: {
    fetchStatus: null,
    fetchErrorMsg: null,
    arrImages: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImagesMainSponsors.pending, (state) => {
      state.fetchStatus = "loading",
      state.fetchErrorMsg = null
      })
      .addCase(fetchImagesMainSponsors.fulfilled, (state, action) => {
        state.fetchStatus = "resolved",
        state.fetchErrorMsg = null,
        state.arrImages = action.payload
      })
      .addCase(fetchImagesMainSponsors.rejected, (state) => {
        state.status = "rejected";
        state.fetchErrorMsg = action.payload;
      })
  }
})

export default imagesMainSponsorsSlice.reducer;
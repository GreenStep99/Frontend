import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./instance";

export const __GetLanks = createAsyncThunk(
  "rank/mission/point/daily/__GetLanks",
  async (payload, thunkAPI) => {
    try {
      const response = await instance.get("rank/mission/point/daily");
      const data = response.data.data;
      return data;
    } catch (error) {}
  }
);

const ranksList = createSlice({
  name: "ranks",
  initialState: {
    loaded: false,
    ranks: [],
  },
  reducers: {},
  extraReducers: {
    [__GetLanks.fulfilled]: (state, action) => {
      state.loaded = true;
      state.ranks = action.payload;
    },
  },
});

export const { signInAction } = ranksList.actions;
export default ranksList.reducer;

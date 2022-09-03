import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import instance from './instance';

export const __GetTodaymission = createAsyncThunk(
  '/missions/today-lists/__GetTodaymission',
  async () => {
    try {
      const response = await instance.get(
        'http://54.180.30.74/missions/today-lists'
      );
      const data = response.data.data;
      // console.log(data);
      return data;
    } catch (error) {}
  }
);

export const __GetDailymission = createAsyncThunk(
  '/missions/daily-lists/__GetDailymission',
  async () => {
    try {
      const response = await instance.get(
        'http://54.180.30.74/missions/daily-lists'
      );
      const data = response.data.data;
      return data;
    } catch (error) {}
  }
);

// export const __GetWeeklymission = createAsyncThunk(
//   "/missions/weekly-lists/__GetWeeklymission",
//   async () => {
//     try {
//       const response = await instance.get(
//         "http://54.180.30.74/missions/weekly-lists"
//       );
//       const data = response.data.data;
//       // console.log(data);
//       return data;
//     } catch (error) {}
//   }
// );

const missionItem = createSlice({
  name: 'mission',
  initialState: {
    loaded: false,
    challenge: [],
    daily: [],
    weekly: [],
  },
  reducers: {},
  extraReducers: {
    [__GetTodaymission.fulfilled]: (state, action) => {
      state.loaded = true;
      state.challenge = action.payload;
    },
    [__GetDailymission.fulfilled]: (state, action) => {
      state.loaded = true;
      state.daily = action.payload;
    },
  },
});

export const { signInAction } = missionItem.actions;
export default missionItem.reducer;

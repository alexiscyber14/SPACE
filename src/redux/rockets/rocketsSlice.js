import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v4/rockets');
  const rockets = Object.entries(response.data)
    .flatMap(([id, rocket]) => ({ ...rocket, id }));
  return rockets;
});

const initialState = [];

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const reservedRocketId = action.payload;
      const reservedRocketName = action.payload;
      const newState = state.map((rocket) => {
        if (rocket.id !== reservedRocketId && rocket.name !== reservedRocketName) return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
    },
    cancelReserve: (state, action) => {
      const canceledRocketId = action.payload;
      const newState = state.map((rocket) => {
        if (rocket.id !== canceledRocketId) return rocket;
        return { ...rocket, reserved: false };
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => action.payload);
  },
});

export const { reserveRocket, cancelReserve } = rocketsSlice.actions;

export default rocketsSlice.reducer;

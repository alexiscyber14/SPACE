import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk('books/fetchBooks', async () => {
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
    reserverRocket: (state, action) => {
      const rocketIndex = state.findIndex((rocket) => rocket.id === action.payload);
      if (rocketIndex !== -1) {
        const newRockets = [...state];
        newRockets[rocketIndex] = { ...newRockets[rocketIndex], reserved: true };
        return newRockets;
      }
      return state;
    },
    cancelReserve: (state, action) => {
      const rocketIndex = state.findIndex((rocket) => rocket.id === action.payload);
      if (rocketIndex !== -1) {
        const newRockets = [...state];
        newRockets[rocketIndex] = { ...newRockets[rocketIndex], reserved: false };
        return newRockets;
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => action.payload);
  },
});

export const { reserverRocket, cancelReserve, updateMission } = rocketsSlice.actions;

export default rocketsSlice.reducer;

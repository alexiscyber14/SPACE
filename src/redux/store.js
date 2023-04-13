import { configureStore } from '@reduxjs/toolkit';
import { missionsReducer } from './missions/missions';
import rocketsReducer from './rockets/rocketsSlice';

export const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import genelReducer from './slices/genelSlice'

export const store = configureStore({
  reducer: {
    genelState: genelReducer,
  },
});

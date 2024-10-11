import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice'; // Correct path to your cartSlice file

export const store = configureStore({
  reducer: {
    cartInfo: cartSlice, // Use cartSlice as the cartInfo reducer
  },
});

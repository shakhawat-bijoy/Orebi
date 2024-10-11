import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartValue: [], // Initialize as an array to hold multiple products
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    allCartInfo: (state, action) => {
      state.cartValue = action.payload;
    },
    addToCart: (state, action) => {
      const itemInCart = state.cartValue.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity; // Update quantity if product already exists
      } else {
        state.cartValue.push({ ...action.payload, quantity: 1 }); // Add new product with default quantity 1
      }
    },
    removeFromCart: (state, action) => {
      state.cartValue = state.cartValue.filter(item => item.id !== action.payload.id); // Remove product by ID
    },
    updateQuantity: (state, action) => {
      const itemInCart = state.cartValue.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity = action.payload.quantity; // Update the quantity of a specific product
      }
    }
  },
});

export const { allCartInfo, addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;

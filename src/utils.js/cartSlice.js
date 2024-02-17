import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      // mutating the state - we are basically modifying the state itself
      // Redux Toolkit uses immer library behind the scenes
      state.items.push(action.payload);
    },

    removeItem: (state) => {
      state.items.pop();
    },

    clearCart: (state) => {
      state.items.length = 0; // make state = []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; // exporting actions
export default cartSlice.reducer; // exporting reducer

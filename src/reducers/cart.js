import { createSlice } from '@reduxjs/toolkit';

const cartInitialData = {
    cart : {},
    error : {},
    loading: true
};

const cartSlice = createSlice({
  name: 'cartData',
  initialState: cartInitialData,
  reducers: {
    cartData: (state, action) => { 
      state.cart = action.payload.cart;
      state.error = action.payload.error;
      state.loading = false;
    },
  }
})

const { actions, reducer } = cartSlice;
export const cartAction = actions;
export default reducer;
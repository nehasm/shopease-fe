import { createSlice } from '@reduxjs/toolkit';

const cartInitialData = {
    cart : {},
    loading: true,
    error: {},
    isError: false
};

const cartSlice = createSlice({
  name: 'cartData',
  initialState: cartInitialData,
  reducers: {
    cartData: (state, action) => { 
      state.cart = action.payload.cart;
      state.loading = false;
      state.error = {};
      state.isError = false;
    },
    cartDataSetError: (state,action) => {
      state.cart = {};
      state.loading = false;
      state.error = action.payload.error;
      state.isError = true;
    },
    cartDataError: (state) => {
      state.cart = state.cart;
      state.loading = false;
      state.error = {};
      state.loading = false;
    },
    resetCartDataSetError: (state) => {
      state.cart = {};
      state.loading = true;
      state.error = {};
      state.isError = false;
    },

  }
})

const { actions, reducer } = cartSlice;
export const cartAction = actions;
export default reducer;
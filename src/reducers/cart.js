import { createSlice } from '@reduxjs/toolkit';

const cartInitialData = {
    cart : {},
    loading: false
};

const cartSlice = createSlice({
  name: 'cartData',
  initialState: cartInitialData,
  reducers: {
    cartDataLoading : (state) => {
      state.cart = state.cart;
      state.loading = true;
    },
    cartData: (state, action) => { 
      state.cart = action.payload.cart;
      state.loading = false;
    },
    cartDataError: (state) => {
      state.cart = state.cart;
      state.loading = false;
    }
  }
})

const { actions, reducer } = cartSlice;
export const cartAction = actions;
export default reducer;
import { createSlice } from '@reduxjs/toolkit';

const orderInitialData = {
    orders : {},
    error : {},
    loading: true,
    isError : false
};

const orderSlice = createSlice({
  name: 'orderData',
  initialState: orderInitialData,
  reducers: {
    orderData: (state, action) => { 
      state.orders = action.payload.orders;
      state.error = {};
      state.loading = false;
      state.isError = false;
    },
    orderDataError : (state,action) => {
      state.orders = {};
      state.error = action.payload.error;
      state.loading = false;
      state.isError = true
    },
    resetOrderDataError : (state,action) => {
      state.orders = {};
      state.error = {};
      state.loading = true;
      state.isError = false
    }
  }
})

const { actions, reducer } = orderSlice;
export const orderAction = actions;
export default reducer;
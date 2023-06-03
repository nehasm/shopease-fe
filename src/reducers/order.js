import { createSlice } from '@reduxjs/toolkit';

const orderInitialData = {
    orders : {},
    error : {},
    loading: true
};

const orderSlice = createSlice({
  name: 'orderData',
  initialState: orderInitialData,
  reducers: {
    orderData: (state, action) => { 
      state.orders = action.payload.orders;
      state.error = action.payload.error;
      state.loading = false;
    },
  }
})

const { actions, reducer } = orderSlice;
export const orderAction = actions;
export default reducer;
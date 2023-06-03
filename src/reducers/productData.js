import { createSlice } from '@reduxjs/toolkit';

const productInitialData = {
    product : {},
    isLoading: true,
    isError: false
};

const productSlice = createSlice({
  name: 'productData',
  initialState: productInitialData,
  reducers: {
    productData: (state, action) => { 
      state.product = action.payload.product;
      state.isLoading = false;
      state.isError = action.payload.isError;
    }
  }
})

const { actions, reducer } = productSlice;
export const productAction = actions;
export default reducer;
import { createSlice } from '@reduxjs/toolkit';

const productInitialData = {
    product : {},
    isLoading: true,
    isError : false,
    error : {}
};

const productSlice = createSlice({
  name: 'productData',
  initialState: productInitialData,
  reducers: {
    productData: (state, action) => { 
      state.product = action.payload.product;
      state.error = {};
      state.isLoading = false;
      state.isError = false
    },
    productDataError: (state,action) => {
      state.product = {};
      state.isLoading = false;
      state.error = action.payload.error;
      state.isError = true
    },
    resetErrorState: (state,action) => {
      state.product = {};
      state.isLoading = true;
      state.error = {}
      state.isError = false
    }
  }
})

const { actions, reducer } = productSlice;
export const productAction = actions;
export default reducer;
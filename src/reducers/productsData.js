import { createSlice } from '@reduxjs/toolkit';

const productsInitialData = {
    products : [],
    isLoading: true,
    isError: false,
    error: {}
};

const productsSlice = createSlice({
  name: 'productsData',
  initialState: productsInitialData,
  reducers: {
    productsData: (state, action) => { 
      state.itemPerPage = action.payload.itemPerPage;
      state.totalProductCount = action.payload.totalProductCount;
      state.totalProductCountAfterFilter = action.payload.totalProductCountAfterFilter;
      state.products = action.payload.products;
      state.isLoading = false;
      state.isError = false;
      state.error = {}
    },
    productsDataError : (state,action) => {
      state.products = {};
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload.error;
    },
    resetProductsDataError : (state) => {
      state.products = {};
      state.isLoading = true;
      state.isError = false;
      state.error = {};
    }
  }
})

const { actions, reducer } = productsSlice;
export const productsAction = actions;
export default reducer;
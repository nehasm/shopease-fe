import { createSlice } from '@reduxjs/toolkit';

const productsInitialData = {
    products : [],
    isLoading: true,
    isError: false
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
      state.isError = action.payload.isError;
    }
  }
})

const { actions, reducer } = productsSlice;
export const productsAction = actions;
export default reducer;
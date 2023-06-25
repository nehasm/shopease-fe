import { createSlice } from '@reduxjs/toolkit';

const userInitialData = {
    user : {},
    error : {},
    loading: true,
    isError: false,
    isAuthenticate : false
};

const userSlice = createSlice({
  name: 'userData',
  initialState: userInitialData,
  reducers: {
    userData: (state, action) => { 
      state.user = action.payload.user;
      state.error = {};
      state.loading = false;
      state.isError = false;
      state.isAuthenticate = true
    },
    userDataError: (state,action) => {
      state.user = {}
      state.error = action.payload.error;
      state.loading = false;
      state.isError = true;
      state.isAuthenticate = false
    },
    resetUserError : (state) => {
      state.user = {};
      state.error = {};
      state.loading = true;
      state.isError = false;
      state.isAuthenticate = false
    },
  }
})

const { actions, reducer } = userSlice;
export const userAction = actions;
export default reducer;
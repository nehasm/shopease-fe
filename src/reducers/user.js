import { createSlice } from '@reduxjs/toolkit';

const userInitialData = {
    user : {},
    error : {},
    loading: true
};

const userSlice = createSlice({
  name: 'userData',
  initialState: userInitialData,
  reducers: {
    userData: (state, action) => { 
      state.user = action.payload.user;
      state.error = action.payload.error;
      state.loading = false;
    },
    onlyUpdateError: (state,action) => {
      state.user = state.user;
      state.error = action.payload;
      state.loading = false;
    }
  }
})

const { actions, reducer } = userSlice;
export const userAction = actions;
export default reducer;
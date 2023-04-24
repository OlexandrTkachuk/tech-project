import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, changeUserState } from './operatons';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      // fetchALl
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.rejected, handleRejected)
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      // changeInfo
      .addCase(changeUserState.pending, handlePending)
      .addCase(changeUserState.rejected, handleRejected)
      .addCase(changeUserState.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const usersReducer = usersSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://644651b50431e885f00ebcc7.mockapi.io/users';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/users?page=${page}&limit=3`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeUserState = createAsyncThunk(
  'users/changeInfo',

  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${user.id}`, {
        ...user,
        ifFollowing: !user.isFollowing,
        followers: user.isFollowing
          ? (user.followers -= 1)
          : (user.folloers += 1),
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

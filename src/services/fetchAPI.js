import axios from 'axios';

axios.defaults.baseURL = 'https://644651b50431e885f00ebcc7.mockapi.io/users/';
const LIMIT_PER_PAGE = 3;

export const fetchUsers = async (page, filter) => {
  let queries;

  if (filter.value === 'all') {
    queries = '';
  } else if (filter.value === 'follow') {
    queries = `isFollowing=${false}`;
  } else if (filter.value === 'following') {
    queries = `isFollowing=${true}`;
  }

  try {
    const response = await axios.get(
      `/users?${queries}&page=${page}&limit=${LIMIT_PER_PAGE}`
    );

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchfilteredUsers = async filter => {
  let queries;

  if (filter.value === 'all') {
    queries = '';
  } else if (filter.value === 'follow') {
    queries = `isFollowing=${false}`;
  } else if (filter.value === 'following') {
    queries = `isFollowing=${true}`;
  }

  try {
    const response = await axios.get(`/users?${queries}`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUserInfo = async user => {
  try {
    const response = await axios.put(`/users/${user.id}`, {
      ...user,
      isFollowing: !user.isFollowing,
      followers: user.isFollowing
        ? (user.followers -= 1)
        : (user.followers += 1),
    });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

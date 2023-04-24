import axios from 'axios';

export const fetchAllUsers = async page => {
  const response = await axios.get(
    `https://644651b50431e885f00ebcc7.mockapi.io/users/users?page=${page}&limit=3`
  );

  return response.data;
};

export const switchUserInfo = async user => {
  const response = await axios.put(
    `https://644651b50431e885f00ebcc7.mockapi.io/users/users/${user.id}`,
    {
      ...user,
      isFolloing: !user.isFolloing,
      followers: user.isFolloing
        ? (user.followers -= 1)
        : (user.followers += 1),
    }
  );

  return response.data;
};

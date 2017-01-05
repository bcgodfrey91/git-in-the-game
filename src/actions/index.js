const types = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  USERNAME: 'USERNAME'
};

export const loginUser = () => {
  return {
    type: 'LOGIN',
    data: true
  };
};

export const logoutUser = () => {
  return {
    type: types.LOGOUT,
    data: false
  };
};

export const submitUserName = (username) => {
  console.log('actions: ', username)
  return {
    type: types.USERNAME,
    username: username
  };
};

export const setFavorite = (payload) => {
  return {
    type: "SET_FAVORITE",
    payload: payload,
  };
};

export const deleteFavorite = (payload) => {
  return {
    type: "DELETE_FAVORITE",
    payload: payload,
  };
};

export const loginRequest = (payload) => {
  return {
    type: "LOGIN_REQUEST",
    payload: payload,
  };
};

export const logOutRequest = (payload) => {
  return {
    type: "LOGOUT_REQUEST",
    payload: payload,
  };
};

export const registerRequest = (payload) => {
  return {
    type: "REGISTER_REQUEST",
    payload: payload,
  };
};

export const getVideoSource = (payload) => {
  return {
    type: "GET_VIDEO_SOURCE",
    payload: payload,
  };
};

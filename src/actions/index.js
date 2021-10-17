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

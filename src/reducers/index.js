const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
      break;

    case "DELETE_FAVORITE":
      return {
        ...state,
        mylist: state.mylist.filter((items) => {
          return items.id !== action.payload;
        }),
      };
      break;

    case "LOGIN_REQUEST":
      return {
        ...state,
        user: [action.payload],
      };
      break;

    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: [action.payload],
      };
      break;

    case "REGISTER_REQUEST":
      return {
        ...state,
        user: [action.payload],
      };

    case "GET_VIDEO_SOURCE":
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    default:
      return state;
  }
};

export default reducer;

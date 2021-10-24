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
    default:
      return state;
  }
};

export default reducer;

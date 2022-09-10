export const productReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "SEARCH_FILTER":
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

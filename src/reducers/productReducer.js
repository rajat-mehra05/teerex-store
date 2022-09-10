export const productReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "FILTER_BY_COLOR":
      return {
        ...state,
        filterByColor: [...state.filterByColor, action.payload],
      };
    case "FILTER_BY_GENDER":
      return {
        ...state,
        filterByGender: [...state.filterByGender, action.payload],
      };
    case "FILTER_BY_PRICE":
      return { ...state, filterByPrice: action.payload };
    case "FILTER_BY_TYPE":
      return {
        ...state,
        filterByType: [...state.filterByType, action.payload],
      };
    case "CLEAR_ALL_FILTERS":
      return {
        filterByColor: [],
        filterByGender: [],
        filterByPrice: [],
        filterByType: [],
      };

    case "SEARCH_FILTER":
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      return state;
  }
};

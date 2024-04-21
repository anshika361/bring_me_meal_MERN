const initialState = [];
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return state; // No change when getting all products
    case "SET_ALL_PRODUCTS":
      return action.products; // Set products when receiving new data
    default:
      return state; // Default case returns the current state
  }
};

export default productReducer;

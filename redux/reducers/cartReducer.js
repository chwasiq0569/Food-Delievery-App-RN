const initialState = {
  selectedItems: { items: [], restaurantName: "" },
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newST = {
        ...state,
        selectedItems: {
          items: [...items, action.payload],
          restaurantName: action.payload.restaurantName,
        },
      };
      console.log("NEW STATE", newST);
      return {
        ...state,
        selectedItems: {
          items: [...items, action.payload],
          restaurantName: action.payload.restaurantName,
        },
      };
    }
    default:
      return state;
  }
};

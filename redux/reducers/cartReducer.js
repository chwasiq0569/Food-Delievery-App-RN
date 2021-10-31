const initialState = {
  selectedItems: { items: [], restaurantName: "" },
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (action.payload.checkboxValue) {
        console.log("ADD TO CART");
        let newST = {
          ...state,
          selectedItems: {
            items: [...state?.selectedItems?.items, action.payload],
            restaurantName: action.payload.restaurantName,
          },
        };
        return newST;
      } else {
        console.log("REMOVE FROM CART");
        let newST = {
          ...state,
          selectedItems: {
            items: state?.selectedItems?.items.filter(
              (item) => item?.title !== action.payload.title
            ),
            restaurantName: action.payload.restaurantName,
          },
        };
        return newST;
      }
    }
    default:
      return state;
  }
};

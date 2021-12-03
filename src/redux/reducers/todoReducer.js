const initialState = {
  items: ["one", "two", "three"],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        items: state.items.concat(action.payload),
      };
    case "REMOVE_TODO":
      return {
        items: state.items.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
}

export default todoReducer;

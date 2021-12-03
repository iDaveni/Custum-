const initialState = [
  { id: 1, name: "Вася", age: "15" },
  { id: 2, name: "Паша", age: "20" },
  { id: 3, name: "Маша", age: "25" },
  { id: 4, name: "Даша", age: "30" },
  { id: 5, name: "Дима", age: "35" },
  { id: 6, name: "Артем", age: "40" },
  { id: 7, name: "Ваня", age: "45" },
  { id: 8, name: "Влад", age: "50" },
];
function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "REMOVE_USERS":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

export default usersReducer;

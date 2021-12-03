export function addTodo(name) {
  return {
    type: "ADD_TODO",
    payload: name,
  };
}

export function removeTodo(name) {
  return {
    type: "REMOVE_TODO",
    payload: name,
  };
}

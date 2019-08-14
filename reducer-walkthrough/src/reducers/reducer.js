export const initialState = {
  todos: []
};

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { item: action.payload, completed: false, id: Date.now() }
        ]
      };
    case "DELETE_TODO":
      console.log("state :", state);
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id != action.payload)
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case "CLEAR_TODOS":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};

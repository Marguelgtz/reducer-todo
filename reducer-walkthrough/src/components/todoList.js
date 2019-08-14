import React, { useState, useReducer } from "react";
import { initialState, toDoReducer } from "../reducers/reducer";

import Todo from "./todo";

const TodoList = () => {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const [input, setInput] = useState("");

  const handleInput = e => setInput(e.target.value);

  const addTodo = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };
  console.log("todo list state", state);
  return (
    <div>
      <form onSubmit={addTodo}>
        <input onChange={handleInput} value={input} type="text" />
        <button>Add To do </button>
      </form>
      <div>
        {state.todos.map(todo => (
          <Todo
            toggle={() =>
              dispatch({ type: "TOGGLE_COMPLETE", payload: todo.id })
            }
            delete={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>

      <button onClick={() => dispatch({ type: "CLEAR_TODOS" })}>
        Clear Todos
      </button>
    </div>
  );
};

export default TodoList;

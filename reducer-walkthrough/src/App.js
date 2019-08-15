import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

//components
import TodoForm from "./components/todoForm";
import TodoList from "./components/TodoList";

//reducer
import { initialState, reducer } from "./reducer/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("reducer state", state);

  const addNew = todo => {
    console.log("fire");
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const toggle = id => {
    console.log("toggle fire");
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  };

  const clear = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  const deleteTodo = id => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <div className="App">
      <TodoForm addTodo={addNew} />
      <TodoList
        items={state.todos}
        toggle={toggle}
        clear={clear}
        delete={deleteTodo}
      />
    </div>
  );
}

export default App;

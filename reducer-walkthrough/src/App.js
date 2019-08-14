import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Todo from "./components/todo";
import TodoList from "./components/todoList";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
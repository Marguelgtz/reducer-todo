import React from "react";
import "../App.css";
const Todo = props => {
  console.log("todo", props);
  return (
    <div>
      <h3
        className={props.todo.completed ? "strike" : null}
        onClick={() => props.toggle(props.todo.id)}
      >
        {props.todo.item}
      </h3>
      <div>
        <button onClick={() => props.delete(props.todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;

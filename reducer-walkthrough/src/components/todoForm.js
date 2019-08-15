import React, { useState } from "react";

const TodoForm = props => {
  const [input, setInput] = useState({
    item: "",
    completed: false,
    id: null
  });

  const handleInput = e => {
    setInput({
      ...input,
      item: e.target.value,
      id: Date.now()
    });
  };

  console.log("form input", input);

  const addTodo = e => {
    e.preventDefault();
    props.addTodo(input);
    setInput({
      item: "",
      completed: false,
      id: null
    });
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={input.item} onChange={handleInput} type="text" />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;

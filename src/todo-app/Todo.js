import React from "react";
import "./Todo.css";

const Todo = ({ todo, id, removeTodo }) => {
  return (
    <div className="Todo">
      {todo}{" "}
      <button onClick={removeTodo} data-testid={`todo-btn-${id}`}>
        x
      </button>
    </div>
  );
};

export default Todo;

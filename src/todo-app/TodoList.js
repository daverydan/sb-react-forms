import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const INITIAL_STATE = ["clean room", "eat lunch", "take nap"];
  const [todos, setTodos] = useState(INITIAL_STATE);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const removeTodo = (idx) => {
    const newTodos = [...todos]; // clone
    newTodos.splice(idx, 1); // remove
    setTodos(newTodos); // set
  };
  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <hr />
      <div className="TodoList" data-testid="todo-list">
        {todos.map((todo, idx) => (
          <Todo key={idx} id={idx} todo={todo} removeTodo={() => removeTodo(idx)} />
        ))}
      </div>
    </>
  );
};

export default TodoList;

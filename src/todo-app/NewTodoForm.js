import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = { todo: "" };
  const [form, setForm] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(form.todo);
    setForm(INITIAL_STATE);
  };
  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="todo">Add Task</label>
      <input
        type="text"
        name="todo"
        id="todo"
        value={form.todo}
        onChange={handleChange}
        autoFocus
      />
      <button>Add</button>
    </form>
  );
};

export default NewTodoForm;

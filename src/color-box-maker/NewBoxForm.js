import React, { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = {
    bgColor: "#F50000",
    height: 50,
    width: 50,
  };
  const [form, setForm] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(form.bgColor, form.height, form.width);
    setForm(INITIAL_STATE);
  };

  return (
    <div className="NewBoxForm">
      <h1>Color Box Maker</h1>
      <form onSubmit={handleSubmit}>
        <div className="control">
          <label htmlFor="bgColor">Background Color:</label>
          <input
            type="color"
            name="bgColor"
            id="bgColor"
            value={form.bgColor}
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <label htmlFor="height">Height:</label>
          <input
            type="number"
            name="height"
            id="height"
            value={form.height}
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <label htmlFor="width">Width:</label>
          <input
            type="number"
            name="width"
            id="width"
            value={form.width}
            onChange={handleChange}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewBoxForm;

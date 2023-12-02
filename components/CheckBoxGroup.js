// components/CheckBoxGroup.js
import React from "react";

const CheckBoxGroup = ({ choices, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.id, event.target.checked);
  };

  return (
    <div>
      {choices.map((choice) => (
        <div key={choice.id}>
          <input
            type="checkbox"
            id={choice.id}
            name={choice.name}
            value={choice.id}
            checked={choice.checked}
            onChange={handleChange}
          />
          <label htmlFor={choice.id}>{choice.name}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxGroup;

// components/CheckBoxGroup.js
import React, { useEffect } from "react";

const CheckBoxGroup = ({ category, choices, onChange }) => {
  const handleChange = (event) => {
    const choice = choices.find((c) => c.id === event.target.id);
    onChange(event, {
      id: event.target.value,
      isChecked: event.target.checked,
      mainComponentID: choice.mainComponentID || null,
      mainComponentCategory: choice.mainComponentCategory || null,
    });
  };

  return (
    <div>
      {choices.map((choice) => (
        <div key={`${category}-${choice.id}`}>
          <input
            type="checkbox"
            id={choice.id}
            name={choice.name}
            value={choice.id}
            checked={choice.checked}
            onChange={handleChange}
          />
          <label htmlFor={choice.id}>
            {choice.name}
            {choice.price !== undefined && choice.price !== null
              ? ` - $${choice.price}`
              : ""}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxGroup;

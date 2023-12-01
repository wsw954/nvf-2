// components/CheckBoxGroup.js
import React from "react";

const CheckBoxGroup = ({ choices, onChange }) => {
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
            onChange={onChange} // You can handle change to update the state or do something else
          />
          <label htmlFor={choice.id}>{choice.name}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxGroup;

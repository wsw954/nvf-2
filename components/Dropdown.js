// components/Dropdown.js
import React from "react";

const Dropdown = ({ id, value, onChange, options, disabled }) => {
  return (
    <select id={id} value={value} onChange={onChange} disabled={disabled}>
      <option value="">{`Select a ${
        id.charAt(0).toUpperCase() + id.slice(1)
      }`}</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

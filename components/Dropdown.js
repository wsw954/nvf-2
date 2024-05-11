// components/Dropdown.js
import React, { useEffect } from "react";

const formatPlaceholder = (id) => {
  // Split the ID based on camel case, capitalize each word, and join with spaces
  return id
    .replace(/([A-Z])/g, " $1") // Insert space before capital letters
    .split(" ") // Split into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
    .join(" ");
};

const Dropdown = ({ id, value, onChange, options, disabled }) => {
  useEffect(() => {
    // If there's only one option and it's not already selected, automatically select it
    if (options.length === 1 && value !== options[0].id) {
      onChange({ target: { value: options[0].id } });
    }
  }, [options, value, onChange]);

  return (
    <select id={id} value={value} onChange={onChange} disabled={disabled}>
      {value ? null : <option value="">Select {formatPlaceholder(id)}</option>}
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}{" "}
          {option.price !== undefined && option.price !== null
            ? ` - $${option.price}`
            : ""}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

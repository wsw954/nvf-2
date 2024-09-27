// components/Dropdown.js
import React, { useEffect, useState } from "react";

const formatPlaceholder = (id) => {
  return id
    .replace(/([A-Z])/g, " $1")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const Dropdown = ({ id, value, onChange, options, disabled }) => {
  const [prevValue, setPrevValue] = useState(null);

  useEffect(() => {
    if (options.length === 1 && value !== options[0].id) {
      setPrevValue(value);
      onChange(
        { target: { value: options[0].id } },
        { id: options[0].id, isChecked: true, prevValue: value }
      );
    }
  }, [options, value, onChange]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    const selectedOption = options.find((option) => option.id === newValue);
    onChange(event, {
      id: newValue,
      isChecked: true,
      component: selectedOption.component || null,
      dependency: selectedOption.dependency || null,
      prevValue: prevValue,
    });
    setPrevValue(newValue);
  };

  return (
    <select id={id} value={value} onChange={handleChange} disabled={disabled}>
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

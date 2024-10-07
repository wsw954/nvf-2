// components/Dropdown.js
import React, { useEffect, useState, useRef } from "react";

const formatPlaceholder = (id) => {
  return id
    .replace(/([A-Z])/g, " $1")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const Dropdown = ({ id, value, onChange, options, disabled }) => {
  const [currentValue, setCurrentValue] = useState(value || null);
  const prevValueRef = useRef(null); // Ref to store previous value

  useEffect(() => {
    prevValueRef.current = currentValue; // Update ref with the current value after each render
  }, [currentValue]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    const selectedOption = options.find((option) => option.id === newValue);

    onChange(event, {
      id: newValue,
      isChecked: true,
      component: selectedOption?.component || null,
      dependency: selectedOption?.dependency || null,
      prevValue: prevValueRef.current, // Use the ref for the previous value
    });

    setCurrentValue(newValue); // Update currentValue
  };

  return (
    <select id={id} value={value} onChange={handleChange} disabled={disabled}>
      {!currentValue && (
        <option value="">Select {formatPlaceholder(id)}</option>
      )}
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

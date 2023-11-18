// pages/index.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMake } from "/features/vehicle/vehicleSlice";
import makeModelData from "/oemData/makeModelData";

const IndexPage = () => {
  const dispatch = useDispatch();
  const { selectedMake, models } = useSelector((state) => state.vehicle);

  const handleMakeChange = (event) => {
    dispatch(selectMake(event.target.value));
  };

  return (
    <div>
      <h1>Vehicle Configuration</h1>
      <form>
        <div>
          <label htmlFor="make">Make:</label>
          <select id="make" value={selectedMake} onChange={handleMakeChange}>
            <option value="">Select a Make</option>
            {makeModelData.map((item) => (
              <option key={item.make} value={item.make}>
                {item.make}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="model">Model:</label>
          <select id="model" disabled={!selectedMake}>
            <option value="">Select a Model</option>
            {models.map((model) => (
              <option key={model.name} value={model.name}>
                {model.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default IndexPage;

// pages/index.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMake, selectModel } from "/features/vehicle/vehicleSlice";
import makeModelData from "/oemData/makeModelData";
import Dropdown from "../components/Dropdown";

const IndexPage = () => {
  const dispatch = useDispatch();
  const { selectedMake, models, selectedModel } = useSelector(
    (state) => state.vehicle
  );

  const makeOptions = makeModelData.map((item) => ({
    id: item.make,
    name: item.make,
  }));
  const modelOptions = models.map((model) => ({
    id: model.name,
    name: model.name,
  }));

  const handleMakeChange = (event) => {
    dispatch(selectMake(event.target.value));
  };

  const handleModelChange = (event) => {
    console.log(event.target.value);
    dispatch(selectModel(event.target.value));
  };

  return (
    <div>
      <h1>Vehicle Configuration</h1>
      <form>
        <div>
          <label htmlFor="make">Make:</label>
          <Dropdown
            id="make"
            value={selectedMake}
            onChange={handleMakeChange}
            options={makeOptions}
          />
        </div>
        <div>
          <label htmlFor="model">Model:</label>
          <Dropdown
            id="model"
            value={selectedModel} // Adjust as needed
            onChange={handleModelChange}
            options={modelOptions}
            disabled={!selectedMake}
          />
        </div>
      </form>
    </div>
  );
};

export default IndexPage;

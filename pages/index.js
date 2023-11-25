// pages/index.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMake,
  selectModel,
  fetchModelData,
} from "/features/vehicle/vehicleSlice";
import makeModelData from "/oemData/makeModelData";
import Dropdown from "../components/Dropdown";
import CheckBoxGroup from "@/components/CheckBoxGroup";

const IndexPage = () => {
  const dispatch = useDispatch();
  const { selectedMake, models, selectedModel, optionsAvailable } = useSelector(
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
    const model = event.target.value;
    dispatch(selectModel(model)); // Dispatch the selectModel action
    if (selectedMake && model) {
      console.log("line 36 in index");
      dispatch(fetchModelData({ make: selectedMake, model }));
    }
  };

  const renderOptions = () => {
    // Check if a model is selected before rendering additional options
    if (selectedModel && optionsAvailable) {
      return Object.entries(optionsAvailable).map(([key, option]) => {
        switch (option.type) {
          case "Dropdown":
            return (
              <div key={key}>
                <label htmlFor={key}>{option.displayName}:</label>
                <Dropdown
                  id={key}
                  value={""} // You need to manage state for each of these dynamically
                  onChange={(event) => {
                    /* Handle change */
                  }}
                  options={option.choices}
                />
              </div>
            );
          case "CheckBoxGroup":
            return (
              <div key={key}>
                <label>{option.displayName}:</label>
                <CheckBoxGroup
                  choices={option.choices}
                  // Add any other props needed for CheckBoxGroup
                />
              </div>
            );
          default:
            return null;
        }
      });
    }
    return null;
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
        <br></br>
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
        <br></br>
        <div>{renderOptions()}</div>
      </form>
    </div>
  );
};

export default IndexPage;

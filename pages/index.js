// pages/index.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMake,
  selectModel,
  fetchModelData,
  updateOptions,
  popupConfirm,
  popupCancel,
} from "/features/vehicle/vehicleSlice";
import makeModelData from "/oemData/makeModelData";
import Dropdown from "../components/Dropdown";
import CheckBoxGroup from "@/components/CheckBoxGroup";
import Popup from "../components/Popup";

const IndexPage = () => {
  const dispatch = useDispatch();
  const {
    selectedMake,
    models,
    selectedModel,
    optionsAvailable,
    optionsSelected,
    popup,
  } = useSelector((state) => state.vehicle);

  const makeOptions = makeModelData.map((item) => ({
    id: item.id,
    name: item.name,
  }));

  const handleMakeChange = (event) => {
    dispatch(selectMake(event.target.value));
  };

  const handleModelChange = (event) => {
    const model = event.target.value;
    dispatch(selectModel(model));
    if (selectedMake && model) {
      dispatch(fetchModelData({ make: selectedMake, model }));
    }
  };

  const handleOptionChange = (category, selection) => {
    if (selectedMake && selectedModel) {
      dispatch(
        updateOptions({
          make: selectedMake,
          model: selectedModel,
          category,
          selection,
        })
      );
    }
  };

  const handlePopupConfirm = (event) => {
    event.preventDefault(); // Prevent form submission or any default action
    dispatch(
      popupConfirm({
        make: selectedMake,
        model: selectedModel,
      })
    );
  };

  const handlePopupCancel = (event) => {
    event.preventDefault(); // Prevent form submission or any default action
    dispatch(popupCancel());
  };

  const renderOptions = () => {
    const handleCheckBoxChange = (key, id, isChecked) => {
      // Call handleOptionChange with the checkbox id and its new checked status
      handleOptionChange(key, { id, isChecked });
    };
    // Check if a model is selected before rendering additional options
    if (selectedModel && optionsAvailable) {
      return Object.entries(optionsAvailable).map(([key, option]) => {
        switch (option.type) {
          case "Dropdown":
            // Find the selected option for this category
            const selectedOptionID =
              optionsSelected && optionsSelected[key]
                ? optionsSelected[key].choices[0].id
                : "";
            return (
              <div key={key}>
                <label htmlFor={key}>{option.displayName}:</label>
                <Dropdown
                  id={key}
                  value={selectedOptionID} // Set the selected option here
                  onChange={(event) =>
                    handleOptionChange(key, { id: event.target.value })
                  }
                  options={option.choices}
                />
                <br></br>
              </div>
            );
          case "CheckBoxGroup":
            // Determine which options are selected
            const selectedCheckBoxes =
              optionsSelected && optionsSelected[key]
                ? optionsSelected[key].choices.map((c) => c.id)
                : [];

            return (
              <div key={key}>
                <label>{option.displayName}:</label>
                <CheckBoxGroup
                  choices={option.choices.map((choice) => ({
                    ...choice,
                    checked: selectedCheckBoxes.includes(choice.id), // Set checked status
                  }))}
                  onChange={(id, isChecked) =>
                    handleCheckBoxChange(key, id, isChecked)
                  }
                />
                <br></br>
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
            options={models}
            disabled={!selectedMake}
          />
        </div>
        <br></br>
        <div>{renderOptions()}</div>
        <br></br>
        <div>
          {popup.show && (
            <Popup
              message={popup.message}
              confirmAction={handlePopupConfirm}
              cancelAction={handlePopupCancel}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default IndexPage;

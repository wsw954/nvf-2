// features/vehicle/vehicleSlice.js
import { createSlice } from "@reduxjs/toolkit";
import makeModelData from "/oemData/makeModelData";

const initialState = {
  selectedMake: "",
  models: [],
  selectedModel: "",
};

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    selectMake: (state, action) => {
      state.selectedMake = action.payload;
      const selectedMakeData = makeModelData.find(
        (make) => make.make === action.payload
      );
      state.models = selectedMakeData ? selectedMakeData.models : [];
    },
    selectModel: (state, action) => {
      state.selectedModel = action.payload;
      //I havce to add code here to retrieve model options & accessories
    },
  },
});

export const { selectMake, selectModel } = vehicleSlice.actions;
export default vehicleSlice.reducer;

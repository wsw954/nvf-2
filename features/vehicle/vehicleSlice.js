// features/vehicle/vehicleSlice.js
import { createSlice } from "@reduxjs/toolkit";
import makeModelData from "/oemData/makeModelData";

const initialState = {
  selectedMake: "",
  models: [],
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
    // You can add more reducers here if needed
  },
});

export const { selectMake } = vehicleSlice.actions;
export default vehicleSlice.reducer;

// features/vehicle/vehicleSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import makeModelData from "/oemData/makeModelData";

const initialState = {
  selectedMake: "",
  models: [],
  selectedModel: "",
  optionsAvailable: null, // To store data for the selected model
  loading: false,
  error: null,
};

// Async thunk action
export const fetchModelData = createAsyncThunk(
  "vehicle/fetchModelData",
  async ({ make, model }, { rejectWithValue }) => {
    try {
      const makeLower = make.toLowerCase();
      const modelLower = model.toLowerCase();
      const modelData = await import(`/oemData/${makeLower}/${modelLower}.js`);

      return modelData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
      state.selectedModel = ""; // Reset selected model when make changes
    },
    selectModel: (state, action) => {
      state.selectedModel = action.payload; //Update the state for model selected
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchModelData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchModelData.fulfilled, (state, action) => {
        state.optionsAvailable = action.payload.OptionsAvailable;
        state.loading = false;
      })
      .addCase(fetchModelData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { selectMake, selectModel } = vehicleSlice.actions;
export default vehicleSlice.reducer;

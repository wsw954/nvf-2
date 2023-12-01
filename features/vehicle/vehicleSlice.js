// features/vehicle/vehicleSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import makeModelData from "/oemData/makeModelData";

const initialState = {
  selectedMake: "",
  models: [],
  selectedModel: "",
  optionsAvailable: null,
  optionsSelected: null,
  loading: false,
  error: null,
};

// Utility function for dynamic import
async function importModelData(make, model) {
  const makeLower = make.toLowerCase();
  const modelLower = model.toLowerCase();
  return await import(`/oemData/${makeLower}/${modelLower}.js`);
}

// Async thunk action
export const fetchModelData = createAsyncThunk(
  "vehicle/fetchModelData",
  async ({ make, model }, { rejectWithValue }) => {
    try {
      const makeLower = make.toLowerCase();
      const modelLower = model.toLowerCase();
      const modelData = await importModelData(make, model);
      // Extract only the serializable parts of the module
      const { InitialOptionsAvailable } = modelData;
      return { InitialOptionsAvailable };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// New async thunk for handling option changes
export const updateOptions = createAsyncThunk(
  "vehicle/updateOptions",
  async (
    { make, model, category, selection },
    { getState, rejectWithValue }
  ) => {
    try {
      const { optionsAvailable, optionsSelected } = getState().vehicle;
      const makeLower = make.toLowerCase();
      const modelLower = model.toLowerCase();
      const modelData = await importModelData(make, model);
      const updatedState = modelData.handleOptionChanged(
        category,
        selection,
        optionsAvailable,
        optionsSelected
      );
      return updatedState;
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
      state.optionsSelected = null; //Reset all selected options when make changes
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
        state.optionsAvailable = action.payload.InitialOptionsAvailable;
        state.loading = false;
      })
      .addCase(fetchModelData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(updateOptions.fulfilled, (state, action) => {
        // Update the state based on the returned value from handleOptionChanged
        state.optionsAvailable = action.payload.optionsAvailable;
        state.optionsSelected = action.payload.optionsSelected;
        state.loading = false;
      });
  },
});

export const { selectMake, selectModel } = vehicleSlice.actions;
export default vehicleSlice.reducer;

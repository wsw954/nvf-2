// features/vehicle/vehicleSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import makeModelData from "/oemData/makeModelData";

const initialState = {
  selectedMake: "",
  models: [],
  selectedModel: "",
  optionsAvailable: {},
  optionsSelected: {},
  popup: {
    show: false,
    message: "",
    action: {},
  },
  loading: false,
  error: null,
};

// Utility function for dynamic import
async function importModelData(make, model) {
  const formattedMake = formatName(make);
  const formattedModel = formatName(model);
  return await import(`/oemData/${formattedMake}/${formattedModel}.js`);
}
//Utility function
function formatName(name) {
  return name.toLowerCase().replace(/[\s-]+/g, "_");
}

// Async thunk action
export const fetchModelData = createAsyncThunk(
  "vehicle/fetchModelData",
  async ({ make, model }, { rejectWithValue }) => {
    try {
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
      const { optionsAvailable, optionsSelected, popup } = getState().vehicle;
      const modelData = await importModelData(make, model);
      const updatedState = modelData.handleOptionChanged(
        category,
        selection,
        optionsAvailable,
        optionsSelected,
        popup
      );
      return updatedState;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//Async thunk for handling popup
export const popupConfirm = createAsyncThunk(
  "vehicle/popupConfirm",
  async (
    { make, model, category, selection },
    { getState, rejectWithValue }
  ) => {
    try {
      const { optionsAvailable, optionsSelected, popup } = getState().vehicle;
      const modelData = await importModelData(make, model);
      const updatedState = modelData.handlePopupConfirm(
        category,
        selection,
        optionsAvailable,
        optionsSelected,
        popup
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
        (make) => make.id === action.payload
      );
      state.models = selectedMakeData ? selectedMakeData.models : [];
      state.selectedModel = ""; // Reset selected model when make changes
      state.optionsSelected = {}; //Reset all selected options when make changes
    },
    selectModel: (state, action) => {
      state.selectedModel = action.payload; //Update the state for model selected
      state.optionsSelected = {}; //Reset all selected options when model changes
    },
    popupCancel: (state, action) => {
      state.popup = initialState.popup; //Reset all selected options when model changes
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
        state.popup = action.payload.popup;
        state.loading = false;
      })
      .addCase(popupConfirm.pending, (state) => {
        state.loading = true;
      })
      .addCase(popupConfirm.fulfilled, (state, action) => {
        // Update the state with the result of the popupConfirm logic
        state.optionsAvailable = action.payload.optionsAvailable;
        state.optionsSelected = action.payload.optionsSelected;
        state.popup = action.payload.popup;
        state.loading = false;
      })
      .addCase(popupConfirm.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});
export const { selectMake, selectModel } = vehicleSlice.actions;
export default vehicleSlice.reducer;

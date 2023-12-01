// Civic.js

// ------------------------------
// OPTIONS AVAILABLE SECTION
// ------------------------------
const OptionsAvailable = {
  trim: {
    displayName: "Trim",
    type: "Dropdown",
    choices: [
      { id: "LX", name: "Sedan LX", price: 23750 },
      { id: "Sport", name: "Sedan Sport", price: 25050 },
      { id: "TypeR", name: "Type R", price: 42895 },
      // ... other trims
    ],
  },
  powertrain: {
    displayName: "Powertrain",
    type: "Dropdown",
    choices: [
      { id: "Standard", name: "Standard Powertrain", price: 0 },
      { id: "Premium", name: "Premium Powertrain", price: 0 },
      { id: "Turbo", name: "Turbo Powertrain", price: 2500 },
    ],
  },
  exteriorColor: {
    displayName: "Exterior Color",
    type: "Dropdown",
    choices: [
      { id: "Blue", name: "Aegean Blue Metallic", price: 100 },
      { id: "Black", name: "Crystal Black Pearl", price: 0 },
      { id: "Silver", name: "Lunar Silver Metallic", price: 200 },
    ],
  },
  packages: {
    displayName: "Packages",
    type: "CheckBoxGroup",
    choices: [
      { id: "PK1", name: "All Season Protection Package I", price: 500 },
      { id: "PK2", name: "All Season Protection Package II", price: 500 },
      { id: "PK3", name: "Package III", price: 500 },
    ],
  },
};

// ------------------------------
// DEPENDENCIES SECTION
// ------------------------------
const Dependencies = {
  // ... your dependencies JSON ...
  trim: {
    LX: {
      powertrain: ["Standard"],
      exteriorColor: ["Blue", "Black"],
      packages: ["PK1", "PK2"],
    },
    Sport: {
      powertrain: ["Standard", "Premium", "Turbo"],
      exteriorColor: ["Blue", "Black", "Silver", "Red"],
      packages: ["PK1", "PK2"],
    },
    TypeR: {
      powertrain: ["Turbo"], // Assuming only Turbo is available for Type R
      exteriorColor: ["Red", "Black"],
      packages: ["PK1", "PK2", "PK3"],
    },
    // ... dependencies for other trims
  },
  //..package dependencies
};

// ------------------------------
// FUNCTIONS SECTION
// ------------------------------

const InitialOptionsAvailable = {
  trim: {
    displayName: "Trim",
    type: "Dropdown",
    choices: [
      { id: "LX", name: "Sedan LX", price: 23750 },
      { id: "Sport", name: "Sedan Sport", price: 25050 },
      { id: "TypeR", name: "Type R", price: 42895 },
      // ... other trims
    ],
  },
};

export function handleOptionChanged(
  category,
  selection,
  optionsAvailable,
  optionsSelected
) {
  // Use switch statement to handle all categories
  let updatedState = {
    optionsAvailable: { ...optionsAvailable },
    optionsSelected: { ...optionsSelected },
  };
  switch (category) {
    case "trim":
      updatedState.optionsSelected[category] =
        OptionsAvailable.trim.choices[selection];
      //add code block to update state
      console.log(updatedState);
      return updatedState;
    case "powertrain":
      //add code block to update state
      return state;
    case "exteriorColor":
      //add code block to update state
      return state;
    case "powertrain":
      //add code block to update state
      return state;
    case "packages":
      //add code block to update state
      return state;
    default:
      return state;
  }
}

function handleDeselection(category, currentConfig) {
  // ... function to handle deselection ...
}

// ------------------------------
// EXPORTS SECTION
// ------------------------------
export { OptionsAvailable, InitialOptionsAvailable, Dependencies };

// Camry.js

// ------------------------------
// OPTIONS AVAILABLE SECTION
// ------------------------------
const OptionsAvailable = {
  trim: {
    displayName: "Trim",
    type: "Dropdown",
    choices: [
      { id: "LX", name: "C trim 1", price: 23750 },
      { id: "Sport", name: "C trim 2", price: 25050 },
      { id: "Hybrid", name: "C trim 3", price: 42895 },
      // ... other trims
    ],
  },
  powertrain: {
    displayName: "Powertrain",
    type: "Dropdown",
    choices: [
      { id: "Standard", name: "Ridgeline Powertrain", price: 0 },
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
      powertrain: ["Standard", "Premium"],
      exteriorColor: ["Blue", "Black", "Silver"],
    },
    Sport: {
      powertrain: ["Standard", "Premium", "Turbo"],
      exteriorColor: ["Blue", "Black", "Silver", "Red"],
    },
    TypeR: {
      powertrain: ["Turbo"], // Assuming only Turbo is available for Type R
      exteriorColor: ["Red", "Black"],
    },
    // ... dependencies for other trims
  },
  //..package dependencies
  packages: {
    PK1: {},
  },
};

// ------------------------------
// EXPORTS SECTION
// ------------------------------
export { OptionsAvailable, Dependencies };

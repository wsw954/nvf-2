// Accord.js

// ------------------------------
// OPTIONS AVAILABLE SECTION
// ------------------------------
const OptionsAvailable = {
  trim: {
    displayName: "Trim",
    type: "Dropdown",
    choices: [
      { id: "LX", name: "LX", price: 23750 },
      { id: "EX", name: "EX", price: 25050 },
      { id: "SportH", name: "Sport Hybrid", price: 42895 },
      // ... other trims
    ],
  },
  powertrain: {
    displayName: "Powertrain",
    type: "Dropdown",
    choices: [
      { id: "Standard", name: "Standard Transmission", price: 0 },
      { id: "Premium", name: "Premium Transmission", price: 0 },
      { id: "Turbo", name: "Turbo Transmission", price: 2500 },
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
      exteriorColor: ["Blue", "Black"],
      packages: ["PK1", "PK2"],
    },
    EX: {
      powertrain: ["Standard", "Premium", "Turbo"],
      exteriorColor: ["Blue", "Black", "Silver", "Red"],
      packages: ["PK1", "PK2"],
    },
    SportH: {
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
      { id: "LX", name: "LX", price: 23750 },
      { id: "EX", name: "EX", price: 25050 },
      { id: "SportH", name: "Sport Hybrid", price: 42895 },
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
      // Find the selected trim in optionsAvailable
      const selectedTrim = optionsAvailable.trim.choices.find(
        (choice) => choice.id === selection
      );

      // Update optionsSelected with ONLY the selected trim
      updatedState.optionsSelected = {
        trim: {
          displayName: "Trim",
          type: "Dropdown",
          choices: [selectedTrim],
        },
      };

      // Update optionsAvailable based on Dependencies
      const trimDependencies = Dependencies.trim[selection];
      if (trimDependencies) {
        Object.keys(trimDependencies).forEach((key) => {
          updatedState.optionsAvailable[key] = {
            ...OptionsAvailable[key],
            choices: OptionsAvailable[key].choices.filter((choice) =>
              trimDependencies[key].includes(choice.id)
            ),
          };
        });
      }
      return updatedState;
    case "powertrain":
      // Find the selected trim in optionsAvailable
      const selectedPowertrain = optionsAvailable.powertrain.choices.find(
        (choice) => choice.id === selection
      );

      // Update optionsSelected with the selected trim
      updatedState.optionsSelected = {
        ...updatedState.optionsSelected,
        powertrain: {
          displayName: "Powertrain",
          type: "Dropdown",
          choices: [selectedPowertrain],
        },
      };
      return updatedState;
    case "exteriorColor":
      // Find the selected trim in optionsAvailable
      const selectedExteriorColor = optionsAvailable.exteriorColor.choices.find(
        (choice) => choice.id === selection
      );
      // Update optionsSelected with the selected trim
      updatedState.optionsSelected = {
        ...updatedState.optionsSelected,
        exteriorColor: {
          displayName: "Exterior Color",
          type: "Dropdown",
          choices: [selectedExteriorColor],
        },
      };
      return updatedState;
    case "packages":
      // Check if the package is already selected
      const isPackageSelected = optionsSelected.packages?.choices.some(
        (choice) => choice.id === selection.id
      );

      // If the package is not already selected, add it to the choices array
      if (!isPackageSelected) {
        const selectedPackage = optionsAvailable.packages.choices.find(
          (choice) => choice.id === selection.id
        );

        updatedState.optionsSelected.packages = {
          displayName: "Packages",
          type: "CheckBoxGroup",
          choices: optionsSelected.packages
            ? [...optionsSelected.packages.choices, selectedPackage]
            : [selectedPackage],
        };
      } else {
        // If the package is already selected, remove it from the choices array
        updatedState.optionsSelected.packages = {
          ...optionsSelected.packages,
          choices: optionsSelected.packages.choices.filter(
            (choice) => choice.id !== selection.id
          ),
        };
      }
      return updatedState;
    default:
      return state;
  }
}

// ------------------------------
// EXPORTS SECTION
// ------------------------------
export { OptionsAvailable, InitialOptionsAvailable, Dependencies };

// Civic.js
import produce from "immer";
// ------------------------------
// OPTIONS AVAILABLE SECTION
// ------------------------------
const AllOptions = {
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
      { id: "ASP1", name: "All Season Protection Package I", price: 500 },
      { id: "ASP2", name: "All Season Protection Package II", price: 500 },
      { id: "PP3", name: "Package III", price: 500 },
    ],
  },
  exteriorAccessories: {
    displayName: "Exterior Accessories",
    type: "CheckBoxGroup",
    choices: [
      { id: "BSM", name: "Body Side Moulding", price: 500 },
      { id: "DLS", name: "Decklid Spoiler", price: 500 },
      { id: "SGS", name: "Splash Guard Set", price: 500 },
      { id: "EAC1", name: "EA-Component1", price: 500 },
      { id: "EAC2", name: "EA-Component2", price: 500 },
      { id: "EAC3", name: "EA-Component3", price: 500 },
    ],
  },
  interiorAccessories: {
    displayName: "Interior Accessories",
    type: "CheckBoxGroup",
    choices: [
      { id: "ASF", name: "All Season Floor Mats", price: 500 },
      { id: "CH", name: "Cargo Hook", price: 500 },
      { id: "CN", name: "Cargo Net", price: 500 },
      { id: "IAC1", name: "IA-Component1", price: 500 },
      { id: "IAC2", name: "IA-Component2", price: 500 },
      { id: "IAC3", name: "IA-Component3", price: 500 },
    ],
  },
};

// ------------------------------
// DEPENDENCIES SECTION
// ------------------------------
const Dependencies = {
  // ... trim dependencies- Each trim is effectively a main ancestor to all other options
  trim: {
    LX: {
      powertrain: ["Standard", "Premium"],
      exteriorColor: ["Blue", "Black"],
      packages: ["ASP1", "ASP2"],
      exteriorAccessories: ["BSM", "DLS", "SGS", "EAC1", "EAC2", "EAC3"],
      interiorAccessories: ["ASF", "CH", "CN", "IAC1", "IAC2", "IAC3"],
    },
    Sport: {
      powertrain: ["Standard", "Premium", "Turbo"],
      exteriorColor: ["Blue", "Black", "Silver", "Red"],
      packages: ["ASP1", "ASP2", "PP3"],
      exteriorAccessories: ["BSM", "DLS", "SGS", "EAC1", "EAC2", "EAC3"],
      interiorAccessories: ["ASF", "CH", "CN", "IAC1", "IAC2", "IAC3"],
    },
    TypeR: {
      powertrain: ["Turbo"], // Assuming only Turbo is available for Type R
      exteriorColor: ["Red", "Black"],
      packages: ["ASP1", "ASP2", "PP3"],
      exteriorAccessories: ["BSM", "DLS", "SGS", "EAC1", "EAC2", "EAC3"],
      interiorAccessories: ["ASF", "CH", "CN", "IAC1", "IAC2"],
    },
    // ... dependencies for other trims
  },
  //..package dependencies-These are the individual components for each package
  packages: {
    ASP1: {
      exteriorAccessories: ["EAC1", "EAC2"],
    },
    ASP2: {
      exteriorAccessories: ["EAC3"],
      interiorAccessories: ["IAC3"],
    },
    PP3: {
      interiorAccessories: ["IAC1", "IAC2"],
    },
  },
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

//Main option change function
export function handleOptionChanged(
  category,
  selection,
  optionsAvailable,
  optionsSelected
) {
  switch (category) {
    case "trim":
      return handleTrim(category, selection, optionsAvailable, optionsSelected);
    case "powertrain":
      return handlePowertrain(
        category,
        selection,
        optionsAvailable,
        optionsSelected
      );
    case "exteriorColor":
      return handleExteriorColor(
        category,
        selection,
        optionsAvailable,
        optionsSelected
      );
    case "packages":
      return handlePackages(
        category,
        selection,
        optionsAvailable,
        optionsSelected
      );
    case "exteriorAccessories":
      return handleExteriorAccessories(
        category,
        selection,
        optionsAvailable,
        optionsSelected
      );
    case "interiorAccessories":
      return handleInteriorAccessories(
        category,
        selection,
        optionsAvailable,
        optionsSelected
      );
    default:
      return {
        optionsAvailable,
        optionsSelected,
      };
  }
}

//Callback functions for handleOptionChange
//.....................

function handleTrim(category, selection, optionsAvailable, optionsSelected) {
  // Initialize newOptionsSelected by calling addToOptionsSelected
  let newOptionsSelected = produce(optionsSelected, (draft) => {
    addToOptionsSelected(category, selection, optionsAvailable, draft);
  });

  // Initialize newOptionsAvailable based on trimDependencies
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {
    const trimDependencies = Dependencies.trim[selection];
    if (trimDependencies) {
      Object.keys(trimDependencies).forEach((dependencyKey) => {
        draft[dependencyKey] = {
          ...AllOptions[dependencyKey],
          choices: AllOptions[dependencyKey].choices.filter((choice) =>
            trimDependencies[dependencyKey].includes(choice.id)
          ),
        };
      });
    }
  });

  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
  };
}

//.....................
//Handle powertrain change
function handlePowertrain(
  selection,
  optionsAvailable,
  optionsSelected,
  updatedState
) {
  // Find the selected trim in optionsAvailable
  const selectedPowertrain = optionsAvailable.powertrain.choices.find(
    (choice) => choice.id === selection
  );
  // Update optionsSelected with the selected powertrain
  updatedState.optionsSelected = {
    ...updatedState.optionsSelected,
    powertrain: {
      displayName: "Powertrain",
      type: "Dropdown",
      choices: [selectedPowertrain],
    },
  };
  return updatedState;
}

//.....................
//Handle exteriorColor change
function handleExteriorColor(
  selection,
  optionsAvailable,
  optionsSelected,
  updatedState
) {
  // Find the selected trim in optionsAvailable
  const selectedExteriorColor = optionsAvailable.exteriorColor.choices.find(
    (choice) => choice.id === selection
  );
  // Update optionsSelected with the selected exteriorColor
  updatedState.optionsSelected = {
    ...updatedState.optionsSelected,
    exteriorColor: {
      displayName: "Exterior Color",
      type: "Dropdown",
      choices: [selectedExteriorColor],
    },
  };
  return updatedState;
}

//.....................
//Handle packages change
function handlePackages(
  selection,
  optionsAvailable,
  optionsSelected,
  updatedState
) {
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

    // Add package dependencies to optionsSelected
    const packageDependencies = Dependencies.packages[selection.id];
    if (packageDependencies) {
      Object.keys(packageDependencies).forEach((dependencyKey) => {
        const dependencyChoices = packageDependencies[dependencyKey].map(
          (depId) => {
            const choice = optionsAvailable[dependencyKey].choices.find(
              (choice) => choice.id === depId
            );
            // Add the 'component' key to each dependency choice
            return {
              ...choice,
              component: selection.id,
            };
          }
        );
        updatedState.optionsSelected[dependencyKey] = {
          ...optionsAvailable[dependencyKey],
          choices: dependencyChoices,
        };
      });
    }
  } else {
    // If the package is already selected, remove it from the choices array
    updatedState.optionsSelected.packages = {
      ...optionsSelected.packages,
      choices: optionsSelected.packages.choices.filter(
        (choice) => choice.id !== selection.id
      ),
    };
    // Remove the package dependencies from optionsSelected
    const packageDependencies = Dependencies.packages[selection.id];
    if (packageDependencies) {
      Object.keys(packageDependencies).forEach((dependencyKey) => {
        if (updatedState.optionsSelected[dependencyKey]) {
          const dependencyIds = packageDependencies[dependencyKey];
          updatedState.optionsSelected[dependencyKey] = {
            ...updatedState.optionsSelected[dependencyKey],
            choices: updatedState.optionsSelected[dependencyKey].choices.filter(
              (choice) => !dependencyIds.includes(choice.id)
            ),
          };
        }
      });
    }
  }
  return updatedState;
}

//.....................
//Handle exteriorAccessories change
function handleExteriorAccessories(
  selection,
  optionsAvailable,
  optionsSelected,
  updatedState
) {
  // Check if the exteriorAccessory is already selected
  const isExteriorAccSelected =
    optionsSelected.exteriorAccessories?.choices.some(
      (choice) => choice.id === selection.id
    );

  // If the exteriorAccessory is not already selected, add it to the choices array
  if (!isExteriorAccSelected) {
    const selectedExteriorAcc =
      optionsAvailable.exteriorAccessories.choices.find(
        (choice) => choice.id === selection.id
      );

    updatedState.optionsSelected.exteriorAccessories = {
      displayName: "Exterior Accessories",
      type: "CheckBoxGroup",
      choices: optionsSelected.exteriorAccessories
        ? [...optionsSelected.exteriorAccessories.choices, selectedExteriorAcc]
        : [selectedExteriorAcc],
    };
  } else {
    // Find the selected exterior accessory
    const selectedExteriorAcc =
      optionsSelected.exteriorAccessories.choices.find(
        (choice) => choice.id === selection.id
      );

    // If the exteriorAccessory is already selected, remove it from the choices array
    updatedState.optionsSelected.exteriorAccessories = {
      ...optionsSelected.exteriorAccessories,
      choices: optionsSelected.exteriorAccessories.choices.filter(
        (choice) => choice.id !== selection.id
      ),
    };

    // Check if the deselected accessory is part of a package and remove that package and its dependencies
    if (selectedExteriorAcc && selectedExteriorAcc.component) {
      const packageId = selectedExteriorAcc.component;
      const packageDependencies = Dependencies.packages[packageId];

      // Remove the package itself
      updatedState.optionsSelected.packages = {
        ...updatedState.optionsSelected.packages,
        choices: updatedState.optionsSelected.packages.choices.filter(
          (packageChoice) => packageChoice.id !== packageId
        ),
      };

      // Remove all dependencies of the package

      if (packageDependencies) {
        Object.keys(packageDependencies).forEach((dependencyKey) => {
          console.log(dependencyKey);
          const dependencyIds = packageDependencies[dependencyKey];
          console.log(dependencyIds);
          if (updatedState.optionsSelected[dependencyKey]) {
            updatedState.optionsSelected[dependencyKey] = {
              ...updatedState.optionsSelected[dependencyKey],
              choices: updatedState.optionsSelected[
                dependencyKey
              ].choices.filter((choice) => !dependencyIds.includes(choice.id)),
            };
          }
        });
      }
    }
  }
  return updatedState;
}

//.....................
//Handle interiorAccessories change
function handleInteriorAccessories(
  selection,
  optionsAvailable,
  optionsSelected,
  updatedState
) {
  // Check if the interiorAccessory is already selected
  const isInteriorAccSelected =
    optionsSelected.interiorAccessories?.choices.some(
      (choice) => choice.id === selection.id
    );

  // If the interiorAccessory is not already selected, add it to the choices array
  if (!isInteriorAccSelected) {
    const selectedInteriorAcc =
      optionsAvailable.interiorAccessories.choices.find(
        (choice) => choice.id === selection.id
      );
    updatedState.optionsSelected.interiorAccessories = {
      displayName: "Interior Accessories",
      type: "CheckBoxGroup",
      choices: optionsSelected.interiorAccessories
        ? [...optionsSelected.interiorAccessories.choices, selectedInteriorAcc]
        : [selectedInteriorAcc],
    };
  } else {
    // If the interiorAccessory is already selected, remove it from the choices array
    updatedState.optionsSelected.interiorAccessories = {
      ...optionsSelected.interiorAccessories,
      choices: optionsSelected.interiorAccessories.choices.filter(
        (choice) => choice.id !== selection.id
      ),
    };
  }
  return updatedState;
}

//.....................
//Helper functions
function addToOptionsAvailable(
  selection,
  category,
  optionsAvailable,
  optionsSelected
) {
  // Use Immer's produce to create a new state
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {
    // Ensure the category exists in the draft
    if (!draft[category]) {
      draft[category] = { type: optionsAvailable[category].type, choices: [] };
    }

    // Find the available option in AllOptions object
    const availableOption = AllOptions[category].choices.find(
      (choice) => choice.id === selection
    );

    const index = draft[category].choices.findIndex(
      (choice) => choice.id === availableOption.id
    );
    if (index === -1) {
      draft[category].choices.push(availableOption);
    }
  });

  return newOptionsAvailable;
}

function addToOptionsSelected(category, selection, optionsAvailable, draft) {
  // Ensure the category exists in the draft
  if (!draft[category]) {
    draft[category] = { type: optionsAvailable[category].type, choices: [] };
  }

  // Find the selected option in optionsAvailable
  const selectedOption = optionsAvailable[category].choices.find(
    (choice) => choice.id === selection
  );

  // Update draft based on the option type
  if (optionsAvailable[category].type === "Dropdown") {
    draft[category].choices = [selectedOption];
  } else if (optionsAvailable[category].type === "CheckBoxGroup") {
    const index = draft[category].choices.findIndex(
      (choice) => choice.id === selectedOption.id
    );
    if (index === -1) {
      draft[category].choices.push(selectedOption);
    } else {
      draft[category].choices.splice(index, 1);
    }
  }
}

// ------------------------------
// EXPORTS SECTION
// ------------------------------
export { AllOptions, InitialOptionsAvailable, Dependencies };

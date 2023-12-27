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
      powertrain: ["Premium"],
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
    const trimDependencies = Dependencies.trim[selection.id];
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
  category,
  selection,
  optionsAvailable,
  optionsSelected
) {
  // Initialize newOptionsSelected by calling addToOptionsSelected
  let newOptionsSelected = produce(optionsSelected, (draft) => {
    addToOptionsSelected(category, selection, optionsAvailable, draft);
  });

  let newOptionsAvailable = produce(optionsAvailable, (draft) => {});

  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
  };
}

//.....................
//Handle exteriorColor change
function handleExteriorColor(
  category,
  selection,
  optionsAvailable,
  optionsSelected
) {
  // Initialize newOptionsSelected by calling addToOptionsSelected
  let newOptionsSelected = produce(optionsSelected, (draft) => {
    addToOptionsSelected(category, selection, optionsAvailable, draft);
  });

  let newOptionsAvailable = produce(optionsAvailable, (draft) => {});

  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
  };
}

//.....................

//Handle packages change
function handlePackages(
  category,
  selection,
  optionsAvailable,
  optionsSelected
) {
  // Step 1: Update optionsAvailable with package components marked
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {
    if (selection.isChecked) {
      // Update newOptionsAvailable as needed
      updateOptionsAvailableWithPackageComponents(selection, draft);
    }
  });

  // Step 2: Update optionsSelected with the package and its components
  // Note: Using the original optionsAvailable, not newOptionsAvailable
  let updatedOptionsSelected = produce(optionsSelected, (draft) => {
    if (selection.isChecked) {
      // Add the actual package option
      addToOptionsSelected(category, selection, optionsAvailable, draft);

      // Add the package 'component' options
      addPackageComponents(selection, optionsAvailable, draft);
    } else {
      removeFromOptionsSelected(category, selection, optionsAvailable, draft);
      // removePackageComponents(selection, optionsAvailable, draft);
    }
  });

  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: updatedOptionsSelected,
  };
}

//.....................
//Handle exteriorAccessories change
function handleExteriorAccessories2(
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

function handleExteriorAccessories(
  category,
  selection,
  optionsAvailable,
  optionsSelected
) {
  console.log(category);
  let newOptionsSelected = produce(optionsSelected, (draft) => {});
  if (selection.isChecked) {
    newOptionsSelected = produce(optionsSelected, (draft) => {
      addToOptionsSelected(category, selection, optionsAvailable, draft);
    });
  }
  console.log(selection);
  return { optionsAvailable, newOptionsSelected };
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
  if (!draft[category]) {
    draft[category] = {
      displayName: optionsAvailable[category].displayName,
      type: optionsAvailable[category].type,
      choices: [],
    };
  }

  const selectedOption = optionsAvailable[category].choices.find(
    (choice) => choice.id === selection.id
  );

  if (optionsAvailable[category].type === "Dropdown") {
    draft[category].choices = [selectedOption];
  } else if (optionsAvailable[category].type === "CheckBoxGroup") {
    //If selectedOption not in draft, add to draft
    if (
      !draft[category].choices.some((choice) => choice.id === selectedOption.id)
    ) {
      draft[category].choices.push(selectedOption);
    }
  }
}

function removeFromOptionsSelected(category, selection, draft) {
  const index = draft[category].choices.findIndex(
    (choice) => choice.id === selection.id
  );
  if (index !== -1) {
    draft[category].choices.splice(index, 1);
  }
}

function addPackageComponents(selection, newOptionsAvailable, draft) {
  const packageDependencies = Dependencies.packages[selection.id];
  if (packageDependencies) {
    Object.keys(packageDependencies).forEach((dependencyKey) => {
      packageDependencies[dependencyKey].forEach((depId) => {
        const choice = newOptionsAvailable[dependencyKey].choices.find(
          (choice) => choice.id === depId
        );
        if (choice) {
          const choiceWithComponent = {
            ...choice,
            name: choice.name + " - Included in Package",
            component: selection.id,
          };
          if (!draft[dependencyKey]) {
            draft[dependencyKey] = {
              type: newOptionsAvailable[dependencyKey].type,
              choices: [],
            };
          }
          draft[dependencyKey].choices.push(choiceWithComponent);
        }
      });
    });
  }
}

function updateOptionsAvailableWithPackageComponents(selection, draft) {
  const packageDependencies = Dependencies.packages[selection.id];
  if (packageDependencies) {
    Object.keys(packageDependencies).forEach((dependencyKey) => {
      packageDependencies[dependencyKey].forEach((depId) => {
        // Find the index of the choice in the draft
        const choiceIndex = draft[dependencyKey].choices.findIndex(
          (choice) => choice.id === depId
        );

        if (choiceIndex !== -1) {
          // Directly update the properties of the found choice in the draft
          draft[dependencyKey].choices[choiceIndex].name +=
            " - Included in Package";
          draft[dependencyKey].choices[choiceIndex].component = selection.id;
          draft[dependencyKey].choices[choiceIndex].price = 0; // Set price to 0 or as required
        }
      });
    });
  }
}

function handlePackageComponents(
  selection,
  newOptionsAvailable,
  newOptionsSelected
) {
  let updatedOptionsSelected = produce(newOptionsSelected, (draft) => {
    const packageDependencies = Dependencies.packages[selection.id];
    if (packageDependencies) {
      Object.keys(packageDependencies).forEach((dependencyKey) => {
        packageDependencies[dependencyKey].forEach((depId) => {
          if (selection.isChecked) {
            // Add dependencies when the package is selected
            const choice = newOptionsAvailable[dependencyKey].choices.find(
              (choice) => choice.id === depId
            );
            if (choice) {
              const choiceWithComponent = {
                ...choice,
                name: choice.name + " - Included in Package",
                component: selection.id,
              };
              if (!draft[dependencyKey]) {
                draft[dependencyKey] = {
                  type: newOptionsAvailable[dependencyKey].type,
                  choices: [],
                };
              }
              draft[dependencyKey].choices.push(choiceWithComponent);
            }
          } else {
            // Remove dependencies when the package is unselected
            if (draft[dependencyKey]) {
              draft[dependencyKey].choices = draft[
                dependencyKey
              ].choices.filter(
                (choice) =>
                  choice.id !== depId || choice.component !== selection.id
              );
            }
          }
        });
      });
    }
  });

  let updatedOptionsAvailable = produce(newOptionsAvailable, (draft) => {
    // TODO: Insert logic here to adjust newOptionsAvailable
  });

  return { updatedOptionsSelected, updatedOptionsAvailable };
}

// ------------------------------
// EXPORTS SECTION
// ------------------------------
export { AllOptions, InitialOptionsAvailable, Dependencies };

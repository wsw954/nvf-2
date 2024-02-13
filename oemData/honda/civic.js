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
      { id: "EAC4", name: "Rival Acccessory 4", price: 500 },
      { id: "EAC5", name: "Rival Acccessory 5", price: 500 },
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
      exteriorAccessories: [
        "BSM",
        "DLS",
        "SGS",
        "EAC1",
        "EAC2",
        "EAC3",
        "EAC4",
        "EAC5",
      ],
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
  //..package dependencies have two types, components & rivals
  packages: {
    components: {
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
    rivals: { ASP1: { packages: ["ASP2"] }, ASP2: { packages: ["ASP1"] } },
  },
  //exteriorAccessories
  exteriorAccessories: {
    rivals: {
      EAC4: {
        exteriorAccessories: ["EAC5"],
      },
      EAC5: {
        exteriorAccessories: ["EAC4"],
      },
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
  optionsSelected,
  popup
) {
  switch (category) {
    case "trim":
      return handleTrim(
        category,
        selection,
        optionsAvailable,
        optionsSelected,
        popup
      );
    case "powertrain":
      return handlePowertrain(
        category,
        selection,
        optionsAvailable,
        optionsSelected,
        popup
      );
    case "exteriorColor":
      return handleExteriorColor(
        category,
        selection,
        optionsAvailable,
        optionsSelected,
        popup
      );
    case "packages":
      return handlePackages(
        category,
        selection,
        optionsAvailable,
        optionsSelected,
        popup
      );
    case "exteriorAccessories":
      return handleExteriorAccessories(
        category,
        selection,
        optionsAvailable,
        optionsSelected,
        popup
      );
    case "interiorAccessories":
      return handleInteriorAccessories(
        category,
        selection,
        optionsAvailable,
        optionsSelected,
        popup
      );
    default:
      return {
        optionsAvailable,
        optionsSelected,
        popup,
      };
  }
}

//Callback functions for handleOptionChange
//.....................

function handleTrim(
  category,
  selection,
  optionsAvailable,
  optionsSelected,
  popup
) {
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
  let newPopup = produce(popup, (draft) => {});

  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
    popup: newPopup,
  };
}

//.....................
//Handle powertrain change
function handlePowertrain(
  category,
  selection,
  optionsAvailable,
  optionsSelected,
  popup
) {
  // Initialize newOptionsSelected by calling addToOptionsSelected
  let newOptionsSelected = produce(optionsSelected, (draft) => {
    addToOptionsSelected(category, selection, optionsAvailable, draft);
  });

  let newOptionsAvailable = produce(optionsAvailable, (draft) => {});
  let newPopup = produce(popup, (draft) => {});
  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
    popup: newPopup,
  };
}

//.....................
//Handle exteriorColor change
function handleExteriorColor(
  category,
  selection,
  optionsAvailable,
  optionsSelected,
  popup
) {
  // Initialize newOptionsSelected by calling addToOptionsSelected
  let newOptionsSelected = produce(optionsSelected, (draft) => {
    addToOptionsSelected(category, selection, optionsAvailable, draft);
  });

  let newOptionsAvailable = produce(optionsAvailable, (draft) => {});
  let newPopup = produce(popup, (draft) => {});
  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
    popup: newPopup,
  };
}

//.....................

//Handle packages change
function handlePackages(
  category,
  selection,
  optionsAvailable,
  optionsSelected,
  popup
) {
  // Step 1: Update optionsAvailable with package components marked
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {
    if (selection.isChecked) {
      // Update the package'components'  optionsAvailable as needed
      updateOptionsAvailableWithPackageComponents(selection, draft);
    } else {
      //Reset the package 'components' in  optionsAvailable to default
      resetOptionsAvailableWithPackageComponents(selection, draft);
    }
  });

  // Step 2: Update optionsSelected with the package and its components
  // Note: Using the original optionsAvailable, not newOptionsAvailable
  let newOptionsSelected = produce(optionsSelected, (draft) => {
    if (selection.isChecked) {
      // Add the actual package option
      addToOptionsSelected(category, selection, optionsAvailable, draft);
      // Add the package 'components' options
      addPackageComponents(selection, optionsAvailable, draft);
    } else {
      //Remove the actual package selected
      removeFromOptionsSelected(category, selection, optionsAvailable, draft);
      //Remove the package 'components'
      removePackageComponents(selection, optionsAvailable, draft);
    }
  });
  console.log(newOptionsSelected);
  let newPopup = produce(popup, (draft) => {}); //Leave popup unchanged

  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
    popup: newPopup,
  };
}

//.....................

//Handle Exterior Accessory selection
function handleExteriorAccessories(
  category,
  selection,
  optionsAvailable,
  optionsSelected,
  popup
) {
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {}); //Options available unchanged

  let rivalStatus = checkIfRivalSelected(category, selection, optionsSelected);

  let newOptionsSelected;
  let newPopup;

  if (selection.isChecked && rivalStatus.selected) {
    // Create new popup, but leave optionsSelected unchanged
    newPopup = produce(popup, (draft) => {
      createPopupMessage(selection.id, draft, rivalStatus.actionDetails);
    });
    newOptionsSelected = produce(optionsSelected, (draft) => {}); // Keep optionsSelected unchanged
  } else {
    // Update optionsSelected based on the selection
    newOptionsSelected = produce(optionsSelected, (draft) => {
      if (selection.isChecked) {
        addToOptionsSelected(category, selection, optionsAvailable, draft);
      } else {
        removeFromOptionsSelected(category, selection, optionsAvailable, draft);
      }
    });
    //Keep the popup unchanged
    newPopup = produce(popup, (draft) => {});
  }

  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
    popup: newPopup,
  };
}

//.....................
//Handle interiorAccessories change
function handleInteriorAccessories(
  category,
  selection,
  optionsAvailable,
  optionsSelected,
  popup
) {
  // Check if the interiorAccessory is already selected
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {});

  let updatedOptionsSelected = produce(optionsSelected, (draft) => {
    if (selection.isChecked) {
      const categoryExists =
        Dependencies[category] && Dependencies[category].rivals;
      const selectionInRivals =
        categoryExists &&
        Dependencies[category].rivals.hasOwnProperty(selection.id);

      if (!categoryExists || !selectionInRivals) {
        // Scenario A: Add to optionsSelected
        addToOptionsSelected(category, selection, optionsAvailable, draft);
      }
    } else {
      // Scenario C: Remove from optionsSelected
      removeFromOptionsSelected(category, selection, optionsAvailable, draft);
    }
  });

  let newPopup = produce(popup, (draft) => {
    if (selection.isChecked) {
      const categoryExists =
        Dependencies[category] && Dependencies[category].rivals;
      const selectionInRivals =
        categoryExists &&
        Dependencies[category].rivals.hasOwnProperty(selection.id);

      if (selectionInRivals) {
        // Scenario B: Update popup
        return createPopupMessage(selection.id, popup); // Directly return the new popup object
      }
    }
  });

  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: updatedOptionsSelected,
    popup: newPopup,
  };
}

//Handle PopupConfirm
export function handlePopupConfirm(optionsAvailable, optionsSelected, popup) {
  let newPopup = produce(popup, (draft) => {});
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {});

  // Update the optionsSelected object
  let newOptionsSelected = produce(optionsSelected, (draft) => {
    // Check if 'select' action exists and has choices to process
    if (popup.action.select && popup.action.select.choices.length > 0) {
      const { category, choices } = popup.action.select;
      choices.forEach((choice) => {
        addToOptionsSelected(category, choice, optionsAvailable, draft);
      });
    }

    // Check if 'deselect' action exists and has choices to process
    if (popup.action.deselect && popup.action.deselect.choices.length > 0) {
      const { category, choices } = popup.action.deselect;
      choices.forEach((choice) => {
        removeFromOptionsSelected(category, choice, optionsAvailable, draft);
      });
    }
    // If neither 'select' nor 'deselect' are present, draft remains unchanged
  });
  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
    popup: newPopup,
  };
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

//Add to oprionsSelected a selected 'option'
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

//Removes from optionsSelected an unselected 'option'
function removeFromOptionsSelected(
  category,
  selection,
  optionsAvailable,
  draft
) {
  if (draft[category]) {
    if (optionsAvailable[category].type === "Dropdown") {
      // For Dropdown, clear the choices array
      draft[category].choices = [];
    } else if (optionsAvailable[category].type === "CheckBoxGroup") {
      // For CheckBoxGroup, filter out the specific choice
      draft[category].choices = draft[category].choices.filter(
        (choice) => choice.id !== selection.id
      );
    }
  }
}

//Add to optionsSelected components of a package selected
function addPackageComponents1(selection, newOptionsAvailable, draft) {
  const packageDependencies = Dependencies.packages.components[selection.id];
  if (packageDependencies) {
    Object.keys(packageDependencies).forEach((dependencyKey) => {
      packageDependencies[dependencyKey].forEach((depId) => {
        const choice = newOptionsAvailable[dependencyKey].choices.find(
          (choice) => choice.id === depId
        );
        console.log(dependencyKey);
        console.log(newOptionsAvailable);
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

function addPackageComponents2(selection, optionsAvailable, draft) {
  const packageDependencies = Dependencies.packages.components[selection.id];
  if (packageDependencies) {
    Object.keys(packageDependencies).forEach((dependencyKey) => {
      packageDependencies[dependencyKey].forEach((depId) => {
        const choice = optionsAvailable[dependencyKey].choices.find(
          (choice) => choice.id === depId
        );
        console.log(dependencyKey);
        console.log(optionsAvailable);
        if (choice) {
          const choiceWithComponent = {
            ...choice,
            name: choice.name + " - Included in Package",
            component: selection.id,
          };
          // Determine the type of the option to decide how to update the draft
          const optionType = AllOptions[dependencyKey].type;
          switch (optionType) {
            case "CheckBoxGroup":
              console.log("case CheckBoxGroup");
              // Ensure the choices array exists
              draft[dependencyKey].choices = draft[dependencyKey].choices || [];
              // Add the choiceWithComponent to the choices array
              draft[dependencyKey].choices.push(choiceWithComponent);
              break;
            case "Dropdown":
              console.log("case Dropdown");
              // Replace the choices array with the choiceWithComponent
              draft[dependencyKey].choices = [choiceWithComponent];
              break;
            default:
              // Handle other types or log an error/warning if needed
              console.warn(`Unhandled option type: ${optionType}`);
          }
        }
      });
    });
  }
}

function addPackageComponents(selection, newOptionsAvailable, draft) {
  const packageDependencies = Dependencies.packages.components[selection.id];
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
          // Check if the option type is CheckBoxGroup or Dropdown
          const optionType = AllOptions[dependencyKey].type;
          if (!draft[dependencyKey]) {
            draft[dependencyKey] = {
              type: optionType,
              choices: [],
            };
          }
          if (optionType === "CheckBoxGroup") {
            // Add to choices array for CheckBoxGroup
            draft[dependencyKey].choices.push(choiceWithComponent);
          } else if (optionType === "Dropdown") {
            // Replace choices array for Dropdown
            draft[dependencyKey].choices = [choiceWithComponent];
          }
        }
      });
    });
  }
}

//Removes from optionsSelected, components of a package unselected
function removePackageComponents(selection, optionsAvailable, draft) {
  const packageDependencies = Dependencies.packages.components[selection.id];
  if (packageDependencies) {
    Object.keys(packageDependencies).forEach((dependencyKey) => {
      packageDependencies[dependencyKey].forEach((depId) => {
        if (draft[dependencyKey]) {
          if (optionsAvailable[dependencyKey].type === "Dropdown") {
            // For Dropdown, clear the choices array
            // draft[dependencyKey].choices = [];
          } else if (optionsAvailable[dependencyKey].type === "CheckBoxGroup") {
            // For CheckBoxGroup, filter out the specific choice
            draft[dependencyKey].choices = draft[dependencyKey].choices.filter(
              (choice) => choice.id !== depId
            );
          }
        }
      });
    });
  }
}

//Changes the optionsAvailable to account for being part of package selected
function updateOptionsAvailableWithPackageComponents(selection, draft) {
  const packageDependencies = Dependencies.packages.components[selection.id];
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

//Resets the optionsAvailable to default after a package is unselected
function resetOptionsAvailableWithPackageComponents(selection, draft) {
  const packageDependencies = Dependencies.packages.components[selection.id];
  if (packageDependencies) {
    Object.keys(packageDependencies).forEach((dependencyKey) => {
      packageDependencies[dependencyKey].forEach((depId) => {
        // Find the index of the choice in the draft
        const choiceIndex = draft[dependencyKey].choices.findIndex(
          (choice) => choice.id === depId
        );
        if (choiceIndex !== -1) {
          const defaultOption = AllOptions[dependencyKey].choices.find(
            (choice) => choice.id === depId
          );
          // Reset to default
          draft[dependencyKey].choices[choiceIndex].name = defaultOption.name;
          draft[dependencyKey].choices[choiceIndex].price = defaultOption.price;
          delete draft[dependencyKey].choices[choiceIndex].component;
        }
      });
    });
  }
}

function checkIfRivalSelected(category, selection, optionsSelected) {
  let rivalStatus = { selected: false, actionDetails: {} };

  if (Dependencies[category] && Dependencies[category].rivals) {
    let rivalExist = Dependencies[category].rivals[selection.id] !== undefined;
    if (rivalExist) {
      let rivalObject = Dependencies[category].rivals[selection.id];

      // Iterate over the keys in the rivalObject to find the deselectCategory
      for (let deselectCategory in rivalObject) {
        let rivalID = rivalObject[deselectCategory];

        if (
          optionsSelected[deselectCategory] &&
          optionsSelected[deselectCategory].choices
        ) {
          optionsSelected[deselectCategory].choices.forEach((choice) => {
            if (rivalID && rivalID.includes(choice.id)) {
              rivalStatus.selected = true;
              // Prepare actionDetails for the popup
              rivalStatus.actionDetails = createPopupConfirmDetails(
                category,
                selection.id,
                deselectCategory,
                choice.id
              );
            }
          });
        }
      }
    }
  }
  return rivalStatus;
}

function createPopupConfirmDetails(
  selectCategory,
  selectId,
  deselectCategory,
  deselectId
) {
  return {
    select: {
      category: selectCategory,
      choices: [{ id: selectId }],
    },
    deselect: {
      category: deselectCategory,
      choices: [{ id: deselectId }],
    },
  };
}

// Main popup creator function
function createPopupMessage(selectionId, draft, actionDetails) {
  draft.show = true;
  draft.message = `Selecting ${selectionId} will change other selections.`;
  draft.action = actionDetails; // Add action details to the popup
}

// ------------------------------
// EXPORTS SECTION
// ------------------------------
export { AllOptions, InitialOptionsAvailable, Dependencies };

let actionDetails = {
  select: {
    category: "exteriorAccessories",
    choices: [{ id: "EAC5" }],
  },
  deselect: {
    category: "exteriorAccessories",
    choices: [{ id: "EAC4" }],
  },
};
let testObject = {
  exteriorAccessories: {
    rivals: {
      EAC4: {
        exteriorAccessories: ["EAC5"],
      },
      EAC5: {
        exteriorAccessories: ["EAC4"],
      },
      EAC6: {
        interiorColor: ["IC1"],
      },
    },
  },
};

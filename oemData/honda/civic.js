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
      { id: "HBEXL", name: "Hatchback EX-L", price: 28650 },
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
      { id: "HPD", name: "HPD Package", price: 750 },
      { id: "PP3", name: "Package III", price: 500 },
    ],
  },
  exteriorAccessories: {
    displayName: "Exterior Accessories",
    type: "CheckBoxGroup",
    choices: [
      { id: "BIKE", name: "Bike Attachment Frame Mount", price: 399 },
      { id: "BSM", name: "Body Side Moulding", price: 500 },
      { id: "DLS", name: "Decklid Spoiler", price: 500 },
      { id: "SGS", name: "Splash Guard Set", price: 500 },
      { id: "EAC1", name: "EA-Component1", price: 500 },
      { id: "EAC2", name: "EA-Component2", price: 500 },
      { id: "EAC3", name: "EA-Component3", price: 500 },
      { id: "KAY", name: "Kayak Attachment", price: 264 },
      { id: "EAC4", name: "Rival Acccessory 4", price: 500 },
      { id: "EAC5", name: "Rival Acccessory 5", price: 500 },
      { id: "HPDE", name: "HPD Emblem", price: 150 },
      { id: "HPDT", name: "HPD Tailgate Spoiler", price: 150 },
      { id: "RR", name: "Roof Rack", price: 399 },
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
    HBEXL: {
      powertrain: ["Turbo"], // Assuming only Turbo is available for Type R
      exteriorColor: ["Red", "Black"],
      packages: ["ASP1", "ASP2", "HPD", "PP3"],
      exteriorAccessories: [
        "BIKE",
        "BSM",
        "DLS",
        "SGS",
        "EAC1",
        "EAC2",
        "EAC3",
        "KAY",
        "HPDE",
        "HPDT",
        "RR",
      ],
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
      HPD: {
        exteriorAccessories: ["HPDE", "HPDT"],
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
    parent: {
      RR: { exteriorAccessories: ["BIKE", "KAY"] },
    },
    child: {
      BIKE: { exteriorAccessories: ["RR"] },
      KAY: { exteriorAccessories: ["RR"] },
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
      { id: "HBEXL", name: "Hatchback EX-L", price: 28650 },
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

export function handlePopupConfirm1(optionsAvailable, optionsSelected, popup) {
  let newPopup = produce(popup, (draft) => {});
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {});
  // Update the optionsSelected object
  let newOptionsSelected = produce(optionsSelected, (draft) => {
    // Process 'select' details if they exist and have choices to process
    if (popup.details.select && popup.details.select.length > 0) {
      popup.details.select.forEach((detail) => {
        const { category, choices } = detail;
        if (choices && choices.length > 0) {
          choices.forEach((choice) => {
            addToOptionsSelected(category, choice, optionsAvailable, draft);
          });
        }
      });
    }

    // Process 'deselect' details if they exist and have choices to process
    if (popup.details.deselect && popup.details.deselect.length > 0) {
      popup.details.deselect.forEach((detail) => {
        const { category, choices } = detail;
        if (choices && choices.length > 0) {
          choices.forEach((choice) => {
            removeFromOptionsSelected(
              category,
              choice,
              optionsAvailable,
              draft
            );
          });
        }
      });
    }
    // If neither 'select' nor 'deselect' actions are present, draft remains unchanged
  });

  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
    popup: newPopup,
  };
}

export function handlePopupConfirm2(optionsAvailable, optionsSelected, popup) {
  let newPopup = produce(popup, (draft) => {});
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {}); // Keep optionsAvailable unchanged for now
  let newOptionsSelected = produce(optionsSelected, (draft) => {}); // Keep optionsSelected unchanged for now
  // Process 'select' details if they exist and have choices to process
  if (popup.details.select && popup.details.select.length > 0) {
    popup.details.select.forEach((detail) => {
      const { category, choices } = detail;
      if (choices && choices.length > 0) {
        choices.forEach((choice) => {
          newOptionsSelected = produce(optionsSelected, (draft) => {
            addToOptionsSelected(category, choice, optionsAvailable, draft);
          });
          if (category === "packages") {
            newOptionsAvailable = produce(optionsAvailable, (draft) => {
              // Update the package'components'  optionsAvailable as needed
              updateOptionsAvailableWithPackageComponents(choice, draft);
            });
            newOptionsSelected = produce(optionsSelected, (draft) => {
              // Add the package 'components' options
              addPackageComponents(choice, optionsAvailable, draft);
            });
          }
        });
      }
    });
  }

  // Process 'deselect' details if they exist and have choices to process
  if (popup.details.deselect && popup.details.deselect.length > 0) {
    popup.details.deselect.forEach((detail) => {
      const { category, choices } = detail;
      if (choices && choices.length > 0) {
        choices.forEach((choice) => {
          newOptionsSelected = produce(optionsSelected, (draft) => {
            removeFromOptionsSelected(
              category,
              choice,
              optionsAvailable,
              draft
            );
          });
          console.log(category);
          console.log(choice);
          if (category === "packages") {
            newOptionsAvailable = produce(optionsAvailable, (draft) => {
              // Reset the package'components'  optionsAvailable as needed
              resetOptionsAvailableWithPackageComponents(choice, draft);
            });
            newOptionsSelected = produce(optionsSelected, (draft) => {
              // Remove the package 'components' options
              removePackageComponents(choice, optionsAvailable, draft);
            });
          }
        });
      }
    });
  }

  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
    popup: newPopup,
  };
}

export function handlePopupConfirm(optionsAvailable, optionsSelected, popup) {
  let newPopup = produce(popup, (draft) => {});
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {}); // Keep optionsAvailable unchanged for now
  let newOptionsSelected = produce(optionsSelected, (draft) => {}); // Keep optionsSelected unchanged for now

  // Process 'select' details if they exist and have choices to process
  if (popup.details.select && popup.details.select.length > 0) {
    popup.details.select.forEach((detail) => {
      const { category, choices } = detail;
      if (choices && choices.length > 0) {
        choices.forEach((choice) => {
          if (category === "packages") {
            // First, update optionsAvailable with package components
            newOptionsAvailable = produce(newOptionsAvailable, (draft) => {
              updateOptionsAvailableWithPackageComponents(choice, draft);
            });
            // Then, update optionsSelected with the new state of optionsAvailable
            newOptionsSelected = produce(newOptionsSelected, (draft) => {
              addPackageComponents(choice, newOptionsAvailable, draft);
            });
          } else {
            // For non-package categories, just add to optionsSelected
            newOptionsSelected = produce(newOptionsSelected, (draft) => {
              addToOptionsSelected(
                category,
                choice,
                newOptionsAvailable,
                draft
              );
            });
          }
        });
      }
    });
  }

  // Process 'deselect' details if they exist and have choices to process
  if (popup.details.deselect && popup.details.deselect.length > 0) {
    popup.details.deselect.forEach((detail) => {
      const { category, choices } = detail;
      if (choices && choices.length > 0) {
        choices.forEach((choice) => {
          if (category === "packages") {
            // First, reset optionsAvailable with package components
            newOptionsAvailable = produce(newOptionsAvailable, (draft) => {
              resetOptionsAvailableWithPackageComponents(choice, draft);
            });
            // Then, update optionsSelected with the new state of optionsAvailable
            newOptionsSelected = produce(newOptionsSelected, (draft) => {
              removePackageComponents(choice, newOptionsAvailable, draft);
            });
          } else {
            // For non-package categories, just remove from optionsSelected
            newOptionsSelected = produce(newOptionsSelected, (draft) => {
              removeFromOptionsSelected(
                category,
                choice,
                newOptionsAvailable,
                draft
              );
            });
          }
        });
      }
    });
  }

  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
    popup: newPopup,
  };
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
function handlePowertrain(
  category,
  selection,
  optionsAvailable,
  optionsSelected,
  popup
) {
  // Keep optionsAvailable unchanged
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {});
  // Initialize newOptionsSelected with the current state to be modified conditionally
  let newOptionsSelected = produce(optionsSelected, (draft) => {});
  // Default popup to unchanged, modify conditionally
  let newPopup = produce(popup, (draft) => {});

  // Check if the unselected powertrain was part of a selected package
  if (optionsSelected[category]?.choices?.[0]?.package !== undefined) {
    let componentOptionToUnselect = optionsSelected[category].choices[0];
    //Generate popup warning
    newPopup = produce(popup, (draft) => {
      componentPopupMessage(category, componentOptionToUnselect, draft);
    });
  } else {
    // Add the selected powertrain to optionsSelected
    newOptionsSelected = produce(optionsSelected, (draft) => {
      addToOptionsSelected(category, selection, optionsAvailable, draft);
    });
  }

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

function handlePackages(
  category,
  selection,
  optionsAvailable,
  optionsSelected,
  popup
) {
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {}); //Options available unchanged for now
  let newOptionsSelected = produce(optionsSelected, (draft) => {}); // Keep optionsSelected unchanged for now
  let newPopup = produce(popup, (draft) => {}); // Default to unchanged, modify conditionally

  const rivalStatus = checkIfRivalSelected(
    category,
    selection,
    optionsSelected
  );

  if (selection.isChecked) {
    if (rivalStatus.selected) {
      newPopup = produce(popup, (draft) => {
        rivalPopupMessage(category, selection, draft, rivalStatus.details);
      });
    } else {
      newOptionsAvailable = produce(optionsAvailable, (draft) => {
        // Update the package'components'  optionsAvailable as needed
        updateOptionsAvailableWithPackageComponents(selection, draft);
      });
      //Update the optionsSelected
      newOptionsSelected = produce(optionsSelected, (draft) => {
        // Add the actual 'parent'  package option
        addToOptionsSelected(category, selection, optionsAvailable, draft);
        // Add the package 'components' options
        addPackageComponents(selection, optionsAvailable, draft);
      });
    }
  } else {
    newOptionsAvailable = produce(optionsAvailable, (draft) => {
      //Reset the package 'components' in  optionsAvailable to default
      resetOptionsAvailableWithPackageComponents(selection, draft);
    });
    newOptionsSelected = produce(optionsSelected, (draft) => {
      //Remove the actual 'parent' package selected
      removeFromOptionsSelected(category, selection, optionsAvailable, draft);
      //Remove the package 'components' options
      removePackageComponents(selection, optionsAvailable, draft);
    });
  }

  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
    popup: newPopup,
  };
}

//.....................

function handleExteriorAccessories(
  category,
  selection,
  optionsAvailable,
  optionsSelected,
  popup
) {
  const newOptionsAvailable = produce(optionsAvailable, (draft) => {}); // Options available unchanged
  let newOptionsSelected = produce(optionsSelected, (draft) => {}); // Keep optionsSelected unchanged for now
  let newPopup = produce(popup, (draft) => {}); // Default to unchanged, modify conditionally

  const rivalStatus = checkIfRivalSelected(
    category,
    selection,
    optionsSelected
  );
  let selectionWithPackage = selection;
  if (selection.isChecked) {
    if (rivalStatus.selected) {
      newPopup = produce(popup, (draft) => {
        rivalPopupMessage(category, selection, draft, rivalStatus.details);
      });
    } else {
      newOptionsSelected = produce(optionsSelected, (draft) => {
        addToOptionsSelected(category, selection, optionsAvailable, draft);
      });
    }
  } else {
    // Option unchecked
    if (
      checkIfComponentOfSelectedPackage(category, selection, optionsSelected)
    ) {
      //Retrieve the selection object from  relevant optionsSelected array
      selectionWithPackage = optionsSelected[category].choices.find(
        (c) => c.id === selection.id
      );
      //Create popup message
      newPopup = produce(popup, (draft) => {
        // Now passing the adjusted 'selection' object
        componentPopupMessage(category, selectionWithPackage, draft);
      });
    } else {
      //If unselected option is not part of selected package remove from optionsSelected
      newOptionsSelected = produce(optionsSelected, (draft) => {
        removeFromOptionsSelected(category, selection, optionsAvailable, draft);
      });
    }
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
  const newOptionsAvailable = produce(optionsAvailable, (draft) => {}); // Options available unchanged
  let newOptionsSelected = produce(optionsSelected, (draft) => {}); // Keep optionsSelected unchanged for now
  let newPopup = produce(popup, (draft) => {}); // Default to unchanged, modify conditionally

  const rivalStatus = checkIfRivalSelected(
    category,
    selection,
    optionsSelected
  );
  let selectionWithPackage = selection;
  if (selection.isChecked) {
    if (rivalStatus.selected) {
      newPopup = produce(popup, (draft) => {
        rivalPopupMessage(category, selection, draft, rivalStatus.details);
      });
    } else {
      newOptionsSelected = produce(optionsSelected, (draft) => {
        addToOptionsSelected(category, selection, optionsAvailable, draft);
      });
    }
  } else {
    // Option unchecked
    if (
      checkIfComponentOfSelectedPackage(category, selection, optionsSelected)
    ) {
      //Retrieve the selection object from  relevant optionsSelected array
      selectionWithPackage = optionsSelected[category].choices.find(
        (c) => c.id === selection.id
      );
      //Create popup message
      newPopup = produce(popup, (draft) => {
        // Now passing the adjusted 'selection' object
        componentPopupMessage(category, selectionWithPackage, draft);
      });
    } else {
      //If unselected option is not part of selected package remove from optionsSelected
      newOptionsSelected = produce(optionsSelected, (draft) => {
        removeFromOptionsSelected(category, selection, optionsAvailable, draft);
      });
    }
  }

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
  //If category doesn't already exists, add it
  if (!draft[category]) {
    draft[category] = {
      displayName: AllOptions[category].displayName,
      type: AllOptions[category].type,
      choices: [],
    };
  }

  const selectedOption = AllOptions[category].choices.find(
    (choice) => choice.id === selection.id
  );

  if (AllOptions[category].type === "Dropdown") {
    draft[category].choices = [selectedOption];
  } else if (AllOptions[category].type === "CheckBoxGroup") {
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

//Helper function
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
            package: selection.id,
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
            draft[dependencyKey].choices = [];
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
  let rivalStatus = {
    selected: false,
    details: {},
  };

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
              rivalStatus.details = createPopupConfirmDetails(
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

function checkIfRivalSelected2(category, selection, optionsSelected) {
  let rivalSelected = false;
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
              rivalSelected = true;
            }
          });
        }
      }
    }
  }
  return rivalSelected;
}

function checkIfParentSelected(category, selection, optionsSelected) {
  let parentStatus = {
    selected: false,
    details: {},
  };

  if (Dependencies[category] && Dependencies[category].parent) {
    let parentExist = Dependencies[category].parent[selection.id] !== undefined;
    if (parentExist) {
      let parentObject = Dependencies[category].parent[selection.id];

      // Iterate over the keys in the rivalObject to find the deselectCategory
      for (let deselectCategory in parentObject) {
        let parentID = parentObject[deselectCategory];

        if (
          optionsSelected[deselectCategory] &&
          optionsSelected[deselectCategory].choices
        ) {
          optionsSelected[deselectCategory].choices.forEach((choice) => {
            if (rivalID && rivalID.includes(choice.id)) {
              rivalStatus.selected = true;
              // Prepare actionDetails for the popup
              rivalStatus.details = createPopupConfirmDetails(
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

function checkIfPackageComponent(category, selection, optionsSelected) {
  let componentStatus = { selected: false, component: {}, package: {} };

  //Find the matching choice in the choices array
  //Note only the 'choice' objects in the optionsSelected have stored the 'component' property
  const choice = optionsSelected[category].choices.find(
    (c) => c.id === selection.id
  );

  // Check if the found choice has a 'component' property
  if (choice && choice.hasOwnProperty("package")) {
    componentStatus.selected = true;
    const parentPackage = AllOptions.packages.choices.find(
      (p) => p.id === choice.component
    );
    componentStatus.component = choice;
    componentStatus.package = parentPackage;
  }

  return componentStatus;
}

function checkIfComponentOfSelectedPackage(
  category,
  selection,
  optionsSelected
) {
  let selectionIsComponent = false;
  //Find the matching choice in the choices array
  //Note only the 'choice' objects in the optionsSelected have stored the 'component' property
  const choice = optionsSelected[category].choices.find(
    (c) => c.id === selection.id
  );

  // Check if the found choice has a 'package' property
  if (choice && choice.hasOwnProperty("package")) {
    selectionIsComponent = true;
  }
  return selectionIsComponent;
}

function createPopupConfirmDetails(
  selectCategory,
  selectId,
  deselectCategory,
  deselectId
) {
  return {
    select: [
      {
        category: selectCategory,
        choices: [{ id: selectId }],
      },
    ],
    deselect: [
      {
        category: deselectCategory,
        choices: [{ id: deselectId }],
      },
    ],
  };
}

// Main popup creator function
function createPopupMessage(
  dependencyType,
  category,
  selection,
  draft,
  actionDetails
) {
  draft.show = true;

  draft.action = actionDetails; // Add action details to the popup

  switch (dependencyType) {
    case "rival":
      let selectedOption = AllOptions[category].choices.find(
        (choice) => choice.id === selection.id
      );
      // Initialize the message with the selected option part
      let message = `Selecting ${selectedOption.name} will unselect `;

      // Initialize an empty array to hold the options to deselect
      let optionsToDeselect = [];

      // Iterate over each category in the deselect array of actionDetails
      actionDetails.deselect.forEach((deselectAction) => {
        // Get the category from AllOptions that matches the category in actionDetails
        const categoryOptions = AllOptions[deselectAction.category].choices;

        // Iterate over each choice in the deselectAction
        deselectAction.choices.forEach((choice) => {
          // Find the matching choice in the categoryOptions by id
          const matchingChoice = categoryOptions.find(
            (categoryChoice) => categoryChoice.id === choice.id
          );

          // If a matching choice is found, add it to the optionsToDeselect array
          if (matchingChoice) {
            optionsToDeselect.push(matchingChoice);
          }
        });
      });

      // Construct the deselection part of the message
      if (optionsToDeselect.length > 0) {
        const deselectionNames = optionsToDeselect
          .map((option) => option.name)
          .join(", ");
        const lastCommaIndex = deselectionNames.lastIndexOf(", ");
        const finalDeselectionNames =
          lastCommaIndex > 0
            ? deselectionNames.substring(0, lastCommaIndex) +
              " and" +
              deselectionNames.substring(lastCommaIndex + 1)
            : deselectionNames;

        message += finalDeselectionNames;
      } else {
        message += "no options"; // Fallback text in case there are no options to deselect
      }
      draft.message = message;

      break;
    case "component":
      console.log("component unselected");
      break;
    case "parent":
      console.log("sibling selected");
      break;
    case "child":
      console.log("child selected");
      break;
  }
}

function rivalPopupMessage(category, selection, draft, details) {
  let selectedOption = AllOptions[category].choices.find(
    (choice) => choice.id === selection.id
  );

  // Initialize the message with the selected option part
  let message = `Selecting ${selectedOption.name} will unselect `;

  // Initialize an empty array to hold the options to deselect
  let optionsToDeselect = [];

  // Iterate over each category in the deselect array of actionDetails
  details.deselect.forEach((deselectAction) => {
    // Get the category from AllOptions that matches the category in actionDetails
    const categoryOptions = AllOptions[deselectAction.category].choices;

    // Iterate over each choice in the deselectAction
    deselectAction.choices.forEach((choice) => {
      // Find the matching choice in the categoryOptions by id
      const matchingChoice = categoryOptions.find(
        (categoryChoice) => categoryChoice.id === choice.id
      );

      // If a matching choice is found, add it to the optionsToDeselect array
      if (matchingChoice) {
        optionsToDeselect.push(matchingChoice);
      }
    });
  });

  if (optionsToDeselect.length > 0) {
    const deselectionNames = optionsToDeselect
      .map((option) => option.name)
      .join(", ");
    const lastCommaIndex = deselectionNames.lastIndexOf(", ");
    const finalDeselectionNames =
      lastCommaIndex > 0
        ? deselectionNames.substring(0, lastCommaIndex) +
          " and" +
          deselectionNames.substring(lastCommaIndex + 1)
        : deselectionNames;

    message += finalDeselectionNames;
  }
  draft.show = true;
  draft.message = message;
  draft.details = details; // Add action details to the popup
}

function componentPopupMessage(category, selection, draft) {
  let packageOption = AllOptions.packages.choices.find(
    (choice) => choice.id === selection.package
  );

  let confirmDetails = createComponentPopupDetails(
    category,
    selection.id,
    "packages",
    selection.package
  );

  let truncatedSelectionName = selection.name.replace(
    " - Included in Package",
    ""
  );
  draft.show = true;
  draft.message = `Selecting ${truncatedSelectionName} will unselect the package ${packageOption.name} `;
  draft.details = confirmDetails;
}

function createComponentPopupDetails(
  componentCategory,
  componentOptionID,
  packageCategory,
  packageOptionID
) {
  return {
    select: [
      {
        category: componentCategory,
        choices: [{ id: componentOptionID }],
      },
    ],
    deselect: [
      {
        category: packageCategory,
        choices: [{ id: packageOptionID }],
      },
    ],
  };
}
// ------------------------------
// EXPORTS SECTION
// ------------------------------
export { AllOptions, InitialOptionsAvailable, Dependencies };

//oemData/honda/civic.js
import produce from "immer";
// ------------------------------
// OPTIONS AVAILABLE SECTION
// ------------------------------
const AllOptions = {
  trim: {
    displayName: "Trim",
    type: "Dropdown",
    choices: [
      { id: "LX", name: "Sedan LX", price: 23950 },
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
      {
        id: "standardPowertrain",
        name: "158hp CVT w/2.0L 4-Cyl Engine",
        price: 0,
      },
      { id: "premiumPowertrain", name: "Premium Transmission", price: 0 },
      { id: "turboPowertrain", name: "Turbo Transmission", price: 2500 },
    ],
  },
  exteriorColor: {
    displayName: "Exterior Color",
    type: "Dropdown",
    choices: [
      { id: "BlueEC", name: "Aegean Blue Metallic", price: 0 },
      { id: "BlackEC", name: "Crystal Black Pearl", price: 0 },
      { id: "SilverEC", name: "Lunar Silver Metallic", price: 0 },
      { id: "GrayEC", name: "Meteorite Gray Metallic", price: 0 },
      { id: "RedEC", name: "Rallye Red", price: 0 },
      { id: "PlatinumEC", name: "Platinum White Pearl", price: 455 },
    ],
  },
  interiorColor: {
    displayName: "Interior Color",
    type: "Dropdown",
    choices: [
      { id: "BlackIC", name: "Black Cloth", price: 0 },
      { id: "GrayIC", name: "Gray Cloth", price: 0 },
    ],
  },
  wheels: {
    displayName: "Wheels",
    type: "Dropdown",
    choices: [
      {
        id: "standardWheels",
        name: "16 inch Wheels w/ covers",
        price: 0,
      },
    ],
  },
  packages: {
    displayName: "Packages",
    type: "CheckBoxGroup",
    choices: [
      { id: "ASPack1", name: "All Season Protection Package I", price: 420 },
      { id: "ASPack2", name: "All Season Protection Package II", price: 370 },
      { id: "HPD", name: "HPD Package", price: 1452 },
      { id: "PP3", name: "Package III", price: 300 },
    ],
  },
  exteriorAccessories: {
    displayName: "Exterior Accessories",
    type: "CheckBoxGroup",
    choices: [
      { id: "Bike", name: "Bike Attachment Frame Mount", price: 399 },
      { id: "BSMoulding", name: "Body Side Moulding", price: 247 },
      { id: "DLSpoiler", name: "Decklid Spoiler", price: 329 },
      { id: "DEdgeFilm", name: "Door Edge Film", price: 56 },
      { id: "DEdgeGuard", name: "Door Edge Guard", price: 127 },
      { id: "DHandleFilm", name: "Door Handle Film", price: 56 },
      { id: "DVisorCh", name: "Door Visors-Chrome", price: 236 },
      {
        id: "EmblemsFRH",
        name: "Emblems, Front, Rear H-Mark and Civic-Gloss Black",
        price: 116,
      },
      { id: "EmblemHPD", name: "Emblem-HPD", price: 44 },
      { id: "RBumperApp", name: "Rear Bumper Applique", price: 78 },
      { id: "SGuardSet", name: "Splash Guard Set", price: 116 },
      {
        id: "UBodySpoilerFront",
        name: "Underbody Spoiler-HPD Front",
        price: 365,
      },
      {
        id: "UBodySpoilerRear",
        name: "Underbody Spoiler-HPD Rear",
        price: 329,
      },
      {
        id: "UBodySpoilerSide",
        name: "Underbody Spoiler-HPD Side",
        price: 417,
      },
      { id: "ValveStem", name: "Valve Stem Caps", price: 24 },
      { id: "WheelLocksB", name: "Wheel Locks-Black", price: 94 },
      { id: "WheelLocksC", name: "Wheel Locks-Chrome", price: 65 },
      { id: "WLugNuts", name: "Wheel Lug Nuts-Black", price: 51 },
      { id: "EAC1", name: "EA-Component1- ASP1", price: 500 },
      { id: "EAC2", name: "EA-Component2 - ASP1", price: 500 },
      { id: "EAC3", name: "EA-Component3 -ASP2", price: 500 },
      { id: "KayakAtt", name: "Kayak Attachment", price: 264 },
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
      { id: "ASFloorMat", name: "All Season Floor Mats", price: 183 },
      { id: "CHook", name: "Cargo Hook", price: 15 },
      { id: "CNet", name: "Cargo Net", price: 56 },
      {
        id: "CHWFloorMat",
        name: "Contoured High-Wall Carpet Floor Mats",
        price: 198,
      },
      { id: "DoorSill", name: "Door Sill Protection Film", price: 111 },
      { id: "FirstAid", name: "First Aid Kit", price: 35 },
      { id: "IDoorSill", name: "Illuminated Door Sill Trim", price: 329 },
      { id: "RPWShade", name: "Rear Passenger Window Shades", price: 192 },
      { id: "TTray", name: "Trunk Tray", price: 127 },
      { id: "TTDividers", name: "Trunk Tray Dividers", price: 67 },
      { id: "IAC2", name: "IA-Component2", price: 500 },
      { id: "IAC3", name: "IA-Component3 -ASP2", price: 500 },
      { id: "IAC4", name: "IAC4-Rival To EAC4 ", price: 500 },
      { id: "IAC5", name: "IAC5-Coparent with Roof Rack ", price: 500 },
      { id: "IAC6", name: "IAC6-Interior Rack ", price: 500 },
    ],
  },
  electronicAccessories: {
    displayName: "Electronic Accessories",
    type: "CheckBoxGroup",
    choices: [{ id: "EngBlockHeat", name: "Engine Block Heater", price: 94 }],
  },
};

// ------------------------------
// DEPENDENCIES SECTION

// ------------------------------
const Dependencies = {
  // ... trim dependencies- Each trim is effectively a main ancestor to all other options
  trim: {
    LX: {
      powertrain: ["standardPowertrain"],
      exteriorColor: [
        "BlueEC",
        "BlackEC",
        "SilverEC",
        "GrayEC",
        "RedEC",
        "PlatinumEC",
      ],
      interiorColor: {
        default: ["BlackIC"],
        GrayEC: ["BlackIC", "GrayIC"],
        PlatinumEC: ["BlackIC", "GrayIC"],
      },
      wheels: ["standardWheels"],
      packages: ["ASPack1", "ASPack2", "HPD", "PP3"],
      exteriorAccessories: [
        "BSMoulding",
        "DLSpoiler",
        "DEdgeFilm",
        "DEdgeGuard",
        "DHandleFilm",
        "DVisorCh",
        "EmblemsFRH",
        "EmblemHPD",
        "RBumperApp",
        "SGuardSet",
        "UBodySpoilerFront",
        "UBodySpoilerRear",
        "UBodySpoilerSide",
        "ValveStem",
        "WheelLocksB",
        "WheelLocksC",
        "WLugNuts",
      ],
      interiorAccessories: [
        "ASFloorMat",
        "CHook",
        "CNet",
        "CHWFloorMat",
        "DoorSill",
        "FirstAid",
        "IDoorSill",
        "RPWShade",
        "TTray",
        "TTDividers",
      ],
    },
    Sport: {
      powertrain: ["standardPowertrain", "premiumPowertrain", "Turbo"],
      exteriorColor: [
        "BlueEC",
        "BlackEC",
        "SilverEC",
        "GrayEC",
        "RedEC",
        "PlatinumEC",
      ],
      packages: ["ASP1", "ASP2", "PP3"],
      exteriorAccessories: ["BSM", "DLS", "SGS", "EAC1", "EAC2", "EAC3"],
      interiorAccessories: [
        "ASFloorMat",
        "CH",
        "CN",
        "IAC1",
        "IAC2",
        "IAC3",
        "IAC4",
      ],
    },
    TypeR: {
      powertrain: ["Turbo"], // Assuming only Turbo is available for Type R
      exteriorColor: ["Red", "Black"],
      packages: ["PP3"],
      exteriorAccessories: ["BSM", "DLS", "SGS", "EAC1", "EAC2", "EAC3"],
      interiorAccessories: ["ASFloorMat", "CH", "CN", "IAC1", "IAC2"],
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
      interiorAccessories: [
        "ASFloorMat",
        "CH",
        "CN",
        "IAC1",
        "IAC2",
        "IAC5",
        "IAC6",
      ],
    },
    // ... dependencies for other trims
  },

  //..package dependencies have two types, components & rivals
  packages: {
    components: {
      ASPack1: {
        exteriorAccessories: ["SGuardSet"],
        interiorAccessories: ["ASFloorMat", "TTray"],
      },
      ASPack2: {
        exteriorAccessories: ["WheelLocksC"],
        interiorAccessories: ["ASFloorMat", "TTray"],
      },
      HPD: {
        exteriorAccessories: ["HPDE", "HPDT"],
      },

      PP3: {
        interiorAccessories: ["IAC1", "IAC2"],
      },
    },
    rivals: {
      ASPack1: { packages: ["ASPack2"] },
      ASPack2: { packages: ["ASPack1"] },
    },
  },
  //exteriorAccessories
  exteriorAccessories: {
    rivals: {
      EAC4: {
        exteriorAccessories: ["EAC5"],
        interiorAccessories: ["IAC4"],
      },
      EAC5: {
        exteriorAccessories: ["EAC4"],
      },
    },
    parent: {
      RR: {
        exteriorAccessories: ["BIKE", "KAY"],
        interiorAccessories: ["IAC6"],
      },
    },
    child: {
      BIKE: { exteriorAccessories: ["RR"], interiorAccessories: ["IAC5"] },
      KAY: { exteriorAccessories: ["RR"] },
    },
  },
  //interiorAccessories
  interiorAccessories: {
    rivals: {
      IAC4: { exteriorAccessories: ["EAC4"] },
    },
    parent: {
      IAC5: { exteriorAccessories: ["BIKE"] },
    },
    child: { IAC6: { exteriorAccessories: ["RR"] } },
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
  let newPopup = produce(popup, (draft) => {});
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {}); // Keep optionsAvailable unchanged for now
  let newOptionsSelected = produce(optionsSelected, (draft) => {}); // Keep optionsSelected unchanged for now

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
    case "interiorColor":
      return handleInteriorColor(
        category,
        selection,
        optionsAvailable,
        optionsSelected,
        popup
      );
    case "wheels":
      return handleWheels(
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
        optionsAvailable: newOptionsAvailable,
        optionsSelected: newOptionsSelected,
        popup: newPopup,
      };
  }
}

export function handlePopupConfirm(optionsAvailable, optionsSelected, popup) {
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {}); // Keep optionsAvailable unchanged for now
  let newOptionsSelected = produce(optionsSelected, (draft) => {}); // Keep optionsSelected unchanged for now

  const DEFAULT_POPUP_STATE = {
    show: false,
    message: "",
    details: {},
  };

  // Reset the popup state to default at the start of function execution
  let newPopup = produce(DEFAULT_POPUP_STATE, (draft) => {});

  switch (popup.details.action) {
    case "rivalSelected":
      const rivalCategory = popup.details.unselect.rivalCategory;
      const rivalOptionIDs = popup.details.unselect.rivalOptionIDs;
      // Unselect rival options
      rivalOptionIDs.forEach((id) => {
        const rivalOption = {
          id: id,
          isChecked: false,
        };
        let results = handleOptionChanged(
          rivalCategory,
          rivalOption,
          newOptionsAvailable,
          newOptionsSelected,
          newPopup
        );
        newOptionsAvailable = results.optionsAvailable;
        newOptionsSelected = results.optionsSelected;
        newPopup = results.popup;
      });
      // Select the new option
      const selectedCategory = popup.details.select.selectedOptionCategory;
      const selectedOption = {
        id: popup.details.select.selectedOptionID,
        isChecked: true,
      };
      return handleOptionChanged(
        selectedCategory,
        selectedOption,
        newOptionsAvailable,
        newOptionsSelected,
        newPopup
      );

    case "packageComponentUnselected":
      return handlePackages(
        "packages",
        {
          id: popup.details.unselect.packageID,
          isChecked: false,
        },
        newOptionsAvailable,
        newOptionsSelected,
        newPopup
      );

    case "parentUnselected":
      newOptionsSelected = produce(newOptionsSelected, (draft) => {
        const parentCategory = popup.details.unselect.parentCategory;
        const parentOption = AllOptions[parentCategory]?.choices.find(
          (option) => option.id === popup.details.unselect.parentID
        );

        if (parentOption) {
          removeFromOptionsSelected(
            parentCategory,
            parentOption,
            optionsAvailable,
            draft
          );
        }

        popup.details.unselect.child.forEach((child) => {
          removeOptions(child.category, child.choices, draft, optionsAvailable);
        });
      });
      break;

    case "childSelected":
      newOptionsSelected = produce(newOptionsSelected, (draft) => {
        const childCategory = popup.details.select.childCategory;
        const childOption = AllOptions[childCategory]?.choices.find(
          (option) => option.id === popup.details.select.childID
        );

        if (childOption) {
          addToOptionsSelected(childCategory, childOption, draft);
        }

        popup.details.select.parent.forEach((parent) => {
          addOptions(parent.category, parent.choices, draft, optionsAvailable);
        });
      });
      break;
    default:
    // code block
  }

  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
    popup: newPopup,
  };
}

//Callback functions for handleOptionChange

function handleTrim(
  category,
  selection,
  optionsAvailable,
  optionsSelected,
  popup
) {
  // Reset previously selected options to ensure a clean state
  let resetOptionsSelected = {};
  let newOptionsSelected = produce(resetOptionsSelected, (draft) => {
    addToOptionsSelected(category, selection, draft);
  });

  // Initialize a new options available object, starting with a clean slate
  let newOptionsAvailable = produce({}, (draft) => {
    // Safely copy the trim object or fallback if undefined
    draft.trim = optionsAvailable.trim || AllOptions.trim;

    // Check if dependencies for the selected trim are defined and correct
    const trimDependencies = Dependencies.trim[selection.id];
    Object.keys(trimDependencies).forEach((dependencyKey) => {
      if (Dependencies.trim && Dependencies.trim[selection.id]) {
        if (Array.isArray(trimDependencies[dependencyKey])) {
          // Filter choices based on dependency ids for arrays
          draft[dependencyKey] = {
            ...AllOptions[dependencyKey],
            choices: AllOptions[dependencyKey].choices.filter((choice) =>
              trimDependencies[dependencyKey].includes(choice.id)
            ),
          };
        } else {
          // Handle object dependencies using default configurations
          draft[dependencyKey] = {
            ...AllOptions[dependencyKey],
            choices: AllOptions[dependencyKey].choices.filter((choice) =>
              trimDependencies[dependencyKey].default.includes(choice.id)
            ),
          };
        }
      }
    });
  });

  // Update popup state if needed (this function is just a placeholder)
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
      addToOptionsSelected(category, selection, draft);
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
  const trimDependencies =
    Dependencies.trim[optionsSelected.trim.choices[0].id];
  let availableInteriorColors = trimDependencies.interiorColor.default; // default interior colors

  // Initialize newOptionsSelected by calling addToOptionsSelected
  let newOptionsSelected = produce(optionsSelected, (draft) => {
    addToOptionsSelected(category, selection, draft);
  });

  if (trimDependencies.interiorColor[selection.id]) {
    availableInteriorColors = trimDependencies.interiorColor[selection.id];
  }
  // Work on code to add the availableColors to the optionsAvailable object
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {
    changeOptionsAvailable("interiorColor", availableInteriorColors, draft);
  });
  let newPopup = produce(popup, (draft) => {});

  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
    popup: newPopup,
  };
}

//Handle exteriorColor change
function handleInteriorColor(
  category,
  selection,
  optionsAvailable,
  optionsSelected,
  popup
) {
  // Initialize newOptionsSelected by calling addToOptionsSelected
  let newOptionsSelected = produce(optionsSelected, (draft) => {
    addToOptionsSelected(category, selection, draft);
  });

  let newOptionsAvailable = produce(optionsAvailable, (draft) => {});
  let newPopup = produce(popup, (draft) => {});
  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
    popup: newPopup,
  };
}

function handleWheels(
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

  // Check if the unselected wheels was part of a selected package
  if (optionsSelected[category]?.choices?.[0]?.package !== undefined) {
    let componentOptionToUnselect = optionsSelected[category].choices[0];
    //Generate popup warning
    newPopup = produce(popup, (draft) => {
      componentPopupMessage(category, componentOptionToUnselect, draft);
    });
  } else {
    // Add the selected wheel to optionsSelected
    newOptionsSelected = produce(optionsSelected, (draft) => {
      addToOptionsSelected(category, selection, draft);
    });
  }

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
        addToOptionsSelected(category, selection, draft);
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

  let rivalExist = Boolean(Dependencies[category].rivals?.[selection.id]);
  let parentExist = Boolean(Dependencies[category].child?.[selection.id]);
  let childExist = Boolean(Dependencies[category].parent?.[selection.id]);

  let rivalStatus = { selected: false, details: {} };
  let parentStatus = { selected: false, details: {} };
  let childStatus = { selected: false, details: {} };

  // Conditionally update statuses
  if (rivalExist) {
    rivalStatus = checkIfRivalSelected(category, selection, optionsSelected);
  }
  if (parentExist) {
    parentStatus = checkIfParentSelected(category, selection, optionsSelected);
  }

  if (childExist) {
    childStatus = checkIfChildSelected(category, selection, optionsSelected);
  }

  if (selection.isChecked) {
    // If rival is selected, update the popup and keep optionsSelected unchanged
    if (rivalExist && rivalStatus.selected) {
      newPopup = produce(popup, (draft) => {
        rivalPopupMessage(category, selection, draft, rivalStatus.details);
      });
    } else {
      if (parentExist && !parentStatus.selected) {
        newPopup = produce(popup, (draft) => {
          parentPopupMessage(category, selection, draft, parentStatus.details);
        });
      } else {
        newOptionsSelected = produce(optionsSelected, (draft) => {
          addToOptionsSelected(category, selection, draft);
        });
      }
    }
  } else {
    // If option unchecked then check if option is a 'component' of a currently selected package
    if (
      checkIfComponentOfSelectedPackage(category, selection, optionsSelected)
    ) {
      //Retrieve the selection object from  relevant optionsSelected array
      let selectionWithPackage = optionsSelected[category].choices.find(
        (c) => c.id === selection.id
      );
      //Create popup message
      newPopup = produce(popup, (draft) => {
        //Pass the component'selection' object which contains the package info
        componentPopupMessage(category, selectionWithPackage, draft);
      });
    } else {
      if (childExist && childStatus.selected) {
        newPopup = produce(popup, (draft) => {
          childPopupMessage(category, selection, draft, childStatus.details);
        });
      } else {
        //If unselected option is not part of selected 'package' or a parent of a selected 'child' option, then remove from optionsSelected
        newOptionsSelected = produce(optionsSelected, (draft) => {
          removeFromOptionsSelected(
            category,
            selection,
            optionsAvailable,
            draft
          );
        });
      }
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

  let rivalExist = Boolean(Dependencies[category].rivals?.[selection.id]);
  let parentExist = Boolean(Dependencies[category].child?.[selection.id]);
  let childExist = Boolean(Dependencies[category].parent?.[selection.id]);

  let rivalStatus = { selected: false, details: {} };
  let parentStatus = { selected: false, details: {} };
  let childStatus = { selected: false, details: {} };

  // Conditionally update statuses
  if (rivalExist) {
    rivalStatus = checkIfRivalSelected(category, selection, optionsSelected);
  }
  if (parentExist) {
    parentStatus = checkIfParentSelected(category, selection, optionsSelected);
  }

  if (childExist) {
    childStatus = checkIfChildSelected(category, selection, optionsSelected);
  }

  if (selection.isChecked) {
    // If rival is selected, update the popup and keep optionsSelected unchanged
    if (rivalExist && rivalStatus.selected) {
      newPopup = produce(popup, (draft) => {
        rivalPopupMessage(category, selection, draft, rivalStatus.details);
      });
    } else {
      if (parentExist && !parentStatus.selected) {
        newPopup = produce(popup, (draft) => {
          parentPopupMessage(category, selection, draft, parentStatus.details);
        });
      } else {
        newOptionsSelected = produce(optionsSelected, (draft) => {
          addToOptionsSelected(category, selection, draft);
        });
      }
    }
  } else {
    // If option unchecked then check if option is a 'component' of a currently selected package
    if (
      checkIfComponentOfSelectedPackage(category, selection, optionsSelected)
    ) {
      //Retrieve the selection object from  relevant optionsSelected array
      let selectionWithPackage = optionsSelected[category].choices.find(
        (c) => c.id === selection.id
      );
      //Create popup message
      newPopup = produce(popup, (draft) => {
        //Pass the component'selection' object which contains the package info
        componentPopupMessage(category, selectionWithPackage, draft);
      });
    } else {
      if (childExist && childStatus.selected) {
        newPopup = produce(popup, (draft) => {
          childPopupMessage(category, selection, draft, childStatus.details);
        });
      } else {
        //If unselected option is not part of selected 'package' or a parent of a selected 'child' option, then remove from optionsSelected
        newOptionsSelected = produce(optionsSelected, (draft) => {
          removeFromOptionsSelected(
            category,
            selection,
            optionsAvailable,
            draft
          );
        });
      }
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

function changeOptionsAvailable(category, selection, draft) {
  // Ensure the category exists with initialization if necessary
  if (!draft[category]) {
    draft[category] = {
      displayName: AllOptions[category].displayName,
      type: AllOptions[category].type,
      choices: [],
    };
  }

  // Retrieve all selectedOption objects based on selection array of ids
  let errors = [];
  const selectedOptions = selection
    .map((sel) => {
      let foundChoice = AllOptions[category].choices.find(
        (choice) => choice.id === sel
      );
      if (!foundChoice) {
        errors.push(`No choice found for ID ${sel}`);
        return null;
      }
      return foundChoice;
    })
    .filter(Boolean); // This will filter out any null results if an id is not found

  // Error handling: log or handle errors
  if (errors.length > 0) {
    console.error(
      "Errors occurred while retrieving choices:",
      errors.join(", ")
    );
    // Optionally, handle these errors more gracefully
  }

  // Replace the choices array with the new array of selectedOption objects
  draft[category].choices = selectedOptions;
}

//Add to oprionsSelected a selected 'option'
function addToOptionsSelected(category, selection, draft) {
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
            // Check if the choice already exists in the array
            const existingIndex = draft[dependencyKey].choices.findIndex(
              (existingChoice) => existingChoice.id === choiceWithComponent.id
            );
            if (existingIndex !== -1) {
              // Replace the existing choice with the updated one
              draft[dependencyKey].choices[existingIndex] = choiceWithComponent;
            } else {
              // Add new choice if it doesn't exist
              draft[dependencyKey].choices.push(choiceWithComponent);
            }
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

  let rivalObject = Dependencies[category].rivals[selection.id];

  for (let unselectCategory in rivalObject) {
    let rivalIDs = rivalObject[unselectCategory]; // Ensure this is an array

    if (
      optionsSelected[unselectCategory] &&
      optionsSelected[unselectCategory].choices
    ) {
      optionsSelected[unselectCategory].choices.forEach((choice) => {
        if (rivalIDs && rivalIDs.includes(choice.id)) {
          rivalStatus.selected = true;
          //Handle the assignment to rivalStatus.details
          rivalStatus.details = {
            action: "rivalSelected",
            select: {
              selectedOptionCategory: category, //Add the actual 'option' selected
              selectedOptionID: selection.id,
            },

            unselect: {
              rivalCategory: unselectCategory, //Add the 'rival' options from the Dependencies object
              rivalOptionIDs: rivalIDs.map((id) => id), // map rivalIDs to objects
            },
          };
        }
      });
    }
  }
  return rivalStatus;
}

function checkIfParentSelected(category, selection, optionsSelected) {
  let parentStatus = {
    selected: true, // Assume true initially
    details: {},
  };

  let parentObject = Dependencies[category].child?.[selection.id];
  let parentsArray = [];

  for (let parentCategory in parentObject) {
    let parentIDs = parentObject[parentCategory];

    // Retrieve all selected choices from parentCategory
    const choices = optionsSelected[parentCategory]?.choices || [];

    // Check if all required IDs are present in the current optionsSelected object
    let isParentSelected = parentIDs.every((parentID) =>
      choices.some((choice) => choice.id === parentID)
    );

    // If any required ID is not selected, update parentStatus and add to the parentsArray
    if (!isParentSelected) {
      parentStatus.selected = false; // Set selected to false if any parent ID is missing
      parentsArray.push({
        category: parentCategory,
        choices: parentIDs.map((id) => ({ id })),
      });
    }
  }

  // Update details only if there are missing parent entries
  if (!parentStatus.selected) {
    parentStatus.details = {
      action: "childSelected",
      select: {
        childCategory: category,
        childID: selection.id,
        parent: parentsArray,
      },
    };
  }

  return parentStatus;
}

function checkIfChildSelected(category, selection, optionsSelected) {
  let childStatus = {
    selected: false,
    details: {},
  };

  let childObject = Dependencies[category].parent?.[selection.id];
  // This will hold all child categories and their selected IDs
  let childArray = [];

  // Iterate over the keys in the childObject to find the childCategory
  for (let childCategory in childObject) {
    let childIDs = childObject[childCategory]; // Assuming this is an array of strings

    // Retrieve all selected options with childCategory
    const selectedChoices = optionsSelected[childCategory]?.choices || [];

    //Find any child options in current optionsSelected object
    const selectedChildIds = childIDs.filter((childID) =>
      selectedChoices.some((choice) => choice.id === childID)
    );

    if (selectedChildIds.length > 0) {
      childStatus.selected = true;
      childArray.push({
        category: childCategory,
        choices: selectedChildIds.map((id) => ({ id })),
      });
    }
  }

  if (childStatus.selected) {
    // Create details object to be used later in popup confirmation action
    childStatus.details = {
      action: "parentUnselected",
      unselect: {
        parentCategory: category,
        parentID: selection.id, // Unselect the actual parent option unchecked
        child: childArray, // Include all child options that are currently selected
      },
    };
  }

  return childStatus;
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

  // Check if the found choice has a 'component' property
  if (choice && choice.hasOwnProperty("component")) {
    selectionIsComponent = true;
  }
  return selectionIsComponent;
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
  details.unselect.rivalOptionIDs.forEach((id) => {
    // Get the category from AllOptions that matches the category in actionDetails
    const rivalOption = AllOptions[details.unselect.rivalCategory].choices.find(
      (option) => option.id === id
    );

    if (rivalOption) {
      optionsToDeselect.push(rivalOption);
    }
  });

  if (optionsToDeselect.length > 0) {
    const unselectionNames = optionsToDeselect
      .map((option) => option.name)
      .join(", ");
    const lastCommaIndex = unselectionNames.lastIndexOf(", ");
    const finalUnselectionNames =
      lastCommaIndex > 0
        ? unselectionNames.substring(0, lastCommaIndex) +
          " and" +
          unselectionNames.substring(lastCommaIndex + 1)
        : unselectionNames;
    message += finalUnselectionNames;
  }
  draft.show = true;
  draft.message = message;
  draft.details = details; // Add action details to the popup
}

function componentPopupMessage(category, selection, draft) {
  let packageOption = AllOptions.packages.choices.find(
    (choice) => choice.id === selection.component
  );
  const componentOption = AllOptions[category].choices.find(
    (option) => option.id === selection.id
  );

  draft.show = true;
  draft.message = `Unselecting ${componentOption.name} will also unselect the package ${packageOption.name} `;
  draft.details = {
    action: "packageComponentUnselected",
    unselect: {
      componentCategory: category,
      componentID: selection.id,
      packageID: selection.component,
    },
  };
}

function parentPopupMessage(category, selection, draft, details) {
  let selectedOption = AllOptions[category].choices.find(
    (choice) => choice.id === selection.id
  );
  let parentOptionsArray = [];

  details.select.parent.forEach((parent) => {
    parent.choices.forEach((choice) => {
      let option = AllOptions[parent.category].choices.find(
        (option) => option.id === choice.id
      );
      if (option) {
        parentOptionsArray.push({
          id: option.id,
          name: option.name,
          price: option.price,
        });
      }
    });
  });

  const namesList = parentOptionsArray.map((option) => option.name);

  // Create a string that lists the names, inserting 'and' before the last name
  let formattedNames;
  if (namesList.length > 1) {
    formattedNames = `${namesList.slice(0, -1).join(", ")} and ${
      namesList[namesList.length - 1]
    }`;
  } else {
    formattedNames = namesList[0] || "";
  }

  // Create the message incorporating the formatted names
  let message = `Selecting ${selectedOption.name} will also select ${formattedNames}`;

  draft.show = true;
  draft.message = message;
  draft.details = details;
}

function childPopupMessage(category, selection, draft, details) {
  let selectedOption = AllOptions[category].choices.find(
    (choice) => choice.id === selection.id
  );

  // Initialize the message with the selected option part
  let childOptionsArray = [];

  details.unselect.child.forEach((child) => {
    child.choices.forEach((choice) => {
      let option = AllOptions[child.category].choices.find(
        (option) => option.id === choice.id
      );
      if (option) {
        childOptionsArray.push({
          id: option.id,
          name: option.name,
          price: option.price,
        });
      }
    });
  });
  const namesList = childOptionsArray.map((option) => option.name);

  // Create a string that lists the names, inserting 'and' before the last name
  let formattedNames;
  if (namesList.length > 1) {
    formattedNames = `${namesList.slice(0, -1).join(", ")} and ${
      namesList[namesList.length - 1]
    }`;
  } else {
    formattedNames = namesList[0] || "";
  }

  // Create the message incorporating the formatted names
  let message = `Unselecting ${selectedOption.name} will also unselect ${formattedNames}`;

  draft.show = true;
  draft.message = message;
  draft.details = details; // Add action details to the popup
}

// Helper function to remove multiple options from a single category
function removeOptions(category, choices, draft, optionsAvailable) {
  choices.forEach((choice) => {
    let option = AllOptions[category].choices.find(
      (opt) => opt.id === choice.id
    );
    if (option) {
      removeFromOptionsSelected(category, option, optionsAvailable, draft);
    }
  });
}

// Helper function to add multiple options from a single category
function addOptions(category, choices, draft, optionsAvailable) {
  choices.forEach((choice) => {
    let option = AllOptions[category].choices.find(
      (opt) => opt.id === choice.id
    );
    if (option) {
      addToOptionsSelected(category, option, draft);
    }
  });
}

// ------------------------------
// EXPORTS SECTION
// ------------------------------
export { AllOptions, InitialOptionsAvailable, Dependencies };

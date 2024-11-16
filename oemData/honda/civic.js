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
      { id: "SedanLX", name: "Sedan LX", price: 23950, dependency: ["trim"] },
      {
        id: "SedanSport",
        name: "Sedan Sport",
        price: 25050,
        dependency: ["trim"],
      },
      { id: "SedanEX", name: "Sedan EX", price: 26950, dependency: ["trim"] },
      {
        id: "SedanTouring",
        name: "Sedan Touring",
        price: 30550,
        dependency: ["trim"],
      },
      {
        id: "HatchbackLX",
        name: "Hatchback LX",
        price: 24950,
        dependency: ["trim"],
      },
      {
        id: "ModelX",
        name: "Model  X",
        price: 24950,
        dependency: ["trim"],
      },

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
      {
        id: "standardTurbo",
        name: "180hp CVT w/1.5L Turbo 4-Cyl Engine",
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
      { id: "SGrayPearl", name: "Sonic Gray Pearl", price: 455 },
    ],
  },
  interiorColor: {
    displayName: "Interior Color",
    type: "Dropdown",
    choices: [
      { id: "BlackIC", name: "Black Cloth", price: 0 },
      { id: "GrayIC", name: "Gray Cloth", price: 0 },
      { id: "BlackL", name: "Black Leather", price: 0 },
      { id: "GrayL", name: "Gray Leather", price: 0 },
    ],
  },
  wheels: {
    displayName: "Wheels",
    type: "Dropdown",
    choices: [
      {
        id: "standard16WC",
        name: "16 inch Wheels w/ covers",
        price: 0,
      },
      {
        id: "standard16Alloy",
        name: "16 inch Alloy Wheels",
        price: 0,
      },
      {
        id: "18InchGB",
        name: "18-inch Gloss Black Alloy Wheels",
        price: 0,
      },
      {
        id: "18InchAW",
        name: "18-inch Alloy Wheels",
        price: 0,
      },
      {
        id: "18InchBA",
        name: "18-inch Black Alloy Wheels",
        price: 1744,
      },
      {
        id: "17InchAW",
        name: "17-inch Alloy Wheels",
        price: 0,
      },
    ],
  },
  packages: {
    displayName: "Packages",
    type: "CheckBoxGroup",
    choices: [
      {
        id: "ASPack1",
        name: "All Season Protection Package I",
        price: 420,
        dependency: ["components", "rivals"],
      },
      {
        id: "ASPack2",
        name: "All Season Protection Package II",
        price: 370,
        dependency: ["components", "rivals"],
      },
      { id: "HPD", name: "HPD Package", price: 1452 },
      { id: "PP", name: "Protection Package ", price: 300 },
      {
        id: "ASPack1Hatch",
        name: "All Season Protection Package I",
        price: 417,
      },
      {
        id: "ASPack2Hatch",
        name: "All Season Protection Package II",
        price: 367,
      },
      { id: "HPDHatch", name: "HPD Package", price: 799 },
      { id: "PPHatch", name: "Protection Package ", price: 295 },
      { id: "PowerPackage1", name: "Powertrain Package1", price: 500 },
      {
        id: "MXPack1",
        name: "ModX Spec Pack1",
        price: 500,
        dependency: ["components", "rivals"],
      },
    ],
  },
  exteriorAccessories: {
    displayName: "Exterior Accessories",
    type: "CheckBoxGroup",
    choices: [
      { id: "Bike", name: "Bike Attachment Frame Mount", price: 216 },
      { id: "BSMouldingA", name: "Body Side Moulding A", price: 247 },
      { id: "BSMouldingB", name: "Body Side Moulding B", price: 247 },
      { id: "DLSpoiler", name: "Decklid Spoiler-HPD", price: 329 },
      { id: "DEdgeFilm", name: "Door Edge Film", price: 56 },
      { id: "DEdgeGuard", name: "Door Edge Guard", price: 127 },
      { id: "DHandleFilm", name: "Door Handle Film", price: 56 },
      { id: "DVisorCh", name: "Door Visors-Chrome", price: 236 },
      { id: "DVisorBl", name: "Door Visors-Black", price: 236 },
      {
        id: "EmblemsFRH",
        name: "Emblems, Front, Rear H-Mark and Civic-Gloss Black",
        price: 116,
      },

      { id: "EmblemSportGB", name: "Emblem Sport- Gloss Black", price: 41 },
      { id: "EmblemHPD", name: "Emblem-HPD", price: 44 },
      {
        id: "EmblemsFRHHatch",
        name: "Emblems, Front, Rear H-Mark and Civic",
        price: 114,
      },
      { id: "ExtMould", name: "Exterior Moulding", price: 247 },
      { id: "FrontSpoiler", name: "Front Spoiler", price: 270 },
      { id: "Kayak", name: "Kayak Attachment", price: 270 },
      { id: "MoonRVisor", name: "Moon Roof Visor", price: 171 },
      { id: "Visor", name: "Visor", price: 500 },
      { id: "MXHAT", name: "MX Hood Attachment", price: 171 },
      { id: "RBumperApp", name: "Rear Bumper Applique", price: 78 },
      { id: "RBumperProt", name: "Rear Bumper Protector", price: 97 },
      { id: "RearSpoiler", name: "Rear Spoiler", price: 270 },
      { id: "RoofBas", name: "Roof Basket", price: 412 },
      { id: "RBoxMid", name: "Roof Box-Midsize", price: 567 },
      { id: "RBoxShort", name: "Roof Box-Short", price: 534 },
      { id: "RearSpolier", name: "Rear Spoiler", price: 125 },
      { id: "RoofRack", name: "Roof Rack", price: 407 },
      { id: "RoofPins", name: "Roof Pins", price: 100 },
      { id: "SkiSnow", name: "Ski/Snowboard Attachment", price: 287 },
      { id: "Surf", name: "Surf/Paddleboard Attachment", price: 173 },
      { id: "SGuardSet", name: "Splash Guard Set", price: 116 },
      { id: "SpoilerKit", name: "Spoiler Kit", price: 116 },
      { id: "TailGate", name: "Tail Gate Spoiler-HPD ", price: 407 },
      { id: "TowingKit", name: "Towing Kit ", price: 500 },
      { id: "TrailerHitch", name: "Trailing Hitch ", price: 125 },
      { id: "PPEmblem1", name: "Power Pack Emblem1", price: 100 }, //For testing package w/ component in Dropdwown
      { id: "PPEmblem2", name: "Power Pack Emblem2", price: 150 },
      {
        id: "UBodySpoilerFront",
        name: "Underbody Spoiler HPD-Front",
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
      { id: "CargoTray", name: "Cargo Tray", price: 124 },
      { id: "CargoTrayDiv", name: "Cargo Tray Dividers", price: 67 },
      { id: "FirstAid", name: "First Aid Kit", price: 35 },
      { id: "DoorSillProt", name: "Door Sill Protection Film", price: 111 },
      { id: "DoorSillIllum", name: "Door Sill Illumination", price: 329 },
      { id: "IDoorSill", name: "Illuminated Door Sill Trim", price: 329 },
      { id: "IntMould", name: "Interior Moulding", price: 247 },
      { id: "MXInt", name: "MX Interior Rack", price: 171 },
      { id: "RPWShade", name: "Rear Passenger Window Shades", price: 192 },
      { id: "SeatBackProt", name: "Seat Back Protectors", price: 109 },
      { id: "SpoilerController", name: "Spoiler Controller", price: 125 },
      { id: "SpoilerLights", name: "Spoiler Lights", price: 109 },
      { id: "TowingController", name: "Towing Controller", price: 127 },
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

const Dependencies = {
  // ... trim dependencies- Each trim is effectively a main ancestor to all other options
  trim: {
    SedanLX: {
      powertrain: ["standardPowertrain"],
      exteriorColor: [
        "BlueEC",
        "BlackEC",
        "SilverEC",
        "GrayEC",
        "RedEC",
        "PlatinumEC",
      ],
      interiorColor: ["BlackIC"],
      wheels: ["standard16WC"],
      packages: ["ASPack1", "ASPack2", "HPD", "PP"],
      exteriorAccessories: [
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
      electronicAccessories: ["EngBlockHeat"],
    },
    SedanSport: {
      powertrain: ["standardPowertrain"],
      exteriorColor: [
        "BlueEC",
        "BlackEC",
        "SilverEC",
        "GrayEC",
        "RedEC",
        "PlatinumEC",
        "SGrayPearl",
      ],
      interiorColor: ["BlackIC"],
      wheels: ["18InchGB", "18InchBA"],
      packages: ["ASPack1", "ASPack2", "HPD", "PP"],
      exteriorAccessories: [
        "DLSpoiler",
        "DEdgeFilm",
        "DEdgeGuard",
        "DHandleFilm",
        "DVisorBl",
        "EmblemsFRH",
        "EmblemSportGB",
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
        ,
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
      electronicAccessories: ["EngBlockHeat"],
    },
    SedanEX: {
      powertrain: ["standardTurbo"],
      exteriorColor: [
        "BlueEC",
        "BlackEC",
        "SilverEC",
        "GrayEC",
        "RedEC",
        "PlatinumEC",
        "SGrayPearl",
      ],
      interiorColor: ["BlackIC"],
      wheels: ["17InchAW"],
      packages: ["ASPack1", "ASPack2", "HPD", "PP"],
      exteriorAccessories: [
        "DLSpoiler",
        "DEdgeFilm",
        "DEdgeGuard",
        "DHandleFilm",
        "DVisorCh",
        "EmblemsFRH",
        "EmblemHPD",
        "MoonRVisor",
        "RBumperApp",
        "SGuardSet",
        "UBodySpoilerFront",
        "UBodySpoilerRear",
        "UBodySpoilerSide",
        "ValveStem",
        "WheelLocksB",
        "WheelLocksC",
        "WLugNuts",
        ,
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
      electronicAccessories: ["EngBlockHeat"],
    },
    SedanTouring: {
      powertrain: ["standardTurbo"],
      exteriorColor: [
        "BlueEC",
        "BlackEC",
        "SilverEC",
        "GrayEC",
        "RedEC",
        "PlatinumEC",
        "SGrayPearl",
      ],
      interiorColor: ["BlackIC"],
      wheels: ["18InchAW", "18InchBA"],
      packages: ["ASPack1", "ASPack2", "HPD", "PP"],
      exteriorAccessories: [
        "DLSpoiler",
        "DEdgeFilm",
        "DEdgeGuard",
        "DHandleFilm",
        "DVisorCh",
        "EmblemsFRH",
        "EmblemHPD",
        "MoonRVisor",
        "RBumperApp",
        "SGuardSet",
        "UBodySpoilerFront",
        "UBodySpoilerRear",
        "UBodySpoilerSide",
        "ValveStem",
        "WheelLocksB",
        "WheelLocksC",
        "WLugNuts",
        ,
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
      electronicAccessories: ["EngBlockHeat"],
    },
    HatchbackLX: {
      powertrain: [
        "standardPowertrain",
        "premiumPowertrain",
        "turboPowertrain",
      ],
      exteriorColor: ["BlackEC", "SilverEC", "GrayEC", "PlatinumEC"],
      interiorColor: ["BlackIC"],
      wheels: ["standard16Alloy"],
      packages: [
        "ASPack1Hatch",
        "ASPack2Hatch",
        "HPDHatch",
        "PPHatch",
        "PowerPackage1",
      ],
      exteriorAccessories: [
        "Bike",
        "BSMoulding",
        "DEdgeFilm",
        "DEdgeGuard",
        "DHandleFilm",
        "EmblemHPD",
        "EmblemsFRHHatch",
        "Kayak",
        "RBumperProt",
        "RoofBas",
        "RBoxMid",
        "RBoxShort",
        "RoofRack",
        "SkiSnow",
        "Surf",
        "SGuardSet",
        "TailGate",
        "PPEmblem1",
        "PPEmblem2",
        "UBodySpoilerFront",
        "UBodySpoilerRear",
        "UBodySpoilerRear",
        "ValveStem",
        "WheelLocksB",
        "WheelLocksC",
        "WLugNuts",
        ,
      ],
      interiorAccessories: [
        "ASFloorMat",
        "CNet",
        "CHWFloorMat",
        "CargoTray",
        "CargoTrayDiv",
        "DoorSillProt",
        "DoorSillIllum",
        "RPWShade",
        "SeatBackProt",
      ],
      electronicAccessories: ["EngBlockHeat"],
    },
    ModelX: {
      powertrain: [
        "standardPowertrain",
        "premiumPowertrain",
        "turboPowertrain",
      ],
      exteriorColor: ["BlueEC", "BlackEC"],
      interiorColor: ["BlackIC", "BlueIC", "BlackL", "GrayL"],
      wheels: ["standard16Alloy", "18InchBA"],
      packages: ["ASPack1", "ASPack2", "MXPack1", "PowerPackage1"],
      exteriorAccessories: [
        "Bike",
        "BSMouldingB",
        "BSMouldingA",
        "DHandleFilm",
        "ExtMould",
        "FrontSpoiler",
        "Kayak",
        "MoonRVisor",
        "MXHAT",
        "RearSpoiler",
        "RoofBas",
        "RBoxMid",
        "RoofPins",
        "RBoxShort",
        "RoofRack",
        "SkiSnow",
        "Surf",
        "SGuardSet",
        "SpoilerKit",
        "TTray",
        "PPEmblem1",
        "PPEmblem2",
        "Visor",
        "TowingKit",
        "TrailerHitch",
        "WheelLocksC",
      ],
      interiorAccessories: [
        "ASFloorMat",
        "CHook",
        "CNet",
        "CHWFloorMat",
        "CargoTray",
        "CargoTrayDiv",
        "IntMould",
        "MXInt",
        "RPWShade",
        "SeatBackProt",
        "SpoilerController",
        "SpoilerLights",
        "TowingController",
        "TTray",
        "TTDividers",
      ],
    },
  },

  //Exterior color dependencies
  exteriorColor: {
    unlock: {
      PlatinumEC: {
        SedanEX: {
          interiorColor: ["BlackL"],
          interiorAccessories: ["IAC5"],
        },
        SedanTouring: {
          interiorColor: ["BlackL"],
          interiorAccessories: ["IAC6"],
        },
        HBEXL: {
          interiorColor: ["BlackL"],
          interiorAccessories: ["SeatBackProt"],
        },
      },
    },
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
        exteriorAccessories: [
          "DLSpoiler",
          "EmblemHPD",
          "UBodySpoilerFront",
          "UBodySpoilerRear",
          "UBodySpoilerSide",
        ],
      },

      PP: {
        exteriorAccessories: ["SGuardSet", "WheelLocksC"],
        interiorAccessories: ["TTray"],
      },
      ASPack1Hatch: {
        exteriorAccessories: ["SGuardSet"],
        interiorAccessories: ["ASFloorMat", "CargoTray"],
      },
      ASPack2Hatch: {
        exteriorAccessories: ["WheelLocksC"],
        interiorAccessories: ["ASFloorMat", "CargoTray"],
      },
      HPDHatch: {
        exteriorAccessories: ["EmblemHPD", "TailGate", "UBodySpoilerFront"],
      },

      PPHatch: {
        exteriorAccessories: ["SGuardSet", "WheelLocksC"],
        interiorAccessories: ["CargoTray"],
      },
      PowerPackage1: {
        exteriorAccessories: ["PPEmblem1", "PPEmblem2"],
        powertrain: ["turboPowertrain"],
      },
      MXPack1: {
        exteriorAccessories: ["MXHAT"],
        interiorAccessories: ["MXInt"],
      },
    },
  },
  //exteriorAccessories
  // exteriorAccessories: {
  //   parent: {
  //     RoofRack: {
  //       exteriorAccessories: ["SkiRack", "CargoBox"],
  //     },
  //     RoofPins: {
  //       exteriorAccessories: ["SkiRack", "CargoBox"],
  //     },
  //     TowingKit: {
  //       exteriorAccessories: ["TrailerHitch"],
  //       interiorAccessories: ["TowingController"],
  //     },
  //     SpoilerKit: {
  //       exteriorAccessories: ["FrontSpoiler", "RearSpoiler"],
  //       interiorAccessories: ["SpoilerLights"],
  //     },
  //     LightKit: {
  //       exteriorAccessories: ["FrontSpoiler", "RearSpoiler"],
  //       interiorAccessories: ["SpoilerLights"],
  //     },
  //   },
  // },
  //interiorAccessories
  // interiorAccessories: {
  //   child: {
  //     SpoilerLights: {
  //       exteriorAccessories: ["SpoilerKit"], //Two parents, two categories
  //       interiorAccessories: ["LightKit"], //Two parents, two categories
  //     },
  //   },
  // },
  rivals: [
    { packages: ["ASPack1", "ASPack2", "PP"] },
    {
      packages: ["MXPack1"],
      exteriorAccessories: ["Visor"],
    },
    {
      packages: ["ASPack1Hatch", "ASPack2Hatch", "PPHatch"],
      exteriorAccessories: ["Visor"],
    },
    { exteriorAccessories: ["BSMouldingA", "BSMouldingB"] },
    { exteriorAccessories: ["ExtMould"], interiorAccessories: ["IntMould"] },
    // { exteriorAccessories: ["UBodySpoilerFront", "SGuardSet"] },
    /* { exteriorAccessories: ["MoonRVisor", "RoofRack"] }, */
  ],
  parentToChild: [
    {
      parents: { exteriorAccessories: ["RoofRack", "RoofPins"] },
      child: {
        exteriorAccessories: [
          "Bike",
          "Kayak",
          "RBoxMid",
          "RBoxShort",
          "SkiSnow",
          "Surf",
        ],
      },
    },
    {
      parents: {
        exteriorAccessories: ["SpoilerKit"],
        interiorAccessories: ["SpoilerController"],
      },
      child: {
        exteriorAccessories: ["FrontSpoiler", "RearSpoiler"],
        interiorAccessories: ["SpoilerLights"],
      },
    },
  ],
};

const InitialOptionsAvailable = {
  trim: AllOptions.trim,
};
// ------------------------------
// FUNCTIONS SECTION
// ------------------------------
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

  let exceptionObject = checkOptionDependency(
    category,
    selection,
    optionsSelected
  );

  if (!exceptionObject.status) {
    if (selection.isChecked) {
      newOptionsSelected = produce(optionsSelected, (draft) => {
        addToOptionsSelected(category, selection, draft);
      });
    } else {
      newOptionsSelected = produce(optionsSelected, (draft) => {
        removeFromOptionsSelected(category, selection, optionsAvailable, draft);
      });
    }
  } else {
    //Add switch statement to handle all Exceptions
    switch (exceptionObject.type) {
      case "trimOptionSelected":
        // Reset all prior selected options
        newOptionsSelected = produce({}, (draft) => {});

        // Add only selected trim to the newly reset optionsSelected
        newOptionsSelected = produce(newOptionsSelected, (draft) => {
          addToOptionsSelected(category, selection, draft);
        });

        // Use the callback function to reset all options available,  for the trim selected
        newOptionsAvailable = produce(optionsAvailable, (draft) => {
          resetOptionsAvailableForTrimSelected(selection, draft);
        });
        break;
      case "rivalCurrentlySelected":
        //Generate popup notification of a rival option is currently selected
        let rivalsCurrentlySelected = exceptionObject.rivalsCurrentlySelected;
        newPopup = produce(popup, (draft) => {
          rivalSelectedPopupMessage(
            category,
            selection,
            draft,
            rivalsCurrentlySelected
          );
        });
        break;
      case "addAuxiliaryOptionsAvailable":
        newOptionsSelected = produce(optionsSelected, (draft) => {
          addToOptionsSelected(category, selection, draft);
        });

        // Step 1: Iterate over the `unlock` object in exceptionObject
        newOptionsAvailable = produce(optionsAvailable, (draft) => {
          Object.keys(exceptionObject.unlock).forEach((unlockCategory) => {
            // Step 2: Iterate over each array of values in the `unlock` object
            exceptionObject.unlock[unlockCategory].forEach((item) => {
              // Call addToOptionsAvailable for each item
              addToOptionsAvailable(unlockCategory, item, draft);
            });
          });
        });
        break;
      case "resetAuxiliaryOptionsToDefault":
        //Remove the auxiliary options for the prior selected unlock option
        newOptionsAvailable = produce(optionsAvailable, (draft) => {
          Object.keys(exceptionObject.remove).forEach((unlockCategory) => {
            // Step 2: Iterate over each array of values in the `unlock` object
            exceptionObject.remove[unlockCategory].forEach((item) => {
              // Call addToOptionsAvailable for each item
              removeFromOptionsAvailable(unlockCategory, item, draft);
            });
          });
        });
        if (selection.isChecked) {
          newOptionsSelected = produce(optionsSelected, (draft) => {
            addToOptionsSelected(category, selection, draft);
          });
        } else {
          newOptionsSelected = produce(optionsSelected, (draft) => {
            removeFromOptionsSelected(
              category,
              selection,
              optionsAvailable,
              draft
            );
          });
        }
        break;
      case "mainComponentOptionSelected":
        newOptionsSelected = produce(optionsSelected, (draft) => {
          //First, add the main category and selection
          addToOptionsSelected(category, selection, draft);
          //Update the 'components' of selected package
          addComponentsToOptionsSelected(
            category,
            selection,
            newOptionsAvailable,
            draft
          );
        });
        // Update the option 'components' in the optionsAvailable marking as part of a selected 'package' as needed
        newOptionsAvailable = produce(optionsAvailable, (draft) => {
          updateOptionsAvailableForComponentsAdded(category, selection, draft);
        });
        break;
      case "mainComponentOptionUnselected":
        newOptionsSelected = produce(optionsSelected, (draft) => {
          //Remove the actual 'component' option selected
          removeFromOptionsSelected(
            category,
            selection,
            optionsAvailable,
            draft
          );
          //Remove the nested'components' options
          removeComponentsFromOptionsSelected(
            category,
            selection,
            newOptionsAvailable,
            draft
          );
        });
        // Update the option 'components' in the optionsAvailable as needed
        newOptionsAvailable = produce(optionsAvailable, (draft) => {
          //Reset the package 'components' in  optionsAvailable to default
          resetOptionsAvailableForComponentsRemoved(category, selection, draft);
        });
        break;
      case "subComponentUnselected":
        //Generate popup notification of the component option to be unselected
        newPopup = produce(popup, (draft) => {
          subComponentUnselectedPopupMessage(
            category,
            selection,
            draft,
            exceptionObject
          );
        });

        break;
      case "parentsMustBeSelected":
        //Generate popup notification of the component option to be unselected
        newPopup = produce(popup, (draft) => {
          parentsMustBeSelectedPopupMessage(
            category,
            selection,
            draft,
            exceptionObject
          );
        });

        break;

      default:
      // code block
    }
  }

  return {
    optionsAvailable: newOptionsAvailable,
    optionsSelected: newOptionsSelected,
    popup: newPopup,
  };
}

//Handles the 'confirmation' of a popup notification regarding the action which generated a popup notification
export function handlePopupConfirm(optionsAvailable, optionsSelected, popup) {
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {}); // Keep optionsAvailable unchanged for now
  let newOptionsSelected = produce(optionsSelected, (draft) => {}); // Keep optionsSelected unchanged for now

  //Reset popup to default
  const DEFAULT_POPUP_STATE = {
    show: false,
    message: "",
    exception: {},
  };
  let updatedState = {
    newOptionsAvailable,
    newOptionsSelected,
    DEFAULT_POPUP_STATE,
  };

  switch (popup.exception.action) {
    case "rivalSelected":
      //Add the rival selected, unselect the currently selected rivals
      let categoryRivalToAdd = popup.categoryRivalToAdd;
      let selectionRivalToAdd = popup.selectionRivalToAdd;
      //Find each selected rivalfrom newOptionsSelected
      popup.exception.rivalsToRemove.forEach((rivalSelected) => {
        let rivalChoice = {
          id: rivalSelected.choice.id,
          isChecked: false,
        };
        // Step 1: Initially remove all selected 'rivals' from optionsSelected. This will adjust the state
        // based on dependencies related to rivalChoice removal.
        newOptionsSelected = produce(newOptionsSelected, (draft) => {
          removeFromOptionsSelected(
            rivalSelected.category,
            rivalChoice,
            optionsAvailable,
            draft
          );
        });
        //Step 2: Call handleOptionChange() to return 'updatedState' object w/ rivals unchecked
        //This will also handle any 'dual' dependencies, these 'rivals' may have
        updatedState = handleOptionChanged(
          rivalSelected.category,
          rivalChoice,
          newOptionsAvailable,
          newOptionsSelected,
          DEFAULT_POPUP_STATE
        );
      });
      //Step 3: Add the checked rival to form state
      updatedState = handleOptionChanged(
        categoryRivalToAdd,
        selectionRivalToAdd,
        updatedState.optionsAvailable,
        updatedState.optionsSelected,
        DEFAULT_POPUP_STATE
      );

      break;

    case "subComponentUnselected":
      //Get the main component option
      let { mainComponentCategory, mainComponentID } = popup.exception;

      let mainComponentOption = {
        id: mainComponentID,
        isChecked: false,
      };

      //Remove the main component option from optionsSelected
      updatedState = handleOptionChanged(
        mainComponentCategory,
        mainComponentOption,
        newOptionsAvailable,
        newOptionsSelected,
        DEFAULT_POPUP_STATE
      );
      //Handles scenario where the unselected subComponent was triggered by a Dropdown change
      if (popup.selection.isChecked) {
        let selection = {
          id: popup.selection.id,
          isChecked: popup.selection.id,
        };
        updatedState = handleOptionChanged(
          popup.category,
          selection,
          updatedState.optionsAvailable,
          updatedState.optionsSelected,
          DEFAULT_POPUP_STATE
        );
      }

      break;

    case "parentsMustBeSelected":
      //For each unselected parent option
      popup.exception.parentsToAdd.forEach((parent) => {
        let parentChoice = {
          id: parent.choice.id,
          isChecked: true,
        };
        // Step 1: Initially add each 'parent' option to optionsSelected.
        newOptionsSelected = produce(newOptionsSelected, (draft) => {
          addToOptionsSelected(parent.category, parentChoice, draft);
        });
      });

      //Step 2: Add the checked 'child' option
      let categoryChild = popup.category;
      let selectionChild = popup.selection;
      updatedState = handleOptionChanged(
        categoryChild,
        selectionChild,
        newOptionsAvailable,
        newOptionsSelected,
        DEFAULT_POPUP_STATE
      );
      break;

    case "childSelected":
      break;
    default:
    // code block
  }

  return {
    optionsAvailable: updatedState.optionsAvailable,
    optionsSelected: updatedState.optionsSelected,
    popup: DEFAULT_POPUP_STATE,
  };
}

//Helper Functions

//Add to optionsSelected a selected 'option'
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

//Add to optionsAvailble a specified 'option'
function addToOptionsAvailable(category, selection, draft) {
  //If category doesn't already exists, add it
  if (!draft[category]) {
    draft[category] = {
      displayName: AllOptions[category].displayName,
      type: AllOptions[category].type,
      choices: [],
    };
  }
  const selectedOption = AllOptions[category].choices.find(
    (choice) => choice.id === selection
  );
  // Only add selectedOption if it doesn't already exist in the choices array
  if (
    !draft[category].choices.some((choice) => choice.id === selectedOption.id)
  ) {
    draft[category].choices.push(selectedOption);
  }
}

//Removes from option from optionsAvailable
function removeFromOptionsAvailable(category, selection, draft) {
  draft[category].choices = draft[category].choices.filter(
    (choice) => choice.id !== selection
  );
}

// Callback function to reset options available when a model trim is selected
function resetOptionsAvailableForTrimSelected(selection, draft) {
  const optionsForTrimSelected = Dependencies.trim[selection.id];
  Object.keys(optionsForTrimSelected).forEach((optionCategory) => {
    if (Dependencies.trim && Dependencies.trim[selection.id]) {
      if (Array.isArray(optionsForTrimSelected[optionCategory])) {
        // Filter choices based on dependency ids for arrays
        draft[optionCategory] = {
          ...AllOptions[optionCategory],
          choices: AllOptions[optionCategory].choices.filter((choice) =>
            optionsForTrimSelected[optionCategory].includes(choice.id)
          ),
        };
      } else {
        // Handle object dependencies using default configurations
        draft[optionCategory] = {
          ...AllOptions[optionCategory],
          choices: AllOptions[optionCategory].choices.filter((choice) =>
            optionsForTrimSelected[optionCategory].default.includes(choice.id)
          ),
        };
      }
    }
  });
}

function checkOptionDependency(category, selection, optionsSelected) {
  let exceptionObject = {
    status: false,
    type: "NoExceptions",
  };

  switch (category) {
    case "trim":
      exceptionObject.status = true;
      exceptionObject.type = "trimOptionSelected";
      return exceptionObject;
    case "exteriorColor":
      const { prevValue, id: selectedColor } = selection;
      const selectedVehicleTrim = optionsSelected.trim.choices[0].id;
      const unlockDependencies = Dependencies[category]?.unlock;

      const hasAuxiliaryOptions =
        unlockDependencies?.[selectedColor]?.[selectedVehicleTrim];
      //If the selected option unlocks auxiliary options
      if (hasAuxiliaryOptions) {
        exceptionObject.status = true;
        exceptionObject.type = "addAuxiliaryOptionsAvailable";
        exceptionObject.unlock =
          unlockDependencies[selectedColor][selectedVehicleTrim];
      } else {
        const resetAuxiliaryOptionToDefault =
          prevValue && unlockDependencies?.[prevValue]?.[selectedVehicleTrim];
        //If the prevValue has auxiliary options
        if (resetAuxiliaryOptionToDefault) {
          exceptionObject.status = true;
          exceptionObject.type = "resetAuxiliaryOptionsToDefault";
          exceptionObject.remove =
            unlockDependencies[prevValue][selectedVehicleTrim];
        }
      }
      return exceptionObject;
    case "packages":
      let rivalStatus = checkRivalStatus(category, selection, optionsSelected);
      //Check if option has 'rivals'
      if (rivalStatus.selected) {
        (exceptionObject.status = true),
          ((exceptionObject.type = "rivalCurrentlySelected"),
          (exceptionObject.rivalsCurrentlySelected =
            rivalStatus.rivalOptionsCurrentlySelected));
      } //Check option category has a 'component' dependencies
      else if (Dependencies[category] && Dependencies[category].components) {
        if (selection.isChecked) {
          exceptionObject.status = true;
          exceptionObject.type = "mainComponentOptionSelected";
          return exceptionObject;
        } else {
          exceptionObject.status = true;
          exceptionObject.type = "mainComponentOptionUnselected";
          return exceptionObject;
        }
      }
      return exceptionObject;
    case "powertrain":
      //Check for previously selected option
      let prevOptionSelected = optionsSelected[category].choices.find(
        (o) => o.id === selection.prevValue
      );
      //Check if previously selected option was a 'subComponent'
      if (
        prevOptionSelected &&
        typeof prevOptionSelected.mainComponentID === "string"
      ) {
        exceptionObject.status = true;
        exceptionObject.type = "subComponentUnselected";
        exceptionObject.subComponent = {
          prevOptionCategory: category,
          prevOptionID: prevOptionSelected.id,
          mainComponentID: prevOptionSelected.mainComponentID,
          mainComponentCategory: prevOptionSelected.mainComponentCategory,
        };
      } else {
        return exceptionObject;
      }

      break;
    case "exteriorAccessories":
      //Handle if option is checked
      if (selection.isChecked) {
        let rivalStatus = checkRivalStatus(
          category,
          selection,
          optionsSelected
        );

        //Handle rival status
        if (rivalStatus.selected) {
          (exceptionObject.status = true),
            ((exceptionObject.type = "rivalCurrentlySelected"),
            (exceptionObject.rivalsCurrentlySelected =
              rivalStatus.rivalOptionsCurrentlySelected));
          return exceptionObject;
        } else {
          //Add code to check if this is a 'child' option
          let parentsStatus = getParentStatus(
            category,
            selection,
            optionsSelected
          );
          if (parentsStatus.required) {
            exceptionObject.status = true;
            exceptionObject.type = "parentsMustBeSelected";
            exceptionObject.parentsMustBeSelected = parentsStatus.parentOptions;
            return exceptionObject;
          }
        }
      }
      //Handle if option was unchecked
      else {
        //First check if the option was 'component'
        if (selection.mainComponentID) {
          exceptionObject.status = true;
          exceptionObject.type = "subComponentUnselected";
          exceptionObject.subComponent = {
            mainComponentID: selection.mainComponentID,
            mainComponentCategory: selection.mainComponentCategory,
          };
          return exceptionObject;
        }
      }
      break;

    case "interiorAccessories":
      //Handle if option is checked
      if (selection.isChecked) {
        let rivalStatus = checkRivalStatus(
          category,
          selection,
          optionsSelected
        );

        //Handle rival status
        if (rivalStatus.selected) {
          (exceptionObject.status = true),
            ((exceptionObject.type = "rivalCurrentlySelected"),
            (exceptionObject.rivalsCurrentlySelected =
              rivalStatus.rivalOptionsCurrentlySelected));
          return exceptionObject;
        } else {
          //Add code to check if this is a 'child' option
          let parentsStatus = getParentStatus(
            category,
            selection,
            optionsSelected
          );
          if (parentsStatus.required) {
            exceptionObject.status = true;
            exceptionObject.type = "parentsMustBeSelected";
            exceptionObject.parentsMustBeSelected = parentsStatus.parentOptions;
            return exceptionObject;
          }
        }
      }
      //Handle if option was unchecked
      else {
        //First check if the option was 'component'
        if (selection.mainComponentID) {
          exceptionObject.status = true;
          exceptionObject.type = "subComponentUnselected";
          exceptionObject.subComponent = {
            mainComponentID: selection.mainComponentID,
            mainComponentCategory: selection.mainComponentCategory,
          };
          return exceptionObject;
        }
      }
      break;
  }

  return exceptionObject;
}

function checkRivalStatus(category, selection, optionsSelected) {
  let rivalStatus = {
    selected: false,
    rivalOptionChecked: [
      {
        category: category,
        choice: selection,
      },
    ],
    rivalOptionsCurrentlySelected: [],
  };

  // Get rival options
  const rivalOptions = getRivals(category, selection);
  // Iterate through optionsSelected to check for matching keys in rivalOptions
  Object.keys(optionsSelected).forEach((key) => {
    const optionChoices = optionsSelected[key].choices;

    // Check if rivalOptions array contains an object with the matching key
    rivalOptions.forEach((rivalObj) => {
      if (rivalObj[key]) {
        // Check if any choices.id matches the rival string in the rivalObj[key] array
        rivalObj[key].forEach((rivalValue) => {
          const matchingChoice = optionChoices.find(
            (choice) => choice.id === rivalValue
          );

          if (matchingChoice) {
            rivalStatus.selected = true;
            rivalStatus.rivalOptionsCurrentlySelected.push({
              category: key,
              choice: matchingChoice,
            });
          }
        });
      }
    });
  });

  return rivalStatus;
}

function getRivals(category, selection) {
  return Dependencies.rivals
    .filter((obj) => obj[category] && obj[category].includes(selection.id))
    .map((obj) => {
      const newObj = { ...obj };
      newObj[category] = newObj[category].filter(
        (item) => item !== selection.id
      );
      return newObj;
    });
}

function getParentStatus(category, selection, optionsSelected) {
  let parentsStatus = {
    required: false,
    parentOptions: [],
  };
  const parentsExist = Dependencies.parentToChild.find(
    (dep) => dep.child[category] && dep.child[category].includes(selection.id)
  );
  if (parentsExist) {
    for (const parentCategory in parentsExist.parents) {
      const parentOptions = parentsExist.parents[parentCategory];
      const selectedOptions =
        optionsSelected[parentCategory]?.choices.map((choice) => choice.id) ||
        [];

      // Find parent options not in selected options
      const missingParents = parentOptions.filter(
        (option) => !selectedOptions.includes(option)
      );

      // Add missing parent options to parentsStatus
      if (missingParents.length > 0) {
        parentsStatus.required = true;
        parentsStatus.parentOptions.push({
          category: parentCategory,
          choicesID: missingParents,
        });
      }
    }
  }

  return parentsStatus;
}

function addComponentsToOptionsSelected(
  category,
  selection,
  newOptionsAvailable,
  draft
) {
  const componentDependencies = Dependencies[category].components[selection.id];
  if (componentDependencies) {
    Object.keys(componentDependencies).forEach((dependencyKey) => {
      componentDependencies[dependencyKey].forEach((depId) => {
        // Corrected to use 'draft' instead of 'newOptionsAvailable'
        const choice = newOptionsAvailable[dependencyKey]?.choices.find(
          (choice) => choice.id === depId
        );
        if (choice) {
          const choiceWithComponent = {
            ...choice,
            name: choice.name + " - Included in- " + selection.id,
            mainComponentID: selection.id,
            mainComponentCategory: category,
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

//Removes from optionsSelected, components of an option unselected
function removeComponentsFromOptionsSelected(
  category,
  selection,
  optionsAvailable,
  draft
) {
  const componentDependencies = Dependencies[category].components[selection.id];
  if (componentDependencies) {
    Object.keys(componentDependencies).forEach((componentCategory) => {
      componentDependencies[componentCategory].forEach((componentID) => {
        if (draft[componentCategory]) {
          if (optionsAvailable[componentCategory].type === "Dropdown") {
            // For Dropdown, clear the choices array
            draft[componentCategory].choices = [];
          } else if (
            optionsAvailable[componentCategory].type === "CheckBoxGroup"
          ) {
            // For CheckBoxGroup, filter out the specific choice
            draft[componentCategory].choices = draft[
              componentCategory
            ].choices.filter((choice) => choice.id !== componentID);
          }
        }
      });
    });
  }
}

//Changes the optionsAvailable to account for being part of package selected
function updateOptionsAvailableForComponentsAdded(category, selection, draft) {
  const componentDependencies = Dependencies[category].components[selection.id];
  if (componentDependencies) {
    Object.keys(componentDependencies).forEach((dependencyKey) => {
      componentDependencies[dependencyKey].forEach((depId) => {
        // Find the index of the choice in the draft
        const choiceIndex = draft[dependencyKey].choices.findIndex(
          (choice) => choice.id === depId
        );

        if (choiceIndex !== -1) {
          // Directly update the properties of the found choice in the draft
          draft[dependencyKey].choices[choiceIndex].name +=
            " - Included in Package- " + selection.id;
          draft[dependencyKey].choices[choiceIndex].mainComponentID =
            selection.id;
          draft[dependencyKey].choices[choiceIndex].mainComponentCategory =
            category;
          draft[dependencyKey].choices[choiceIndex].price = 0; // Set price to 0 or as required
        }
      });
    });
  }
}

//Resets the optionsAvailable to default after a package is unselected
function resetOptionsAvailableForComponentsRemoved(category, selection, draft) {
  const componentDependencies = Dependencies[category].components[selection.id];
  if (componentDependencies) {
    Object.keys(componentDependencies).forEach((dependencyKey) => {
      componentDependencies[dependencyKey].forEach((depId) => {
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

//Generate popup message for rival selected notification
function rivalSelectedPopupMessage(
  category,
  selection,
  draft,
  rivalsCurrentlySelected
) {
  let selectedOption = AllOptions[category].choices.find(
    (choice) => choice.id === selection.id
  );

  // Start constructing the draft message
  let message = `Selecting ${selectedOption.name} will also unselect `;

  // Use Intl.ListFormat for natural language list of rival names
  const rivalNames = rivalsCurrentlySelected.map((rival) => rival.choice.name);
  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });

  message += formatter.format(rivalNames);

  // Set the constructed message to draft.message
  draft.show = true;
  draft.message = message;
  draft.categoryRivalToAdd = category;
  draft.selectionRivalToAdd = selection;
  draft.exception = {
    action: "rivalSelected",
    rivalsToRemove: rivalsCurrentlySelected,
  };
}

//Generate notification in popup warning a 'subComponent' option was unselected
function subComponentUnselectedPopupMessage(
  category,
  selection,
  draft,
  exceptionObject
) {
  const { mainComponentID, mainComponentCategory } =
    exceptionObject.subComponent;
  let subComponentOption = AllOptions[category].choices.find(
    (choice) => choice.id === selection.id
  );
  // Extract names from the unselected component option
  const mainComponentOption = AllOptions[mainComponentCategory].choices.find(
    (choice) => mainComponentID === choice.id
  );
  if (selection.isChecked) {
    const { prevOptionID, prevOptionCategory } = exceptionObject.subComponent;
    subComponentOption = AllOptions[prevOptionCategory].choices.find(
      (choice) => choice.id === prevOptionID
    );
  }
  let message =
    `Unselecting ${subComponentOption.name} will also unselect ` +
    mainComponentOption.name;

  //Set the constructed message to draft.message
  draft.show = true;
  draft.message = message;
  draft.category = category;
  draft.selection = selection;
  draft.exception = {
    action: "subComponentUnselected",
    mainComponentCategory: mainComponentCategory,
    mainComponentID: mainComponentID,
  };
}

function parentsMustBeSelectedPopupMessage(
  category,
  selection,
  draft,
  exceptionObject
) {
  let childOption = AllOptions[category].choices.find(
    (choice) => choice.id === selection.id
  );

  // Start constructing the draft message
  let message = `Selecting ${childOption.name} will require you add `;
  let parentChoiceMap = {};

  // Pre-compute and store matched choices for each parent category
  exceptionObject.parentsMustBeSelected.forEach((parent) => {
    const parentCategory = parent.category;
    const parentChoicesIDs = parent.choicesID;

    if (AllOptions[parentCategory]) {
      const matchingChoices = AllOptions[parentCategory].choices.filter(
        (choice) => parentChoicesIDs.includes(choice.id)
      );

      parentChoiceMap[parentCategory] = matchingChoices;
    }
  });

  // Collect all parent names in a single loop
  let parentNames = Object.values(parentChoiceMap)
    .flat()
    .map((choice) => choice.name);

  // Use Intl.ListFormat for natural language list
  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });
  message += formatter.format(parentNames);

  // Set the constructed message to draft.message
  draft.show = true;
  draft.message = message;
  draft.category = category;
  draft.selection = selection;
  draft.exception = {
    action: "parentsMustBeSelected",
    parentsToAdd: Object.entries(parentChoiceMap).flatMap(
      ([category, choices]) => choices.map((choice) => ({ category, choice }))
    ),
  };
}

export { AllOptions, InitialOptionsAvailable, Dependencies };

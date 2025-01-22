//oemData/honda/civic.js
import produce from "immer";
import { CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL } from "next/dist/shared/lib/constants";
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
      },
      { id: "SedanEX", name: "Sedan EX", price: 26950, dependency: ["trim"] },
      {
        id: "SedanTouring",
        name: "Sedan Touring",
        price: 30550,
      },
      {
        id: "HatchbackLX",
        name: "Hatchback LX",
        price: 24950,
      },
      {
        id: "ModelX",
        name: "Model  X",
        price: 24950,
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
      { id: "BlackL", name: "Black Leather", price: 200 },
      { id: "GrayL", name: "Gray Leather", price: 200 },
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
      },
      {
        id: "ASPack2",
        name: "All Season Protection Package II",
        price: 370,
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
      { id: "TowingKit", name: "Towing Kit", price: 500 },
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
      {
        id: "MXIntAccAuxiliary",
        name: "MX Auxiliary Interior Accessory",
        price: 247,
      },
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
      exteriorColor: [
        "BlueEC",
        "BlackEC",
        "SilverEC",
        "GrayEC",
        "RedEC",
        "PlatinumEC",
        "SGrayPearl",
      ],
      interiorColor: ["BlackIC", "GrayIC"],
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
  // exteriorColor: {
  //   unlock: {
  //     PlatinumEC: {
  //       SedanEX: {
  //         interiorColor: ["BlackL"],
  //         interiorAccessories: ["IAC5"],
  //       },
  //       SedanTouring: {
  //         interiorColor: ["BlackL"],
  //         interiorAccessories: ["IAC6"],
  //       },
  //       HBEXL: {
  //         interiorColor: ["BlackL"],
  //         interiorAccessories: ["SeatBackProt"],
  //       },
  //     },
  //   },
  // },

  group: [
    {
      packages: "ASPack1",
      components: {
        exteriorAccessories: ["SGuardSet"],
        interiorAccessories: ["ASFloorMat", "TTray"],
      },
    },
    {
      packages: "ASPack2",
      components: {
        exteriorAccessories: ["WheelLocksC"],
        interiorAccessories: ["ASFloorMat", "TTray"],
      },
    },
    {
      packages: "HPD",
      components: {
        exteriorAccessories: [
          "DLSpoiler",
          "EmblemHPD",
          "UBodySpoilerFront",
          "UBodySpoilerRear",
          "UBodySpoilerSide",
        ],
      },
    },
    {
      packages: "PP",
      components: {
        exteriorAccessories: ["SGuardSet", "WheelLocksC"],
        interiorAccessories: ["TTray"],
      },
    },
    {
      packages: "ASPack1Hatch",
      components: {
        exteriorAccessories: ["SGuardSet"],
        interiorAccessories: ["ASFloorMat", "CargoTray"],
      },
    },
    {
      packages: "ASPack2Hatch",
      components: {
        exteriorAccessories: ["WheelLocksC"],
        interiorAccessories: ["ASFloorMat", "CargoTray"],
      },
    },
    {
      packages: "HPDHatch",
      components: {
        exteriorAccessories: ["EmblemHPD", "TailGate", "UBodySpoilerFront"],
      },
    },
    {
      packages: "PowerPackage1",
      components: {
        exteriorAccessories: ["PPEmblem1", "PPEmblem2"],
        powertrain: ["turboPowertrain"],
      },
    },
    {
      packages: "MXPack1",
      components: {
        exteriorAccessories: ["MXHAT"],
        interiorAccessories: ["MXInt"],
      },
    },
  ],

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
  ],
  unlock: [
    {
      precursor: [{ trim: ["ModelX"] }],
      activator: { exteriorColor: ["RedEC"] },
      auxiliary: {
        interiorColor: ["BlackL", "GrayL"],
        interiorAccessories: ["MXIntAccAuxiliary"],
      },
    },
    {
      precursor: [{ trim: ["ModelX"] }],
      activator: { exteriorColor: ["PlatinumEC"] },
      auxiliary: {
        interiorColor: ["GrayL"],
        interiorAccessories: ["MXIntAccAuxiliary"],
      },
    },
    {
      precursor: [{ trim: ["ModelX"] }],
      activator: { exteriorColor: ["SGrayPearl"] },
      auxiliary: {
        interiorColor: ["BlackL"],
      },
    },
  ],
  parentToChild: [
    {
      parents: { exteriorAccessories: ["RoofRack", "RoofPins"] },
      child: {
        exteriorAccessories: [
          "Bike",
          "Kayak",
          "RoofBas",
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
        removeFromOptionsSelected(category, selection, draft);
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
      case "adjustAuxOptions":
        // First, add the selected option to newOptionsSelected
        newOptionsSelected = produce(optionsSelected, (draft) => {
          addToOptionsSelected(category, selection, draft);
        });

        // Handle auxiliary additions and removals
        if (
          exceptionObject.removeAux &&
          Object.keys(exceptionObject.removeAux).length > 0
        ) {
          // Process removal for both newOptionsAvailable and newOptionsSelected
          Object.keys(exceptionObject.removeAux).forEach((auxCategory) => {
            exceptionObject.removeAux[auxCategory].forEach((auxId) => {
              const auxSelection = { id: auxId };

              // Update newOptionsAvailable
              newOptionsAvailable = produce(newOptionsAvailable, (draft) => {
                removeFromOptionsAvailable(auxCategory, auxSelection, draft);
              });

              // Update newOptionsSelected
              newOptionsSelected = produce(newOptionsSelected, (draft) => {
                removeFromOptionsSelected(auxCategory, auxSelection, draft);
              });
            });
          });
        }

        // Add auxiliary options to newOptionsAvailable
        if (
          exceptionObject.addAux &&
          Object.keys(exceptionObject.addAux).length > 0
        ) {
          newOptionsAvailable = produce(newOptionsAvailable, (draft) => {
            Object.keys(exceptionObject.addAux).forEach((auxCategory) => {
              exceptionObject.addAux[auxCategory].forEach((auxId) => {
                const auxSelection = { id: auxId };
                addToOptionsAvailable(auxCategory, auxSelection, draft);
              });
            });
          });
        }

        break;

      case "groupOptionSelected":
        newOptionsSelected = produce(optionsSelected, (draft) => {
          //First, add the main 'group' 'option' selected
          addToOptionsSelected(category, selection, draft);

          //Second, add the 'components' of the 'group' option
          let componentOptions = exceptionObject.componentOptions;
          addComponentsToOptionsSelected(
            category,
            selection,
            componentOptions,
            newOptionsAvailable,
            draft
          );
        });

        //Third, add code to update 'optionsAvailable' to match 'choices' as 'components
        let componentOptions = exceptionObject.componentOptions;
        let groupID = selection.id;
        newOptionsAvailable = produce(optionsAvailable, (draft) => {
          updateOptionsAvailableForGroupOptionSelected(
            category,
            groupID,
            componentOptions,
            draft
          );
        });
        break;
      case "groupOptionUnselected":
        newOptionsSelected = produce(optionsSelected, (draft) => {
          // First, remove the main 'group' option selected
          removeFromOptionsSelected(category, selection, draft);

          // Second, remove each component option in exceptionObject.componentOptions
          Object.keys(exceptionObject.componentOptions).forEach(
            (componentCategory) => {
              exceptionObject.componentOptions[componentCategory].forEach(
                (componentId) => {
                  // Create a 'selection' object for the component to pass to removeFromOptionsSelected
                  const componentSelection = { id: componentId };
                  removeFromOptionsSelected(
                    componentCategory,
                    componentSelection,
                    draft
                  );
                }
              );
            }
          );
        });
        //Third reset the 'component' options to default status
        newOptionsAvailable = produce(optionsAvailable, (draft) => {
          // Reset each component option in exceptionObject.componentOptions to its default state
          Object.keys(exceptionObject.componentOptions).forEach(
            (componentCategory) => {
              exceptionObject.componentOptions[componentCategory].forEach(
                (componentId) => {
                  // Create a 'selection' object for the component to pass to resetOptionsDefault
                  const componentSelection = { id: componentId };
                  resetOptionsDefault(
                    componentCategory,
                    componentSelection,
                    draft
                  );
                }
              );
            }
          );
        });
        break;

      case "componentUnselected":
        //Generate popup notification of the component option to be unselected
        newPopup = produce(popup, (draft) => {
          componentUnselectedPopupMessage(
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
      case "childMustBeUnselected":
        newPopup = produce(popup, (draft) => {
          childMustBeUnselectedPopMessage(
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
          removeFromOptionsSelected(rivalSelected.category, rivalChoice, draft);
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
      //Step 3: Add the checked rival to from state
      updatedState = handleOptionChanged(
        categoryRivalToAdd,
        selectionRivalToAdd,
        updatedState.optionsAvailable,
        updatedState.optionsSelected,
        DEFAULT_POPUP_STATE
      );

      break;

    case "componentUnselected":
      console.log(popup);
      //Get the main component option
      let { groupCategory, groupID } = popup.exception;

      let groupOption = {
        id: groupID,
        isChecked: false,
      };
      //Remove the group option from optionsSelected
      updatedState = handleOptionChanged(
        groupCategory,
        groupOption,
        newOptionsAvailable,
        newOptionsSelected,
        DEFAULT_POPUP_STATE
      );
      //Add 'option' if checked, (This handles cases where the option changed was in a Dropdown)
      if (popup.selection.isChecked) {
        let selection = {
          id: popup.selection.id,
          isChecked: true,
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

    case "childMustBeUnselected":
      //Get the parent option unselected
      let categoryParentToRemove = popup.category;
      let selectionParentToRemove = popup.selection;
      popup.exception.childToRemove.forEach((child) => {
        let childChoice = {
          id: child.choice.id,
          isChecked: false,
        };
        // Step 1: Initially remove all selected 'child' options from optionsSelected.
        newOptionsSelected = produce(newOptionsSelected, (draft) => {
          removeFromOptionsSelected(child.category, childChoice, draft);
        });
        //Step 2: Call handleOptionChange() to return 'updatedState' object w/ 'child' options unchecked
        //This will also handle any 'dual' dependencies
        updatedState = handleOptionChanged(
          child.category,
          childChoice,
          newOptionsAvailable,
          newOptionsSelected,
          DEFAULT_POPUP_STATE
        );
      });
      //Step 3: Remove the unchecked 'parent' to from state
      updatedState = handleOptionChanged(
        categoryParentToRemove,
        selectionParentToRemove,
        updatedState.optionsAvailable,
        updatedState.optionsSelected,
        DEFAULT_POPUP_STATE
      );

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
function removeFromOptionsSelected(category, selection, draft) {
  // Check if the category exists in draft
  if (!draft[category]) {
    return; // If the category does not exist, nothing to remove
  }

  // Get the option type from the universal AllOptions object
  const optionType = AllOptions[category]?.type;

  if (optionType === "Dropdown") {
    // For Dropdown, only clear the choices array if the selection exists
    const choiceExists = draft[category].choices.find(
      (choice) => choice.id === selection.id
    );
    if (choiceExists) {
      draft[category].choices = [];
    }
  } else if (optionType === "CheckBoxGroup") {
    // For CheckBoxGroup, remove the selection from the choices array
    draft[category].choices = draft[category].choices.filter(
      (choice) => choice.id !== selection.id
    );
  }

  // If the category has no remaining choices, remove the category itself
  if (draft[category].choices.length === 0) {
    delete draft[category];
  }
}

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
    (choice) => choice.id === selection.id
  );

  if (
    !draft[category].choices.some((choice) => choice.id === selectedOption.id)
  ) {
    draft[category].choices.push(selectedOption);
  }
}

//Removes from optionsSelected an unselected 'option'
function removeFromOptionsAvailable(category, selection, draft) {
  // Check if the category exists in draft
  if (!draft[category]) {
    return; // If the category does not exist, nothing to remove
  }

  // Remove the option from optionsAvailable object
  draft[category].choices = draft[category].choices.filter(
    (choice) => choice.id !== selection.id
  );

  // If the category has no remaining choices, remove the category itself
  if (draft[category].choices.length === 0) {
    delete draft[category];
  }
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
      let unlockStatus = getUnlockStatus(category, selection, optionsSelected);

      if (unlockStatus.addAux || unlockStatus.removeAux) {
        exceptionObject.status = true;
        exceptionObject.type = "adjustAuxOptions";
        exceptionObject.addAux = unlockStatus.addAuxOptions;
        exceptionObject.removeAux = unlockStatus.removeAuxOptions;
        return exceptionObject;
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
      } else {
        // Call getComponentOptions if no rivals are currently selected
        const componentOptions = getComponentOptions(category, selection);

        if (componentOptions) {
          exceptionObject.status = true;
          exceptionObject.componentOptions = componentOptions;
          if (selection.isChecked) {
            exceptionObject.type = "groupOptionSelected";
          } else {
            exceptionObject.type = "groupOptionUnselected";
          }
        }
      }
      return exceptionObject;
    case "powertrain":
      //If no prior powertrain choice selected, return no exceptions
      if (!optionsSelected[category]) {
        return exceptionObject;
      }
      //Check for previously selected option
      let prevOptionSelected = optionsSelected[category].choices.find(
        (o) => o.id === selection.prevValue
      );

      //Check if previously selected option was a 'component'
      if (
        prevOptionSelected &&
        typeof prevOptionSelected.groupID === "string"
      ) {
        exceptionObject.status = true;
        exceptionObject.type = "componentUnselected";
        exceptionObject.component = {
          componentCategory: category,
          componentID: prevOptionSelected.id,
          groupID: prevOptionSelected.groupID,
          groupCategory: prevOptionSelected.groupCategory,
        };
        return exceptionObject;
      } else {
        return exceptionObject;
      }

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
          //Add code to check if this is a 'child' option, and 'parent' option are unselected
          let parentsStatus = getParentStatus(
            category,
            selection,
            optionsSelected
          );
          if (parentsStatus.required) {
            exceptionObject.status = true;
            exceptionObject.type = "parentsMustBeSelected";
            exceptionObject.parentOptions = parentsStatus.parentOptions;
            return exceptionObject;
          }
        }
      }
      //Handle if option was unchecked
      else {
        //First check if the unselected option is a 'component' option
        if (selection.groupID) {
          exceptionObject.status = true;
          exceptionObject.type = "componentUnselected";
          exceptionObject.component = {
            componentCategory: category,
            componentID: selection.id,
            groupID: selection.groupID,
            groupCategory: selection.groupCategory,
          };
          return exceptionObject;
        }
        //Next, check if the unselected is a 'child' option
        else {
          let childStatus = getChildStatus(
            category,
            selection,
            optionsSelected
          );

          if (childStatus.selected) {
            exceptionObject.status = true;
            exceptionObject.type = "childMustBeUnselected";
            exceptionObject.childSelected = childStatus.childOptions;
            return exceptionObject;
          }
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
          //Add code to check if this is a 'child' option, and 'parent' option are unselected
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
        if (selection.groupID) {
          exceptionObject.status = true;
          exceptionObject.type = "componentUnselected";
          exceptionObject.component = {
            componentCategory: category,
            componentID: selection.id,
            groupID: selection.groupID,
            groupCategory: selection.groupCategory,
          };
          return exceptionObject;
        }
        //Check if 'parent' option, and has 'child' option selected
        else {
          let childStatus = getChildStatus(
            category,
            selection,
            optionsSelected
          );

          if (childStatus.selected) {
            exceptionObject.status = true;
            exceptionObject.type = "childMustBeUnselected";
            exceptionObject.childSelected = childStatus.childOptions;
            return exceptionObject;
          }
        }
      }
      break;
  }

  return exceptionObject;
}

function getComponentOptions(category, selection) {
  // Ensure Dependencies.group exists and is an array
  if (!Array.isArray(Dependencies.group)) {
    console.error("Dependencies.group is not defined or is not an array");
    return null;
  }

  // Find the matching object in the group array
  const matchingGroup = Dependencies.group.find(
    (group) => group[category] === selection.id
  );

  // Return the components object if found, otherwise null
  return matchingGroup ? matchingGroup.components : null;
}

function getUnlockStatus(category, selection, optionsSelected) {
  let lockStatus = {
    addAux: false,
    addAuxOptions: {},
    removeAux: false,
    removeAuxOptions: {},
  };
  //Verify if current selection is an 'unlock' type option
  const unlockObject = Dependencies.unlock.find(
    (entry) =>
      entry.activator &&
      entry.activator[category] &&
      entry.activator[category].includes(selection.id)
  );

  //Verify if the previously selected option was an unlock 'type option
  const lockObject = Dependencies.unlock.find(
    (entry) =>
      entry.activator &&
      entry.activator[category] &&
      entry.activator[category].includes(selection.prevValue)
  );
  //If the prevValue was an unlock type option, remove the auxOptions
  if (lockObject) {
    lockStatus.removeAux = true;
    lockStatus.removeAuxOptions = lockObject.auxiliary;
  }
  //If the current selected option is an 'unlock' type, check precursors
  if (unlockObject) {
    if (checkPrecursors(unlockObject, optionsSelected)) {
      lockStatus.addAux = true;
      lockStatus.addAuxOptions = unlockObject.auxiliary;
    }
  }

  return lockStatus;
}

function checkPrecursors(unlockObject, optionsSelected) {
  const { precursor } = unlockObject;

  // Iterate through each precursor object in the precursor array
  return precursor.every((categoryObject) => {
    // Extract the category (e.g., 'trim') and its associated array of IDs
    for (const category in categoryObject) {
      const requiredIds = categoryObject[category];

      // Check if the category exists in optionsSelected
      if (!optionsSelected[category] || !optionsSelected[category].choices) {
        return false; // If the category or choices array is missing
      }

      // Extract all selected IDs for the category
      const selectedIds = optionsSelected[category].choices.map(
        (choice) => choice.id
      );

      // Verify that all required IDs are found in the selected IDs
      if (!requiredIds.every((id) => selectedIds.includes(id))) {
        return false; // Return false if any ID is missing
      }
    }
    return true; // All IDs in this category are satisfied
  });
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

function getChildStatus(category, selection, optionsSelected) {
  let childStatus = {
    selected: false,
    childOptions: [],
  };

  // Check if option has 'child' dependencies
  const childExist = Dependencies.parentToChild.find(
    (dep) =>
      dep.parents[category] && dep.parents[category].includes(selection.id)
  );

  if (childExist) {
    // Loop through child categories
    for (const childCategory in childExist.child) {
      const allChildOptions = childExist.child[childCategory];

      // Check if there are any selected options in the category
      if (optionsSelected[childCategory]) {
        const selectedOptions = optionsSelected[childCategory].choices;

        // Loop through all possible child options
        allChildOptions.forEach((childOptionId) => {
          const selectedChildOption = selectedOptions.find(
            (choice) => choice.id === childOptionId
          );

          // If the child option is selected, add it to the childOptions array
          if (selectedChildOption) {
            childStatus.selected = true;
            childStatus.childOptions.push({
              category: childCategory,
              id: selectedChildOption.id,
              name: selectedChildOption.name,
            });
          }
        });
      }
    }

    // Set selected to true if any child options are found
    childStatus.selected = childStatus.childOptions.length > 0;
  }

  return childStatus;
}

//Helper function process 'components' of group option selected
function addComponentsToOptionsSelected(
  groupCategory,
  groupSelection,
  components,
  newOptionsAvailable,
  draft
) {
  // Iterate through each category in components
  Object.keys(components).forEach((category) => {
    const componentIds = components[category];

    // Ensure the category exists in the draft object
    if (!draft[category]) {
      draft[category] = {
        displayName: newOptionsAvailable[category]?.displayName || category,
        type: newOptionsAvailable[category]?.type || "Unknown",
        choices: [],
      };
    }

    // Iterate through each component ID in the current category
    componentIds.forEach((componentId) => {
      // Find the corresponding choice object in newOptionsAvailable
      const matchingChoice = newOptionsAvailable[category]?.choices?.find(
        (choice) => choice.id === componentId
      );

      if (matchingChoice) {
        const componentChoice = {
          ...matchingChoice,
          name: matchingChoice.name + " - Included in- " + groupSelection.id,
          groupID: groupSelection.id,
          groupCategory: groupCategory,
        };

        // Check if the option type is CheckBoxGroup or Dropdown
        const optionType = AllOptions[category].type;
        if (!draft[category]) {
          draft[category] = {
            type: optionType,
            choices: [],
          };
        }

        if (optionType === "CheckBoxGroup") {
          // Check if the choice already exists in the array
          const existingIndex = draft[category].choices.findIndex(
            (existingChoice) => existingChoice.id === componentChoice.id
          );
          if (existingIndex !== -1) {
            // Replace the existing choice with the updated one
            draft[category].choices[existingIndex] = componentChoice;
          } else {
            // Add new choice if it doesn't exist
            draft[category].choices.push(componentChoice);
          }
        } else if (optionType === "Dropdown") {
          // Replace choices array for Dropdown
          draft[category].choices = [componentChoice];
        }
      }
    });
  });
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

//Changes 'optionAvailable' for group option selected
function updateOptionsAvailableForGroupOptionSelected(
  groupCategory,
  groupID,
  componentOptions,
  draft
) {
  // Iterate over each key in the componentOptions object
  Object.keys(componentOptions).forEach((key) => {
    // Ensure the key exists in draft
    if (draft[key]) {
      // Iterate over the array of component IDs for the current key
      componentOptions[key].forEach((componentId) => {
        // Find the matching choice in the draft[key].choices array
        const matchingChoice = draft[key].choices.find(
          (choice) => choice.id === componentId
        );

        if (matchingChoice) {
          // Update the choice name
          matchingChoice.name = `${matchingChoice.name} - Included in ${groupCategory} selected`;
          //Update the 'component' option with the group attributes
          matchingChoice.groupID = groupID;
          matchingChoice.groupCategory = groupCategory;
          //Change the component price to $0
          matchingChoice.price = 0;
        }
      });
    }
  });
}

//Reset options to default
function resetOptionsDefault(category, selection, draft) {
  // Check if the category exists in draft
  if (!draft[category]) {
    return; // If the category does not exist, nothing to reset
  }

  // Find the default option in the universal AllOptions object
  const defaultChoice = AllOptions[category]?.choices.find(
    (choice) => choice.id === selection.id
  );

  if (defaultChoice) {
    // Replace all matching choices in the draft with the default choice
    draft[category].choices = draft[category].choices.map((choice) =>
      choice.id === selection.id ? { ...defaultChoice } : choice
    );
  }

  // If the category has no remaining choices, optionally remove it
  if (draft[category].choices.length === 0) {
    delete draft[category];
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

function componentUnselectedPopupMessage(
  category,
  selection,
  draft,
  exceptionObject
) {
  const { groupID, groupCategory, componentID, componentCategory } =
    exceptionObject.component;

  // Determine the componentOption based on selection.isChecked
  const componentOption = selection.isChecked
    ? //Here the option changed is from a Dropdown
      AllOptions[componentCategory].choices.find(
        (choice) => choice.id === componentID
      )
    : //Here the option changed is from a unchecked CheckBoxGroup
      AllOptions[category].choices.find((choice) => choice.id === selection.id);

  // Extract names from the unselected component option
  const groupOption = AllOptions[groupCategory].choices.find(
    (choice) => groupID === choice.id
  );

  // Construct the message
  let message =
    `Unselecting ${componentOption.name} will also unselect ` +
    groupOption.name;

  // Set the constructed message to draft.message
  draft.show = true;
  draft.message = message;
  draft.category = category;
  draft.selection = selection;
  draft.exception = {
    action: "componentUnselected",
    groupCategory: groupCategory,
    groupID: groupID,
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
  exceptionObject.parentOptions.forEach((parent) => {
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

function childMustBeUnselectedPopMessage(
  category,
  selection,
  draft,
  exceptionObject
) {
  let parentOption = AllOptions[category].choices.find(
    (choice) => choice.id === selection.id
  );
  // Start constructing the draft message
  let message = `Unselecting ${parentOption.name} will require you to remove `;
  let childChoiceMap = {};

  // Pre-compute and store matched choices for each parent category
  exceptionObject.childSelected.forEach((child) => {
    const childCategory = child.category;
    const childID = child.id;
    if (AllOptions[childCategory]) {
      const matchingChoice = AllOptions[childCategory].choices.find(
        (choice) => choice.id === childID
      );

      if (matchingChoice) {
        if (!childChoiceMap[childCategory]) {
          childChoiceMap[childCategory] = [];
        }
        childChoiceMap[childCategory].push(matchingChoice);
      }
    }
  });

  // Collect all child names in a single loop
  let childNames = Object.values(childChoiceMap)
    .flat()
    .map((choice) => choice.name);

  // Use Intl.ListFormat for natural language list
  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });
  message += formatter.format(childNames);

  // Set the constructed message to draft.message
  draft.show = true;
  draft.message = message;
  draft.category = category;
  draft.selection = selection;
  draft.exception = {
    action: "childMustBeUnselected",
    childToRemove: exceptionObject.childSelected.map((child) => ({
      category: child.category,
      choice: AllOptions[child.category].choices.find(
        (choice) => choice.id === child.id
      ),
    })),
  };
}

export { AllOptions, InitialOptionsAvailable, Dependencies };

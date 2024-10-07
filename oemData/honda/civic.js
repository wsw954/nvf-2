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
      { id: "SedanLX", name: "Sedan LX", price: 23950 },
      { id: "SedanSport", name: "Sedan Sport", price: 25050 },
      { id: "SedanEX", name: "Sedan EX", price: 26950 },
      { id: "SedanTouring", name: "Sedan Touring", price: 30550 },
      { id: "HatchbackLX", name: "Hatchback LX", price: 24950 },
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
      { id: "ASPack1", name: "All Season Protection Package I", price: 420 },
      { id: "ASPack2", name: "All Season Protection Package II", price: 370 },
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
      { id: "TestPackage1", name: "Test Package1", price: 500 },
    ],
  },
  exteriorAccessories: {
    displayName: "Exterior Accessories",
    type: "CheckBoxGroup",
    choices: [
      { id: "Bike", name: "Bike Attachment Frame Mount", price: 216 },
      { id: "BSMoulding", name: "Body Side Moulding", price: 247 },
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
      { id: "Kayak", name: "Kayak Attachment", price: 270 },
      { id: "MoonRVisor", name: "Moon Roof Visor", price: 171 },
      { id: "RBumperApp", name: "Rear Bumper Applique", price: 78 },
      { id: "RBumperProt", name: "Rear Bumper Protector", price: 97 },
      { id: "RoofBas", name: "Roof Basket", price: 412 },
      { id: "RBoxMid", name: "Roof Box-Midsize", price: 567 },
      { id: "RBoxShort", name: "Roof Box-Short", price: 534 },
      { id: "RoofRack", name: "Roof Rack", price: 407 },
      { id: "SkiSnow", name: "Ski/Snowboard Attachment", price: 287 },
      { id: "Surf", name: "Surf/Paddleboard Attachment", price: 173 },
      { id: "SGuardSet", name: "Splash Guard Set", price: 116 },
      { id: "TailGate", name: "Tail Gate Spoiler-HPD ", price: 407 },
      { id: "TestC1", name: "Test Comp 1", price: 100 },
      { id: "TestC2", name: "Test Comp 2", price: 100 },
      { id: "TestRO1", name: "Test Rival Option 1", price: 100 },
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
      { id: "CargoTray", name: "Cargo Tray", price: 124 },
      { id: "CargoTrayDiv", name: "Cargo Tray Dividers", price: 67 },
      { id: "FirstAid", name: "First Aid Kit", price: 35 },
      { id: "DoorSillProt", name: "Door Sill Protection Film", price: 111 },
      { id: "DoorSillIllum", name: "Door Sill Illumination", price: 329 },
      { id: "IDoorSill", name: "Illuminated Door Sill Trim", price: 329 },
      { id: "RPWShade", name: "Rear Passenger Window Shades", price: 192 },
      { id: "SeatBackProt", name: "Seat Back Protectors", price: 109 },
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
        "BSMoulding",
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
        "BSMoulding",
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
        "BSMoulding",
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
        "TestPackage1",
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
        "TestC1",
        "TestC2",
        "TestRO1",
        "TestRO1",
        "UBodySpoilerFront",
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
    TypeR: {
      powertrain: ["Turbo"], // Assuming only Turbo is available for Type R
      exteriorColor: ["Red", "Black"],
      interiorColor: ["BlackIC"],
      packages: ["PP3"],
      exteriorAccessories: ["BSM", "DLS", "SGS", "EAC1", "EAC2", "EAC3"],
      interiorAccessories: ["ASFloorMat", "CH", "CN", "IAC1", "IAC2"],
    },
    HBEXL: {
      powertrain: ["Turbo"], // Assuming only Turbo is available for Type R
      exteriorColor: ["Red", "Black"],
      interiorColor: ["BlackIC"],
      packages: ["ASP1", "ASP2", "HPD", "PP3"],
      exteriorAccessories: [
        "Bike",
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
      TestPackage1: {
        exteriorAccessories: ["TestC1", "TestC2"],
        powertrain: ["turboPowertrain"],
      },
    },

    rivals: {
      ASPack1: {
        packages: ["ASPack2", "HPD", "PP"],
      },
      ASPack2: { packages: ["ASPack1", "PP"] },
      HPD: { packages: ["ASPack1", "PP"], exteriorAccessories: ["SGuardSet"] },
      PP: {
        packages: ["ASPack1", "ASPack2", "HPD"],
      },
      ASPack1Hatch: {
        packages: ["ASPack2Hatch", "PPHatch"],
      },
      ASPack2Hatch: { packages: ["ASPack1Hatch", "PPHatch"] },

      PPHatch: {
        packages: ["ASPack1Hatch", "ASPack2Hatch"],
      },
      TestPackage1: {
        exteriorAccessories: ["TestRO1"],
      },
    },
  },
  //exteriorAccessories
  exteriorAccessories: {
    rivals: {
      DEdgeFilm: { exteriorAccessories: ["DEdgeGuard"] },
      DEdgeGuard: { exteriorAccessories: ["DEdgeFilm"] },
      SGuardSet: {
        exteriorAccessories: ["UBodySpoilerRear"],
        packages: ["HPD"],
      },
      UBodySpoilerRear: {
        exteriorAccessories: ["SGuardSet"],
        packages: ["ASPack1", "PP"],
      },
      EAC4: {
        exteriorAccessories: ["EAC5"],
        interiorAccessories: ["IAC4"],
      },
      EAC5: {
        exteriorAccessories: ["EAC4"],
      },
      //Note: RoofRack is a also a 'parent' option
      RoofRack: { exteriorAccessories: ["SkiSnow", "Surf"] },
      Bike: { exteriorAccessories: ["SkiSnow", "Surf"] },
      Kayak: { exteriorAccessories: ["SkiSnow", "Surf"] },
      RBoxMid: { exteriorAccessories: ["SkiSnow", "Surf"] },
      RBoxShort: { exteriorAccessories: ["SkiSnow", "Surf"] },
      SkiSnow: {
        exteriorAccessories: [
          "RoofRack",
          "Bike",
          "Kayak",
          "RBoxMid",
          "RBoxShort",
        ],
      },
      Surf: {
        exteriorAccessories: [
          "RoofRack",
          "Bike",
          "Kayak",
          "RBoxMid",
          "RBoxShort",
        ],
      },
      TestRO1: {
        packages: ["TestPackage1"],
        exteriorAccessories: ["TestC1", "TestC2"],
      },
    },
    parent: {
      RoofRack: {
        exteriorAccessories: ["Bike", "Kayak", "RBoxMid", "RBoxShort"],
        interiorAccessories: ["IAC6"],
      },
      RoofBas: {
        exteriorAccessories: ["Bike"],
      },
    },
  },
  //interiorAccessories
  interiorAccessories: {
    child: {
      IAC6: {
        exteriorAccessories: ["RoofRack", "RoofBas"],
      },
    },
  },
};

//Initial Options represents the initial default options available once a model is selected
const InitialOptionsAvailable = {
  trim: {
    displayName: "Trim",
    type: "Dropdown",
    choices: [
      { id: "SedanLX", name: "Sedan LX", price: 23750 },
      { id: "SedanSport", name: "Sedan Sport", price: 25050 },
      { id: "SedanEX", name: "Sedan EX", price: 26950 },
      { id: "SedanTouring", name: "Sedan Touring", price: 30550 },
      { id: "HatchbackLX", name: "Hatchback LX", price: 24950 },
      { id: "TypeR", name: "Type R", price: 42895 },
      { id: "HBEXL", name: "Hatchback EX-L", price: 28650 },
      // ... other trims
    ],
  },
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
      case "packageOptionSelected":
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
          updateOptionsAvailableForComponentsAdded(selection, draft);
        });
        break;
      case "packageOptionUnselected":
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
      case "componentUnselected":
        console.log(
          "Line 836 add code to unselect package Component unselected"
        );
        newOptionsSelected = produce(optionsSelected, (draft) => {
          removeFromOptionsSelected(
            category,
            selection,
            optionsAvailable,
            draft
          );
        });
        // let componentOptionUnselected = exceptionObject.rivalsCurrentlySelected;
        // newPopup = produce(popup, (draft) => {
        //   rivalSelectedPopupMessage(
        //     category,
        //     selection,
        //     draft,
        //     componentOptionUnselected
        //   );
        // });

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

//
export function handlePopupConfirm(optionsAvailable, optionsSelected, popup) {
  let newOptionsAvailable = produce(optionsAvailable, (draft) => {}); // Keep optionsAvailable unchanged for now
  let newOptionsSelected = produce(optionsSelected, (draft) => {}); // Keep optionsSelected unchanged for now

  const DEFAULT_POPUP_STATE = {
    show: false,
    message: "",
    exception: {},
  };

  // Reset the popup state to default at the start of function execution
  let newPopup = produce(DEFAULT_POPUP_STATE, (draft) => {});

  switch (popup.exception.action) {
    case "rivalSelected":
      //Add the rival selected, unselect the currently selected rivals
      let categoryRivalChecked = popup.category;
      let selectionRivalChecked = popup.selection;
      newOptionsSelected = produce(optionsSelected, (draft) => {
        addToOptionsSelected(
          categoryRivalChecked,
          selectionRivalChecked,
          draft
        );
      });

      popup.exception.rivalsCurrentlySelected.forEach((rivalSelected) => {
        let rivalChoice = {
          id: rivalSelected.choice.id,
          isChecked: false,
        };
        // Remove currently selected rivals from newOptionsSelected
        newOptionsSelected = produce(newOptionsSelected, (draft) => {
          removeFromOptionsSelected(
            rivalSelected.category,
            rivalChoice,
            optionsAvailable,
            draft
          );
        });
      });

      break;

    case "packageComponentUnselected":
      break;

    case "parentUnselected":
      break;

    case "childSelected":
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
      let rivalStatus = getRivalStatus(category, selection, optionsSelected);
      if (rivalStatus.selected) {
        (exceptionObject.status = true),
          ((exceptionObject.type = "rivalCurrentlySelected"),
          (exceptionObject.rivalsCurrentlySelected =
            rivalStatus.rivalOptionsCurrentlySelected));
      } else if (selection.isChecked) {
        exceptionObject.status = true;
        exceptionObject.type = "packageOptionSelected";

        return exceptionObject;
      } else {
        exceptionObject.status = true;
        exceptionObject.type = "packageOptionUnselected";
        return exceptionObject;
      }
      break;
    case "exteriorAccessories":
      //Handle if option is checked
      if (selection.isChecked) {
        let rivalStatus = getRivalStatus(category, selection, optionsSelected);
        //Handle rival status
        if (rivalStatus.selected) {
          (exceptionObject.status = true),
            ((exceptionObject.type = "rivalCurrentlySelected"),
            (exceptionObject.rivalsCurrentlySelected =
              rivalStatus.rivalOptionsCurrentlySelected));
        } else {
          console.log("Check for prevValue--" + selection);
          //Add code to handle parentStatus
          // let parentStatus = checkIfParentSelected(
          //   category,
          //   selection,
          //   optionsSelected
          // );
          //Check if the category is included in the parent dependency
        }
      }
      //Handle if option is unchecked
      else {
        console.log(selection);
        if (selection.component) {
          console.log("This an unselected component option");
          exceptionObject.status = true;
          exceptionObject.type = "componentUnselected";
          exceptionObject.component = selection.component;
        }
      }
      break;
    // code block
  }

  return exceptionObject;
}

function getRivalStatus(category, selection, optionsSelected) {
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

  let rivalObject = Dependencies[category].rivals[selection.id];

  for (let rivalCategory in rivalObject) {
    let rivalIDs = rivalObject[rivalCategory]; // Ensure this is an array
    if (
      optionsSelected[rivalCategory] &&
      optionsSelected[rivalCategory].choices
    ) {
      optionsSelected[rivalCategory].choices.forEach((choice) => {
        if (rivalIDs && rivalIDs.includes(choice.id)) {
          rivalStatus.selected = true;
          // Add the matching choice to optionsToRemove
          rivalStatus.rivalOptionsCurrentlySelected.push({
            category: rivalCategory,
            choice: choice,
          });
        }
      });
    }
  }

  return rivalStatus;
}

function checkIfParentSelected(category, selection, optionsSelected) {
  let parentStatus = {
    selected: true,
    parentOptions: [
      {
        category: "",
        choice: "",
      },
    ],
  };

  let parentDependencies = Dependencies[category].parent;

  return parentStatus;
}

function getParentStatus(category, selection, optionsSelected) {
  let parentStatus = {
    selected: true,
    parentOptions: [],
  };

  let parentDependencies = Dependencies[category]?.parent;

  // Step 1: Check if category exists in Dependencies
  if (parentDependencies) {
  }

  return parentStatus;
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
            name: choice.name + " - Included in Package Selected",
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
function updateOptionsAvailableForComponentsAdded(selection, draft) {
  const componentDependencies = Dependencies.packages.components[selection.id];
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
            " - Included in Package selected";
          draft[dependencyKey].choices[choiceIndex].component = selection.id;
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

  // Start constructing the draft message with the selected option name
  let message = `Selecting ${selectedOption.name} will also unselect `;

  // Extract names from the rivalsSelected array
  const rivalNames = rivalsCurrentlySelected.map((rival) => rival.choice.name);

  // Construct the message based on the number of rival names
  if (rivalNames.length === 1) {
    // If there's only one rival
    message += `${rivalNames[0]}`;
  } else if (rivalNames.length === 2) {
    // If there are two rivals, join with ' and '
    message += `${rivalNames[0]} and ${rivalNames[1]}`;
  } else if (rivalNames.length > 2) {
    // If there are more than two rivals, join with ', ' and 'and' before the last one
    const lastRival = rivalNames.pop();
    message += `${rivalNames.join(", ")} and ${lastRival}`;
  }

  // Set the constructed message to draft.message
  draft.show = true;
  draft.message = message;
  draft.category = category;
  draft.selection = selection;
  draft.exception = {
    action: "rivalSelected",
    rivalsCurrentlySelected: rivalsCurrentlySelected,
  };
}

export { AllOptions, InitialOptionsAvailable, Dependencies };

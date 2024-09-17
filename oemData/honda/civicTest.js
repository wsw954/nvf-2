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
    modelTrim: {
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
        interiorColor: {
          default: ["BlackIC"],
          GrayEC: ["BlackIC", "GrayIC"],
          PlatinumEC: ["BlackIC", "GrayIC"],
        },
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
        interiorColor: {
          default: ["BlackIC"],
        },
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
        interiorColor: {
          default: ["BlackIC"],
          GrayEC: ["BlackIC", "GrayIC"],
          PlatinumEC: ["BlackIC", "GrayIC"],
        },
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
        interiorColor: {
          default: ["BlackL"],
          GrayEC: ["BlackL", "GrayL"],
          PlatinumEC: ["BlackL", "GrayL"],
        },
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
        powertrain: ["standardPowertrain"],
        exteriorColor: ["BlackEC", "SilverEC", "GrayEC", "PlatinumEC"],
        interiorColor: {
          default: ["BlackIC"],
        },
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
        packages: ["PP3"],
        exteriorAccessories: ["BSM", "DLS", "SGS", "EAC1", "EAC2", "EAC3"],
        interiorAccessories: ["ASFloorMat", "CH", "CN", "IAC1", "IAC2"],
      },
      HBEXL: {
        powertrain: ["Turbo"], // Assuming only Turbo is available for Type R
        exteriorColor: ["Red", "Black"],
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
  },

  //Exterior color dependencies
  exteriorColor: {
    unlock: {
      PlatinumEC: {
        precursor: { trim: ["SedanEX", "SedanTouring"] },
      },
      auxiliary: {
        interiorColor: ["GrayIC", "BlackL"],
        interiorAccessories: ["IAC6"],
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
        interiorAccessories: ["ASFloorMat"],
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
  console.log(optionsSelected);
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

        // Use the callback function to reset all options available for the trim selected
        newOptionsAvailable = resetOptionsForTrimSelected(
          selection,
          optionsAvailable
        );

        break;
      case "rivalSelected":
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
      case "removeAuxiliaryOptionsAvailable":
        //Add the selected option to all selected options
        newOptionsSelected = produce(optionsSelected, (draft) => {
          addToOptionsSelected(category, selection, draft);
        });
        //Remove the unlock auxiliary options
        newOptionsAvailable = produce(optionsAvailable, (draft) => {
          Object.keys(exceptionObject.unlock).forEach((unlockCategory) => {
            // Step 2: Iterate over each array of values in the `unlock` object
            exceptionObject.unlock[unlockCategory].forEach((item) => {
              let auxiliaryOption = {
                id: item,
              };
              // Call addToOptionsAvailable for each item
              removeFromOptionsAvailable(
                unlockCategory,
                auxiliaryOption,
                draft
              );
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
        console.log(optionsSelected);
        break;
      case "componentOptionSelected":
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
        // Update the option 'components' in the optionsAvailable as needed
        newOptionsAvailable = produce(optionsAvailable, (draft) => {
          updateOptionsAvailableForComponentsAdded(selection, draft);
        });
        break;
      case "componentOptionUnselected":
        newOptionsSelected = produce(optionsSelected, (draft) => {
          //Remove the actual 'component' option selected
          removeFromOptionsSelected(
            category,
            selection,
            optionsAvailable,
            draft
          );
          //Remove the nested'components' options
          removePackageComponents(selection, optionsAvailable, draft);
        });
        // Update the option 'components' in the optionsAvailable as needed
        newOptionsAvailable = produce(optionsAvailable, (draft) => {
          //Reset the package 'components' in  optionsAvailable to default
          resetOptionsAvailableForComponentsRemoved(selection, draft);
        });

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
  draft[category].choices.push(selectedOption);
}

//Removes from option from optionsAvailable
function removeFromOptionsAvailable(category, selection, draft) {
  draft[category].choices = draft[category].choices.filter(
    (choice) => choice.id !== selection.id
  );
}

// Callback function to reset options available when a model trim is selected
function resetOptionsForTrimSelected(selection, optionsAvailable) {
  return produce({}, (draft) => {
    // Safely copy the trim object or fallback if undefined
    draft.trim = optionsAvailable.trim || AllOptions.trim;

    // Check if dependencies for the selected trim are defined and correct
    const trimDependencies = Dependencies.trim.modelTrim[selection.id];
    Object.keys(trimDependencies).forEach((dependencyKey) => {
      if (Dependencies.trim && Dependencies.trim.modelTrim[selection.id]) {
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
      exceptionObject.status = true;
      let selectedVehicleTrim = optionsSelected.trim.choices[0].id;
      let auxiliaryOptions = Dependencies[category].unlock.auxiliary;
      exceptionObject.unlock = auxiliaryOptions;

      //Check if all the conditions for unlocking the 'auxiliary' options exist
      if (
        Dependencies[category].unlock[selection.id]?.precursor.trim.includes(
          selectedVehicleTrim
        )
      ) {
        exceptionObject.type = "addAuxiliaryOptionsAvailable";
      } else {
        exceptionObject.type = "removeAuxiliaryOptionsAvailable";
      }
      return exceptionObject;
    case "packages":
      let rivalStatus = getRivalStatus(category, selection, optionsSelected);
      if (rivalStatus.selected) {
        (exceptionObject.status = true),
          ((exceptionObject.type = "rivalSelected"),
          (exceptionObject.rivalsCurrentlySelected =
            rivalStatus.rivalOptionsCurrentlySelected));
      } else if (selection.isChecked) {
        exceptionObject.status = true;
        exceptionObject.type = "componentOptionSelected";

        return exceptionObject;
      } else {
        exceptionObject.status = true;
        exceptionObject.type = "componentOptionUnselected";
        return exceptionObject;
      }

      break;
    case "exteriorAccessories":
      // code block
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

//Removes from optionsSelected, components of an option unselected
function removeComponentsFromOptionsSelected(
  selection,
  optionsAvailable,
  draft
) {
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
function updateOptionsAvailableForComponentsAdded(selection, draft) {
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
function resetOptionsAvailableForComponentsRemoved(selection, draft) {
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

function unlockOptionHandler(category, selection, draft) {
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

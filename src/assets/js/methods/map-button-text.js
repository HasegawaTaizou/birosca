"use strict";

export default function mapButtonText() {
  let mappedName = "";

  const mappedNames = [
    { ACAI: "AÇAÍ" },
    { SNACK: "LANCHE" },
    { DRINK: "BEBIDA" },
    { DIVERSE: "DIVERSO" },
  ];
  
  mappedNames.forEach((name) => {
    if (this.foodType == Object.keys(name)) {
      mappedName = Object.values(name)[0];
    }
  });

  return mappedName;
}

"use strict";

const validationsIngredients = function (value, arrayIngredients) {
  console.log(value);
  const isArrayValid =
    Array.isArray(arrayIngredients) && arrayIngredients.length > 0;

  if (!isArrayValid) {
    this.isIngredientsInvalid = true;
  } else {
    this.isIngredientsInvalid = false;
  }
};

export default validationsIngredients;

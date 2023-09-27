"use strict";

const validationsIngredients = function (value, arrayIngredients) {
  const isArrayValid =
    Array.isArray(arrayIngredients) && arrayIngredients.length > 0;

  if (!isArrayValid) {
    this.isIngredientsInvalid = true;
    this.$nextTick(() => {
      this.$refs.newIngredient.focus();
    });
    return false;
  } else {
    this.isIngredientsInvalid = false;
    return true
  }
};

export default validationsIngredients;

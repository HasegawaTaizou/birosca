"use strict";

const validationsIngredients = function (value, arrayIngredients) {
  const isArrayValid =
    Array.isArray(arrayIngredients) && arrayIngredients.length > 0;

  if (!isArrayValid) {
    console.log('entrou aqui');
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

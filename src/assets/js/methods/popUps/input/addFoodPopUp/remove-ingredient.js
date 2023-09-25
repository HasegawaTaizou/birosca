"use strict";

export default function removeIngredient(ingredientId) {
  const tdToRemove = document.querySelector(
    `.ingredient-container[data-ingredient-id="${ingredientId}"]`
  );

  if (tdToRemove) {
    tdToRemove.parentNode.removeChild(tdToRemove);
  }
}

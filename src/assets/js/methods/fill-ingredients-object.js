"use strict";

export default function fillIngredientsObject() {
  this.ingredientsObject = this.ingredients.map((ingredientName, id) => ({
    id,
    name: ingredientName,
  }));
}

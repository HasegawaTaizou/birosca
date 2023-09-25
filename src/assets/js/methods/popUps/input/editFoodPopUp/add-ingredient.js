"use strict";

export default function addIngredient() {
  if (this.newIngredient.trim() !== "") {
    this.ingredients.push(this.newIngredient);
    this.newIngredient = "";
  }

  this.ingredientsObject = this.ingredients.map((ingredientName, id) => ({
    id,
    name: ingredientName,
  }));

  this.splitArray(this.ingredientsObject);
}

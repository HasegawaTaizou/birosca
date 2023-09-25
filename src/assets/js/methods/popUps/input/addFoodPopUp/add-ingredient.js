"use strict";

export default function addIngredient() {
  if (this.newIngredient.trim() !== "") {
    this.ingredients.push({ name: this.newIngredient });
    this.newIngredient = "";
  }
}

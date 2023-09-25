"use strict";

export default function removeIngredient(ingredientId) {
  console.log(ingredientId);
  this.updatedIngredients = this.ingredientsObject.filter(
    (ingredient) => ingredient.id !== ingredientId
  );

  this.ingredientsArray = this.updatedIngredients.map(
    (ingredient) => ingredient.name
  );

  this.ingredients = this.ingredientsArray;

  this.splitArray(this.updatedIngredients);

  this.ingredientsObject = this.updatedIngredients;

  console.log("ingredientsObject atualizado: ", this.updatedIngredients);
}

"use strict";

export default function mountPopUp() {
  this.newTitle = this.selectedItem.title;
  this.newPrice = this.selectedItem.price;
  this.ingredients = this.selectedItem.ingredients;
  this.fillIngredientsObject();
  this.splitArray(this.ingredientsObject);
}

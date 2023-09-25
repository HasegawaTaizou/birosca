"use strict";

export default function splitArray(array) {
    console.log(this.groupedIngredients);
  this.groupedIngredients = [];
  const chunkSize = 3;

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    this.groupedIngredients.push(chunk);
  }
}

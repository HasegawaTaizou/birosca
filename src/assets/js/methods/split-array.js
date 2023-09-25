'use strict'

export default function splitArray() {
  this.snackData.forEach((item) => {
    const ingredients = item.ingredients;
    let currentSubArray = [];

    for (let i = 0; i < ingredients.length; i += 3) {
      const subArray = ingredients.slice(i, i + 3);
      currentSubArray.push(subArray);
    }

    this.groupedArrayIngredients.push(currentSubArray);
  });
}

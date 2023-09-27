'use strict'

export default function foodData(selectedItem) {
  console.log(selectedItem);
  return {
    //FOOD IMAGE
    isSelectedImage: true,
    downloadURL: selectedItem.image,

    //FOOD DATA
    newIngredient: "",
    ingredients: selectedItem.ingredients,

    //NEW FOOD DATA
    newTitle: selectedItem.title,
    newPrice: selectedItem.price,

    //INGREDIENT OBJECT
    ingredientsObject: {},
    ingredientsArray: [],
    updatedIngredients: [],

    //GROUPED INGREDIENTS
    groupedIngredients: [],
  };
}

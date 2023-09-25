"use strict";

export default function executeAcceptAction() {
  this.ingredientsArray = this.ingredientsObject.map(
    (ingredient) => ingredient.name
  );

  const newFoodData = {
    image: this.downloadURL,
    title: this.newTitle,
    price: this.newPrice,
    ingredients: this.ingredientsArray,
  };

  console.log(newFoodData);

  this.$store.commit("SET_NEW_FOOD_DATA", newFoodData);

  this.acceptFunction();
  this.closePopUp("SET_SHOW_ADD_FOOD_POP_UP");

  //PROVISORIO pois nao esta atualizando os ingredients ao clicar em this.acceptFunction();
  location.reload();
}

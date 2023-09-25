"use strict";

export default function executeAcceptAction() {
  const ingredientsArray = this.ingredients.map((ingredient) => {
    return ingredient.name;
  });

  const newFoodData = {
    image: this.downloadURL,
    title: this.title,
    price: this.price,
    ingredients: ingredientsArray,
  };

  console.log(newFoodData);

  this.$store.commit("SET_NEW_FOOD_DATA", newFoodData);

  console.log("Ação executada");
  this.acceptFunction();
  this.closePopUp("SET_SHOW_ADD_FOOD_POP_UP");

  //PROVISORIO pois nao esta atualizando os ingredients ao clicar em this.acceptFunction();
  location.reload();
}

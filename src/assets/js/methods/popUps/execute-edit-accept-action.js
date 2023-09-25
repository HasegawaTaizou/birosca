"use strict";

export default function executeAcceptAction() {
  this.ingredientsArray = this.ingredientsObject.map(
    (ingredient) => ingredient.name
  );

  const foodData = {
    image: this.downloadURL,
    price: this.newPrice,
    title: this.newTitle,
    ingredients: this.ingredientsArray,
  };

  console.log(foodData);

  this.$store.commit("SET_FOOD_DATA", foodData);

  this.acceptFunction();
  this.closePopUp("SET_SHOW_EDIT_FOOD_POP_UP");

  //PROVISORIO pois nao esta atualizando os ingredients ao clicar em this.acceptFunction();
  //FAZER NO POPUP DE ADD TAMBEM PORQUE TA DANDO O MESMO ERRO
  location.reload();
}

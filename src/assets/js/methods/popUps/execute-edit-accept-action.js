"use strict";

import fieldsFood from "../../validations/fields/fields-food";

export default async function executeAcceptAction() {
  this.v$.$touch();
  const isFilledFields = await this.v$.$validate();

  this.validationsIngredients(this.newIngredient, this.ingredientsObject);

  if(isFilledFields && this.validationsIngredients(this.newIngredient, this.ingredientsObject)) {
  this.ingredientsArray = this.ingredientsObject.map(
    (ingredient) => ingredient.name
  );

  const foodData = {
    image: this.downloadURL,
    price: this.newPrice,
    title: this.newTitle,
    ingredients: this.ingredientsArray,
  };

  this.$store.commit("SET_FOOD_DATA", foodData);

  this.acceptFunction();
  this.closePopUp("SET_SHOW_EDIT_FOOD_POP_UP");

  //PROVISORIO pois nao esta atualizando os ingredients ao clicar em this.acceptFunction();
  //FAZER NO POPUP DE ADD TAMBEM PORQUE TA DANDO O MESMO ERRO
  location.reload();
} else {
  for (const field of fieldsFood) {
    if (this.v$[field.key].$error) {
      this.$nextTick(() => {
        this.$refs[field.ref].focus();
      });
      break;
    }
  }
}
}
  

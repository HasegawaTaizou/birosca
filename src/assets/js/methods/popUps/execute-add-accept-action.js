"use strict";

import fieldsFood from "../../validations/fields/fields-food";

export default async function executeAcceptAction() {
  this.v$.$touch();
  const isFilledFields = await this.v$.$validate();

  this.validationsImage();
  this.validationsPrice();
  this.validationsIngredients(this.newIngredient, this.ingredientsObject);

  if (isFilledFields && this.validationsIngredients(this.newIngredient, this.ingredientsObject)) {
    this.ingredientsArray = this.ingredientsObject.map(
      (ingredient) => ingredient.name
    );

    const newFoodData = {
      image: this.downloadURL,
      title: this.newTitle,
      price: this.newPrice,
      ingredients: this.ingredientsArray,
    };

    this.$store.commit("SET_NEW_FOOD_DATA", newFoodData);

    this.acceptFunction();
    this.closePopUp("SET_SHOW_ADD_FOOD_POP_UP");

    //PROVISORIO pois nao esta atualizando os ingredients ao clicar em this.acceptFunction();
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

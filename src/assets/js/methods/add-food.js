"use strict";

import { BASE_URL } from "@/assets/js/config.js";
import axios from "axios";

export default function addFood() {
  this.$store.commit("SET_SHOW_LOADING", true);

  const newFoodData = {
    image: this.$store.state.newFoodData.image,
    title: this.$store.state.newFoodData.title,
    price: this.$store.state.newFoodData.price,
    foodType: this.foodType,
    ingredients: this.$store.state.newFoodData.ingredients,
  };
  axios
    .post(`${BASE_URL}/food-registration/`, newFoodData)
    .then(() => {
      //PROVISORIO pois nao esta atualizando os ingredients ao clicar em this.acceptFunction();
      location.reload();
      this.getFoods(this.foodType);
    })
    .catch((error) => {
      console.log(error);
    }).finally(() => {
      this.$store.commit("SET_SHOW_LOADING", false);
    });
}

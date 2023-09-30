"use strict";

import { BASE_URL } from "@/assets/js/config.js";
import axios from "axios";

export default function editFood() {
  this.$store.commit("SET_SHOW_LOADING", true);

  const foodData = {
    image: this.$store.state.foodData.image,
    title: this.$store.state.foodData.title,
    price: this.$store.state.foodData.price,
    ingredients: this.$store.state.foodData.ingredients,
  };
  axios
    .put(`${BASE_URL}/food-update/${this.$store.state.foodId}`, foodData)
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

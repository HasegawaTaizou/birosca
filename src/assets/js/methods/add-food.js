"use strict";

import { BASE_URL } from "@/assets/js/config.js";
import axios from "axios";

export default function addFood() {
  const newFoodData = {
    image: this.$store.state.newFoodData.image,
    title: this.$store.state.newFoodData.title,
    price: this.$store.state.newFoodData.price,
    foodType: this.foodType,
    ingredients: this.$store.state.newFoodData.ingredients,
  };
  axios.post(`${BASE_URL}/food-registration/`, newFoodData).then(() => {
    this.getFoods(this.foodType);
  });
}

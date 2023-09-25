"use strict";

import { BASE_URL } from "@/assets/js/config.js";
import axios from "axios";

export default function editFood() {
  const foodData = {
    image: this.$store.state.foodData.image,
    title: this.$store.state.foodData.title,
    price: this.$store.state.foodData.price,
    ingredients: this.$store.state.foodData.ingredients,
  };
  axios.put(`${BASE_URL}/food-update/${this.foodId}`, foodData).then(() => {
    this.getFoods("SNACK");
  });
}

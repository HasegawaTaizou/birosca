"use strict";

import { BASE_URL } from "@/assets/js/config.js";
import axios from "axios";

export default function getFoods(foodType) {
  axios.get(`${BASE_URL}/foods/${foodType.toUpperCase()}`).then((response) => {
    this.foodData = response.data.foods;
    
    this.$store.commit("SET_FOOD_DATA", this.foodData);
    this.splitArray();
  });
}

"use strict";

import { BASE_URL } from "@/assets/js/config.js";
import axios from "axios";

export default function getFoods(foodType) {
  console.log(foodType);
  axios.get(`${BASE_URL}/foods/${foodType.toUpperCase()}`).then((response) => {
    console.log(response.data.foods);
    this.foodData = response.data.foods;
    this.splitArray();
  });
}

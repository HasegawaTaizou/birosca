"use strict";

import { BASE_URL } from "@/assets/js/config.js";
import axios from "axios";

export default function getFoods(foodType) {
  axios.get(`${BASE_URL}/foods/${foodType}`).then((response) => {
    this.foodData = response.data.foods;
    this.splitArray();
  });
}
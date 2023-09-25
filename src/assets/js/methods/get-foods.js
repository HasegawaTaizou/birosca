"use strict";

import { BASE_URL } from "@/assets/js/config.js";
import axios from "axios";

export default function getFoods(typeFood) {
  axios.get(`${BASE_URL}/foods/${typeFood}`).then((response) => {
    this.snackData = response.data.foods;
    this.splitArray();
  });
}
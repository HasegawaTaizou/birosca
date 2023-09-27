"use strict";

import { BASE_URL } from "@/assets/js/config.js";
import axios from "axios";

export default function deleteFood() {
  axios.delete(`${BASE_URL}/food-delete/${this.$store.state.foodId}`).then(() => {
    this.getFoods(this.foodType);
  });
}

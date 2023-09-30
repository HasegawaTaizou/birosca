"use strict";

import { BASE_URL } from "@/assets/js/config.js";
import axios from "axios";

export default function deleteFood() {
  axios
    .delete(`${BASE_URL}/food-delete/${this.$store.state.foodId}`)
    .then(() => {
      //PROVISORIO pois nao esta atualizando os ingredients ao clicar em this.acceptFunction();
      location.reload();
      this.getFoods(this.foodType);
    })
    .catch((error) => {
      console.log(error);
    });
}

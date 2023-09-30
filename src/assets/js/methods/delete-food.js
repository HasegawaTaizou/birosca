"use strict";

import { BASE_URL } from "@/assets/js/config.js";
import axios from "axios";

export default function deleteFood() {
  this.$store.commit("SET_SHOW_LOADING", true);

  axios
    .delete(`${BASE_URL}/food-delete/${this.$store.state.foodId}`)
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

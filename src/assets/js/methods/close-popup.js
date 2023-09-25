"use strict";

export default function closePopUp() {
  this.$store.commit("SET_SHOW_EDIT_FOOD_POP_UP", false);
  console.log(this.$store.state.showEditFoodPopUp);
}

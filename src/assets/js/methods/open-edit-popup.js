"use strict";

export default function openEditPopup(index, id) {
  this.foodIndex = index;
  this.foodId = id;
  this.showEditFoodPopUp = true;

  this.$store.commit("SET_SHOW_EDIT_FOOD_POP_UP", true);
}

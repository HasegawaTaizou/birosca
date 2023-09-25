"use strict";

export default function openEditPopup(index, id) {
  this.snackIndex = index;
  this.snackId = id;
  this.showEditFoodPopUp = true;

  this.$store.commit("SET_SHOW_EDIT_FOOD_POP_UP", true);
}

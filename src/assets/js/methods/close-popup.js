"use strict";

export default function closePopUp() {
  this.$store.commit("SET_SHOW_EDIT_FOOD_POP_UP", false);
  console.log(this.teste);
  this.teste = !this.teste
  console.log(this.teste);
}

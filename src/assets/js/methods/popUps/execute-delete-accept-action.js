"use strict";

export default async function executeAcceptAction() {
  await this.acceptFunction();
  this.closePopUp("SET_SHOW_DELETE_FOOD_POP_UP");
}

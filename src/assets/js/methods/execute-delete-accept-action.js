"use strict";

export default function executeAcceptAction() {
  this.acceptFunction();
  this.closePopUp("SET_SHOW_DELETE_FOOD_POP_UP");

  //PROVISORIO pois nao esta atualizando os ingredients ao clicar em this.acceptFunction();
  location.reload();
}

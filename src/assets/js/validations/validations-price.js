"use strict";

const validationsPrice = function () {
  if (this.newPrice == '0') {
    this.isPriceInvalid = true;
  } else {
    this.isPriceInvalid = false;
  }
};

export default validationsPrice;

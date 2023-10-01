"use strict";

const validationsPrice = function () {
  if (this.newPrice == "0") {
    this.isPriceInvalid = true;
    this.$nextTick(() => {
      this.$refs.newPrice.inputRef.focus();
    });
    return false;
  } else {
    this.isPriceInvalid = false;
    return true;
  }
};

export default validationsPrice;

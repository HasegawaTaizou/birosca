"use strict";

const validationsImage = function () {
  if (!this.isSelectedImage) {
    this.isImageInvalid = true;
    return false;
  } else {
    this.isImageInvalid = false;
    return true;
  }
};

export default validationsImage;

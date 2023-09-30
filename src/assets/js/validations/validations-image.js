"use strict";

const validationsImage = function () {
  if (!this.isSelectedImage) {
    this.isImageInvalid = true;
  } else {
    this.isImageInvalid = false;
  }
};

export default validationsImage;

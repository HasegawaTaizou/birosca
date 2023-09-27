"use strict";

const validationsImage = function () {
  (!this.isSelectedImage);
  if (!this.isSelectedImage) {
    this.isImageInvalid = true;
  } else {
    this.isImageInvalid = false;
  }
};

export default validationsImage;

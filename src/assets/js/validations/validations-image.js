"use strict";

const validationsImage = function () {
  console.log(!this.isSelectedImage);
  if (!this.isSelectedImage) {
    this.isImageInvalid = true;
  } else {
    this.isImageInvalid = false;
  }
};

export default validationsImage;

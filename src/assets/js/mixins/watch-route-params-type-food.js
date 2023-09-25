"use strict";

export default {
  watch: {
    "$route.params.typeFood"(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.getFoods(newValue);
      }
    },
  },
};

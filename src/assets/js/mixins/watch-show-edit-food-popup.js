"use strict";

export default {
  watch: {
    "$store.state.showEditFoodPopUp": function (newValue) {
      if (newValue === false) {
        this.getFoods("SNACK");
      } else {
        this.scrollToTop();
      }
    },
  },
};

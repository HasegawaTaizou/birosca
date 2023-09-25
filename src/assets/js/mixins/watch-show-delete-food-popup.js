"use strict";

export default {
  watch: {
    "$store.state.showDeleteFoodPopUp"(newValue) {
      if (newValue == true) {
        this.scrollToTop();
      }
    },
  },
};

"use strict";

export default {
  watch: {
    "$store.state.showAddFoodPopUp"(newValue) {
      if (newValue == true) {
        this.scrollToTop();
      }
    },
  },
};

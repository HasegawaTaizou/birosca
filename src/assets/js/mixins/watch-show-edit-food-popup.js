"use strict";

export default {
  watch: {
    "$store.state.showEditFoodPopUp": function (newValue) {
      if (newValue === false) {
        this.getSnacks();
      } else {
        this.scrollToTop();
      }
    },
  },
};

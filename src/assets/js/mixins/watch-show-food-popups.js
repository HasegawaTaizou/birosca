"use strict";

import watchShowEditFoodPopUp from "../mixins/watch-show-edit-food-popup.js";
import watchShowAddFoodPopUp from "../mixins/watch-show-add-food-popup.js";
import watchShowDeleteFoodPopUp from "../mixins/watch-show-delete-food-popup.js";

export default {
  mixins: [
    watchShowEditFoodPopUp,
    watchShowAddFoodPopUp,
    watchShowDeleteFoodPopUp,
  ],
};

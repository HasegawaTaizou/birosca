import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    //MANAGE FOOD POPUP STATUS
    showManageFoodPopUp: true,

    //DELETE FOOD POPUP STATUS
    showDeleteFoodPopUp: true,
  },
  mutations: {
    SET_SHOW_MANAGE_FOOD_POP_UP(state, value) {
      state.showManageFoodPopUp = value;
    },
    SET_SHOW_DELETE_FOOD_POP_UP(state, value) {
      state.showDeleteFoodPopUp = value;
    },
  },
});

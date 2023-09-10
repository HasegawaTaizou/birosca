import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    //MANAGE FOOD POPUP STATUS
    showManageFoodPopUp: true,

    //DELETE FOOD POPUP STATUS
    showDeleteFoodPopUp: true,
  },
  mutations: {
    setShowManageFoodPopUp(state, value) {
      state.showManageFoodPopUp = value;
    },
    setShowDeleteFoodPopUp(state, value) {
      state.showDeleteFoodPopUp = value;
    },
  },
});

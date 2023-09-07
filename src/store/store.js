import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    //MANAGE FOOD POPUP STATUS
    showManageFoodPopUp: true,
  },
  mutations: {
    setShowManageFoodPopUp(state, value) {
      state.showManageFoodPopUp = value;
    },
  },
});

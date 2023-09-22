import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    //MANAGE FOOD POPUP STATUS
    showManageFoodPopUp: false,

    //DELETE FOOD POPUP STATUS
    showDeleteFoodPopUp: false,

    //EDIT FOOD POPUP STATUS
    showEditFoodPopUp: false,

    //FOOD DATA
    newFoodData: {
      title: "",
      image: "",
      price: 0.0,
      foodType: "",
      ingredients: [],
    },
  },
  mutations: {
    SET_SHOW_MANAGE_FOOD_POP_UP(state, value) {
      state.showManageFoodPopUp = value;
    },
    SET_SHOW_EDIT_FOOD_POP_UP(state, value) {
      state.showEditFoodPopUp = value;
    },
    SET_SHOW_DELETE_FOOD_POP_UP(state, value) {
      state.showDeleteFoodPopUp = value;
    },
    SET_FOOD_DATA(state, value) {
      state.newFoodData = value;
    },
  },
});

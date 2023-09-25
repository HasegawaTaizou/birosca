import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    //EDIT FOOD POPUP STATUS
    showEditFoodPopUp: false,

    //DELETE FOOD POPUP STATUS
    showDeleteFoodPopUp: false,

    //ADD FOOD POPUP STATUS
    showAddFoodPopUp: false,

    //FOOD IMAGE
    isSelectedImage: false,
    
    //EDIT FOOD DATA
    foodData: {
      title: "",
      image: "",
      price: 0.0,
      ingredients: [],
    },

    //ADD FOOD DATA
    newFoodData: {
      title: "",
      image: "",
      price: 0.0,
      foodType: "",
      ingredients: [],
    },
  },
  mutations: {
    SET_SHOW_EDIT_FOOD_POP_UP(state, value) {
      state.showEditFoodPopUp = value;
    },
    SET_SHOW_DELETE_FOOD_POP_UP(state, value) {
      state.showDeleteFoodPopUp = value;
    },
    SET_SHOW_ADD_FOOD_POP_UP(state, value) {
      state.showAddFoodPopUp = value;
    },
    SET_FOOD_DATA(state, value) {
      state.foodData = value;
    },
    SET_NEW_FOOD_DATA(state, value) {
      state.newFoodData = value;
    },
    SET_IS_SELECTED_IMAGE(state, value) {
      state.isSelectedImage = value;
    }
  },
});

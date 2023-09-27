<template>
  <section class="foods">
    <div class="foods__foods-container">
      <FoodDashboard :foodType="foodType"></FoodDashboard>
    </div>
    <button
      @click="this.$store.commit('SET_SHOW_ADD_FOOD_POP_UP', true)"
      class="foods__add-button"
    >
      ADICIONAR {{ this.mapButtonText() }}
    </button>
    <EditFoodPopUp
      v-if="this.$store.state.showEditFoodPopUp"
      :accept-function="editFood"
      :selectedItem="this.$store.state.foodData[this.$store.state.foodIndex]"
    />
    <DeleteFoodPopUpVue :acceptFunction="deleteFood" />
    <AddFoodPopUp :acceptFunction="addFood" />
  </section>
</template>

<script>
//POP UPS
import DeleteFoodPopUpVue from "./popUps/DeleteFoodPopUp.vue";
import AddFoodPopUp from "./popUps/AddFoodPopUp.vue";
import EditFoodPopUp from "./popUps/EditFoodPopUp.vue";

//COMPONENTS
import FoodDashboard from "../components/FoodDashboard.vue"

//METHODS
import scrollToTop from "../js/methods/popUps/scroll-to-top.js";
import openEditPopup from "../js/methods/open-edit-popup.js";
import splitArray from "../js/methods/split-array.js";
import formatPrice from "../js/methods/format-price.js";
import getFoods from "../js/methods/get-foods.js";
import editFood from "../js/methods/edit-food.js";
import deleteFood from "../js/methods/delete-food.js";
import addFood from "../js/methods/add-food.js";
import mapButtonText from '../js/methods/map-button-text.js'

//MIXINS
import watchShowEditFoodPopUps from "../js/mixins/watch-show-food-popups.js";
import watchRouteParamsTypeFood from "../js/mixins/watch-route-params-type-food.js";

//DATA
import foodsData from "../js/data/foods-data.js";

export default {
  name: "FoodsDashboard",
  props: {
    foodType: {
      type: String,
      required: true,
    },
  },
  components: {
    DeleteFoodPopUpVue,
    AddFoodPopUp,
    EditFoodPopUp,
    FoodDashboard,
  },
  data() {
    const data = foodsData();
    return {
      ...data,
    };
  },
  mixins: [watchShowEditFoodPopUps, watchRouteParamsTypeFood],
  methods: {
    mapButtonText,
    scrollToTop,
    openEditPopup,
    splitArray,
    formatPrice,
    getFoods,
    editFood,
    deleteFood,
    addFood,
  },
  mounted() {
    this.mapButtonText();
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/foods/foodsStyle.css");
</style>


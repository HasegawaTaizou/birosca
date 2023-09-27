<template>
    <div v-for="(food, index) in foodData" :key="food.id" class="food">
      <img :src="food.image" alt="Food Image" class="food__image" />
      <div class="food__main">
        <span class="food__name">{{ food.title }}</span>
        <span class="food__price">{{ formatPrice(Number(food.price)) }}</span>
      </div>
      <div class="food__ingredients-container">
        <span class="ingredients__title">INGREDIENTES</span>
        <table class="ingredients__ingredients-table">
          <tbody class="ingredients-body">
            <tr
              v-for="(ingredients, index) in groupedArrayIngredients[index]"
              :key="index"
              class="ingredients-container"
            >
              <td
                class="ingredient"
                v-for="(ingredient, index) in ingredients"
                :key="index"
                :data-ingredient-id="index"
              >
                {{ ingredient }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="food__actions">
        <i
          @click="
            this.$store.commit('SET_SHOW_EDIT_FOOD_POP_UP', true);
            openEditPopup(index, food.id);
          "
          class="fa-solid fa-pen action__edit"
        ></i>
        <i
          @click="
            this.$store.commit('SET_SHOW_DELETE_FOOD_POP_UP', true);
            this.$store.commit('SET_FOOD_ID', food.id);
          "
          class="fa-solid fa-trash action__delete"
        ></i>
      </div>
    </div>
</template>

<script>
//POP UPS
import DeleteFoodPopUpVue from "./popUps/DeleteFoodPopUp.vue";
import AddFoodPopUp from "./popUps/AddFoodPopUp.vue";
import EditFoodPopUp from "./popUps/EditFoodPopUp.vue";

//METHODS
import scrollToTop from "../js/methods/popUps/scroll-to-top.js";
import openEditPopup from "../js/methods/open-edit-popup.js";
import splitArray from "../js/methods/split-array.js";
import formatPrice from "../js/methods/format-price.js";
import getFoods from "../js/methods/get-foods.js";
import editFood from "../js/methods/edit-food.js";
import deleteFood from "../js/methods/delete-food.js";
import addFood from "../js/methods/add-food.js";

//MIXINS
import watchShowEditFoodPopUps from "../js/mixins/watch-show-food-popups.js";
import watchRouteParamsTypeFood from "../js/mixins/watch-route-params-type-food.js";

//DATA
import foodsData from "../js/data/foods-data.js";

export default {
  name: "Foods",
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
  },
  data() {
    const data = foodsData();
    return {
      ...data,
    };
  },
  mixins: [watchShowEditFoodPopUps, watchRouteParamsTypeFood],
  methods: {
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
    this.getFoods(this.foodType);
  },
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/foods/foodsStyle.css");
</style>

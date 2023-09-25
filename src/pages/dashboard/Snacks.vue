<template>
  <section class="foods">
    <div class="foods__foods-container">
      <div v-for="(food, index) in foodData" :key="food.id" class="food">
        <img :src="food.image" alt="Food Image" class="food__image" />
        <div class="food__main">
          <span class="food__name">{{ food.title }}</span>
          <span class="food__price">{{
            formatPrice(Number(food.price))
          }}</span>
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
              foodId = food.id;
            "
            class="fa-solid fa-trash action__delete"
          ></i>
        </div>
      </div>
    </div>
    <button
      @click="this.$store.commit('SET_SHOW_ADD_FOOD_POP_UP', true)"
      class="foods__add-button"
    >
      ADICIONAR LANCHE
    </button>
    <EditFoodPopUp
      v-if="this.$store.state.showEditFoodPopUp"
      :accept-function="editFood"
      :selectedItem="foodData[foodIndex]"
    />
    <DeleteFoodPopUpVue :acceptFunction="deleteFood" />
    <AddFoodPopUp :acceptFunction="addFood" />
  </section>
</template>

<script>
//POP UPS
import DeleteFoodPopUpVue from "../../assets/components/DeleteFoodPopUp.vue";
import AddFoodPopUp from "../../assets/components/AddFoodPopUp.vue";
import EditFoodPopUp from "../../assets/components/EditFoodPopUp.vue";

//METHODS
import scrollToTop from "../../assets/js/methods/popUps/scroll-to-top.js";
import openEditPopup from "../../assets/js/methods/open-edit-popup.js";
import splitArray from "../../assets/js/methods/split-array.js";
import formatPrice from "../../assets/js/methods/format-price.js";
import getFoods from "../../assets/js/methods/get-foods.js";
import editFood from "../../assets/js/methods/edit-food.js";
import deleteFood from "../../assets/js/methods/delete-food.js";
import addFood from "../../assets/js/methods/add-food.js";

//MIXINS
import watchShowEditFoodPopUps from "../../assets/js/mixins/watch-show-food-popups.js";

//DATA
import foodsData from "../../assets/js/data/foods-data.js";

export default {
  name: "Snacks",
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
  mixins: [watchShowEditFoodPopUps],
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
    this.getFoods("SNACK");
  },
};
</script>
    
<style scoped>
@import url("../../assets/css/dashboard/foods/foodsStyle.css");
</style>;
    
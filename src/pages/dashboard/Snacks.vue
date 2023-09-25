<template>
  <section class="snacks">
    <div class="snacks__snacks-container">
      <div v-for="(snack, index) in snackData" :key="snack.id" class="snack">
        <img :src="snack.image" alt="Snack Image" class="snack__image" />
        <div class="snack__main">
          <span class="snack__name">{{ snack.title }}</span>
          <span class="snack__price">{{
            formatPrice(Number(snack.price))
          }}</span>
        </div>
        <div class="snack__ingredients-container">
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

        <div class="snack__actions">
          <i
            @click="
              this.$store.commit('SET_SHOW_EDIT_FOOD_POP_UP', true);
              openEditPopup(index, snack.id);
            "
            class="fa-solid fa-pen action__edit"
          ></i>
          <i
            @click="
              this.$store.commit('SET_SHOW_DELETE_FOOD_POP_UP', true);
              snackId = snack.id;
            "
            class="fa-solid fa-trash action__delete"
          ></i>
        </div>
      </div>
    </div>
    <button
      @click="this.$store.commit('SET_SHOW_ADD_FOOD_POP_UP', true)"
      class="snacks__add-button"
    >
      ADICIONAR LANCHE
    </button>
    <EditFoodPopUp
      v-if="this.$store.state.showEditFoodPopUp"
      :accept-function="editFood"
      :selectedItem="snackData[snackIndex]"
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
import foodData from "../../assets/js/data/food-data.js";

export default {
  name: "Snacks",
  components: {
    DeleteFoodPopUpVue,
    AddFoodPopUp,
    EditFoodPopUp,
  },
  data() {
    const data = foodData();
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
@import url("../../assets/css/dashboard/snacks/snacksStyle.css");
</style>;
    
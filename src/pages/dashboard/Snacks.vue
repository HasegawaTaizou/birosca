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
      :accept-function="editSnack"
      :selectedItem="snackData[snackIndex]"
    />
    <DeleteFoodPopUpVue :acceptFunction="deleteSnack" />
    <AddFoodPopUp :acceptFunction="addSnack" />
  </section>
</template>
    
<script>
//API
import { BASE_URL } from "@/assets/js/config.js";
import axios from "axios";

//POP UPS
import DeleteFoodPopUpVue from "../../assets/components/DeleteFoodPopUp.vue";
import AddFoodPopUp from "../../assets/components/AddFoodPopUp.vue";
import EditFoodPopUp from "../../assets/components/EditFoodPopUp.vue";

//METHODS
import scrollToTop from "../../assets/js/methods/scroll-to-top.js";

//MIXINS
import watchShowEditFoodPopUps from "../../assets/js/mixins/watch-show-food-popups.js";

//DATA
import foodData from '../../assets/js/data/food-data.js';

export default {
  name: "Snacks",
  components: {
    DeleteFoodPopUpVue,
    AddFoodPopUp,
    EditFoodPopUp,
  },
  data() {
    const data = foodData()
    return {
      ...data
    };
  },
  mixins: [
    watchShowEditFoodPopUps,
  ],
  methods: {
    scrollToTop,
    getSnacks() {
      axios.get(`${BASE_URL}/foods/SNACK`).then((response) => {
        this.snackData = response.data.foods;
        this.functionSplitArray();
      });
    },
    editSnack() {
      const foodData = {
        image: this.$store.state.foodData.image,
        title: this.$store.state.foodData.title,
        price: this.$store.state.foodData.price,
        ingredients: this.$store.state.foodData.ingredients,
      };
      axios
        .put(`${BASE_URL}/food-update/${this.snackId}`, foodData)
        .then(() => {
          this.getSnacks();
        });
    },
    deleteSnack() {
      axios.delete(`${BASE_URL}/food-delete/${this.snackId}`).then(() => {
        this.getSnacks();
      });
    },
    addSnack() {
      const newFoodData = {
        image: this.$store.state.newFoodData.image,
        title: this.$store.state.newFoodData.title,
        price: this.$store.state.newFoodData.price,
        foodType: "SNACK",
        ingredients: this.$store.state.newFoodData.ingredients,
      };
      axios.post(`${BASE_URL}/food-registration/`, newFoodData).then(() => {
        this.getSnacks();
      });
    },
    formatPrice(price) {
      const formattedPrice = price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return formattedPrice;
    },
    openEditPopup(index, id) {
      this.snackIndex = index;
      this.snackId = id;
      this.showEditFoodPopUp = true;

      this.$store.commit("SET_SHOW_EDIT_FOOD_POP_UP", true);
    },
    functionSplitArray() {
      this.snackData.forEach((item) => {
        const ingredients = item.ingredients;
        let currentSubArray = [];

        for (let i = 0; i < ingredients.length; i += 3) {
          const subArray = ingredients.slice(i, i + 3);
          currentSubArray.push(subArray);
        }

        this.groupedArrayIngredients.push(currentSubArray);
      });
    },
  },
  mounted() {
    this.getSnacks();
  },
};
</script>
    
<style scoped>
@import url("../../assets/css/dashboard/snacks/snacksStyle.css");
</style>;
    
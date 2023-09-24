<template>
  <section class="snacks">
    <div class="snacks__snacks-container">
      <div v-for="(snack, index) in snackData" :key="snack.id" class="snack">
        <img
          src="../../assets/img/snack-image.png"
          alt="Snack Image"
          class="snack__image"
        />
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
              <!-- <tr v-for="(ingredients, index) in groupedArrayIngredients" :key="index" class="ingredients-container">
                <td
                  class="ingredient"
                  v-for="(ingredient, index) in ingredients"
                  :key="index"
                  :data-ingredient-id="index"
                >
                  {{ ingredient }}
                </td>
              </tr> -->
              <tr class="ingredients-container">
                <td
                  class="ingredient"
                  v-for="(ingredient, index) in snackData[index].ingredients"
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
import { BASE_URL } from "@/assets/js/config.js";
import axios from "axios";

import DeleteFoodPopUpVue from "../../assets/components/DeleteFoodPopUp.vue";
import AddFoodPopUp from "../../assets/components/AddFoodPopUp.vue";
import EditFoodPopUp from "../../assets/components/EditFoodPopUp.vue";

export default {
  name: "Snacks",
  components: {
    DeleteFoodPopUpVue,
    AddFoodPopUp,
    EditFoodPopUp,
  },
  data() {
    return {
      snackData: {},
      snackId: 0,
      snackIndex: 0,
      showEditFoodPopUp: false,
      selectedItem: null,

      groupedArrayIngredients: [],
    };
  },
  methods: {
    getSnacks() {
      axios.get(`${BASE_URL}/foods/SNACK`).then((response) => {
        this.snackData = response.data.foods;
        this.functionSplitArray(this.snackData[this.snackIndex].ingredients, 3);
        console.log(this.groupedArrayIngredients);
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
    },
    functionSplitArray(array, length) {
      for (let i = 0; i < array.length; i += length) {
        const subArray = array.slice(i, i + length);
        this.groupedArrayIngredients.push(subArray);
      }
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
    
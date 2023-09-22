<template>
  <section class="snacks">
    <div class="snacks__snacks-container">
      <div
        v-for="(snack, index) in snackData"
        :key="snack.id"
        @click="snackIndex = index; showEditFoodPopUp = true"
        class="snack"
      >
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
              <tr class="ingredients-container">
                <td
                  class="ingredient"
                  v-for="(ingredient, index) in snack.ingredients"
                  :key="index"
                  :data-ingredient-id="index"
                >
                  {{ ingredient }}
                </td>
              </tr>
              <tr v-if="(index + 1) % 3 === 0"></tr>
            </tbody>
          </table>
        </div>

        <div class="snack__actions">
          <i
            @click="this.$store.commit('SET_SHOW_EDIT_FOOD_POP_UP', true)"
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
    <EditFoodPopUp
      v-if="showEditFoodPopUp"
      :acceptFunction="addSnack"
      :title="snackData[snackIndex].title"
      :price="snackData[snackIndex].price"
      :ingredients="snackData[snackIndex].ingredients"
    />
    <button
      @click="this.$store.commit('SET_SHOW_MANAGE_FOOD_POP_UP', true)"
      class="snacks__add-button"
    >
      ADICIONAR LANCHE
    </button>

    <DeleteFoodPopUpVue :acceptFunction="deleteSnack" />
    <ManageFoodPopUp :acceptFunction="addSnack" />
  </section>
</template>
    
<script>
import { BASE_URL } from "@/assets/js/config.js";
import axios from "axios";

import DeleteFoodPopUpVue from "../../assets/components/DeleteFoodPopUp.vue";
import ManageFoodPopUp from "../../assets/components/ManageFoodPopUp.vue";
import EditFoodPopUp from "../../assets/components/EditFoodPopUp.vue";

export default {
  name: "Snacks",
  components: {
    DeleteFoodPopUpVue,
    ManageFoodPopUp,
    EditFoodPopUp,
  },
  data() {
    return {
      snackData: "",
      snackId: "",
      snackIndex: 0,
      showEditFoodPopUp: false,
    };
  },
  computed: {
    groupedIngredients(snack) {
      const groupSize = 3;
      const result = [];

      for (let index = 0; index < snack.snackData.length; index++) {
        const element = snack.snackData[index];
        console.log(element);
        result.push(element.ingredients.slice(index, index + groupSize));
      }

      return result;
    },
  },
  methods: {
    getSnacks() {
      axios.get(`${BASE_URL}/foods/SNACK`).then((response) => {
        this.snackData = response.data.foods;
      });
    },
    editSnack() {
      console.log("alo");
    },
    deleteSnack() {
      axios.delete(`${BASE_URL}/food-delete/${this.snackId}`).then(() => {
        this.getSnacks();
      });
    },
    addSnack() {
      const foodData = {
        image: this.$store.state.newFoodData.image,
        title: this.$store.state.newFoodData.title,
        price: this.$store.state.newFoodData.price,
        foodType: "SNACK",
        ingredients: this.$store.state.newFoodData.ingredients,
      };
      console.log(foodData);
      axios.post(`${BASE_URL}/food-registration/`, foodData).then(() => {
        console.log(foodData);
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
  },
  mounted() {
    this.getSnacks();
  },
};
</script>
    
  <style scoped>
@import url("../../assets/css/dashboard/snacks/snacksStyle.css");
</style>;
    
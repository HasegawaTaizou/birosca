<template>
  <section class="snacks">
    <div class="snacks__snacks-container">
      <div v-for="snack in snackData" :key="snack.id" class="snack">
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
                  v-for="(ingredient, index) in snack.ingredients"
                  :key="index"
                  class="ingredient"
                >
                  {{ ingredient }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="snack__actions">
          <i
            @click="this.$store.commit('SET_SHOW_MANAGE_FOOD_POP_UP', true)"
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

export default {
  name: "Snacks",
  components: {
    DeleteFoodPopUpVue,
    ManageFoodPopUp,
  },
  data() {
    return {
      snackData: "",
      snackId: "",
    };
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
    
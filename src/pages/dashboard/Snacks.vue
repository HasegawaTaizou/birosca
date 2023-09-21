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
          <i class="fa-solid fa-pen action__edit"></i>
          <i @click="this.$store.commit('SET_SHOW_DELETE_FOOD_POP_UP', true)" class="fa-solid fa-trash action__delete"></i>
        </div>
      </div>
    </div>
    <DeleteFoodPopUpVue :acceptFunction="deleteSnack" />
  </section>
</template>
    
<script>
import axios from "axios";
import DeleteFoodPopUpVue from "../../assets/components/DeleteFoodPopUp.vue";

export default {
  name: "Snacks",
  components: {
    DeleteFoodPopUpVue,
  },
  data() {
    return {
      snackData: "",
    };
  },
  methods: {
    getSnacks() {
      axios.get("http://localhost:8080/api/v1/foods/SNACK").then((response) => {
        this.snackData = response.data.foods;
      });
    },
    deleteSnack() {
      console.log('alo');
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
    
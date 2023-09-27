<template>
  <div v-for="(food, index) in foodData" :key="food.id" class="food">
    <img :src="food.image" alt="Food Image" class="food__image" />
    <div class="food__main">
      <span class="food__name">{{ food.title }}</span>
      <span class="food__price"> {{ food.price }}</span>
    </div>
    <div class="food__ingredients-container">
      <span class="ingredients__title">INGREDIENTES</span>
      <table class="ingredients__ingredients-table">
        <tbody class="ingredients-body">
          <tr
            v-for="(ingredients, ingredientsIndex) in groupedArrayIngredients[
              index
            ]"
            :key="ingredientsIndex"
            class="ingredients-container"
          >
            <td
              v-for="(ingredient, ingredientIndex) in ingredients"
              :key="ingredientIndex"
              class="ingredient"
            >
              {{ ingredient }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <img
      :src="foodIcon"
      alt="Food Logo"
      class="food__logo"
    />
  </div>
</template>

<script>
import getFoods from "../js/methods/get-foods";
import splitArray from "../js/methods/split-array.js";

export default {
  name: "Food",
  methods: {
    getFoods,
    splitArray,
  },
  props: {
    foodType: {
      type: String,
      required: true,
    },
    foodIcon: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      foodData: [],
      groupedArrayIngredients: [],
    };
  },
  mounted() {
    this.getFoods(this.foodType);
  },
};
</script>
  
<style scoped>
@import url("../../assets/css/foods/foodsStyle.css");
@import url("../../assets/css/foods/foodsResponsiveStyle.css");
</style>;
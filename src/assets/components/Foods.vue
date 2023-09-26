<template>
  <section class="foods">
    <div class="foods__introduction-container">
      <span class="introduction__title">Lanches</span>
      <p class="introduction__text">
        Descubra nossos hambúrgueres: uma fusão de sabores e texturas que vai
        encantar o seu paladar!
      </p>
    </div>
    <div class="foods__foods-container">
      <div class="food">
        <img
          src="../img/snack-image.png"
          alt="Snack Image"
          class="food__image"
        />
        <div class="food__main">
          <span class="food__name">Hambúrguer Double Cheddar</span>
          <span class="food__price">R$ 19,90</span>
        </div>
        <div class="food__ingredients-container">
          <span class="ingredients__title">INGREDIENTES</span>
          <table class="ingredients__ingredients-table">
            <tbody class="ingredients-body">
              <tr class="ingredients-container">
                <td class="ingredient">Cheddar</td>
                <td class="ingredient">2 hambúrgueres</td>
                <td class="ingredient">Alface</td>
              </tr>
              <tr class="ingredients-container">
                <td class="ingredient">Tomate</td>
                <td class="ingredient">Cebola</td>
                <td class="ingredient">Picles</td>
              </tr>
              <tr class="ingredients-container">
                <td class="ingredient">Tomate</td>
                <td class="ingredient">Cebola</td>
                <td class="ingredient">Picles</td>
              </tr>
            </tbody>
          </table>
        </div>
        <img
          src="../img/snack-hamburguer-logo.png"
          alt="Food Logo"
          class="food__logo"
        />
      </div>
      <div v-for="(food, index) in foodData" :key="food.id" class="food">
        <img
          src="../img/snack-image.png"
          alt="Snack Image"
          class="food__image"
        />
        <div class="food__main">
          <span class="food__name">{{ food.title }}</span>
          <span class="food__price"> {{ food.price }}</span>
        </div>
        <div class="food__ingredients-container">
          <span class="ingredients__title">INGREDIENTES</span>
          <table class="ingredients__ingredients-table">
            <tbody class="ingredients-body">
              <tr v-for="(ingredients, ingredientsIndex) in groupedArrayIngredients[index]" :key="ingredientsIndex" class="ingredients-container">
                <td v-for="(ingredient, ingredientIndex) in ingredients" :key="ingredientIndex" class="ingredient">{{ ingredient }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <img
          src="../img/snack-hamburguer-logo.png"
          alt="Food Logo"
          class="food__logo"
        />
      </div>
    </div>
  </section>
</template>
  
<script>
import getFoods from "../js/methods/get-foods";
import splitArray from "../js/methods/split-array.js";

export default {
  name: "Foods",
  methods: {
    getFoods,
    splitArray
  },
  data() {
    return {
      foodData: [],
      groupedArrayIngredients: []
    };
  },
  mounted() {
    this.getFoods("SNACK");
  },
};
</script>
  
<style scoped>
@import url("../../assets/css/foods/foodsStyle.css");
@import url("../../assets/css/foods/foodsResponsiveStyle.css");
</style>;
  
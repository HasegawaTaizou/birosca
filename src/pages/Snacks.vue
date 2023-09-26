<template>
  <section class="foods">
    <div :style="styleBackgroundSnacks" class="foods__introduction-container">
      <span class="introduction__title">Lanches</span>
      <p class="introduction__text">
        Descubra nossos hambúrgueres: uma fusão de sabores e texturas que vai
        encantar o seu paladar!
      </p>
    </div>
    <div class="foods__foods-container">
      <Food :foodType="'SNACK'" :foodIcon="snackIcon"></Food>
    </div>
  </section>
</template>
  
<script>
//COMPONENTS
import Food from "../assets/components/Food.vue";

//IMAGES
import backgroundSnacks from '../assets/img/snacks-image.png'
import snackIcon from '../assets/img/snack-hamburguer-logo.png'

export default {
  name: "Snacks",
  components: {
    Food,
  },
  data() {
    return {
      styleBackgroundSnacks: {
        backgroundImage: `url(${backgroundSnacks})`,
      },
      snackIcon
    };
  },
};
</script>
  
<style scoped>
@import url("../assets/css/foods/foodsStyle.css");
@import url("../assets/css/foods/foodsResponsiveStyle.css");
</style>;
  
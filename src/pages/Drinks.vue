<template>
  <transition name="fade">
  <section v-if="showTransition" class="foods">
    <div :style="styleBackgroundDrinks" class="foods__introduction-container">
      <span class="introduction__title">Bebidas</span>
      <p class="introduction__text">
        Explore nossas bebidas: uma sinfonia de aromas e ingredientes que
        elevará sua experiência de sabores e prazeres!
      </p>
    </div>
    <div class="foods__foods-container">
      <Food :foodType="'DRINK'" :foodIcon="drinkIcon"></Food>
    </div>
  </section>
</transition>
</template>
  
<script>
//COMPONENTS
import Food from "../assets/components/Food.vue";

//IMAGES
import backgroundDrinks from "../assets/img/drinks-image.png";
import drinkIcon from "../assets/img/drink-logo.png";

export default {
  name: "Drinks",
  components: {
    Food,
  },
  data() {
    return {
      styleBackgroundDrinks: {
        backgroundImage: `url(${backgroundDrinks})`,
      },
      drinkIcon,
      showTransition: false,
    };
  },
  mounted() {
    this.showTransition = true;
  },
};
</script>
  
<style scoped>
@import url("../assets/css/foods/foodsStyle.css");
@import url("../assets/css/foods/foodsResponsiveStyle.css");
</style>;
  
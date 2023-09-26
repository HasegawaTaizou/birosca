<template>
  <section class="foods">
    <div :style="styleBackgroundDiverses" class="foods__introduction-container">
      <span class="introduction__title">Diversos</span>
      <p class="introduction__text">
        Descubra nossas diversidades: uma fusão de sabores e texturas que vai
        encantar o seu paladar!
      </p>
    </div>
    <div class="foods__foods-container">
      <Food :foodType="'DIVERSE'" :foodIcon="diverseIcon"></Food>
    </div>
  </section>
</template>
  
<script>
//COMPONENTS
import Food from "../assets/components/Food.vue";

//IMAGES
import backgroundDiverses from "../assets/img/diverses-image.png";
import diverseIcon from "../assets/img/diverse-logo.png";

export default {
  name: "Diverses",
  components: {
    Food,
  },
  data() {
    return {
      styleBackgroundDiverses: {
        backgroundImage: `url(${backgroundDiverses})`,
      },
      diverseIcon,
    };
  },
};
</script>
  
<style scoped>
@import url("../assets/css/foods/foodsStyle.css");
@import url("../assets/css/foods/foodsResponsiveStyle.css");
</style>;
  
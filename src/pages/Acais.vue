<template>
  <section class="foods">
    <div :style="styleBackgroundAcais" class="foods__introduction-container">
      <span class="introduction__title">Açaís</span>
      <p class="introduction__text">
        Experimente nossos açaís: uma harmonia de cremosidade e frescor que
        conquistará o seu paladar em cada delicioso momento!
      </p>
    </div>
    <div class="foods__foods-container">
      <Food :foodType="'ACAI'" :foodIcon="acaiIcon"></Food>
    </div>
  </section>
</template>
  
<script>
//COMPONENTS
import Food from "../assets/components/Food.vue";

//IMAGES
import backgroundAcais from "../assets/img/acais-image.png";
import acaiIcon from "../assets/img/acai-logo.png";

export default {
  name: "Snacks",
  components: {
    Food,
  },
  data() {
    return {
      styleBackgroundAcais: {
        backgroundImage: `url(${backgroundAcais})`,
      },
      acaiIcon,
    };
  },
};
</script>
  
<style scoped>
@import url("../assets/css/foods/foodsStyle.css");
@import url("../assets/css/foods/foodsResponsiveStyle.css");
</style>;
  
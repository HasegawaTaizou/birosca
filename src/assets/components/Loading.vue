<template>
  <div class="loading-container">
    <span class="loading__text">Aguarde...</span>
    <div class="loading__dots">
      <div class="dot" v-for="index in 4" :key="index"></div>
    </div>
  </div>
  <div class="loading-background"></div>
</template>

<script>
export default {
  name: "Loading",
};
</script>
      
<style scoped>
@import url("../css/components/loadingStyle.css");
</style>;
      
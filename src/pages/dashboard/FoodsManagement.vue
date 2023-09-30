<template>
  <transition name="fade" mode="out-in">
    <Loading v-if="isLoading" />
    <FoodsDashboard
      v-else
      :key="typeFoodName"
      :foodType="typeFoodName"
    ></FoodsDashboard>
  </transition>
</template>

<script>
//COMPONENTS
import FoodsDashboard from "../../assets/components/FoodsDashboard.vue";
import Loading from "../../assets/components/Loading.vue";

//COMPUTED
import typeFoodName from "../../assets/js/computed/type-food-name.js";
import isLoading from "../../assets/js/computed/is-loading.js";

export default {
  name: "FoodsManagement",
  components: {
    FoodsDashboard,
    Loading,
  },
  computed: {
    typeFoodName,
    isLoading,
  },
  props: ["typeFood"],
};
</script>

<style scoped>
@import url("../../assets/css/dashboard/foodsManagement/foodsManagementStyle.css");
</style>
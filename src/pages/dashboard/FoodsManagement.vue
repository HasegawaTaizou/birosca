<template>
  <transition name="fade" mode="out-in">
    <FoodsDashboard
      :key="typeFoodName"
      :foodType="typeFoodName"
    ></FoodsDashboard>
  </transition>
</template>

<script>
//COMPONENT
import FoodsDashboard from "../../assets/components/FoodsDashboard.vue";

//COMPUTED
import typeFoodName from "../../assets/js/computed/type-food-name.js";

export default {
  name: "FoodsManagement",
  components: {
    FoodsDashboard,
  },
  computed: {
    typeFoodName,
  },
  props: ["typeFood"],
};
</script>

<style scoped>
@import url('../../assets/css/dashboard/foodsManagement/foodsManagementStyle.css');
</style>
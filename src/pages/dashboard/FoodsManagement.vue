<template>
  <FoodsDashboard :foodType="typeFoodName"></FoodsDashboard>
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
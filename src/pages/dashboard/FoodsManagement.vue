<template>
  <Foods :foodType="typeFoodName"></Foods>
</template>

<script>
//COMPONENT
import Foods from "../../assets/components/Foods.vue";

//COMPUTED
import typeFoodName from "../../assets/js/computed/type-food-name.js";

export default {
  name: "FoodsManagement",
  components: {
    Foods,
  },
  computed: {
    typeFoodName,
  },
  props: ["typeFood"],
};
</script>
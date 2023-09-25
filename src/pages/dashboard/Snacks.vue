<template>
  <Foods :foodType="'SNACK'"></Foods>
</template>

<script>
import Foods from '../../assets/components/Foods.vue'

export default {
  name: "Snacks",
  components: {
    Foods,
  },
};
</script>
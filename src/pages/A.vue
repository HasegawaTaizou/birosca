<template>
  <div id="alo">
    <DeleteFoodPopUp :acceptFunction="foi" /> 
  </div>
</template>
    
<script>
// import ManageFoodPopUp from "../assets/components/ManageFoodPopUp.vue";
import DeleteFoodPopUp from "../assets/components/DeleteFoodPopUp.vue";

export default {
  name: "A",
  components: {
    // ManageFoodPopUp,
    DeleteFoodPopUp,
  },
  methods: {
    foi() {
      console.log('foi');
    },
  }
};
</script>

<style scoped>
#alo {
  background-color: var(--section-background-color);
  height: 100vh;
}
</style>
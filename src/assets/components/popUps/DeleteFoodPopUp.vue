<template>
  <div
    class="popup-container"
    :class="{
      'popup-container': this.$store.state.showDeleteFoodPopUp,
      hidden: !this.$store.state.showDeleteFoodPopUp,
    }"
  >
    <h2 class="popup__title">Excluir?</h2>
    <p class="popup__text">
      Os dados serão excluídos e não terá como desfazer esta ação.
    </p>
    <div class="popup__buttons">
      <button
        class="button__deny"
        @click="closePopUp('SET_SHOW_DELETE_FOOD_POP_UP')"
      >
        <span class="deny__text">Não</span>
        <i class="fa-regular fa-circle-xmark deny__icon"></i>
      </button>
      <button class="button__accept" @click="executeAcceptAction">
        <span class="accept__text">Sim</span>
        <i class="fa-regular fa-circle-check accept__icon"></i>
      </button>
    </div>
  </div>
  <div
    :class="{
      'popup-background': this.$store.state.showDeleteFoodPopUp,
      hidden: !this.$store.state.showDeleteFoodPopUp,
    }"
  ></div>
</template>
  
<script>
import closePopUp from "../../js/methods/popUps/close-popup.js";
import executeAcceptAction from "../../js/methods/popUps/execute-delete-accept-action.js";

export default {
  name: "DeleteFoodPopUp",
  props: {
    acceptFunction: {
      type: Function,
      required: true,
    },
  },
  methods: {
    closePopUp,
    executeAcceptAction,
  },
};
</script>
    
<style scoped>
@import url("../../css/components/popUps/deleteFoodPopUpStyle.css");
</style>
    
<template>
  <div
    class="popup-container"
    :class="{
      'popup-container': this.$store.state.showManageFoodPopUp,
      hidden: !this.$store.state.showManageFoodPopUp,
    }"
  >
    <h2 class="popup__title">{{ title }}</h2>
    <p class="popup__text">
      {{ message }}
    </p>
    <slot></slot>
    <div class="popup__buttons">
      <button class="button__deny" @click="closePopup">
        <span class="deny__text">Cancelar</span>
      </button>
      <button class="button__accept" @click="executeAcceptAction">
        <span class="accept__text">Salvar</span>
      </button>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "PopUp",
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    acceptFunction: {
      type: Function,
      required: true,
    },
  },
  methods: {
    closePopup() {
      this.$store.state.showManageFoodPopUp = false;
      this.$store.commit("setShowManageFoodPopUp", false);
    },
    executeAcceptAction() {
      console.log("Ação executada");
      this.acceptFunction();
      this.closePopup();
    },
  },
};
</script>
    
<style>
</style>
    
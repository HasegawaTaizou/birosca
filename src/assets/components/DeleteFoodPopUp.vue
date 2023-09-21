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
      <button class="button__deny" @click="closePopup">
        <span class="deny__text">Não</span>
        <i class="fa-regular fa-circle-xmark deny__icon"></i>
      </button>
      <button class="button__accept" @click="executeAcceptAction">
        <span class="accept__text">Sim</span>
        <i class="fa-regular fa-circle-check accept__icon"></i>
      </button>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "DeleteFoodPopUp",
  props: {
    acceptFunction: {
      type: Function,
      required: true,
    },
  },
  methods: {
    closePopup() {
      this.$store.commit("SET_SHOW_DELETE_FOOD_POP_UP", false);
    },
    executeAcceptAction() {
      console.log("Ação executada");
      this.acceptFunction();
      this.closePopup();
    },
  },
};
</script>
    
<style scoped>
.popup-container {
  background-color: var(--card-background-color);
  width: 512px;
  height: 412px;
  color: var(--text-color);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  font-family: "Cabin", sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.popup__title {
  font-family: "Bebas Neue", sans-serif;
  font-size: 4rem;
  font-weight: normal;
}

.popup__text {
  font-size: 1.75rem;
  width: 80%;
  text-align: center;
}

.popup__buttons {
  display: flex;
  gap: 32px;
}

.button__deny {
  width: 126px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 2px solid var(--red-color);
  color: var(--red-color);
}

.button__deny:hover {
  color: var(--text-color);
  background-color: var(--red-color);
  transition: 0.5s all;
}

.deny__text {
  font-size: 1.5rem;
}

.deny__icon {
  margin-top: 4px;
  font-size: 1.125rem;
}

.button__accept {
  width: 126px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 2px solid var(--green-color);
  color: var(--green-color);
}

.button__accept:hover {
  color: var(--text-color);
  background-color: rgba(172, 233, 73, 0.8);
  transition: 0.5s all;
}

.accept__text {
  font-size: 1.5rem;
}

.accept__icon {
  margin-top: 4px;
  font-size: 1.125rem;
}

.hidden {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}
</style>
    
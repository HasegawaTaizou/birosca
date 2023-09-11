<template>
  <div
    class="popup-container"
    :class="{
      'popup-container': this.$store.state.showManageFoodPopUp,
      hidden: !this.$store.state.showManageFoodPopUp,
    }"
  >
    <div class="popup__food-container">
      <div class="food__image">AA</div>
      <div class="food__title-container">
        <label for="title" class="title__label">TÍTULO</label>
        <input type="text" class="title__input" value="aaaaaa" />
      </div>
      <div class="food__price-container">
        <label for="price" class="price__label">PREÇO</label>
        <input type="text" class="price__input" value="aaaaaa" />
      </div>
      <div class="food__ingredients-container">
        <span class="ingredients__title">INGREDIENTES</span>
        <table class="ingredients__ingredients-table">
          <tbody class="ingredients-body">
            <tr class="ingredients-container">
              <td class="ingredient-container">
                <span class="ingredient__name">Tomate</span>
                <div class="ingredient__icon-container">
                  <i class="fa-solid fa-x"></i>
                </div>
              </td>
              <td class="ingredient-container">
                <span class="ingredient__name">Tomate</span>
                <div class="ingredient__icon-container">
                  <i class="fa-solid fa-x"></i>
                </div>
              </td>
              <td class="ingredient-container">
                <span class="ingredient__name">Tomate</span>
                <div class="ingredient__icon-container">
                  <i class="fa-solid fa-x"></i>
                </div>
              </td>
            </tr>
            <tr class="ingredients-container">
              <td class="ingredient-container">
                <span class="ingredient__name">Tomate</span>
                <div class="ingredient__icon-container">
                  <i class="fa-solid fa-x"></i>
                </div>
              </td>
              <td class="ingredient-container">
                <input class="ingredient__name" value="Tesdawdwwate" />
                <div class="ingredient__icon-container">
                  <i class="fa-solid fa-x"></i>
                </div>
              </td>
              <td class="ingredient-add">
                <button class="add__button">Adicionar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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
  name: "ManageFoodPopUp",
  props: {
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
    
<style scoped>
.popup-container {
  background-color: var(--card-background-color);
  width: 768px;
  height: 678px;
  color: var(--text-color);
  border-radius: var(--border-radius);
  font-family: "Cabin", sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
}

.popup__food-container {
  display: grid;
  grid-template-areas:
    "image title"
    "image price"
    "ingredients ingredients"
    "buttons buttons";
  grid-template-columns: auto 1fr;
  align-items: center;
}

.food__image {
  grid-area: image;
  background-color: var(--background-color);
  border-radius: 100%;
  width: 224px;
  height: 224px;
  margin-right: 42px;
}

.food__title-container {
  grid-area: title;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.title__label {
  font-size: 1.75rem;
}

.title__input {
  font-size: 1.75rem;
  color: var(--text-color);
  font-family: "Cabin", sans-serif;
  background-color: transparent;
  border: var(--input-border);
  width: 356px;
  padding: 12px;
}

.food__price-container {
  grid-area: price;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 18px;
}

.price__label {
  font-size: 1.75rem;
}

.price__input {
  font-size: 1.75rem;
  color: var(--text-color);
  font-family: "Cabin", sans-serif;
  background-color: transparent;
  border: var(--input-border);
  width: 178px;
  padding: 12px;
}

.food__ingredients-container {
  grid-area: ingredients;
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.ingredients__title {
  font-size: 1.75rem;
  margin-top: 24px;
}

.ingredients-body {
  display: flex;
  gap: 38px;
}

.ingredients-container {
  display: flex;
  flex-direction: column;
  max-width: 160px;
  gap: 22px;
}

.ingredient-container {
  position: relative;
  border: var(--input-border);
  padding: 8px 20px;
}

.ingredient__name {
  font-size: 1.25rem;
  color: var(--text-color);
  font-family: "Cabin", sans-serif;
  background-color: transparent;
}

.ingredient__icon-container {
  position: absolute;
  background-color: var(--red-color);
  border-radius: 100%;
  width: 28px;
  height: 28px;
  top: -14px;
  right: -14px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.ingredient__icon-container i {
  font-size: 0.725rem;
  margin-top: 2px;
}

.add__button {
  border-color: var(--yellow-color);
  color: var(--yellow-color);
  width: 100%;
  height: 42px;
  font-size: 1.25rem;
}

.add__button:hover {
  color: var(--text-color);
  background-color: var(--yellow-color);
  transition: all 0.5s;
}

.popup__buttons {
  grid-area: buttons;
  display: flex;
  gap: 32px;
  margin-top: 42px;
  justify-content: center;
}

.button__deny {
  width: 156px;
  height: 52px;
  border: 2px solid var(--red-color);
  color: var(--red-color);
}

.button__deny:hover {
  color: var(--text-color);
  background-color: var(--red-color);
  transition: 0.5s all;
}

.deny__text {
  font-size: 1.75rem;
}

.button__accept {
  width: 156px;
  height: 52px;
  border: 2px solid var(--green-color);
  color: var(--green-color);
}

.button__accept:hover {
  color: var(--text-color);
  background-color: rgba(172, 233, 73, 0.8);
  transition: 0.5s all;
}

.accept__text {
  font-size: 1.75rem;
}

.hidden {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}
</style>
    
<template>
  <div
    class="popup-container"
    :class="{
      'popup-container': this.$store.state.showEditFoodPopUp,
      hidden: !this.$store.state.showEditFoodPopUp,
    }"
  >
    <div class="popup__food-container">
      <div v-if="!isSelectedImage" class="food__photo-container">
        <input
          type="file"
          class="photo__label"
          id="photo"
          @change="uploadImage"
        />
        <label for="photo">
          <i class="fas fa-camera photo__icon"></i>
        </label>
      </div>
      <div v-else class="food__photo-selected-container">
        <img :src="downloadURL" alt="Food Photo" class="photo__photo" />
      </div>
      <div class="food__title-container">
        <label for="title" class="title__label">TÍTULO</label>
        <input
          type="text"
          class="title__input"
          :value="this.selectedItem.title"
          @blur="updateTitle"
        />
      </div>
      <div class="food__price-container">
        <label for="price" class="price__label">PREÇO</label>
        <input
          type="text"
          class="price__input"
          :value="this.selectedItem.price"
          @blur="updatePrice"
        />
      </div>
      <div class="food__ingredients-container">
        <span class="ingredients__title">INGREDIENTES</span>
        <table class="ingredients__ingredients-table">
          <tbody class="ingredients-body">
            <tr
              class="ingredients-container"
              v-for="(group, index1) in groupedIngredients"
              :key="`group-${group.length}-${index1}`"
            >
              <td
                class="ingredient-container"
                v-for="(ingredient, index2) in group"
                :key="`group-${index1}-ingredient-${index2}`"
                :data-ingredient-id="`${ingredient.id}`"
              >
                <input class="ingredient__name" :value="ingredient.name" />
                <div
                  class="ingredient__icon-container"
                  @click="removeIngredient(ingredient.id)"
                >
                  <i class="fa-solid fa-x"></i>
                </div>
              </td>
            </tr>
            <tr class="ingredients-container">
              <td class="ingredient-container">
                <input class="ingredient__name" v-model="newIngredient" />
                <div class="ingredient__icon-container">
                  <i class="fa-solid fa-x"></i>
                </div>
              </td>
              <td class="ingredient-add">
                <button class="add__button" @click="addIngredient">
                  Adicionar
                </button>
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

  <div
    :class="{
      'popup-background': this.$store.state.showEditFoodPopUp,
      hidden: !this.$store.state.showEditFoodPopUp,
    }"
  ></div>
</template>
  
<script>
export default {
  name: "EditFoodPopUp",
  props: {
    acceptFunction: {
      type: Function,
      required: true,
    },
    selectedItem: {
      type: Object,
      required: true,
    },
  },
  watch: {
    "$store.state.showEditFoodPopUp"(newValue) {
      if (newValue == true) {
        this.scrollToTop();
      }
    },
    selectedItem: {
      handler(newValue) {
        this.fillGroupedIngredients(newValue);
      },
      deep: true,
    },
  },
  filters: {
    currency(value) {
      if (!value) {
        return "";
      }
      return parseFloat(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  data() {
    return {
      isSelectedImage: false,
      newIngredient: "",
      isPopUpOpen: this.$store.state.showEditFoodPopUp,
      // FOOD DATA
      // ingredients: [],
      ingredients: this.selectedItem.ingredients,
      groupedIngredients: [],

      //NEW FOOD DATA
      newTitle: this.selectedItem.title,
      newPrice: this.selectedItem.price,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    closePopup() {
      this.ingredients = [];
      this.$store.commit("SET_SHOW_EDIT_FOOD_POP_UP", false);
    },
    executeAcceptAction() {
      const foodData = {
        image: "",
        title: this.newTitle,
        price: this.newPrice,
        ingredients: this.ingredients,
      };

      console.log(foodData);

      this.$store.commit("SET_FOOD_DATA", foodData);

      this.acceptFunction();
      this.closePopup();
    },
    addIngredient() {
      if (this.newIngredient.trim() !== "") {
        this.ingredients.push(this.newIngredient);
        this.newIngredient = "";

        console.log(this.newIngredient);
        console.log(this.ingredients);
      }
    },
    removeIngredient(ingredientId) {
      const tdToRemove = document.querySelector(
        `.ingredient-container[data-ingredient-id="${ingredientId}"]`
      );
      console.log(tdToRemove);

      if (tdToRemove) {
        tdToRemove.parentNode.removeChild(tdToRemove);

        const index = this.ingredients.findIndex(
          (ingredient) => ingredient.id === ingredientId
        );

        if (index !== -1) {
          this.ingredients.splice(index, 1);
          this.groupedIngredients = this.ingredients;
        }
      }
    },
    updateTitle(event) {
      this.newTitle = event.target.value;
    },
    updatePrice(event) {
      this.newPrice = event.target.value;
      console.log(this.newPrice);
    },
    fillGroupedIngredients() {
      this.groupedIngredients = [];

      const groupSize = 3;

      console.log(this.selectedItem);
      const objectsArray = this.selectedItem.ingredients.map(
        (ingredientName, id) => ({
          id,
          name: ingredientName,
        })
      );

      for (let i = 0; i < objectsArray.length; i += groupSize) {
        this.groupedIngredients.push(objectsArray.slice(i, i + groupSize));
      }

      return this.groupedIngredients;
    },
  },
  mounted() {
    this.fillGroupedIngredients();
  },
};
</script>
    
<style scoped>
.popup-container {
  background-color: var(--card-background-color);
  width: 768px;
  height: 768px;
  color: var(--text-color);
  border-radius: var(--border-radius);
  font-family: "Cabin", sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
  z-index: 2;
}

.popup__food-container {
  display: grid;
  grid-template-areas:
    "photo title"
    "photo price"
    "ingredients ingredients"
    "buttons buttons";
  grid-template-columns: auto 1fr;
  align-items: center;
}

.food__photo-container {
  grid-area: photo;
}

.food__photo-container input[type="file"] {
  display: none;
}

.food__photo-container label {
  padding: 90px 90px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--input-border);
  position: relative;
  border-radius: 100%;
}

.food__photo-container label::after {
  content: "";
}

.photo__icon {
  font-size: 2.5rem;
}

.food__photo-selected-container {
  grid-area: photo;
  max-width: 300px;
  height: 300px;
  width: 300px;
  max-height: 300px;
}

.photo__photo {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
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
  display: grid;
  place-self: start;
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
  width: 100%;
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
  margin-top: 52px;
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
  display: none;
}

.popup-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  z-index: 1;
}
</style>
    
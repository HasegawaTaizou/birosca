<template>
  <div
    class="popup-container"
    :class="{
      'popup-container': this.$store.state.showEditFoodPopUp,
      hidden: !this.$store.state.showEditFoodPopUp,
    }"
  >
    <div class="popup__food-container">
      <div class="food__photo-selected-container">
        <img :src="downloadURL" alt="Food Photo" class="photo__photo" />
        <div class="food__photo-container">
          <input
            type="file"
            class="photo__label"
            id="photo"
            @change="uploadImage"
          />
          <label for="photo">
            <i class="far fa-edit photo__icon"></i>
          </label>
        </div>
      </div>
      <div class="food__title-container">
        <label for="title" class="title__label">TÍTULO</label>
        <input type="text" class="title__input" v-model="newTitle" />
      </div>
      <div class="food__price-container">
        <label for="price" class="price__label">PREÇO</label>
        <input type="text" class="price__input" v-model="newPrice" />
      </div>
      <div class="food__ingredients-container">
        <span class="ingredients__title">INGREDIENTES</span>
        <table class="ingredients__ingredients-table">
          <tbody class="ingredients-body">
            <tr class="ingredients-container">
              <td
                class="ingredient-container"
                v-for="(ingredient, index) in ingredientsObject"
                :key="index"
              >
                <input class="ingredient__name" v-model="ingredient.name" />
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
import uploadImage from "../js/methods/input/upload-image";

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
      //SHOW FOOD POPUP
      isPopUpOpen: this.$store.state.showEditFoodPopUp,

      //FOOD IMAGE
      isSelectedImage: true,
      downloadURL: this.selectedItem.image,

      //FOOD DATA
      newIngredient: "",
      ingredients: this.selectedItem.ingredients,

      //NEW FOOD DATA
      newTitle: this.selectedItem.title,
      newPrice: this.selectedItem.price,

      //INGREDIENT OBJECT
      ingredientsObject: {},
      ingredientsArray: [],
      updatedIngredients: [],
    };
  },
  methods: {
    uploadImage,
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    closePopup() {
      this.$store.commit("SET_SHOW_EDIT_FOOD_POP_UP", false);
    },
    executeAcceptAction() {
      this.ingredientsArray = this.ingredientsObject.map(
        (ingredient) => ingredient.name
      );

      const foodData = {
        image: this.downloadURL,
        price: this.newPrice,
        title: this.newTitle,
        ingredients: this.ingredientsArray,
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
      }

      this.ingredientsObject = this.ingredients.map((ingredientName, id) => ({
        id,
        name: ingredientName,
      }));
    },
    removeIngredient(ingredientId) {
      this.updatedIngredients = this.ingredientsObject.filter(
        (ingredient) => ingredient.id !== ingredientId
      );

      this.ingredientsArray = this.updatedIngredients.map(
        (ingredient) => ingredient.name
      );

      this.ingredients = this.ingredientsArray;
      this.ingredientsObject = this.updatedIngredients;
    },
    fillIngredientsObject() {
      this.ingredientsObject = this.ingredients.map((ingredientName, id) => ({
        id,
        name: ingredientName,
      }));
    },
  },
  mounted() {
    this.newTitle = this.selectedItem.title;
    this.newPrice = this.selectedItem.price;
    this.ingredients = this.selectedItem.ingredients;
    this.fillIngredientsObject();
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

.food__photo-selected-container {
  grid-area: photo;
  max-width: 300px;
  height: 300px;
  width: 300px;
  max-height: 300px;
  margin-right: 42px;
  position: relative;
}

.photo__photo {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;
}

.food__photo-container input[type="file"] {
  display: none;
}

.food__photo-container label {
  padding: 24px 24px;
  border-radius: 5px;
  cursor: pointer;
  margin: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #FBFBFB;
  position: absolute;
  bottom: -50px;
  right: -65px;
}

.food__photo-container label::after {
  content: "";
}

.photo__icon {
  font-size: 3rem;
  color: #262626;
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
    
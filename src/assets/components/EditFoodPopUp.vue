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
            <tr
              v-for="(ingredients, index) in groupedIngredients"
              :key="index"
              class="ingredients-container"
            >
              <td
                class="ingredient-container"
                v-for="(ingredient, index) in ingredients"
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
      <button class="button__deny" @click="closePopUp">
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
//METHODS
import scrollToTop from "../js/methods/scroll-to-top.js";
import uploadImage from "../js/methods/input/upload-image.js";
import fillIngredientsObject from "../js/methods/fill-ingredients-object.js";
import splitArray from "../js/methods/split-array.js";
import addIngredient from "../js/methods/input/add-ingredient.js";
import removeIngredient from "../js/methods/input/remove-ingredient.js";
import closePopUp from "../js/methods/close-popup.js";
import executeAcceptAction from "../js/methods/execute-accept-action.js";

//DATA
import foodData from "../js/data/food-data.js";

//MOUNT
import mountPopUp from "../js/methods/mount-popup.js";

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
    teste: function(newValue, oldValue) {
      console.log(newValue, oldValue);
      console.log('alo');
    },
    "$store.state.showEditFoodPopUp"(newValue) {
      console.log(newValue);
      if (newValue === true) {
        this.scrollToTop();
      }
    },
  },
  data() {
    const data = foodData(this.selectedItem);
    return {
      teste: false,
      //SHOW FOOD POPUP
      isPopUpOpen: this.$store.state.showEditFoodPopUp,

      //FOOD DATA
      ...data,
    };
  },
  methods: {
    scrollToTop,
    uploadImage,
    fillIngredientsObject,
    splitArray,
    addIngredient,
    removeIngredient,
    mountPopUp,
    closePopUp,
    executeAcceptAction,
  },
  mounted() {
    this.mountPopUp();
    console.log(this.$store.state.showEditFoodPopUp);
  },
  unmounted() {
    console.log(this.$store.state.showEditFoodPopUp);
  },
};
</script>

<style scoped>
@import url("../css/components/editFoodPopUpStyle.css");
</style>

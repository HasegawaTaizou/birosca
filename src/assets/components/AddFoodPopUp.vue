<template>
  <div
    class="popup-container"
    :class="{
      'popup-container': this.$store.state.showAddFoodPopUp,
      hidden: !this.$store.state.showAddFoodPopUp,
    }"
  >
    <div class="popup__food-container">
      <div v-if="!isSelectedImage" class="food__photo-input-container">
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
        <input type="text" class="title__input" v-model="title" />
      </div>
      <div class="food__price-container">
        <label for="price" class="price__label">PREÇO</label>
        <input type="text" class="price__input" v-model="price" />
      </div>
      <div class="food__ingredients-container">
        <span class="ingredients__title">INGREDIENTES</span>
        <table class="ingredients__ingredients-table">
          <tbody class="ingredients-body">
            <tr
              class="ingredients-container"
              v-for="(group, index) in groupedIngredients"
              :key="index"
            >
              <td
                class="ingredient-container"
                v-for="(ingredient, i) in group"
                :key="i"
                :data-ingredient-id="i"
              >
                <input class="ingredient__name" v-model="ingredient.name" />
                <div
                  class="ingredient__icon-container"
                  @click="removeIngredient(i)"
                >
                  <i class="fa-solid fa-x"></i>
                </div>
              </td>
            </tr>
            <tr class="ingredients-container">
              <td class="ingredient-container">
                <input
                  class="ingredient__name"
                  v-model="newIngredient"
                  @input="updateNewIngredient"
                />
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
      <button
        class="button__deny"
        @click="closePopUp('SET_SHOW_ADD_FOOD_POP_UP')"
      >
        <span class="deny__text">Cancelar</span>
      </button>
      <button class="button__accept" @click="executeAcceptAction">
        <span class="accept__text">Salvar</span>
      </button>
    </div>
  </div>
  <div
    :class="{
      'popup-background': this.$store.state.showAddFoodPopUp,
      hidden: !this.$store.state.showAddFoodPopUp,
    }"
  ></div>
</template>
  
<script>
//METHODS
import uploadImage from "../js/methods/input/upload-image.js";
import closePopUp from "../js/methods/close-popup.js";
import executeAcceptAction from "../js/methods/execute-add-accept-action.js";
import addIngredient from "../js/methods/input/addFoodPopUp/add-ingredient.js";
import removeIngredient from "../js/methods/input/addFoodPopUp/remove-ingredient.js";

//DATA
import foodData from "../js/data/popUps/add-food-data.js";

//COMPUTED
import groupedIngredients from '../js/computed/grouped-ingredients.js'

export default {
  name: "AddFoodPopUp",
  props: {
    acceptFunction: {
      type: Function,
      required: true,
    },
  },
  computed: {
    groupedIngredients,
  },
  data() {
    const data = foodData();
    return {
      //SHOW FOOD POPUP
      isPopUpOpen: this.$store.state.showAddFoodPopUp,

      //FOOD DATA
      ...data,
    };
  },
  methods: {
    uploadImage,
    closePopUp,
    executeAcceptAction,
    addIngredient,
    removeIngredient,
  },
};
</script>
    
<style scoped>
@import url("../css/components/addFoodPopUpStyle.css");
</style>
    
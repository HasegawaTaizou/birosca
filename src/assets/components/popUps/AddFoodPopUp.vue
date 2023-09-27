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
        <label :class="{ error: isImageInvalid }" for="photo">
          <i
            :class="{ 'error-icon': isImageInvalid }"
            class="fas fa-camera photo__icon"
          ></i>
        </label>
        <div v-if="isImageInvalid">
          <p style="padding-left: 58px;" class="error-text">Preencha a foto!</p>
        </div>
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
        <input
          type="text"
          class="title__input"
          v-model="newTitle"
          :class="{ error: v$.newTitle.$error }"
          ref="newTitle"
          @blur="v$.newTitle.$touch()"
        />
        <div v-if="v$.newTitle.$error">
          <p v-if="v$.newTitle.required" class="error-text">
            Preencha o título!
          </p>
        </div>
      </div>
      <div class="food__price-container">
        <label for="price" class="price__label">PREÇO</label>
        <input
          type="text"
          class="price__input"
          v-model="newPrice"
          :class="{ error: v$.newPrice.$error }"
          ref="newPrice"
          @blur="v$.newPrice.$touch()"
        />
        <div v-if="v$.newPrice.$error">
          <p v-if="v$.newPrice.required" class="error-text">
            Preencha o preço!
          </p>
        </div>
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
              <td
                :class="{ error: isIngredientsInvalid }"
                class="ingredient-container"
              >
                <input class="ingredient__name" ref="newIngredient" v-model="newIngredient" />
                <div class="ingredient__icon-container">
                  <i class="fa-solid fa-x"></i>
                </div>
              </td>
              <div v-if="isIngredientsInvalid">
                <p class="error-text">Preencha ao menos um ingrediente!</p>
              </div>
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
import uploadImage from "../../js/methods/popUps/input/upload-image.js";
import fillIngredientsObject from "../../js/methods/popUps/fill-ingredients-object.js";
import splitArray from "../../js/methods/popUps/split-array.js";
import addIngredient from "../../js/methods/popUps/input/addFoodPopUp/add-ingredient.js";
import removeIngredient from "../../js/methods/popUps/input/addFoodPopUp/remove-ingredient.js";
import closePopUp from "../../js/methods/popUps/close-popup.js";
import executeAcceptAction from "../../js/methods/popUps/execute-add-accept-action.js";

//DATA
import foodData from "../../js/data/popUps/add-food-data.js";

//MOUNT
import mountPopUp from "../../js/methods/popUps/mount-popup.js";

//VALIDATIONS
import { useVuelidate } from "@vuelidate/core";
import validationsFood from "../../js/validations/validations-food";
import validationsIngredients from "../../js/validations/validations-ingredients.js";
import validationsImage from "../../js/validations/validations-image.js";

export default {
  name: "EditFoodPopUp",
  setup() {
    return { v$: useVuelidate() };
  },
  props: {
    acceptFunction: {
      type: Function,
      required: true,
    },
  },
  data() {
    const data = foodData();
    return {
      //SHOW FOOD POPUP
      isPopUpOpen: this.$store.state.showAddFoodPopUp,

      //FOOD DATA
      ...data,

      //FOOD VALIDATION
      isIngredientsInvalid: false,
      isImageInvalid: false,
    };
  },
  validations() {
    const validations = validationsFood();
    return {
      ...validations,
    };
  },
  methods: {
    uploadImage,
    fillIngredientsObject,
    splitArray,
    addIngredient,
    removeIngredient,
    mountPopUp,
    closePopUp,
    executeAcceptAction,
    validationsIngredients,
    validationsImage,
  },
};
</script>

<style scoped>
@import url("../../css/components/popUps/addFoodPopUpStyle.css");
@import url("../../css/validations/error.css");
</style>
    
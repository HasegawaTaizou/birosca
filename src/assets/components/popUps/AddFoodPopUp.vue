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

export default {
  name: "EditFoodPopUp",
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
  },
};
</script>

<style scoped>
@import url("../../css/components/popUps/addFoodPopUpStyle.css");
</style>
    
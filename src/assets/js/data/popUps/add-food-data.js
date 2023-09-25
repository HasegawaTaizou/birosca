// 'use strict'

// export default function foodData() {
//   return {
//     //FOOD IMAGE
//     isSelectedImage: false,
//     downloadURL: "",

//     //FOOD DATA
//     title: "",
//     price: 0.0,
//     ingredients: [],
//     ingredientsObject: {},
//     newIngredient: "",
//   };
// }


'use strict'

export default function foodData() {
  return {
    //FOOD IMAGE
    isSelectedImage: false,
    downloadURL: "",

    //FOOD DATA
    newIngredient: "",
    ingredients: [],

    //NEW FOOD DATA
    newTitle: "",
    newPrice: "",

    //INGREDIENT OBJECT
    ingredientsObject: {},
    ingredientsArray: [],
    updatedIngredients: [],

    //GROUPED INGREDIENTS
    groupedIngredients: [],
  };
}

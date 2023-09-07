<template>
  <section class="snacks">
    <div class="snacks__snacks-container">
      <div class="snack">
        <img
          src="../../assets/img/snack-image.png"
          alt="Snack Image"
          class="snack__image"
        />
        <div class="snack__main">
          <span class="snack__name">Hambúrguer Double Cheddar</span>
          <span class="snack__price">R$ 19,90</span>
        </div>
        <div class="snack__ingredients-container">
          <span class="ingredients__title">INGREDIENTES</span>
          <table class="ingredients__ingredients-table">
            <tbody class="ingredients-body">
              <tr class="ingredients-container">
                <td class="ingredient">Cheddar</td>
                <td class="ingredient">2 hambúrgueres</td>
                <td class="ingredient">Alface</td>
              </tr>
              <tr class="ingredients-container">
                <td class="ingredient">Tomate</td>
                <td class="ingredient">Cebola</td>
                <td class="ingredient">Picles</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="snack__actions">
          <i class="fa-solid fa-pen action__edit"></i>
          <i class="fa-solid fa-trash action__delete"></i>
        </div>
      </div>
    </div>
  </section>
</template>
    
  <script>
export default {
  name: "Snacks",
};
</script>
    
  <style scoped>
@import url("../../assets/css/dashboard/snacks/snacksStyle.css");
</style>;
    
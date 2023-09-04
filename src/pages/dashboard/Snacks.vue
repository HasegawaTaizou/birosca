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
          <ul class="ingredients__ingredients">
            <li class="ingredient">Cheddar</li>
            <li class="ingredient">2 hambúrgueres</li>
            <li class="ingredient">Alface</li>
            <li class="ingredient">Tomate</li>
            <li class="ingredient">Cebola</li>
            <li class="ingredient">Picles</li>
          </ul>
        </div>
        <img
          src="../../assets/img/snack-hamburguer-logo.png"
          alt="Snack Logo"
          class="snack__logo"
        />
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
    
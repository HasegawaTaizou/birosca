<template>
  <section class="introduction">
    <span class="introduction__text">O sabor que faz você voltar sempre</span>
    <router-link :to="'/acais'" class="introduction__link"
      >Cardápio</router-link
    >
  </section>
  <section class="statistics">
    <div class="stat">
      <div class="stat__number-container">
        <i class="fa-solid fa-plus number__icon"></i>
        <span class="number__text">1.000</span>
      </div>
      <span class="stat__text">Seguidores no Instagram</span>
    </div>
    <div class="stat">
      <div class="stat__number-container">
        <i class="fa-solid fa-plus number__icon"></i>
        <span class="number__text">3.000</span>
      </div>
      <span class="stat__text">Pedidos de Clientes </span>
    </div>
    <div class="stat">
      <div class="stat__number-container">
        <i class="fa-solid fa-plus number__icon"></i>
        <span class="number__text">30</span>
      </div>
      <span class="stat__text">Variedades Culinárias</span>
    </div>
  </section>
  <section class="instagram">
    <span class="instagram__title"> Acompanhe-nos no instagram </span>
    <img
      src="../assets/img/instragram-1-image.png"
      alt="Instagram Image 1"
      class="instagram__image1"
    />
    <img
      src="../assets/img/instragram-2-image.png"
      alt="Instagram Image 2"
      class="instagram__image2"
    />
    <img
      src="../assets/img/instragram-3-image.png"
      alt="Instagram Image 3"
      class="instagram__image3"
    />
    <div class="instagram__birosca-image">
      <img
        src="../assets/img/instagram-birosca-image.png"
        alt="Birosca Image"
        class="birosca-image__image"
      />
      <span class="birosca-image__text">@biroscadoacai</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
@import url("../assets/css/home/homeStyle.css");
@import url("../assets/css/home/homeResponsiveStyle.css");
</style>;

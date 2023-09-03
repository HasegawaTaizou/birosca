<template>
  <div id="body">
    <header>
      <div class="birosca-introduction-container">
        <img
          class="birosca-introduction__logo"
          src="../assets/img/birosca-logo.png"
          alt="Birosca Logo"
        />
        <span class="birosca-introduction__name">Birosca do Açaí</span>
      </div>
      <nav class="birosca-navigation-container">
        <ul class="navigations">
          <li class="navigation"><a href="">Home</a></li>
          <li class="navigation"><a href="">Açaís</a></li>
          <li class="navigation"><a href="">Lanches</a></li>
          <li class="navigation"><a href="">Diversos</a></li>
          <li class="navigation"><a href="">Bebidas</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section class="introduction">
        <span class="introduction__text"
          >O sabor que faz você voltar sempre</span
        >
        <button class="introduction__button">Cardápio</button>
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
    </main>
    <footer>
      <div class="birosca__logo-container">
        <img
          src="../assets/img/birosca-logo.png"
          alt="Birosca Logo"
          class="birosca-logo__logo"
        />
        <span class="birosca-logo__name">Birosca do Açaí</span>
      </div>
      <p class="birosca__copyright">
        Copyright ©️ | Todos os Direitos Reservados
      </p>
      <div class="birosca__informations">
        <div class="information">
          <i class="fa-solid fa-phone information__icon"></i>
          <span class="information__text">4553-658</span>
        </div>
        <div class="information">
          <i class="fa-solid fa-calendar-days information__icon"></i>
          <span class="information__text">Segunda a Sábado</span>
        </div>
        <div class="information">
          <i class="fa-brands fa-whatsapp information__icon"></i>
          <span class="information__text">94835-1400</span>
        </div>

        <div class="information">
          <i class="fa-solid fa-clock information__icon"></i>
          <span class="information__text">13:00 às 21:00</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
@import url("../assets/css/index/indexStyle.css");
</style>;

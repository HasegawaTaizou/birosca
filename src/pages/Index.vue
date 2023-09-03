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
      <router-view></router-view>
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
  name: "Index",
};
</script>

<style scoped>
@import url("../assets/css/index/indexStyle.css");
</style>;

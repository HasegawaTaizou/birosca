<template>
  <div id="body">
    <header>
      <router-link :to="'/'" class="birosca-introduction-container">
        <img
          class="birosca-introduction__logo"
          src="../assets/img/birosca-logo.png"
          alt="Birosca Logo"
        />
        <span class="birosca-introduction__name">Birosca do Açaí</span>
      </router-link>
      <nav class="birosca-navigation-container">
        <ul class="navigations">
          <li class="navigation"><router-link :to="'/'">Home</router-link></li>
          <li class="navigation">
            <router-link :to="'/acais'">Açaís</router-link>
          </li>
          <li class="navigation">
            <router-link :to="'/snacks'">Lanches</router-link>
          </li>
          <li class="navigation">
            <router-link :to="'/diverses'">Diversos</router-link>
          </li>
          <li class="navigation">
            <router-link :to="'/drinks'">Bebidas</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
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
@import url("../assets/css/index/indexResponsiveStyle.css");
</style>;

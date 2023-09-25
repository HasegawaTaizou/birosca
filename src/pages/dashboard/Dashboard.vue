<template>
  <div id="dashboard">
    <header>
      <router-link :to="'/'" class="birosca-introduction-container">
        <img
          class="birosca-introduction__logo"
          src="../../assets/img/birosca-logo.png"
          alt="Birosca Logo"
        />
        <span class="birosca-introduction__name">Birosca do Açaí</span>
      </router-link>
      <nav class="birosca-navigation-container">
        <ul class="navigations">
          <li class="navigation">
            <router-link :to="'/dashboard/acai'">Açaís</router-link>
          </li>
          <li class="navigation">
            <router-link :to="'/dashboard/snack'">Lanches</router-link>
          </li>
          <li class="navigation">
            <router-link :to="'/dashboard/diverse'">Diversos</router-link>
          </li>
          <li class="navigation">
            <router-link :to="'/dashboard/drink'">Bebidas</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
  
<script>
export default {
  name: "Dashboard",
};
</script>
  
<style scoped>
@import url("../../assets/css/dashboard/dashboard/dashboardStyle.css");
</style>;
  
<template>
  <div id="login">
    <div class="login-enterprise">
      <img
        src="../assets/img/birosca-logo.png"
        alt="Birosca Logo"
        class="enterprise__image"
      />
      <h1 class="enterprise__name">Birosca do Açaí</h1>
    </div>
    <div class="login__form">
      <h2 class="form__title">Login</h2>
      <div v-if="showError" class="form__error">
        Usuário ou senha incorretos!
      </div>
      <form @submit.prevent="login" method="post" class="form__form">
        <div class="form__email-container">
          <label for="email" class="email__label">E-mail</label>
          <input
            v-model="email"
            type="email"
            class="email__input"
            autocomplete="email"
          />
        </div>
        <div class="form__password-container">
          <label for="password" class="password__label">Senha</label>
          <input
            v-model="password"
            :type="isShowPassword ? 'text' : 'password'"
            class="password__input"
            autocomplete="current-password"
          />
          <i
            @mousedown="showPassword"
            @mouseup="showPassword"
            :class="{
              'far fa-eye-slash': isShowPassword,
              'far fa-eye': !isShowPassword,
            }"
          ></i>
        </div>
        <button type="submit" class="form__button">Entrar</button>
      </form>
    </div>
  </div>
</template>
  
<script>
import { BASE_URL } from "@/assets/js/config.js";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      showError: false,
      isShowPassword: false,
    };
  },
  methods: {
    login() {
      console.log("login");
      const adminData = {
        email: this.email,
        password: this.password,
      };
      axios
        .post(`${BASE_URL}/login`, adminData)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          this.showError = true;
        });
    },
    showPassword() {
      this.isShowPassword = !this.isShowPassword;
    },
  },
};
</script>
  
<style scoped>
@import url("../assets/css/login/loginStyle.css");
</style>;
  
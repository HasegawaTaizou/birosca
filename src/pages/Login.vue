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
            v-model="inputEmail"
            type="email"
            class="email__input"
            autocomplete="email"
            :class="{ error: v$.inputEmail.$error }"
            ref="inputEmail"
            @blur="v$.inputEmail.$touch()"
          />
          <div v-if="v$.inputEmail.$error">
            <p v-if="v$.inputEmail.required" class="error-text">
              Preencha o e-mail!
            </p>
          </div>
        </div>
        <div class="form__password-container">
          <label for="password" class="password__label">Senha</label>
          <input
            v-model="inputPassword"
            :type="isShowPassword ? 'text' : 'password'"
            class="password__input"
            autocomplete="current-password"
            :class="{ error: v$.inputPassword.$error }"
            ref="inputPassword"
            @blur="v$.inputPassword.$touch()"
          />
          <i
            @mousedown="showPassword"
            @mouseup="showPassword"
            :class="{
              'far fa-eye-slash': isShowPassword,
              'far fa-eye': !isShowPassword,
            }"
          ></i>
          <div v-if="v$.inputPassword.$error">
            <p v-if="v$.inputPassword.required" class="error-text">
              Preencha a senha!
            </p>
          </div>
        </div>
        <button @click="login" type="submit" class="form__button">
          Entrar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
//API
import { BASE_URL } from "@/assets/js/config.js";
import axios from "axios";

//VALIDATIONS
import { useVuelidate } from "@vuelidate/core";
import validationsLogin from "../assets/js/validations/validations-login.js";
import fieldsLogin from "../assets/js/validations/fields/fields-login";

export default {
  name: "Login",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      inputEmail: "",
      inputPassword: "",
      showError: false,
      isShowPassword: false,
    };
  },
  validations() {
    const validations = validationsLogin();
    return {
      ...validations,
    };
  },
  methods: {
    async login() {
      this.v$.$touch();
      const isFilledFields = await this.v$.$validate();

      if (isFilledFields) {
        const adminData = {
          email: this.inputEmail,
          password: this.inputPassword,
        };
        axios
          .post(`${BASE_URL}/login`, adminData)
          .then((response) => {
            localStorage.setItem("token", response.data.userData.token);
            this.$router.push("/dashboard");
          })
          .catch((error) => {
            this.showError = true;
          });
      } else {
        for (const field of fieldsLogin) {
          if (this.v$[field.key].$error) {
            this.$nextTick(() => {
              this.$refs[field.ref].focus();
            });
            break;
          }
        }
      }
    },
    showPassword() {
      this.isShowPassword = !this.isShowPassword;
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/login/loginStyle.css");
@import url("../assets/css/validations/error.css");
</style>
;

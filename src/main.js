import { createApp } from "vue";
import App from "./App.vue";
// import Dashboard from "./pages/dashboard/Dashboard.vue";
import router from "./router";
import store from "./store/store";
import VueTheMask from "vue-the-mask";
import { useVuelidate } from "@vuelidate/core";
import axios from "axios";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueTheMask);

const v$ = useVuelidate();
app.config.globalProperties.v$ = v$;

// app.component("Dashboard", Dashboard); // Registrar o componente do dashboard globalmente

app.mount("#app");

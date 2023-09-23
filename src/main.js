import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import VueTheMask from "vue-the-mask";
import { useVuelidate } from "@vuelidate/core";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueTheMask);

const v$ = useVuelidate();
app.config.globalProperties.v$ = v$;

app.mount("#app");

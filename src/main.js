import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

import vue3GoogleLogin from "vue3-google-login";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(vue3GoogleLogin, {
  clientId:
    "72202036490-4ftctc0hvhlk719ru41nodhhk1gi2oda.apps.googleusercontent.com", //
});

app.mount("#app");

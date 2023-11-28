import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { useStore } from "./store";
import "./assets/styles/main.scss";

const app = createApp(App);
app.use(router);
app.use(useStore);

app.mount("#app");

import { createApp } from "vue";
import "./style.css";
import store from "./store";
import router from "./router";
import App from "./App.vue";
import fontAwesomePlugin from "./plugin/fontAwesomePlugin"

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(fontAwesomePlugin)
  .use(router)
  .use(store)
  .mount("#app");

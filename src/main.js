import { createApp } from "vue";
import "./style.css";
import store from "./store";
import router from "./router";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faBlender, faBowlFood, faCartShopping, faTruckFast } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faBlender, faBowlFood, faCartShopping, faTruckFast);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(store)
  .mount("#app");

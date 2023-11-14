/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import {
  faBlender,
  faBowlFood,
  faCartShopping,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";


export default {
  install() {
    library.add(faBlender, faBowlFood, faCartShopping, faTruckFast);
  },
};
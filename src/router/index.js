import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductList from "../views/ProductList.vue";
import About from "../views/About.vue";
import ContactUs from "../views/ContactUs.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
// import Search from "../views/Search.vue"
import MealDetail from "../views/MealDetail.vue";
import cardsForSearchedItem from "../views/cardsForSearchedItem.vue";
import CategoryPage from "../views/CategoryPage.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },

      {
        path: "/letter/:letter",
        name: "Letter",
        component: ProductList,
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
      {
        path: "/contactus",
        name: "ContactUs",
        component: ContactUs,
      },
      {
        path: "/mealdetail/:id",
        name: "MealDetail",
        component: MealDetail,
      },
      {
        path: "/cardsForSearchedItem/:meal",
        name: "cardsForSearchedItem",
        component: cardsForSearchedItem,
      },
      {
        path: "/categorypage",
        name: "CategoryPage",
        component: CategoryPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {

//   console.log(to.path);
//   if (from.path === "/" && to.path === "/about") {
//     next("/");
//   }
// });

export default router;

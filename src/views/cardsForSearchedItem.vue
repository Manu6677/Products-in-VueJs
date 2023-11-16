<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-whiite rounded-xl shadow-md"
    >
      <router-link :to="{ name: 'MealDetail', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="rounded-t-xl h-32 w-full object-cover cursor-pointer hover:scale-110 transition duration-150 ease-in-out"
        />
      </router-link>

      <div class="p-3">
        <h3 class="font-semibold">{{ meal.strMeal }}</h3>
        <p class="mb-4">
          {{ limitedWords(description) }}
        </p>
        <div class="p-3 flex items-center justify-between">
          <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
          <router-link
            :to="{ name: 'MealDetail', params: { id: meal.idMeal } }"
            class="hover:bg-pink-100 px-2 rounded-md py-2"
            >View</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import store from "../store";
import { limitedWords } from "../../utils/limitedWords";
import YoutubeButton from "../components/YoutubeButton.vue";
import { search } from "../store/actions";
import { useRoute } from "vue-router";

const searchKeyword = ref("");
const description =
  "It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using";
const meals = computed(() => store.state.searchedMeals);

const route = useRoute();
function searchData() {
  store.dispatch("search", searchKeyword.value);
}

watch(
  () => (searchKeyword.value = route.params.meal),
  (newValue, oldValue) => {
    // searchKeyword.value = newValue
    console.log(newValue, oldValue);
    console.log(searchKeyword.value);
    searchData();
  }
);

onMounted(() => {
  searchKeyword.value = route.params.meal;
  // console.log(searchKeyword.value);
  // console.log("inside mount");
  if (searchKeyword.value) {
    searchData();
  }
});
</script>

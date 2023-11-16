<template>
  <div>
    <div class="mt-3">
      <h2 class="text-center text-3xl font-semibold text-gray-500">
        Your Hunger Solution
      </h2>
    </div>

    <div class="flex py-5">
      <div class="w-[270px] px-4 bg-gray-200 py-2 rounded-lg">
        <!-- left category section -->
        <div>
          <p class="text-xl text-gray-500">Category Section</p>

          <!-- List of Category -->
          <select v-model="selectedCategory">
            <option value="all">All</option>
            <option
              v-for="category in categories"
              :key="category.id"
              :value="category.name"
            >
              {{ category.name }}
            </option>
          </select>
        </div>

        <!-- Search by name -->
        <div class="mt-5">
          <p class="text-xl text-gray-500">Names Section</p>

          <select v-model="selectedName">
            <option value="Names">All Name</option>
            <option
              v-for="name in nameOfMeal"
              :key="name.id"
              :value="name.name"
            >
              {{ name.name }}
            </option>
          </select>
        </div>

        <!-- search by letter -->
        <div class="mt-5">
          <p class="text-xl text-gray-500">Letter Section</p>
          <select v-model="selectedLetter">
            <option value="Letter">Letter</option>
            <option v-for="letter in letters" :key="letter.id">
              {{ letter.letter }}
            </option>
          </select>
        </div>
      </div>

      <!-- right card section -->
      <div class="w-full p-3">
        <div class="">
          <div
            v-if="categoryData"
            class="flex flex-wrap md:gap-4 gap-2 px-3 mx-auto items-center justify-center"
          >
            <div v-for="item in categoryData" :key="item.idMeal">
              <!-- img -->
              <router-link
                :to="{ name: 'MealDetail', params: { id: item.idMeal } }"
              >
                <div
                  class="flex flex-col m-3 shadow-xl bg-slate-200 w-60 items-center rounded-lg cursor-pointer hover:scale-105 duration-200"
                >
                  <div class="w-60 h-52 object-contain">
                    <img
                      :src="item.strMealThumb"
                      class="w-full h-full rounded-lg"
                    />
                  </div>

                  <div class="my-2 w-full text-left px-1">
                    {{ item.strMeal }}
                  </div>
                  <div class="flex justify-between px-2 pb-2 w-full">
                    <div>Rs: 550</div>
                    <div>⭐4.5</div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, computed } from "vue";
import axiosClient from "../axiosClient";
import { useRoute } from "vue-router";
import { categories, letters, nameOfMeal } from "../../utils/constants";
import store from "../store";

const categoryData = computed(() => store.state.searchedMealsForCategoryPage);
const selectedCategory = ref("all");
const selectedName = ref("Names");
const selectedLetter = ref("a");
const route = useRoute();

watch(
  selectedCategory,
  (newValue, oldValue) => {
    console.log(newValue, oldValue);
    store.dispatch("searchMealsByCategorySection", selectedCategory.value);
  },
  { immediate: true }
);

watch(selectedName, (newValue, oldValue) => {
  console.log(newValue, oldValue, "forSelected Name");
  handleClickedName();
});

watch(selectedLetter, (newValue, oldValue) => {
  console.log(newValue, oldValue, "for selected letter");
  searchByLetter();
});

function searchByLetter() {
  store.dispatch("searchMealsByLetter", selectedLetter.value);
}

function handleClickedName() {
  store.dispatch("searchMealsByNameSection", selectedName.value);
}
</script>

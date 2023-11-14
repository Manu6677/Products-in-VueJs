<template>
  <div class="flex flex-col px-2">

     <!-- <firstSectionOfHomePage/> -->
     <firstSectionOfHomePage />

    <!-- middle section -->
    <div class="flex flex-col items-center justify-center mt-10 py-3">
      <div class="text-2xl font-semibold">How it works</div>
      <p>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged
      </p>
    </div>

    <!-- cards of middle section -->
    <div class="mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
      <div v-for="item in middleCardSection" :key="item.id" class="">
        <MiddleSectionCard :icon="item.icon">
          <template #title>
            {{ item.title }}
          </template>

          <template #description>
            {{ item.description }}
          </template>
        </MiddleSectionCard>
      </div>
    </div>

    <!-- End section -->
    <div>
      <div class="flex flex-col items-center justify-center mt-10 py-3">
        <div class="text-2xl font-semibold">Our Special Catering</div>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged
        </p>
      </div>

      <!-- end section cards -->
      <div class="flex flex-wrap items-center justify-center mb-10 gap-7">
        <div
          v-for="item in homeCardSection"
          :key="item.idMeal"
          class="w-48 h-60"
        >
          <div
            class="flex flex-col w-48 h-56 shadow-sm rounded-md bg-slate-50 hover:scale-105 duration-150"
          >
            <img
              :src="item.strMealThumb"
              alt="NoImg"
              class="w-full h-full overflow-hidden rounded-xl"
            />
            <p class="px-2 py-2">{{ nameOfDish(item.strMeal) }}</p>

            <span class="flex justify-between px-1 py-1">
              <div>⭐ 4.5</div>
              <div>🔥150 kcal</div>
            </span>
            <div class="pl-3 py-1 mb-2 font-semibold">Rs: 250</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import { nameOfDish } from "../../utils/nameOfDish";
import MiddleSectionCard from "../components/MiddleSectionCard.vue";
import {middleCardSection} from "../../utils/middleCardSection"
import firstSectionOfHomePage from "./../components/firstSectionOfHomePage.vue"


const products = ref([]);
const homeCardSection = ref();

onMounted(async () => {
  await axiosClient.get("filter.php?i=bread").then(({ data }) => {
     homeCardSection.value = data.meals;
    
  });
});

</script>

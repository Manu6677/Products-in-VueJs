<template>
  <div class="w-[700px] mx-auto items-center">
    <h1 class="text-5xl text-orange-400 my-4">{{ meal.strMeal }}</h1>
    <div>
      <img :src="meal.strMealThumb" alt="meal.strMeal" class="rounded-md"/>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 mt-2">
      <div>
        <strong class="font-bold">Category: </strong> {{ meal.strCategory }}
      </div>

      <div><strong class="font-bold"> Area: </strong>{{ meal.strArea }}</div>

      <div class="flex w-full h-16">
        <strong class="font-bold mr-1">Tags: </strong>{{ meal.strTags }}
      </div>
    </div>

    <div class="mb-3">
      <DescriptionForMealDetails>Description of <p class="font-semibold my-1">{{meal.strMeal}}</p></DescriptionForMealDetails>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-xl font-semibold mb-3">Ingredients:</h2>
        <ul>
          <template v-for="(ele, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}) {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div>
        <h2 class="text-xl font-semibold mb-3">Measures:</h2>
        <ul>
          <template v-for="(ele, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}) {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>

    <div class="mt-5 pb-10">
      <YoutubeButton :href="meal.strYouTube">Go To Youtube</YoutubeButton>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import DescriptionForMealDetails from "../components/DescriptionForMealDetails.vue"
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
    console.log(meal.value);
  });
});
</script>

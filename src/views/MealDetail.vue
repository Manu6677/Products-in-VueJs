<template>
  <div class="mx-auto items-center">
    <!-- upper section -->
    <div class="flex mx-auto items-center justify-center">
      <!-- left side -->
      <div class="flex flex-col p-5 ml-56 mt-5 h-[450px]">
        <div class="mx-auto w-[500px] h-[500px] items-center justify-center">
          <div class="text-5xl font-semibold py-1 items-center justify-center">{{ meal.strMeal }}</div>
        </div>

        <div class="py-5 mb-4 w-[550px]">
          <p>
            The generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.All the Lorem Ipsum
            generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet
          </p>
        </div>

        <div class="flex space-x-4 justify-center text-white">
          <button class="bg-orange-500 p-2 rounded-lg">Order</button>
          <button class="bg-gray-700 p-2 rounded-lg">Review</button>
        </div>

        <div class="flex flex-col items-center mx-auto py-4">
          <div class="text-lg font-semibold">First choice of:</div>
          <div>(5.8k) consumers</div>
        </div>

        <div class="mx-auto pt-2">
          <span class="text-base font-medium"> Rating: </span>⭐ 4.4
        </div>
      </div>

      <!-- right side -->
      <div
        class="mx-auto w-[390px] h-[385px] mt-6 mr-72 object-contain flex justify-center items-center"
      >
        <img
          :src="meal.strMealThumb"
          alt="NoImg"
          class="rounded-full w-full cursor-pointer h-full hover:scale-110 duration-300"
        />
      </div>
    </div>

    <!-- Description -->
    <div
      class="mx-auto w-[900px] pt-5 mt-5 bg-slate-200 border-2 border-gray-100 px-2 rounded-lg"
    >
      <p class="items-center text-center font-semibold text-xl">Description</p>
      <div class="mb-3">
        <DescriptionForMealDetails>
          <p class="my-1 text-center">
            {{ meal.strMeal }}
          </p></DescriptionForMealDetails
        >
      </div>
    </div>

    <!-- Recipe BreakDown -->
    <div class="w-[800px] mx-auto mb-7 py-5">
      <p class="text-center items-center font-semibold text-xl">
        Recipe BreakDown
      </p>

      <div class="flex items-center justify-between">
        <div>
          <p class="text-xl text-center py-2">Ingredients</p>
          <div class="flex flex-wrap gap-3 w-[350px] items-center justify-center">
            <template v-for="(ele, ind) of new Array(7)" :key="ind">
              <div v-if="meal[`strIngredient${ind + 1}`]">
                <p class="bg-slate-200 p-2 rounded-md shadow-md">{{ meal[`strIngredient${ind + 1}`] }},</p>
              </div>
            </template>
          </div>
        </div>

        <div>
          <p class="text-xl text-center py-2">Measures</p>
          <div class="flex flex-wrap gap-3 w-[350px] items-center justify-center">
            <template v-for="(ele, ind) of new Array(7)" :key="ind">
              <div v-if="meal[`strMeasure${ind + 1}`]">
                <p class="bg-slate-200 p-2 rounded-md shadow-md">{{ meal[`strMeasure${ind + 1}`] }},</p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import DescriptionForMealDetails from "../components/DescriptionForMealDetails.vue";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    // debugger;
    meal.value = data.meals[0] || {};
    console.log(meal.value);
  });
});
</script>

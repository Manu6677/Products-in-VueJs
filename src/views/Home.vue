<template>
  <div class="flex flex-col px-2">
    <!-- first section -->
    <div class="flex items-center justify-space space-y-10">
      <!-- Left side of div -->
      <div class="p-5 ml-56 mt-5">
        <div
          class="flex flex-col items-center mx-auto max-w-min whitespace-nowrap"
        >
          <div class="text-5xl font-semibold py-1">Your Favourite Food</div>
          <div class="text-5xl font-semibold py-1">Delivered Hot & Fresh</div>
        </div>

        <div class="py-2 mb-4 w-[550px]">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
          </p>
        </div>

        <div class="flex space-x-4 justify-center text-white">
          <button class="bg-orange-500 p-2 rounded-lg">Order</button>
          <button class="bg-gray-700 p-2 rounded-lg">Reviews</button>
        </div>

        <div class="flex flex-col justify-center items-center py-4">
          <div class="font-semibold">Our Happy customer</div>
          <div class="flex">
            ⭐
            <p>4.9 (9k review)</p>
          </div>
        </div>
      </div>

      <!-- right side of div -->
      <div
        class="mx-auto w-[390px] h-[385px] mt-52 mr-60 object-contain flex justify-center items-center"
      >
        <img
          :src="randomImageForHome"
          alt="NoImg"
          class="rounded-full w-full cursor-pointer h-full hover:scale-110 duration-300"
        />
      </div>
    </div>

    <!-- middle section -->
    <div class="flex flex-col items-center justify-center mt-10 py-3">
      <div class="text-2xl font-semibold">How it works</div>
      <p>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged
      </p>
    </div>

    <!-- cards of middle section -->
    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-24 items-center justify-center mx-auto"
    >
      <div class="w-[200px] bg-slate-100 shadow-lg rounded-2xl">
        <div class="p-3">
          <font-awesome-icon icon="fa-solid fa-blender" class="text-3xl" />
        </div>

        <div class="mt-4 mb-3 px-2">
          <p class="font-semibold text-lg">Fresh & Nutritious</p>
          <p>Offers fresh foods and calculate calories, portion size</p>
        </div>
      </div>

      <div class="w-[200px] bg-slate-100 shadow-lg rounded-2xl">
        <div class="p-3">
          <font-awesome-icon icon="fa-solid fa-bowl-food" class="text-3xl" />
        </div>

        <div class="mt-4 mb-3 px-2">
          <p class="font-semibold text-lg">Pick Meals</p>
          <p>Offers fresh foods and calculate calories, portion size</p>
        </div>
      </div>

      <div class="w-[200px] bg-slate-100 shadow-lg rounded-2xl">
        <div class="p-3">
          <font-awesome-icon
            icon="fa-solid fa-cart-shopping"
            class="text-3xl"
          />
        </div>

        <div class="mt-4 mb-3 px-2">
          <p class="font-semibold text-lg">Place A Order</p>
          <p>Offers fresh foods and calculate calories, portion size</p>
        </div>
      </div>

      <div class="w-[200px] bg-slate-100 shadow-lg rounded-2xl">
        <div class="p-3">
          <font-awesome-icon icon="fa-solid fa-truck-fast" class="text-3xl" />
        </div>

        <div class="mt-4 mb-3 px-2">
          <p class="font-semibold text-lg">Fast Delivery</p>
          <p>Offers fresh foods and calculate calories, portion size</p>
        </div>
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
          class="w-48 h-48"
        >
          <div class="flex flex-col w-48 h-48 shadow-md rounded-md bg-slate-50 hover:scale-105 duration-150">
            <img
              :src="item.strMealThumb"
              alt="NoImg"
              class="w-full h-full overflow-hidden rounded-xl"
            />
            <p>{{ nameOfDish(item.strMeal) }}</p>

            <span class="flex justify-between px-1">
              <div>⭐ 4.5</div>
              <div>🔥150 kcal</div>
            </span>

            <div class="pl-2 font-semibold">Rs: 250</div>
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

const products = ref([]);
const randomImageForHome = ref("");
const homeCardSection = ref();

if (homeCardSection.value) {
  homeCardSection.value.slice(1, 5);
  console.log("inside if");
  console.log(homeCardSection.value);
}

onMounted(async () => {
  await axiosClient.get("random.php").then(({ data }) => {
    randomImageForHome.value = data.meals[0].strMealThumb;
  });

  await axiosClient.get("filter.php?i=bread").then(({ data }) => {
    // debugger
    homeCardSection.value = data.meals;
    console.log(homeCardSection.value);
  });
});
</script>

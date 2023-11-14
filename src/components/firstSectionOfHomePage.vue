<template>
  <div class="flex items-center justify-space space-y-10">
    <!-- Left side of div -->
    <div class="p-5 ml-56 mt-5">
      <div
        class="flex flex-col items-center mx-auto max-w-min whitespace-nowrap"
      >
        <div class="text-5xl font-semibold py-1">Your Favourite Food</div>
        <div class="text-5xl font-semibold py-1">Delivered Hot & Fresh</div>
      </div>

      <div class="py-5 mb-4 w-[550px]">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal.
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

    <!-- right side of div  -->
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
</template>

<script setup>

import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const randomImageForHome = ref("");

onMounted(async () => {
  await axiosClient.get("random.php").then(({ data }) => {
    randomImageForHome.value = data.meals[0].strMealThumb;
  });
});
</script>

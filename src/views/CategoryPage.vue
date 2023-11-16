<template>
  <div>
    <div class="mt-3">
      <h2 class="text-center text-2xl">Your Hunger Solution</h2>
    </div>

    <div class="flex py-5">
      <!-- left category section -->
      <div class="w-[270px] px-4">
        <div>
          <p class="mb-5 text-xl">Category Section</p>

          <!-- List of Category -->
          <div class="">
            <div v-for="category in categories" :key="category.id">
              <p
                @click="handleClickeditem(category.name, category.id)"
                :style="{backgroundColor: currentClickedName === category.id? 'gray': 'white' }"
               
                class="cursor-pointer py-2 hover:bg-gray-400 rounded-md px-2"
              >
                {{ category.name }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- right card section -->
      <div class="w-full p-3">
        <div
          class="">
          <div
            v-if="clickedCategoryData.length > 0"
            class="flex flex-wrap md:gap-4 gap-2 px-3 mx-auto items-center justify-center">

            <div v-for="item in clickedCategoryData" :key="item.idMeal">
              <!-- img -->
              
              <div class="flex flex-col m-3 shadow-xl bg-slate-200 w-60 items-center rounded-lg cursor-pointer hover:scale-105 duration-200">
                <div class="w-60 h-52 object-contain">
                  <img
                    :src="item.strMealThumb"
                    class="w-full h-full rounded-lg"/>
                </div>

                <div class="my-2 w-full text-center">{{ item.strMeal }}</div>
                <div class="flex justify-between px-2 pb-2 w-full">
                 <div>Rs: 550</div>
                 <div>⭐4.5</div>
                </div>                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import axiosClient from "../axiosClient";
import { useRoute } from "vue-router";

const clickedCategoryName = ref("Seafood");
const currentClickedName = ref(true)
const clickedCategoryData = ref([]);

const route = useRoute();

const categories = [
  {
    id: 1,
    name: "Dessert",
  },
  {
    id: 2,
    name: "Chicken",
  },
  {
    id: 3,
    name: "Lamb",
  },
  {
    id: 4,
    name: "Pasta",
  },
  {
    id: 5,
    name: "Pork",
  },
  {
    id: 6,
    name: "Side",
  },
  {
    id: 7,
    name: "Starter",
  },
  {
    id: 8,
    name: "Vegan",
  },
  {
    id: 9,
    name: "Vegetarian",
  },
  {
    id: 10,
    name: "Breakfast",
  },
  {
    id: 11,
    name: "Goat",
  },
];

watch(
  () => clickedCategoryName.value,
  (newValue, oldValue) => {
    // console.log(newValue, oldValue);
    // console.log("watch called");
    axiosRequestAccordingToCategory();
  }
);

// watch(()=>currentClickedName.value = clickedCategoryName.value, (newValue, oldValue)=>{
// console.log(currentClickedName.value)
// })

function handleClickeditem(itemName, id) {
  clickedCategoryName.value = itemName;
  currentClickedName.value = id
  //   console.log(clickedCategoryName.value);
}

async function axiosRequestAccordingToCategory() {
  await axiosClient
    .get(`filter.php?c=${clickedCategoryName.value}`)
    .then(({ data }) => {
      //   debugger;
      clickedCategoryData.value = data.meals;
    });
}

onMounted(() => {
  axiosRequestAccordingToCategory();
});
</script>

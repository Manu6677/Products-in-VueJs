<template>
  <header class="bg-white shadow h-20 flex justify-between">
    <div class="w-28 p-1 object-cover">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex items-center px-3 transition-colors font-semibold text-orange-400 text-3xl h-full rounded-xl"
      >
        <img src="https://cdn-icons-png.flaticon.com/512/5897/5897436.png" />
      </router-link>
    </div>

    <div class="flex items-center gap-1 mr-5">
      <div
        @click="toggleModal"
        class="px-2 inline-flex items-center font-semibold transition-colors text-gray-400 h-full hover:underline hover:duration-200 rounded-xl cursor-pointer"
      >
        Search
      </div>

      <router-link
        :to="{ name: 'CategoryPage' }"
        class="px-2 inline-flex items-center font-semibold transition-colors text-gray-400 h-full hover:underline hover:duration-200 rounded-xl"
      >
        Category
      </router-link>

      <router-link
        :to="{ name: 'About' }"
        class="px-2 inline-flex items-center font-semibold transition-colors text-gray-400 h-full hover:underline hover:duration-200 rounded-xl"
      >
        About</router-link
      >
    </div>
  </header>

  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start items-center justify-center">
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div class="mt-2 flex">
                      <p class="text-sm text-gray-500">
                        Search here your Fav Meal ❤️
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flex items-center justify-center my-3">
                  <input
                    type="text"
                    v-model="searchedMeal"
                    @keyup.enter="check"
                    placeholder="Hungry? then go ahead..."
                    class="w-96 focus:outline-none"
                  />
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
              >
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  @click="open = false"
                  ref="cancelButtonRef"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import cardsForSearchedItem from "../views/cardsForSearchedItem.vue";
import { useRouter } from "vue-router";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

const searchedMeal = ref(null);
// console.log(searchedMeal.value);

const open = ref(false);
const router = useRouter();

function toggleModal() {
  open.value = !open.value;
}

function check() {
  open.value = false;
  
  router.push({
    name: "cardsForSearchedItem",
    params: { meal: searchedMeal.value },
  });
  searchedMeal.value = "";
}
</script>

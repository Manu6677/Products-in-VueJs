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
      <router-link
        :to="{ name: 'Search' }"
        class="px-2 inline-flex items-center font-semibold transition-colors text-gray-400 h-full hover:underline hover:duration-200 rounded-xl"
      >
        Search
      </router-link>

      <router-link
        :to="{ name: 'About' }"
        class="px-2 inline-flex items-center font-semibold transition-colors text-gray-400 h-full hover:underline hover:duration-200 rounded-xl"
      >
        About</router-link
      >
      <router-link
        :to="{ name: 'ContactUs' }"
        class="px-2 inline-flex items-center font-semibold transition-colors text-gray-400 h-full hover:underline hover:duration-200 rounded-xl"
      >
        Policy</router-link
      >
    </div>
  </header>
</template>

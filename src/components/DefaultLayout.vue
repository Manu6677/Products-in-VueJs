<template>
  <div class="bg-gray-50 h-full">
    <navbar />
    <main>
    <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from "../components/NavBar.vue"
</script>
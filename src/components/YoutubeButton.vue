<template>
  <a
    :href="href"
    target="_blank"
    class="mr-2 px-2 text-center py-2 rounded bg-red-500 cursor-pointer hover:bg-red-400 hover:text-white text-white"
  >
    <slot></slot>
  </a>
</template>

<script setup>
const props = defineProps({
    href: String
})
</script>

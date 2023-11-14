<template>
  <a
    :href="href"
    target="_blank"
    class="px-1 mr-2 text-center py-2 rounded bg-red-500 font-semibold cursor-pointer hover:bg-red-400 hover:text-white"
  >
    <slot></slot>
  </a>
</template>

<script setup>
const props = defineProps({
    href: String
})
</script>

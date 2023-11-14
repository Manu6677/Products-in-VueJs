<template>
  <div class="w-[250px] bg-slate-100 rounded-2xl border-2 border-gray-300 px-2">
    <div class="p-4">
      <font-awesome-icon :icon="icon" class="text-4xl" />
    </div>

    <div class="mt-4 mb-3 px-2">
      <p class="font-semibold text-lg py-2"><slot name="title"></slot></p>
      <p class="pb-2"><slot name="description"></slot></p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: String,
});
</script>

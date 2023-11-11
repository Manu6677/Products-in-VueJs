<template>
 <input type="text"/>
</template>

<script setup>
import { computed } from "vue";
import store from "../store";

const products = computed(() => store.state.products);
</script>

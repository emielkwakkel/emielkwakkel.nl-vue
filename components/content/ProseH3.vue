<template>
  <h3 :id="id" class="text-blue-300 text-2xl">
    <a :href="`#${id}`"><slot /> </a>
  </h3>
</template>

<script setup lang="ts">
defineProps<{ id: string }>();
</script>

<style scoped>
/* h3 {
  font-size: 1.5em;
} */
</style>

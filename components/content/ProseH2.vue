<template>
  <h2 :id="id" class="text-green-500 text-4xl">
    <a :href="`#${id}`"><slot /> </a>
  </h2>
</template>

<script setup lang="ts">
defineProps<{ id: string }>();
</script>

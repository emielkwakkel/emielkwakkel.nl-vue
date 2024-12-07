<template>
  <nav class="dark:bg-gray-950 bg-gray-100">
    <p class="flex container mx-auto px-2">
      <slot></slot>
    </p>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  isdark?: Boolean;
}>();
</script>

<template>
  <nav class="bg-blue-300">
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

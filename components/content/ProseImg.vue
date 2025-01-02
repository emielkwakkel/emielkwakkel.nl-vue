<template>
  <NuxtImg :src="src" :alt="alt" :width="width" :height="height" />
  <p v-if="alt">
    <em>{{ alt }}</em>
  </p>
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
});
</script>

<style scoped>
p {
  line-height: 1.8em;
  font-size: 1.2em;
}
</style>

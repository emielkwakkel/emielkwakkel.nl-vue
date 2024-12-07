<template>
  <NuxtLink
    :href="href"
    class="bg-gray-900 text-white font-bold rounded-full my-6 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
  >
    <slot> &lt; Home </slot>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: "/",
  },
  blank: {
    type: Boolean,
    default: false,
  },
});
</script>

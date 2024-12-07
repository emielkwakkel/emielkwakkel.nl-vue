<template>
  <NuxtLink
    :href="href"
    class="my-6 py-4 px-8 text-white dark:bg-gray-900 bg-white hover:bg-gray-200 dark:hover:bg-gray-950 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
  >
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 5H1m0 0 4 4M1 5l4-4"
      />
    </svg>
    <span class="sr-only">Navigate</span>
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

<template>
  <figure
    :class="[
      'my-4',
      float === 'left' ? 'lg:float-left lg:mr-4' : '',
      float === 'right' ? 'lg:float-right lg:ml-4' : '',
      'w-full lg:w-auto', // Full width on mobile, auto width on larger screens
    ]"
  >
    <NuxtImg
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      class="w-full"
    />
    <figcaption
      v-if="alt"
      class="my-2 text-sm text-center text-gray-500 dark:text-gray-400"
    >
      {{ alt }}
    </figcaption>
  </figure>
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
  float: {
    type: String,
    default: "", // Accepts 'left', 'right', or ''
  },
});
</script>

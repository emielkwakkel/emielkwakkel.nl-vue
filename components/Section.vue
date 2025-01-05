<template>
  <section
    class="w-full pt-20 pb-20"
    :class="[
      shade ? 'dark:bg-gray-950 bg-gray-100' : 'dark:bg-gray-900 bg-white',
    ]"
  >
    <header>
      <h2
        class="leading-normal mb-8 dark:text-white text-gray-900 text-4xl text-center"
      >
        <slot name="header"></slot>
      </h2>
    </header>
    <div
      class="container mx-auto px-4 md:px-0"
      :class="{ 'grid grid-cols-1 md:grid-cols-2 gap-8': grid }"
    >
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  shade?: boolean;
  grid?: boolean;
}

withDefaults(defineProps<Props>(), {
  shade: true,
  grid: true,
});
</script>

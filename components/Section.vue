<template>
  <section
    class="w-full pt-20 pb-20"
    :class="[isdark ? 'bg-gray-900' : 'bg-gray-700']"
  >
    <header>
      <h2
        class="leading-normal mb-2 text-green-500 text-3xl font-bold text-center"
      >
        <slot name="header"></slot>
      </h2>
    </header>
    <div class="container mx-auto sm:flex w-full px-3 text-gray-200 p-3 pb-10">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  isdark: Boolean;
}>();
</script>

<template>
  <div
    class="w-full rounded-lg dark:bg-gray-900 bg-white dark:text-white mb-3 sm:mr-3 p-5 py-10"
  >
    <h3 class="leading-loose mb-2 md:h-20 lg:h-14 xl:h-14">
      <span class="text-2xl font-bold text-green-500">{{ card.title }}</span>
      <span class="text-gray-500"> <br />{{ card.date }}</span>
    </h3>
    <h4 class="sm:pt-3 mb-8">
      {{ card.description }}
    </h4>
    <a
      v-if="card.link"
      :href="card.link.href"
      class="bg-blue-300 text-gray-800 font-bold rounded-full py-4 px-8"
    >
      {{ card.link.title }}
    </a>
  </div>
</template>

<script setup lang="ts">
interface Link {
  href: string;
  title: string;
}

interface Card {
  title: string;
  description: string;
  date: string;
  content: string;
  link?: Link;
}

defineProps<{
  card: Card | any;
}>();
</script>

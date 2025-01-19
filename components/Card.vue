<template>
  <section
    class="w-full rounded-lg dark:text-white max-w-screen-md flex flex-col justify-between h-full"
    v-if="card"
    :class="[
      shade ? 'dark:bg-gray-950 bg-gray-100' : 'dark:bg-gray-900 bg-white',
    ]"
  >
    <NuxtImg
      class="rounded-t-lg w-full"
      v-if="card.image"
      :alt="card.title"
      :src="card.image"
    ></NuxtImg>
    <div class="p-5">
      <h3 class="leading-loose mb-2">
        <span class="text-2xl font-bold text-green-500">{{ card.title }}</span>
        <span class="text-gray-500"> <br />{{ card.date }}</span>
      </h3>
      <p class="sm:pt-3">
        {{ card.description }}
      </p>
    </div>
    <div
      v-if="card.link"
      class="flex w-full p-5 border-t-4 border-dotted"
      :class="[
        shade
          ? 'dark:border-gray-800 border-white'
          : 'dark:border-gray-950 border-gray-100',
      ]"
    >
      <a
        :href="card.link.href"
        class="bg-blue-300 w-full text-center text-gray-800 font-bold rounded-xl py-4 px-8"
      >
        {{ card.link.title }}
      </a>
    </div>
  </section>
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

interface Props {
  shade?: boolean;
  card: Card | any;
}

withDefaults(defineProps<Props>(), {
  shade: false,
  card: undefined,
});
</script>

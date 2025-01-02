<template>
  <component
    :is="isExternalLink(card.link.href) ? 'a' : 'router-link'"
    :href="isExternalLink(card.link.href) ? card.link.href : null"
    :to="!isExternalLink(card.link.href) ? card.link.href : null"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      class="w-full rounded-lg dark:text-white"
      :class="[
        shade ? 'dark:bg-gray-950 bg-gray-100' : 'dark:bg-gray-900 bg-white',
      ]"
    >
      <NuxtImg
        class="rounded-t-lg"
        v-if="card.image"
        :alt="card.title"
        :src="card.image"
      ></NuxtImg>
      <div class="p-5 pb-10">
        <h3 class="leading-loose mb-2 md:h-20 lg:h-14 xl:h-14">
          <span class="text-2xl font-bold text-green-500">{{
            card.title
          }}</span>
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
    </div>
  </component>
</template>

<script setup lang="ts">
const isExternalLink = (href: string): boolean => {
  return /^https?:\/\//.test(href);
};
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
  card: {},
});
</script>

<template>
  <div
    :key="article._path"
    class="w-full rounded dark:bg-gray-900 bg-gray-200 dark:text-white text-gray-900 h-64 mb-3 sm:mr-3 p-5"
  >
    <h2 class="leading-normal mb-2 text-green-500 text-3xl font-bold">
      {{ article.title }}
    </h2>
    <p>{{ article.description }}</p>
    <p class="mt-6">
      <a
        :href="article._path"
        class="dark:bg-gray-950 bg-white font-bold rounded-full py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        {{ $t("generic.readmore") }}
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: ["article"],
};
</script>

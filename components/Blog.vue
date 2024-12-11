<template>
  <div
    :key="article._path"
    class="w-full rounded dark:bg-gray-900 bg-gray-200 dark:text-white text-gray-900 h-64 mb-3 sm:mr-3 p-5"
  >
    <h3 class="leading-loose mb-2 sm:h-40 md:h-20 lg:h-14 xl:h-14">
      <span class="text-2xl font-bold text-green-500">{{ article.title }}</span>
      <span class="text-1xl font-normal"> <br />{{ article.date }}</span>
    </h3>

    <p>{{ article.description }}</p>
    <p class="mt-6">
      <a
        :href="article._path"
        class="dark:bg-gray-950 bg-white font-bold rounded-full py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        {{ $t("blogs.readmore") }}
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

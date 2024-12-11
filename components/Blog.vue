<template>
  <div
    class="w-full rounded dark:bg-gray-900 bg-gray-200 dark:text-white text-gray-900 mb-3 sm:mr-3 p-5"
  >
    <router-link :key="article._path" :to="article._path">
      <h3 class="leading-loose mb-2 sm:h-40 md:h-20 lg:h-14 xl:h-14">
        <span class="text-2xl font-bold text-green-500">{{
          article.title
        }}</span>
        <span class="text-1xl font-normal"> <br />{{ article.date }}</span>
      </h3>

      <p class="leading-loose">{{ article.description }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: ["article"],
};
</script>

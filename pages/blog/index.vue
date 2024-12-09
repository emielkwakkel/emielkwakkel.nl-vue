<template>
  <div
    class="min-h-screen dark:bg-gray-900 dark:text-gray-200 text-gray-900 bg-white"
  >
    <Breadcrumb :links="links"></Breadcrumb>
    <div>
      <header
        class="flex container px-3 dark:bg-gray-900 bg-white text-gray-200 mx-auto"
      >
        <div
          class="flex flex-col w-full justify-center text-center md:text-left"
        >
          <h1 class="leading-normal mb-2 text-green-500 text-5xl font-bold">
            Blog
            <span class="dark:text-white text-gray-900">for a</span> greener
            world
          </h1>
        </div>
      </header>

      <section class="w-full pt-20 pb-20 dark:bg-gray-950 bg-gray-200">
        <ContentList :path="`/${locale}/blog`" v-slot="{ list }">
          <div class="container mx-auto sm:flex w-full px-3 p-3 pb-10">
            <router-link
              v-for="article in list"
              :key="article._path"
              :to="article._path!"
              class="w-full rounded dark:bg-gray-900 bg-white h-64 mb-3 sm:mr-3 p-5"
            >
              <article>
                <h2
                  class="leading-normal mb-2 text-green-500 text-3xl font-bold"
                >
                  {{ article.title }}
                </h2>
                <p>{{ article.description }}</p>
              </article>
            </router-link>
          </div>
        </ContentList>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

useHead({
  title: "Emiel Kwakkel - Blogs",
});

const links = [
  {
    label: "Home",
    to: `/${locale.value}`,
  },
  {
    label: "Blog",
    to: `/${locale.value}/blog`,
  },
];
</script>

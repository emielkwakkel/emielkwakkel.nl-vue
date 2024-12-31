<template>
  <div
    class="min-h-screen dark:bg-gray-900 dark:text-white text-gray-900 bg-white"
  >
    <div>
      <header class="flex container px-3 text-gray-200 mx-auto">
        <div
          class="flex flex-col w-full justify-center text-center md:text-left"
        >
          <h1
            class="leading-normal mb-2 text-green-500 text-5xl py-20 font-bold"
          >
            Blog
            <span class="dark:text-white text-gray-900">for a</span> greener
            world
          </h1>
        </div>
      </header>
      <Breadcrumb :links="links"></Breadcrumb>

      <section class="pt-20 pb-20">
        <ContentList :path="`/${locale}/blog`" v-slot="{ list }">
          <div class="container mx-auto">
            <router-link
              v-for="article in sortedArticles(list)"
              :key="article._path"
              :to="article._path"
            >
              <article
                class="w-full px-3 p-3 pb-10 w-full rounded dark:bg-gray-950 bg-gray-100 mb-10"
              >
                <h2
                  class="leading-normal mb-2 text-green-500 text-3xl font-bold"
                >
                  {{ article.title }}
                </h2>
                <p>
                  <em>{{ $t("content.published-on") }}: {{ article.date }}</em>
                </p>
                <p>{{ article.description }}</p>
              </article>
            </router-link>
          </div>
        </ContentList>
      </section>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const sortedArticles = (list) => {
  if (!list) return [];

  return [...list].sort((a, b) => new Date(b.date) - new Date(a.date));
};

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

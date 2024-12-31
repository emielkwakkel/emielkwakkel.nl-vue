<template>
  <div
    class="min-h-screen dark:bg-gray-900 dark:text-white text-gray-900 bg-white"
  >
    <div>
      <Breadcrumb :links="links"></Breadcrumb>
      <section class="pt-20 pb-20">
        <ContentList :path="`/${locale}/talks`" v-slot="{ list }">
          <div class="container mx-auto">
            <router-link
              v-for="talk in sortedArticles(list)"
              :key="talk._path"
              :to="talk._path"
            >
              <article
                class="w-full px-3 p-3 pb-10 w-full rounded dark:bg-gray-950 bg-gray-100 mb-10"
              >
                <h2
                  class="leading-normal mb-2 text-green-500 text-3xl font-bold"
                >
                  {{ talk.title }}
                </h2>
                <p>
                  <em>{{ $t("content.published-on") }}: {{ talk.date }}</em>
                </p>
                <p>{{ talk.description }}</p>
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
  title: "Emiel Kwakkel - Talks",
});

const links = [
  {
    label: "Home",
    to: `/${locale.value}`,
  },
  {
    label: "Talks",
    to: `/${locale.value}/talks`,
  },
];
</script>

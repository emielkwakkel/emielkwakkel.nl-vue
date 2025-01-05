<template>
  <div
    class="min-h-screen dark:bg-gray-900 dark:text-white text-gray-900 bg-white"
  >
    <div>
      <Navbar />
      <Breadcrumb :links="links"></Breadcrumb>
      <header class="flex container px-3 text-gray-200 mx-auto">
        <div
          class="flex flex-col w-full justify-center text-center md:text-left"
        >
          <h1
            class="leading-normal mb-2 text-green-500 text-5xl pt-20 font-bold"
          >
            Blog
            <span class="dark:text-white text-gray-900">for a</span> greener
            world
          </h1>
        </div>
      </header>
      <Section :shade="false">
        <ContentList :query="blogQuery">
          <template #default="{ list }">
            <Card
              v-for="talk in addReadmoreToContent(list, t)"
              :key="talk._path"
              :card="talk"
              :shade="true"
            />
          </template>
          <template #not-found>
            <p>No events found.</p>
          </template>
        </ContentList>
      </Section>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content";
const { t, locale } = useI18n();

const blogQuery: QueryBuilderParams = {
  path: `/${locale.value}/blog`,
  sort: [{ date: -1 }],
};

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

useHead({ title: t("pages.blogs.head.title") });
</script>

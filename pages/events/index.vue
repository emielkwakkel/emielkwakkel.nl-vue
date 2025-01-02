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
            Events
            <span class="dark:text-white text-gray-900">with</span> impact
          </h1>
        </div>
      </header>
      <Section :shade="false">
        <ContentList :query="eventsQuery">
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
  </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content";
const { t, locale } = useI18n();

const eventsQuery: QueryBuilderParams = {
  path: `/${locale.value}/events`,
  sort: [{ date: -1 }],
};

const links = [
  {
    label: "Home",
    to: `/${locale.value}`,
  },
  {
    label: "Events",
    to: `/${locale.value}/events`,
  },
];

useHead({ title: t("pages.events.head.title") });
</script>

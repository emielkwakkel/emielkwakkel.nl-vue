<template>
  <div class="min-h-screen dark:bg-gray-900 pb-10 bg-gray-200">
    <ContentDoc v-slot="{ doc }">
      <header class="px-3 dark:bg-gray-900 bg-white text-gray-200">
        <div class="flex container mx-auto">
          <h1
            class="flex flex-col w-full justify-center text-center md:text-left leading-normal mb-2 text-green-500 text-5xl py-20 font-bold"
          >
            {{ doc.title }}
          </h1>
        </div>
      </header>
      <Breadcrumb :links="links"></Breadcrumb>
      <section
        class="flex container h-full px-3 dark:bg-gray-900 bg-white rounded-xl dark:text-gray-200 text-grey-900 mx-auto my-10 py-10"
      >
        <article class="flex flex-col w-full">
          <header>
            <p v-if="doc.date">
              <em>Published on {{ doc.date }}</em>
            </p>
          </header>
          <p>
            <strong>{{ doc.description }}</strong>
          </p>
          <ContentRenderer :value="doc" />
        </article>
      </section>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const route = useRoute();
const { data } = await useAsyncData("currentPageContent", () =>
  queryContent(route.path).findOne(),
);

const links = [
  {
    label: "Home",
    to: `/${locale.value}`,
  },
  {
    label: "Blog",
    to: `/${locale.value}/blog`,
  },
  {
    label: data.value?.title || "Article",
  },
];
</script>

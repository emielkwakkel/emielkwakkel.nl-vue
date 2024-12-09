<template>
  <div class="min-h-screen dark:bg-gray-900 bg-white bg-white">
    <Breadcrumb :links="links"></Breadcrumb>
    <section
      class="flex container h-full px-3 dark:bg-gray-900 bg-white dark:text-gray-200 text-grey-900 mx-auto mb-20"
    >
      <article class="flex flex-col w-full">
        <ContentDoc v-slot="{ doc }">
          <header>
            <h1
              class="leading-normal mb-2 mt-12 text-green-500 text-5xl font-bold"
            >
              {{ doc.title }}
            </h1>
          </header>
          <ContentRenderer :value="doc" />
        </ContentDoc>
      </article>
    </section>
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

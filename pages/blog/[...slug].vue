<template>
  <div class="min-h-screen dark:bg-gray-900 pb-10 bg-white">
    <ContentDoc v-slot="{ doc }">
      <Breadcrumb :links="links"></Breadcrumb>
      <section
        class="flex container h-full px-3 dark:bg-gray-900 bg-white dark:text-gray-200 text-grey-900 mx-auto py-10"
      >
        <article class="flex flex-col w-full">
          <header>
            <h1
              class="flex flex-col w-full leading-normal mb-2 mt-10 text-green-500 text-5xl font-bold"
            >
              {{ doc.title }}
            </h1>
            <p v-if="doc.date">
              <em class="text-gray-500">Published on {{ doc.date }}</em>
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

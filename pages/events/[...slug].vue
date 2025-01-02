<template>
  <div class="min-h-screen dark:bg-gray-900 pb-10 bg-white">
    <ContentDoc v-slot="{ doc }">
      <Navbar />
      <Breadcrumb :links="links"></Breadcrumb>
      <section
        class="flex container h-full px-3 dark:bg-gray-900 dark:text-gray-200 text-grey-900 mx-auto py-10"
      >
        <article class="flex flex-col w-full">
          <header>
            <h1
              class="flex flex-col w-full leading-normal mb-2 mt-10 text-green-500 text-5xl font-bold"
            >
              {{ doc.title }}
            </h1>
            <p v-if="doc.date">
              <em class="text-gray-500"
                >{{ $t("content.published-in") }} {{ doc.date }}</em
              >
            </p>
            <NuxtImg v-if="doc.image" :alt="doc.title" :src="doc.image" />
          </header>
          <p>
            <strong>{{ doc.description }}</strong>
          </p>
          <ContentRenderer :value="doc" />
        </article>
      </section>
      <Section v-if="doc.talk">
        <template v-slot:header>{{ $t("pages.events.presentation") }}</template>
        <Card
          v-if="getTalkBySlug(doc.talk)"
          :card="addReadmoreToContent(getTalkBySlug(doc.talk), t)"
        />
        <div v-else>No talk found for {{ doc.talk }}</div>
      </Section>
    </ContentDoc>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const route = useRoute();
const { data } = await useAsyncData("currentPageContent", () =>
  queryContent(route.path).findOne(),
);

const { data: talks } = await useAsyncData(
  "talksContent",
  async () => await queryContent(`/${locale.value}/talks`).find(),
);

const getTalkBySlug = (slug: string) =>
  talks?.value?.find((e) => {
    console.log(e, e._path === `/${locale.value}/talks/${slug}`);
    return e._path === `/${locale.value}/talks/${slug}`;
  });

const links = [
  {
    label: "Home",
    to: `/${locale.value}`,
  },
  {
    label: "Events",
    to: `/${locale.value}/events  `,
  },
  {
    label: data.value?.title || "Event",
  },
];
</script>

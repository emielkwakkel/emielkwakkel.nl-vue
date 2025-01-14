<template>
  <div class="min-h-screen dark:bg-gray-900 bg-white">
    <ContentDoc v-slot="{ doc }">
      <Navbar />
      <Breadcrumb :links="links"></Breadcrumb>
      <NuxtImg
        v-if="doc.image"
        :alt="doc.title"
        :src="doc.image"
        class="w-full lg:hidden"
      />
      <section
        class="container h-full px-3 dark:text-gray-200 text-grey-900 mx-auto py-10"
      >
        <article>
          <header class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div>
              <NuxtImg
                v-if="doc.image"
                :alt="doc.title"
                :src="doc.image"
                class="w-full hidden lg:mt-4 lg:block lg-mt-4 rounded-xl"
              />
            </div>
            <div>
              <h1
                class="leading-normal mb-2 mt-10 lg:mt-0 text-green-500 text-5xl font-bold"
              >
                {{ doc.title }}
              </h1>
              <DefinitionList :content="definitions" />
            </div>
          </header>
          <ContentRenderer :value="doc" />
          <a
            v-if="doc.website"
            :href="doc.website"
            class="bg-blue-300 text-gray-800 font-bold rounded-full py-4 px-8"
          >
            {{ $t("pages.event.website") }}
          </a>
        </article>
      </section>
      <Section v-if="doc.testimonial" :grid="false">
        <Testimonial :content="doc.testimonial" />
      </Section>
      <Section v-if="doc.youtube" :grid="false">
        <template v-slot:header>{{ $t("pages.events.recording") }}</template>
        <iframe
          title="recording"
          :src="doc.youtube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="w-full aspect-video rounded-lg shadow-lg"
        ></iframe>
      </Section>
      <Section v-if="talk" :shade="false" :grid="false">
        <template v-slot:header>{{ $t("pages.events.presentation") }}</template>
        <Card :card="addReadmoreToContent(talk, t)" :shade="true" />
      </Section>
    </ContentDoc>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const route = useRoute();
const { data } = await useAsyncData("currentPageContent", () =>
  queryContent(route.path).findOne(),
);
const { data: talk } = await useAsyncData("talksContent", async () => {
  const results = await queryContent(
    `/${locale.value}/talks/${data.value?.talk}`,
  ).find();
  return results.length ? results[0] : null;
});

const fields = ["date", "organisation", "theme", "location", "description"];

const definitions = fields
  .filter((field) => data.value?.[field]) // Include only fields with values
  .map((field) => ({
    title: t(`pages.event.${field}`),
    description: data.value?.[field],
  }));

const links = [
  {
    label: "Home",
    to: `/${locale.value}`,
  },
  {
    label: "Events",
    to: `/${locale.value}/events`,
  },
  {
    label: data.value?.title || "Event",
  },
];
</script>

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
        class="flex container h-full px-3 dark:bg-gray-900 dark:text-gray-200 text-grey-900 mx-auto py-10"
      >
        <article>
          <header class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div>
              <NuxtImg
                v-if="doc.image"
                :alt="doc.title"
                :src="doc.image"
                class="w-full hidden lg:mt-4 lg:block rounded-xl lg:mb-12"
              />
            </div>
            <div>
              <h1
                class="leading-normal mb-2 mt-10 lg:mt-0 text-green-500 text-5xl font-bold"
              >
                {{ doc.title }}
              </h1>
              <p v-if="doc.date">
                <em class="text-gray-500"
                  >{{ $t("content.published-in") }} {{ doc.date }}</em
                >
              </p>
              <p>
                <strong>{{ doc.description }}</strong>
              </p>
            </div>
          </header>
          <ContentRenderer :value="doc" />
        </article>
      </section>
      <Section v-if="doc.sections">
        <template v-slot:header>{{ $t("pages.talks.sections") }}</template>
        <div v-for="block in doc.sections">
          <Card :key="block.title" :card="getCard(block)" />
        </div>
      </Section>
      <Section
        v-if="doc.events && events && events.length > 0"
        :shade="!doc.sections"
      >
        <template v-slot:header>{{ $t("pages.talks.events") }}</template>
        <div v-for="eventSlug in doc.events">
          <Card
            v-if="getEventBySlug(eventSlug)"
            :key="eventSlug"
            :card="addReadmoreToContent(getEventBySlug(eventSlug), t)"
          />
          <div v-else>No event found for {{ eventSlug }}</div>
        </div>
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

interface Block {
  title: string;
  description: string;
}

const getCard = (block: Block) => ({
  title: getTitle(block),
  description: getDescription(block),
});
const getTitle = (block: Block) => Object.values(block)[0]?.title || "";
const getDescription = (block: Block) =>
  Object.values(block)[0]?.description || "";

const { data: events } = await useAsyncData(
  "eventsContent",
  async () => await queryContent(`/${locale.value}/events`).find(),
);

const getEventBySlug = (slug: string) =>
  events?.value?.find((e) => e._path === `/${locale.value}/events/${slug}`);

const links = [
  {
    label: "Home",
    to: `/${locale.value}`,
  },
  {
    label: "Talks",
    to: `/${locale.value}/talks`,
  },
  {
    label: data.value?.title || "Talk",
  },
];
</script>

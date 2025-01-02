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
      <Section v-if="doc.events && events && events.length > 0">
        <template v-slot:header>{{ $t("pages.home.events") }}</template>
        <div v-for="eventSlug in doc.events">
          <Card
            v-if="getEventBySlug(eventSlug)"
            :key="eventSlug"
            :card="addLinkToEvents(getEventBySlug(eventSlug))"
          />
          <div v-else>No event found for {{ eventSlug }}</div>
        </div>
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

const addLinkToEvents = (content: any) => {
  if (!content.website && !content.recording) return content;

  return {
    ...content,
    link: {
      title: content.recording
        ? t("events.actions.watch-recording")
        : t("events.actions.event-website"),
      href: !!content.recording ? content.recording : content.website,
    },
  };
};

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

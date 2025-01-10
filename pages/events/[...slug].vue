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
              <div class="mt-6 border-t border-gray-100 dark:border-gray-800">
                <dl class="divide-y divide-gray-100 dark:divide-gray-800">
                  <div
                    class="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                    v-if="doc.date"
                  >
                    <dt class="font-bold text-gray-700 dark:text-gray-200">
                      {{ $t("content.published-on") }}
                    </dt>
                    <dd
                      class="mt-1 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0"
                    >
                      {{ doc.date }}
                    </dd>
                  </div>
                  <div
                    class="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                    v-if="doc.theme"
                  >
                    <dt class="font-bold text-gray-700 dark:text-gray-200">
                      {{ $t("pages.event.theme") }}
                    </dt>
                    <dd
                      class="mt-1 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0"
                    >
                      {{ doc.theme }}
                    </dd>
                  </div>
                  <div
                    class="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                    v-if="doc.location"
                  >
                    <dt class="font-bold text-gray-700 dark:text-gray-200">
                      {{ $t("pages.event.location") }}
                    </dt>
                    <dd
                      class="mt-1 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0"
                    >
                      {{ doc.location }}
                    </dd>
                  </div>
                  <div
                    class="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                    v-if="doc.description"
                  >
                    <dt class="font-bold text-gray-700 dark:text-gray-200">
                      {{ $t("pages.event.description") }}
                    </dt>
                    <dd
                      class="mt-1 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0"
                    >
                      {{ doc.description }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </header>
          <ContentRenderer :value="doc" />
        </article>
      </section>
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
      <Section v-if="doc.talk" :shade="false" :grid="false">
        <template v-slot:header>{{ $t("pages.events.presentation") }}</template>
        <Card
          v-if="getTalkBySlug(doc.talk)"
          :card="addReadmoreToContent(getTalkBySlug(doc.talk), t)"
          :shade="true"
        />
        <div v-else>No talk found for {{ doc.talk }}</div>
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

const { data: talks } = await useAsyncData(
  "talksContent",
  async () => await queryContent(`/${locale.value}/talks`).find(),
);

const getTalkBySlug = (slug: string) =>
  talks?.value?.find((e) => {
    return e._path === `/${locale.value}/talks/${slug}`;
  });

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

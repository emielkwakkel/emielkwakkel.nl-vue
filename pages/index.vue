<template>
  <div class="dark:bg-gray-900 bg-white">
    <Navbar />
    <section
      class="flex container h-screen px-3 dark:text-gray-200 mx-auto lg:p-20"
      style="min-height: 500px"
    >
      <section
        class="flex flex-col w-full sm:w-3/5 justify-center text-center md:text-left"
      >
        <p>
          <img
            src="/images/emiel-kwakkel.jpg"
            alt="Emiel Kwakkel"
            class="rounded-full inline sm:hidden w-3/5 text-center mb-10"
          />
        </p>
        <p class="leading-loose text-1xl">
          {{ $t("pages.home.introduction.line1") }}
        </p>
        <p class="leading-loose text-2xl">
          {{ $t("pages.home.introduction.line2") }}
        </p>
        <h1 class="leading-normal mb-2 text-green-500 text-5xl font-bold">
          {{ $t("pages.home.introduction.line3") }}
        </h1>
        <p class="leading-normal text-4xl">
          {{ $t("pages.home.introduction.line4a") }}
          <span class="text-green-500">{{
            $t("pages.home.introduction.line4b")
          }}</span>
        </p>
        <p class="mt-12">
          <a
            href="talks"
            class="bg-blue-300 text-gray-800 font-bold rounded-full my-6 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            {{ $t("pages.home.talks") }}
          </a>
        </p>
      </section>
      <aside class="hidden sm:flex flex-col w-2/5 justify-center">
        <img
          src="/images/emiel-kwakkel.jpg"
          alt="Emiel Kwakkel"
          class="rounded-full"
        />
      </aside>
    </section>
    <Section>
      <template v-slot:header>{{ $t("pages.home.events") }}</template>
      <ContentList :query="eventQuery">
        <template #default="{ list }">
          <Card
            v-for="event in addReadmoreToContent(list, t)"
            :key="event._path"
            :card="event"
          />
        </template>
        <template #not-found>
          <p>No events found.</p>
        </template>
      </ContentList>
    </Section>
    <Section :shade="false" :grid="false" v-if="testimonials?.length">
      <Carousel :items="testimonials">
        <template #default="{ item }">
          <Testimonial :content="item" />
        </template>
      </Carousel>
    </Section>
    <Section>
      <template v-slot:header>{{ $t("pages.home.latest-blogs") }}</template>
      <ContentList :query="blogQuery">
        <template #default="{ list }">
          <Card
            v-for="article in addReadmoreToContent(list, t)"
            :key="article._path"
            :card="article"
          />
        </template>
        <template #not-found>
          <p>No blogs articles found.</p>
        </template>
      </ContentList>
    </Section>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { addReadmoreToContent } from "@/utils/content";
import type { QueryBuilderParams } from "@nuxt/content";
import type { Testimonial } from "~/components/Testimonial.vue";
const runtimeConfig = useRuntimeConfig();

const { t, locale } = useI18n();

const eventQuery: QueryBuilderParams = {
  path: `/${locale.value}/events`,
  limit: 2,
  sort: [{ date: -1 }],
};

const testimonials = ref<Testimonial[]>([]);

// Watch for locale changes and fetch testimonials data
watch(
  () => locale.value,
  async () => {
    const { data } = await useAsyncData("testimonials", async () => {
      const events = await queryContent(`/${locale.value}/events`)
        .where({ testimonial: { $exists: true } })
        .sort({ date: -1 })
        .only(["testimonial"])
        .find();

      return events
        .map((event) => event.testimonial)
        .filter((testimonial): testimonial is Testimonial =>
          Boolean(testimonial),
        );
    });

    testimonials.value = data.value || []; // Assign fetched testimonials to the ref
  },
  { immediate: true }, // Trigger immediately on component mount
);

const blogQuery: QueryBuilderParams = {
  path: `/${locale.value}/blog`,
  limit: 2,
  sort: [{ date: -1 }],
  where:
    runtimeConfig.public.nuxtEnv === "development"
      ? []
      : [{ status: "PUBLISHED" }],
};

useHead({ title: t("pages.home.head.title") });
</script>

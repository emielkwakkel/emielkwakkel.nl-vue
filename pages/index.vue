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
    <Section :shade="false">
      <template v-slot:header>{{ $t("pages.home.latest-blogs") }}</template>
      <ContentList :query="blogQuery">
        <template #default="{ list }">
          <Card
            v-for="article in addReadmoreToContent(list, t)"
            :key="article._path"
            :card="article"
            :shade="true"
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
const { t, locale } = useI18n();

const eventQuery: QueryBuilderParams = {
  path: `/${locale.value}/events`,
  limit: 2,
  sort: [{ date: -1 }],
};

const blogQuery: QueryBuilderParams = {
  path: `/${locale.value}/blog`,
  limit: 2,
  sort: [{ date: -1 }],
};

useHead({ title: t("pages.home.head.title") });
</script>

<template>
  <div class="dark:bg-gray-900 bg-white">
    <section
      class="flex container h-screen px-3 dark:text-gray-200 text-grey-900 mx-auto"
    >
      <section
        class="flex flex-col w-full sm:w-3/5 justify-center text-center md:text-left"
      >
        <p>
          <img
            src="~/assets/emiel-kwakkel.jpg"
            alt="Emiel Kwakkel"
            class="rounded-full inline sm:hidden w-3/5 2xl:w-4/5 text-center mb-10"
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
            href="blog/sustainable-choices"
            class="bg-blue-300 text-gray-800 font-bold rounded-full my-6 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            {{ $t("pages.home.sustainable-it-blog") }}
          </a>
        </p>
      </section>
      <aside class="hidden sm:flex flex-col w-2/5 2xl:w-1/5 justify-center">
        <img
          src="~/assets/emiel-kwakkel.jpg"
          alt="Emiel Kwakkel"
          class="rounded-full"
        />
      </aside>
    </section>
    <Section>
      <template v-slot:header>{{ $t("pages.home.events") }}</template>
      <Event v-for="event in events" :key="event.name" :event="event" />
    </Section>
    <Section>
      <template v-slot:header>{{ $t("pages.home.latest-blogs") }}</template>
      <ContentList :path="`/${locale}/blog`" v-slot="{ list }">
        <Blog v-for="article in list" :key="article.title" :article="article" />
      </ContentList>
    </Section>
    <Section>
      <div class="dark:text-white text-gray-900">
        {{ $t("generic.language.change") }}:
        <button @click="setLocale('en')">
          {{ $t("generic.language.english") }}
        </button>
        -
        <button @click="setLocale('nl')">
          {{ $t("generic.language.dutch") }}
        </button>
      </div>
    </Section>
  </div>
</template>

<script setup>
const { locale, setLocale } = useI18n();

const events = [
  {
    name: "SNiC SustainabilIT",
    date: "November 27th, 2024",
    title: "The Hidden Impact of Developers",
    link: {
      href: "https://sustainabilit.snic.nl/",
      title: "Join",
    },
  },
  {
    name: "Frontend Lightning Talks",
    date: "November 20th, 2024",
    title: "The Hidden Impact of Developers",
    link: {
      href: "https://www.youtube.com/watch?v=rauhrV5EfVE",
      title: "Watch recording",
    },
  },
  {
    name: "FrontMania",
    date: "October 12th, 2023",
    title: "Holistic Approach to Sustainable IT",
    link: {
      href: "https://frontmania.com/",
      title: "Visit",
    },
  },
];

useHead({
  title: "Emiel Kwakkel - Sustainable IT",
  description: "My mission is to promote Sustainable IT for a greener world",
});
</script>

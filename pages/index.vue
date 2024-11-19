<template>
  <div class="bg-gray-900">
    <section class="flex container h-screen px-3 text-gray-200 mx-auto">
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
        <p class="leading-loose text-1xl">Hi, I am Emiel Kwakkel,</p>
        <p class="leading-loose text-2xl">My mission is to promote</p>
        <h1 class="leading-normal mb-2 text-green-500 text-5xl font-bold">
          Sustainable IT
        </h1>
        <p class="leading-normal text-4xl">
          for a <span class="text-green-500">greener world</span>
        </p>
        <p class="mt-12">
          <a
            href="blog/sustainable-choices"
            class="bg-blue-300 text-gray-800 font-bold rounded-full my-6 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Blog on Sustainable IT
          </a>
        </p>
      </section>
      <aside class="hidden sm:flex flex-col w-2/5 2xl:w-1/5 justify-center">
        <img src="~/assets/emiel-kwakkel.jpg" class="rounded-full" />
      </aside>
    </section>
    <Section>
      <template v-slot:header>Events</template>
      <Event v-for="event in events" :key="event.name" :event="event" />
    </Section>
    <Section isdark="true">
      <template v-slot:header>Latest Blogs</template>
      <ContentList path="/blog" v-slot="{ list }">
        <div
          v-for="article in list"
          :key="article._path"
          class="w-full rounded bg-gray-700 h-64 mb-3 sm:mr-3 p-5"
        >
          <h2 class="leading-normal mb-2 text-green-500 text-3xl font-bold">
            {{ article.title }}
          </h2>
          <p>{{ article.description }}</p>
          <p class="mt-6">
            <a
              :href="article._path"
              class="bg-gray-900 font-bold rounded-full mt-12 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Read more
            </a>
          </p>
        </div>
      </ContentList>
    </Section>
  </div>
</template>

<script>
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
      href: "https://www.meetup.com/sogeti-frontend/events/302998087/",
      title: "Join",
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

export default {
  name: "IndexPage",
  head() {
    return {
      title: "Emiel Kwakkel - Sustainable IT",
      description:
        "My mission is to promote Sustainable IT for a greener world",
    };
  },
  data() {
    return { events };
  },
};
</script>

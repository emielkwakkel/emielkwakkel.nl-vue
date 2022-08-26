<template>
  <div class="bg-gray-900">
    <div>
      <div
        class="flex container h-screen px-3 bg-gray-900 text-gray-200 mx-auto"
      >
        <div
          class="flex flex-col w-full sm:w-3/5 justify-center text-center md:text-left"
        >
          <div>
            <p>
              <img
                src="~/assets/emiel-kwakkel.jpg"
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
            <button
              class="hidden bg-blue-300 text-gray-800 font-bold rounded-full my-6 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Blog on Sustainable IT
            </button>
          </div>
        </div>
        <div class="hidden sm:flex flex-col w-2/5 2xl:w-1/5 justify-center">
          <img src="~/assets/emiel-kwakkel.jpg" class="rounded-full" />
        </div>
      </div>

      <div class="w-full pt-20 pb-20 bg-gray-700">
        <h2
          class="leading-normal mb-2 text-green-500 text-3xl font-bold text-center"
        >
          Upcoming Events
        </h2>
        <div
          class="container mx-auto sm:flex w-full px-3 text-gray-200 p-3 pb-10"
        >
          <Event v-for="event in events" :key="event.name" :event="event" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const events = [
  {
    name: "ING",
    date: "September 29th, 2022",
    title: "Quality Engineering for Sustainability",
  },
  {
    name: "QXDay",
    date: "November 6th, 2022",
    title: "Quality Engineering for Sustainability",
    link: {
      href: "https://www.qxday2022.nl/",
      title: "Sign up",
    },
  },
];

export default {
  name: "IndexPage",
  data() {
    return { events };
  },
};
</script>

<template>
  <div
    class="w-full rounded bg-gray-900 md:h-96 xl:h-80 2xl:h-64 mb-3 sm:mr-3 p-5"
  >
    <h3 class="leading-loose mb-2 text-green-500 font-bold">
      <span class="text-2xl">{{ event.name }}</span>
      <span class="text-1xl text-gray-200 font-normal">
        <br />{{ event.date }}</span
      >
    </h3>
    <h4 class="sm:pt-3 text-2xl mb-8">
      {{ event.title }}
    </h4>
    <a
      v-if="event.link"
      :href="event.link.href"
      class="bg-gray-700 text-white font-bold rounded-full mt-6 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
    >
      {{ event.link.title }}
    </a>
  </div>
</template>

<script>
export default {
  name: "Event",
  props: ["event"],
};
</script>

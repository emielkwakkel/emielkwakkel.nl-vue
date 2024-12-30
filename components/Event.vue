<template>
  <div
    class="w-full rounded-lg dark:bg-gray-900 bg-white dark:text-white mb-3 sm:mr-3 p-5 pb-8"
  >
    <h3 class="leading-loose mb-2 sm:h-40 md:h-20 lg:h-14 xl:h-14">
      <span class="text-2xl font-bold text-green-500">{{ event.name }}</span>
      <span class="text-1xl font-normal"> <br />{{ event.date }}</span>
    </h3>
    <h4 class="sm:pt-3 text-2xl mb-8">
      {{ event.title }}
    </h4>
    <a
      v-if="event.link"
      :href="event.link.href"
      class="bg-blue-300 text-gray-800 font-bold rounded-full py-4 px-8"
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

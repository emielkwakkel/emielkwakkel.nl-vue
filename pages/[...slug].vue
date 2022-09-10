<template>
  <div class="bg-gray-900">
    <nav class="bg-blue-300">
      <p class="flex container mx-auto px-2">
        <a
          href="/"
          class="bg-gray-900 text-white font-bold rounded-full my-6 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          &lt; Home
        </a>
      </p>
    </nav>
    <section
      class="flex container h-full px-3 bg-gray-900 text-gray-200 mx-auto mb-20"
    >
      <article class="flex flex-col w-full">
        <ContentDoc v-slot="{ doc }">
          <header>
            <h1
              class="leading-normal mb-2 mt-12 text-green-500 text-5xl font-bold"
            >
              {{ doc.title }}
            </h1>
          </header>
          <ContentRenderer :value="doc" />
        </ContentDoc>
      </article>
    </section>
    <nav class="bg-blue-300">
      <p class="flex container mx-auto px-2">
        <a
          href="/"
          class="bg-gray-900 text-white font-bold rounded-full my-6 py-4 px-8 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          &lt; Home
        </a>
      </p>
    </nav>
  </div>
</template>

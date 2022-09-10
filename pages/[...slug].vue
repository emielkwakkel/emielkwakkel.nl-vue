<template>
  <div class="bg-gray-900">
    <section
      class="flex container h-full px-3 bg-gray-900 text-gray-200 mx-auto"
    >
      <article class="flex flex-col w-full">
        <ContentDoc v-slot="{ doc }">
          <header>
            <h1 class="leading-normal mb-2 text-green-500 text-5xl font-bold">
              {{ doc.title }}
            </h1>
          </header>
          <ContentRenderer :value="doc" />
        </ContentDoc>
      </article>
    </section>
  </div>
</template>

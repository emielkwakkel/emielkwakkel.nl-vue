<template>
  <div class="dark:bg-gray-900 bg-white bg-white">
    <Nav aria-label="Navigation header">
      <NavLink />
    </Nav>
    <section
      class="flex container h-full px-3 dark:bg-gray-900 bg-white dark:text-gray-200 text-grey-900 mx-auto mb-20"
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
    <Nav aria-label="Navigation footer">
      <NavLink />
    </Nav>
  </div>
</template>

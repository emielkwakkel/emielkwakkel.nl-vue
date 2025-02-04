<template>
  <div class="min-h-screen dark:bg-gray-900 bg-white">
    <ContentDoc v-slot="{ doc }">
      <Navbar />
      <Breadcrumb :links="links"></Breadcrumb>
      <NuxtImg
        v-if="doc.image"
        :alt="doc.title"
        :src="doc.image"
        class="w-full lg:hidden"
      />
      <section
        class="container h-full px-3 dark:bg-gray-900 dark:text-gray-200 text-grey-900 mx-auto py-10"
      >
        <article>
          <header class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div>
              <NuxtImg
                v-if="doc.image"
                :alt="doc.title"
                :src="doc.image"
                class="w-full hidden lg:mt-4 lg:block lg-mt-4 rounded-xl"
              />
            </div>
            <div>
              <h1
                class="leading-normal mb-2 mt-10 lg:mt-0 text-green-500 text-5xl font-bold"
              >
                {{ doc.title }}
              </h1>
              <p v-if="doc.date">
                <em class="text-gray-500"
                  >{{ $t("content.published-on") }} {{ doc.date }}</em
                >
              </p>
              <p>
                <strong>{{ doc.description }}</strong>
              </p>
            </div>
          </header>
          <ContentRenderer :value="doc" />
        </article>
      </section>
    </ContentDoc>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const route = useRoute();
const { data } = await useAsyncData("currentPageContent", () =>
  queryContent(route.path).findOne(),
);

useHead({
  title: data.value?.title,
  meta: [
    { property: "og:title", content: data.value?.title },
    { property: "og:description", content: data.value?.description },
    {
      property: "og:image",
      content: `http://localhost:3000/_ipx/q_80${data.value?.image}`,
    },
    {
      property: "og:image:url",
      content: `http://localhost:3000/_ipx/q_80${data.value?.image}`,
    },
    { property: "og:image:alt", content: data.value?.title },
  ],
});

const links = [
  {
    label: "Home",
    to: `/${locale.value}`,
  },
  {
    label: "Blog",
    to: `/${locale.value}/blog`,
  },
  {
    label: data.value?.title || "Article",
  },
];
</script>

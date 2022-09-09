<template>
  <div class="bg-gray-900">
    <div>
      <div class="flex container h-full px-3 bg-gray-900 text-gray-200 mx-auto">
        <div class="flex flex-col w-full">
          <ContentDoc v-slot="{ doc }">
            <h1>{{ doc.title }}</h1>
            <ContentRenderer :value="doc" />
          </ContentDoc>
        </div>
      </div>
    </div>
  </div>
</template>

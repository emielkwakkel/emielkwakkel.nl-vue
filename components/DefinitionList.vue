<template>
  <div class="mt-6 border-t border-gray-100 dark:border-gray-800">
    <dl class="divide-y divide-gray-100 dark:divide-gray-800">
      <template v-for="(item, index) in content" :key="index">
        <div
          class="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
          v-if="item.title"
        >
          <dt class="font-bold text-gray-700 dark:text-gray-200">
            {{ item.title }}
          </dt>
          <dd class="mt-1 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">
            {{ item.description }}
          </dd>
        </div>
      </template>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

type DefinitionItem = {
  title: string;
  description: string;
};

defineProps<{
  content: DefinitionItem[];
}>();
</script>

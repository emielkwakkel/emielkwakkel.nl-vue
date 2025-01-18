<template>
  <div class="relative max-w-screen-xl mx-auto">
    <!-- Carousel Wrapper -->
    <div class="overflow-hidden">
      <div
        :class="[
          'grid items-center gap-6',
          showButtons ? 'lg:grid-cols-[auto_1fr_auto]' : 'lg:grid-cols-[1fr]',
        ]"
        :style="showButtons ? '' : 'grid-template-rows: auto;'"
      >
        <!-- Previous Button -->
        <button
          v-if="showButtons"
          @click="prev"
          class="hidden lg:block text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <!-- Carousel Content -->
        <slot :item="items[currentIndex]" />

        <!-- Next Button -->
        <button
          v-if="showButtons"
          @click="next"
          class="hidden lg:block text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Buttons -->
    <div class="flex justify-center lg:hidden" v-if="showButtons">
      <button
        @click="prev"
        class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        @click="next"
        class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Props
const props = defineProps<{
  items: any[];
}>();

// State
const currentIndex = ref(0);
const totalItems = computed(() => props.items.length);
const showButtons = computed(() => props.items.length > 1);

// Handlers
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % totalItems.value;
};

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + totalItems.value) % totalItems.value;
};
</script>

<template>
  <nav
    class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div
      class="container flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/icon.svg" class="h-8 rounded" alt="Logo Emiel Kwakkel" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Emiel Kwakkel</span
        >
      </a>
      <div
        class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
      >
        <button
          @click="toggleMenu()"
          type="button"
          class="inline-flex p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="w-full md:flex md:w-auto md:order-1 ml-auto"
        :class="{ hidden: !isMenuOpen }"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li v-for="route in routes" :key="route.path">
            <a
              :href="`/${locale}${route.path}`"
              :class="[
                'block py-3 px-3 rounded md:py-2 md:px-0',
                `/${locale}${route.path}` === activeRoute
                  ? 'text-green-500 bg-gray-900 md:bg-transparent'
                  : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent',
              ]"
            >
              {{ route.label }}
            </a>
          </li>
          <li>
            <form class="mx-auto">
              <label for="language-switcher" class="sr-only"
                >Change Language</label
              >
              <select
                id="language-switcher"
                v-model="selectedLocale"
                @change="setLocale(selectedLocale)"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="en">English</option>
                <option value="nl">Dutch</option>
              </select>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoutes } from "@/composables/useRoutes";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

// Locales
const { locale, setLocale } = useI18n();
const selectedLocale = ref(locale.value);

// Toggle mobile menu
const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);

// Get routes and active route
const { routes } = useRoutes();
const route = useRoute();
const activeRoute = route.path;
</script>

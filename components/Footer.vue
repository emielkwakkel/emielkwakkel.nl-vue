<template>
  <Section :grid="false">
    <div class="flex mb-10">
      <a href="/" class="flex">
        <img src="/icon.svg" class="h-8 rounded" alt="Logo Emiel Kwakkel" />
        <span
          class="text-2xl pl-2 font-semibold whitespace-nowrap dark:text-white"
          >Emiel Kwakkel</span
        >
      </a>
    </div>
    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
      <div>
        <h2
          class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
        >
          Follow me
        </h2>
        <ul class="text-gray-600 dark:text-gray-400">
          <li class="mb-4">
            <a
              href="https://www.linkedin.com/in/emielkwakkel/"
              class="hover:underline"
              >LinkedIn</a
            >
          </li>
          <li>
            <a href="https://github.com/emielkwakkel" class="hover:underline"
              >GitHub</a
            >
          </li>
        </ul>
      </div>
      <div>
        <h2
          class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
        >
          Resources
        </h2>
        <ul class="text-gray-600 dark:text-gray-400">
          <li class="mb-4">
            <a href="https://www.sogeti.nl/" class="hover:underline">Sogeti</a>
          </li>
          <li class="mb-4">
            <a href="https://greensoftware.foundation/" class="hover:underline"
              >Green Software Foundation</a
            >
          </li>
          <li>
            <a
              href="https://www.thegreenwebfoundation.org/"
              class="hover:underline"
              >Green Web Foundation</a
            >
          </li>
        </ul>
      </div>
      <div>
        <h2
          class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
        >
          Made with ❤️ and
        </h2>
        <ul class="text-gray-600 dark:text-gray-400">
          <li class="mb-4">
            <a href="https://tailwindcss.com/" class="hover:underline"
              >TailWind CSS</a
            >
          </li>
          <li class="mb-4">
            <a href="https://vuejs.org/" class="hover:underline">Vue.js</a>
          </li>
          <li>
            <a href="https://nuxt.com/" class="hover:underline">Nuxt</a>
          </li>
        </ul>
      </div>
    </div>

    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2025
        <a href="https://flowbite.com" class="hover:underline">Emiel Kwakkel</a
        >. All Rights Reserved.
      </span>
      <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        <a
          href="https://github.com/emielkwakkel"
          class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <span class="sr-only">GitHub</span>
          <svg
            class="w-5 h-5"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/emielkwakkel/"
          class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
        >
          <span class="sr-only">LinkedIn</span>
          <svg
            class="w-5 h-5"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
              clip-rule="evenodd"
            />
            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
          </svg>
        </a>
      </div>
    </div>
  </Section>
</template>

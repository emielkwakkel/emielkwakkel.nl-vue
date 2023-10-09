<template>
  <div class="bg-gray-900">
    <Nav>
      <Link />
    </Nav>
    <section
      class="flex container h-full px-3 bg-gray-900 text-gray-200 mx-auto mb-20"
    >
      <article class="flex flex-col w-full">
          <header>
            <h1
              class="leading-normal mb-2 mt-12 text-green-500 text-5xl font-bold"
            >
              Login
            </h1>
          </header>
          <form @submit.prevent="submitForm" class="flex flex-col">
          <label class="flex-col">
            Username
            <input
              v-model="formData.username"
              type="text"
              placeholder="username"
              class="bg-gray-800 text-black w-full px-3 py-3 mt-2"
            />
          </label>
          <label class="mt-6">
            Password
            <input
              v-model="formData.password"
              type="password"
              placeholder="password"
              class="rounded-full w-full px-3 py-3 mt-2 flex-col"
            />
          </label>
          <button
            type="submit"
            class="bg-blue-300 text-gray-800 font-bold rounded-full my-6 py-4 px-8 focus:outline-none"
            @click.prevent="submitForm"
          >
            {{ isLoading ? 'Loading...' : 'Submit' }}
          </button>
        </form>
      </article>
    </section>
    <Nav>
      <Link />
    </Nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
    username: '',
    password: '',
})
const isLoading = ref(false);

const submitForm = async() => {
    const { data: responseData } = await useFetch('https://api2.watttime.org/v2/login', {
        method: 'post',
        headers: {
            Accept: '*/*'
        },
        body: { 
          name: formData.value.username,
          email: formData.value.password,
        }
    })
    console.log(responseData)
}

</script>

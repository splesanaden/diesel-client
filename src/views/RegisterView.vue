<template>
  <main class="flex flex-col justify-center items-center h-full p-4">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-semibold text-white">
          Register
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="register">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="name" class="sr-only">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              v-model="username"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Name"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              v-model="password"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="w-100 flex flex-col">
          <button
            type="submit"
            class="block w-full mb-4 p-2 | bg-indigo-600 hover:bg-indigo-700 |focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 | text-center text-white | font-medium rounded-md"
          >
            Register
          </button>

          <router-link
            to="/"
            class="block w-full p-2 text-center | bg-zinc-600 hover:bg-zinc-700 | focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500 | text-white font-medium | rounded-md"
          >
            Back
          </router-link>
        </div>
      </form>
      <ErrorMessage :error="playerStore.error" />
    </div>
  </main>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import ErrorMessage from "@/components/ErrorMessage.vue";
import { storeToRefs } from "pinia";
import { usePlayerStore } from "@/stores/usePlayerStore";

const playerStore = storeToRefs(usePlayerStore());
const router = useRouter();
const username = ref("");
const password = ref("");

const register = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post("/api/player/register", {
      name: username.value,
      password: password.value,
    });
    if (response.data && response.data.player.token) {
      console.log(response.data);
      localStorage.setItem("token", response.data.player.token);
      playerStore.token.value = response.data.player.token;
      playerStore.error.value = null;
      playerStore.name = username.value;
    }
    router.push("/hangar");
  } catch (error) {
    console.error(error);
    playerStore.error.value = error.response.data.error;
  }
};

onMounted(() => {
  playerStore.error.value = null;
  if (playerStore.token.value) {
    router.push("/hangar");
  }
});
</script>

<style scoped lang="scss">
main {
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 10px;
}
</style>

<template>
  <main class="flex flex-col justify-center items-center h-full p-4 text-white">
    <h2 class="text-2xl font-semibold mb-4">Login</h2>
    <form @submit.prevent="submitForm" class="w-full max-w-xs">
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          v-model="username"
        />
      </div>
      <div class="mb-6">
        <label class="block text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          v-model="password"
        />
      </div>
      <div class="w-100 flex flex-col">
        <button
          type="submit"
          class="block w-full mb-4 p-2 | bg-indigo-600 hover:bg-indigo-700 |focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 | text-center text-white | font-medium rounded-md"
        >
          Log In
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
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { RouterLink, useRouter } from "vue-router";
import ErrorMessage from "@/components/ErrorMessage.vue";
import { storeToRefs } from "pinia";
import { usePlayerStore } from "@/stores/usePlayerStore";
const playerStore = storeToRefs(usePlayerStore());

const router = useRouter();

const username = ref("");
const password = ref("");

async function submitForm() {
  try {
    const response = await axios.post("/api/player/login", {
      name: username.value,
      password: password.value,
    });
    console.log(response.data);

    if (response.data && response.data.player.token) {
      localStorage.setItem("token", response.data.player.token);
      playerStore.error.value = null;
      playerStore.token.value = response.data.player.token;
      playerStore.id.value = response.data.player.id;
      playerStore.name.value = response.data.player.name;
      playerStore.cash.value = response.data.player.cash;
    }

    router.push("/hangar");

    return response;
  } catch (error) {
    console.error(error);
    playerStore.error.value = error.response.data.error;
    return error;
  }
}
onMounted(() => {
  playerStore.error.value = null;
  if (playerStore.token.value) {
    router.push("/hangar");
  }
});
</script>

<style scoped lang="scss">
// Here would go any scoped styles for this component
main {
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 10px;
}
</style>
